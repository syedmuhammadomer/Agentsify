import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject and message are required." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    if (supabase) {
      const { error } = await supabase.from("contact_inquiries").insert({
        full_name: fullName,
        email,
        phone:   phone || null,
        subject,
        message,
      });

      if (error) {
        console.error("[contact] Supabase error:", error.message);
        // Log to console as fallback when Supabase write fails
        console.info("[contact] Fallback — inquiry from:", email, "|", subject);
      }
    } else {
      // Supabase not configured — log the enquiry server-side
      console.info("[contact] New enquiry (no Supabase):", { fullName, email, subject });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] API error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
