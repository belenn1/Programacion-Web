import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cgvoptzjjraddtiuzaba.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNndm9wdHpqanJhZGR0aXV6YWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2Nzk0ODEsImV4cCI6MjA0MjI1NTQ4MX0.Plpi_kmg1AgVCJnVdHZaQ6NL3tNFQXhu7afqflv91Rw"
);

export { supabase };
