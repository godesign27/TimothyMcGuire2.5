/*
  # Create page_views analytics table

  1. New Tables
    - `page_views`
      - `id` (bigint, primary key, auto-increment)
      - `page` (text) - the page/route visited
      - `path` (text) - the full URL path
      - `referrer` (text) - the referring URL
      - `user_agent` (text) - browser user agent string
      - `screen_width` (integer) - visitor screen width
      - `screen_height` (integer) - visitor screen height
      - `language` (text) - browser language
      - `session_id` (text) - anonymous session identifier
      - `created_at` (timestamptz) - when the view occurred

  2. Security
    - Enable RLS on `page_views` table
    - Add INSERT policy for anonymous users (public tracking)
    - Add SELECT policy for anonymous users (dashboard reads)

  3. Indexes
    - Index on `created_at` for time-based queries
    - Index on `page` for page-level aggregation
    - Index on `session_id` for unique visitor counting
*/

CREATE TABLE IF NOT EXISTS page_views (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  page text NOT NULL DEFAULT '',
  path text NOT NULL DEFAULT '',
  referrer text DEFAULT '',
  user_agent text DEFAULT '',
  screen_width integer DEFAULT 0,
  screen_height integer DEFAULT 0,
  language text DEFAULT '',
  session_id text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous page view inserts"
  ON page_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous page view reads"
  ON page_views
  FOR SELECT
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_page ON page_views (page);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views (session_id);
