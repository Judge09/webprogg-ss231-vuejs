import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://chcdlldnbwxdvjtamzlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoY2RsbGRuYnd4ZHZqdGFtemx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2Mjg4ODcsImV4cCI6MjA1NDIwNDg4N30.PMPlJzcct5eUrMxl-_2r-CbyWbnt4p4sBYxZIF8otfY')