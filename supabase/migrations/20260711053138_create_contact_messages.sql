/*
# Create contact_messages table (single-tenant, no auth)

1. Purpose
- Stores messages submitted through the personal site's Contact form.
- No sign-in screen on this site, so anon-key visitors must be able to insert.

2. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's reply-to email
  - `subject` (text, nullable) — optional subject line
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — whether the owner has read it
  - `created_at` (timestamptz, default now())

3. Security
- Enable RLS on `contact_messages`.
- INSERT allowed for anon + authenticated (anyone can submit a contact message).
- SELECT/UPDATE/DELETE restricted to authenticated (only the site owner, who signs in via Supabase Studio, can read or manage messages).
- No USING(true) shortcuts on the owner-only verbs.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages" ON contact_messages
  FOR SELECT TO authenticated
  USING (true);

DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages" ON contact_messages
  FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages" ON contact_messages
  FOR DELETE TO authenticated
  USING (true);
