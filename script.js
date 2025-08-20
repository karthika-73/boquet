const products = [
  { name: "Eco-friendly Summer Dress", price: "₹1200", image: "https://i.imgur.com/XaJkp7M.jpg" },
  { name: "Organic Cotton Tote Bag", price: "₹450", image: "https://i.imgur.com/ZCbgWaN.jpg" },
  { name: "Upcycled Denim Jacket", price: "₹1700", image: "https://i.imgur.com/FK9Wq6v.jpg" },
  { name: "Recycled Plastic Sneakers", price: "₹2500", image: "https://i.imgur.com/Yz5KeGf.jpg" },
  { name: "Handmade Bamboo Hat", price: "₹1000", image: "https://i.imgur.com/6mTohzb.jpg" },
  { name: "Vegan Leather Backpack", price: "₹2300", image: "https://i.imgur.com/GFqOQKj.jpg" },
  { name: "Organic Wool Scarf", price: "₹750", image: "https://i.imgur.com/ZOTXYXa.jpg" },
  { name: "Sustainable Sandals", price: "₹1300", image: "https://i.imgur.com/0ZfLhdJ.jpg" },
  { name: "Upcycled Skirt", price: "₹1100", image: "https://i.imgur.com/nZx9Uon.jpg" },
  { name: "Eco Sunglasses", price: "₹950", image: "https://i.imgur.com/Yhw7EOc.jpg" },
  { name: "Recycled Paper Notebook", price: "₹250", image: "https://i.imgur.com/yqVpYUy.jpg" },
  { name: "Organic Linen Shirt", price: "₹1450", image: "https://i.imgur.com/EM94NMQ.jpg" }
];

const productList = document.getElementById('product-list');

products.forEach((item) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h4>${item.name}</h4>
    <p>${item.price}</p>
    <div class="buttons">
      <button>Add to Cart</button>
      <button>Wishlist</button>
      <button>Buy Now</button>
    </div>
  `;
  productList.appendChild(card);
});
