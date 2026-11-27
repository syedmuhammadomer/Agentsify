import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, address, shareCode, position } = body;

    if (!fullName || !email || !phone || !address || !shareCode || !position) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    if (supabase) {
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
        return NextResponse.json({ error: "Failed to save application. Please try again." }, { status: 500 });
      }
    } else {
      console.log("[apply] No Supabase client — application logged:", { fullName, email, phone, position });
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
