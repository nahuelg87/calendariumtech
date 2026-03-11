import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mopxrnzrlwpeedlsrtmi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcHhybnpybHdwZWVkbHNydG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1ODMwOTIsImV4cCI6MjA4ODE1OTA5Mn0.thZ74hEnoW1sS98faQVUmGz0JIen806UZTVvYz0nt-4";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
