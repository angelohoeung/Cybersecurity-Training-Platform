
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://yuvjakbzlrhcdordfjhv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dmpha2J6bHJoY2RvcmRmamh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNzExNTcsImV4cCI6MjAxNTc0NzE1N30.walrR19EsGBfTsV936g-o0V7fTROdSilEMpEXxig9XQ')