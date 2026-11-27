import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import * as XLSX from "xlsx";
import { getSupabaseClient } from "@/lib/supabase";

const DATA_DIR  = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "applications.xlsx");

const COLUMNS = [
  "Date Applied",
  "Full Name",
  "Email",
  "Phone Number",
  "Home Address",
  "Share Code / Passport No.",
  "Position Applied For",
];

function ensureXlsxFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([COLUMNS]);
    ws["!cols"] = COLUMNS.map(() => ({ wch: 28 }));
    XLSX.utils.book_append_sheet(wb, ws, "Applications");
    XLSX.writeFile(wb, FILE_PATH);
  }
}

function appendToXlsx(row: string[]) {
  ensureXlsxFile();
  const wb = XLSX.readFile(FILE_PATH);
  const ws = wb.Sheets["Applications"] as XLSX.WorkSheet;
  XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
  XLSX.writeFile(wb, FILE_PATH);
}

function formatDate() {
  const now = new Date();
  return (
    now.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }) +
    " " +
    now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, address, shareCode, position } = body;

    if (!fullName || !email || !phone || !address || !shareCode || !position) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    if (supabase) {
      // ── Supabase (primary) ───────────────────────────────
      const { error } = await supabase.from("job_applications").insert({
        full_name:  fullName,
        email,
        phone,
        address,
        share_code: shareCode,
        position,
      });

      if (error) {
        console.error("[apply] Supabase error:", error.message);
        // Fall through to xlsx fallback
        appendToXlsx([formatDate(), fullName, email, phone, address, shareCode, position]);
      }
    } else {
      // ── xlsx fallback ─────────────────────────────────────
      appendToXlsx([formatDate(), fullName, email, phone, address, shareCode, position]);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[apply] API error:", err);
    return NextResponse.json(
      { error: "Failed to save application. Please try again." },
      { status: 500 }
    );
  }
}
