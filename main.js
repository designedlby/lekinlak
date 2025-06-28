const ouoToken = "qqqaGc9V";

const productsData = {
  mobiles: [
    {
      name: "Samsung Galaxy A54",
      price: "16,000",
      img: "https://f.nooncdn.com/p/pzsku/ZED3FB390E59F62219EC3Z/hero-preview.jpg",
      link: "https://www.noon.com/egypt-en/galaxy-a54"
    },
    {
      name: "iPhone 14 Pro",
      price: "39,999",
      img: "https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
      link: "https://www.amazon.eg/dp/B0BJTDLKH5"
    }
  ],
  laptops: [
    {
      name: "Dell Inspiron 3511",
      price: "22,000",
      img: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/264882/1.jpg",
      link: "https://www.jumia.com.eg/dell-inspiron-3511"
    }
  ],
  tvs: [
    {
      name: "Samsung 55 Inch 4K",
      price: "15,500",
      img: "https://f.nooncdn.com/p/pzsku/ZED3F5A7D0A2D727E2C1C2Z/hero-preview.jpg",
      link: "https://www.noon.com/samsung-55inch"
    }
  ]
};

function shortenLink(link) {
  return `https://ouo.io/${ouoToken}/?s=${encodeURIComponent(link)}`;
}

function loadCategory(category) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  productsData[category].forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>السعر: ${product.price} جنيه</p>
      <a href="${shortenLink(product.link)}" target="_blank">اشترِ الآن</a>
    `;
    container.appendChild(div);
  });
}

function searchProducts(keyword) {
  keyword = keyword.toLowerCase();
  const container = document.getElementById("products");
  container.innerHTML = "";
  ["mobiles", "laptops", "tvs"].forEach(cat => {
    productsData[cat]
      .filter(p => p.name.toLowerCase().includes(keyword))
      .forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="${product.img}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>السعر: ${product.price} جنيه</p>
          <a href="${shortenLink(product.link)}" target="_blank">اشترِ الآن</a>
        `;
        container.appendChild(div);
      });
  });
}

window.onload = function() {
  loadCategory('mobiles');
};
