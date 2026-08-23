import { supabase } from './supabase';

//Fetch 5 most recent bills (for "Top Bills" section)
export async function getRecentBills() {
  const { data, error } = await supabase
    .from('bills')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching bills:', error);
    return [];
  }

  return data;
}

//Fetch MPP by riding name (for "Your MPP" card)
export async function getMPPByRiding(riding: string) {
  const { data, error } = await supabase
    .from('mpps')
    .select('*')
    .eq('riding', riding)
    .single();

  if (error) {
    console.error('Error fetching MPP:', error);
    return null;
  }

  return data;
}

// Fetch articles by city (for "News & Bills" section)
export async function getArticlesByCity(city: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('city', city)
    .order('published_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }

  return data;
}