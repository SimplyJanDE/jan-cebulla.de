// src/supabaseConfig.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vpeyjwnbmhvryasdgccc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwZXlqd25ibWh2cnlhc2RnY2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNTI1OTUsImV4cCI6MjAwODgyODU5NX0.3AfeBZYfUNIqFxanzmX6zfKRJ-DS1tqTEBDyEAB07Fg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;