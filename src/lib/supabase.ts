
import { createClient } from '@supabase/supabase-js';

// Essas variáveis devem ser definidas como variáveis de ambiente
// Para desenvolvimento, você pode usar valores temporários
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sua-url-do-supabase.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sua-chave-anon-do-supabase';

// Cria o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
