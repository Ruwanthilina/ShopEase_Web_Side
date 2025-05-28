document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cart functionality
    let cart = [];
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const modalCartCount = document.getElementById('modal-cart-count');
    const cartTotal = document.getElementById('cart-total');
    const closeCart = document.querySelector('.close-cart');
    const cartButton = document.querySelector('.cart');

    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        updateCart();
    });

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    // Sample products
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 49.99, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 19.99, image: 'product3.jpg' }
    ];

    const productGrid = document.getElementById('product-grid');
    function displayProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        updateCart();
    };

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(cartItem);
        });
        cartCount.textContent = cart.length;
        modalCartCount.textContent = cart.length;
        cartTotal.textContent = total.toFixed(2);
    }

    // Search and sort
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
        // Update product display (simplified)
        displayProducts();
    });

    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        if (sortBy === 'price-low') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            products.sort((a, b) => b.price - a.price);
        }
        displayProducts();
    });

    displayProducts();
});

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert('Subscribed successfully!');
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email.');
    }
}