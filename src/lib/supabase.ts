/**
 * Supabase server-side client for API routes.
 *
 * Required environment variables (add to .env.local):
 *   SUPABASE_URL              — your Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY — service-role secret key (never expose to browser)
 *
 * SQL to create the required tables (run in Supabase SQL editor):
 *
 * -- Job applications
 * CREATE TABLE IF NOT EXISTS job_applications (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   full_name       text NOT NULL,
 *   email           text NOT NULL,
 *   phone           text NOT NULL,
 *   address         text NOT NULL,
 *   share_code      text NOT NULL,
 *   position        text NOT NULL,
 *   status          text DEFAULT 'pending',
 *   created_at      timestamptz DEFAULT now()
 * );
 *
 * -- Employer staffing requests
 * CREATE TABLE IF NOT EXISTS employer_requests (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   full_name        text NOT NULL,
 *   company_name     text NOT NULL,
 *   email            text NOT NULL,
 *   phone            text NOT NULL,
 *   staff_type       text NOT NULL,
 *   num_staff        text NOT NULL,
 *   location         text NOT NULL,
 *   start_date       text,
 *   message          text,
 *   status           text DEFAULT 'pending',
 *   created_at       timestamptz DEFAULT now()
 * );
 *
 * -- Contact enquiries
 * CREATE TABLE IF NOT EXISTS contact_inquiries (
 *   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *   full_name  text NOT NULL,
 *   email      text NOT NULL,
 *   phone      text,
 *   subject    text NOT NULL,
 *   message    text NOT NULL,
 *   created_at timestamptz DEFAULT now()
 * );
 *
 * -- Row Level Security (allow anonymous inserts, block reads from client)
 * ALTER TABLE job_applications    ENABLE ROW LEVEL SECURITY;
 * ALTER TABLE employer_requests   ENABLE ROW LEVEL SECURITY;
 * ALTER TABLE contact_inquiries   ENABLE ROW LEVEL SECURITY;
 *
 * CREATE POLICY "anon insert" ON job_applications  FOR INSERT WITH CHECK (true);
 * CREATE POLICY "anon insert" ON employer_requests FOR INSERT WITH CHECK (true);
 * CREATE POLICY "anon insert" ON contact_inquiries FOR INSERT WITH CHECK (true);
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

/**
 * Returns a Supabase client using the service-role key (server-side only).
 * Returns null when environment variables are not configured so the API
 * routes can fall back to the xlsx-based storage.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (_client) return _client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.warn(
      "[Agentsify] Supabase env vars not set — using local xlsx fallback. " +
        "Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local."
    );
    return null;
  }

  _client = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return _client;
}
