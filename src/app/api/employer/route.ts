import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phone, staffType, numStaff, location, startDate, message } = body;

    if (!fullName || !companyName || !email || !phone || !staffType || !numStaff || !location) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    if (supabase) {
      const { error } = await supabase.from("employer_requests").insert({
        full_name:    fullName,
        company_name: companyName,
        email,
        phone,
        staff_type:   staffType,
        num_staff:    numStaff,
        location,
        start_date:   startDate || null,
        message:      message   || null,
      });

      if (error) {
        console.error("[employer] Supabase error:", error.message);
        console.info("[employer] Fallback — request from:", companyName, email);
      }
    } else {
      console.info("[employer] New request (no Supabase):", { fullName, companyName, email, staffType, numStaff, location });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[employer] API error:", err);
    return NextResponse.json(
      { error: "Failed to submit your request. Please try again." },
      { status: 500 }
    );
  }
}
