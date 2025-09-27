import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
export const supabaseUrl = "https://nigvwfkgtqibhxhcgsjc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZ3Z3ZmtndHFpYmh4aGNnc2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5NjAyNzAsImV4cCI6MjA3MjUzNjI3MH0.PUTwUCmSvj3iHN08oqiuhy9P-jtA94OpJElfoTpkl2k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
