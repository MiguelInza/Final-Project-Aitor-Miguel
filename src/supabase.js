import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;
//const supabaseKey = "poiuytrewq0987654321|@#~€¬";
export const supabase = createClient(supabaseUrl, supabaseKey);

