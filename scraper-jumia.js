
// scraper-jumia.js
const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function scrapeJumia() {
  const response = await fetch('https://www.jumia.com.eg/smartphones/');
  const body = await response.text();
  const $ = cheerio.load(body);
  const products = [];

  $('.prd').each((i, el) => {
    const title = $(el).find('.name').text().trim();
    const price = parseFloat($(el).find('.prc').text().replace(/[^\d.]/g, ''));
    const image = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
    const link = 'https://www.jumia.com.eg' + $(el).find('a.core').attr('href');

    if (title && price && image && link) {
      products.push({
        title,
        price,
        image_url: image,
        link,
        store: 'jumia',
        category: 'mobiles'
      });
    }
  });

  return products;
}

module.exports = scrapeJumia;
