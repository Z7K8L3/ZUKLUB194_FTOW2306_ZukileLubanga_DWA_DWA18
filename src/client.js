import { createClient } from "@supabase/supabase-js"


const supabaseUrl = "https://chkkvsouhisdnrbhnook.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoa2t2c291aGlzZG5yYmhub29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNzgxOTgsImV4cCI6MjAxNzg1NDE5OH0.q6yCRPgrcf26fHZuAijzGWJ8p71TwT1u_wN_fSBEhko"
export const supabase = createClient(supabaseUrl, supabaseKey)