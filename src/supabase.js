import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
//const supabaseKey = "poiuytrewq0987654321|@#~€¬";
export const supabase = createClient(supabaseUrl, supabaseKey);

