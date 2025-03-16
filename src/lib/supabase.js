import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vwjbcqdeszeyhdvuqzfj.supabase.co"; // 🔑 Replace with your Supabase API URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3amJjcWRlc3pleWhkdnVxemZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwOTM3OTAsImV4cCI6MjA1NzY2OTc5MH0.NS96q4nae8KoDEvFjYQyMRZtMm8hYI4tK0C5z5AvQP4"; // 🔑 Replace with your Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
