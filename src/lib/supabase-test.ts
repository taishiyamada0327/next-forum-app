import { supabase } from './supabase';

export async function testSupabaseConnection() {
  try {
    // 単純な健全性チェックとして、バージョン情報を取得
    const { data, error } = await supabase
      .from('_pgrst_version')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase接続エラー:', error);
      return false;
    }

    console.log('Supabase接続成功:', data);
    return true;
  } catch (e) {
    console.error('Supabase接続中に例外が発生:', e);
    return false;
  }
}
