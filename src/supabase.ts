import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pukhqkewsiauqywufysc.supabase.co';
const supabaseAnonKey = 'sb_publishable_3kyUSKR5Lg6NvQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
