import "server-only";
import { createClient } from "@supabase/supabase-js";

// Uses the service_role key, which bypasses Row Level Security entirely.
// The "server-only" import above makes Next.js fail the build if this file
// is ever imported into a Client Component — it must only be used from
// Route Handlers / Server Actions, and SUPABASE_SERVICE_ROLE_KEY must never
// be prefixed with NEXT_PUBLIC_.
export function createAdminSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
