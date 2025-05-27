// Product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/api/placeholder/300/300?text=Headphones",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "/api/placeholder/300/300?text=Watch",
    category: "Electronics",
    rating: 4.2
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    image: "/api/placeholder/300/300?text=Shoes",
    category: "Fashion",
    rating: 4.7
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "/api/placeholder/300/300?text=T-Shirt",
    category: "Fashion",
    rating: 4.3
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 129.99,
    image: "/api/placeholder/300/300?text=Coffee+Maker",
    category: "Home",
    rating: 4.8
  },
  {
    id: 6,
    name: "Backpack",
    price: 59.99,
    image: "/api/placeholder/300/300?text=Backpack",
    category: "Fashion",
    rating: 4.4
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 39.99,
    image: "/api/placeholder/300/300?text=Yoga+Mat",
    category: "Sports",
    rating: 4.6
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 49.99,
    image: "/api/placeholder/300/300?text=Lamp",
    category: "Home",
    rating: 4.1
  }
];

// Cart data
let cart = [];

// DOM elements
const productGrid = document.getElementById('product-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsList = document.getElementById('cart-items-list');
const cartCount = document.getElementById('cart-count');
const cartItemsCount = document.getElementById('cart-items-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortBy = document.getElementById('sort-by');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

// Render products
function renderProducts(productsArray) {
  productGrid.innerHTML = '';
  
  if (productsArray.length === 0) {
    productGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
    return;
  }
  
  productsArray.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Create stars based on rating
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '★';
    }
    
    if (hasHalfStar) {
      starsHTML += '☆';
    }
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-rating">
          <div class="stars">${starsHTML}</div>
          <span>(${product.rating})</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" data-id="${product.id}">Add to Cart</button>
          <button class="btn-wishlist">♡</button>
        </div>
      </div>
    `;
    
    productGrid.appendChild(productCard);
  });
  
  // Add event listeners to add to cart buttons
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = parseInt(this.getAttribute('data-id'));
      addToCart(productId);
    });
  });
}

// Filter and sort products
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const sortValue = sortBy.value;
  
  let filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes