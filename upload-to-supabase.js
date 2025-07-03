
// upload-to-supabase.js
const fetch = require('node-fetch');

async function uploadProducts(products, supabaseUrl, supabaseKey) {
  const url = `${supabaseUrl}/rest/v1/products`;

  for (const product of products) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(product)
    });

    const data = await res.json();
    console.log('Uploaded:', data);
  }
}

module.exports = uploadProducts;
