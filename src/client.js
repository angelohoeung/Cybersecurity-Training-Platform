
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for using the db
export const supabase = createClient('https://mazrhdezeqnnzwvlkyjg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1henJoZGV6ZXFubnp3dmxreWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NTc5MzgsImV4cCI6MjA0NjQzMzkzOH0.oip2ISnltNuj51kwLlr9A4cZi4Wq8WPPdBe_ezd9oTk')