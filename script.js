const products = [
  {
    name: "Eco-Friendly Summer Dress",
    price: "₹1200",
    image: "https://i.imgur.com/XaJkp7M.jpg"
  },
  {
    name: "Organic Cotton Tote Bag",
    price: "₹450",
    image: "https://i.imgur.com/ZCbgWaN.jpg"
  },
  {
    name: "Recycled Plastic Sneakers",
    price: "₹2500",
    image: "https://i.imgur.com/Yz5KeGf.jpg"
  },
  {
    name: "Upcycled Denim Jacket",
    price: "₹1700",
    image: "https://i.imgur.com/FK9Wq6v.jpg"
  },
  {
    name: "Organic Linen Shirt",
    price: "₹1450",
    image: "https://i.imgur.com/EM94NMQ.jpg"
  },
  {
    name: "Eco Sunglasses",
    price: "₹950",
    image: "https://i.imgur.com/Yhw7EOc.jpg"
  }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h4>${product.name}</h4>
    <p>${product.price}</p>
    <div class="buttons">
      <button onclick="buyNow('${product.name}')">Buy Now</button>
    </div>
  `;
  productList.appendChild(card);
});

// Buy Now logic
function buyNow(productName) {
  document.getElementById('order-product').value = productName;
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Order form submit
document.getElementById('order-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('order-confirm').classList.remove('hidden');
  this.reset();
});

// Return form submit
document.getElementById('return-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('return-confirm').classList.remove('hidden');
  this.reset();
});
