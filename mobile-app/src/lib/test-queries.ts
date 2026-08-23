import { getRecentBills, getMPPByRiding, getArticlesByCity } from './queries';

async function runTests() {
  console.log('--- Testing getRecentBills ---');
  const bills = await getRecentBills();
  console.log(bills);

  console.log('--- Testing getMPPByRiding ---');
  const mpp = await getMPPByRiding('London North Centre');
  console.log(mpp);

  console.log('--- Testing getArticlesByCity ---');
  const articles = await getArticlesByCity('London');
  console.log(articles);
}

runTests();