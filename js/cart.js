// cart.js
// Handles shopping cart logic using localStorage

const CART_KEY = 'bestwood_cart';

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    saveCart(cart);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart(cart);
    }
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const count = getCartCount();
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Initialize badge on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderCartPage();
});

// Render Cart Page if container exists
function renderCartPage() {
    const container = document.getElementById('cart-page-container');
    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
          <div class="cart-page empty-cart container section text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="empty-cart-icon text-muted" style="margin: 0 auto; margin-bottom: 20px;"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any furniture to your cart yet.</p>
            <a href="shop.html" class="btn-primary" style="margin-top: 20px; display: inline-block;">
              Continue Shopping
            </a>
          </div>
        `;
        return;
    }

    // Checkout message
    let message = "Hello Best Wood Furniture, I'd like to place an order:\\n\\n";
    cart.forEach(item => {
        message += `- ${item.name} (x${item.quantity}) - KSh ${new Intl.NumberFormat('en-KE').format(item.price * item.quantity)}\\n`;
    });
    message += `\\nTotal: KSh ${new Intl.NumberFormat('en-KE').format(getCartTotal())}`;
    const whatsappUrl = `https://wa.me/254791998680?text=${encodeURIComponent(message)}`;

    container.innerHTML = `
      <div class="cart-page container section fade-in visible">
        <h1 class="title-large">Your Cart</h1>
        
        <div class="cart-layout">
          <div class="cart-items">
            ${cart.map(item => `
              <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
                <div class="cart-item-details">
                  <h3>${item.name}</h3>
                  <p class="cart-item-price">KSh ${new Intl.NumberFormat('en-KE').format(item.price)}</p>
                  <div class="qty-controls">
                    <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                  </div>
                </div>
                <div class="cart-item-actions">
                  <p class="cart-item-subtotal">KSh ${new Intl.NumberFormat('en-KE').format(item.price * item.quantity)}</p>
                  <button class="remove-btn" onclick="removeCartItem('${item.id}')" aria-label="Remove item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-row">
              <span>Subtotal</span>
              <span>KSh ${new Intl.NumberFormat('en-KE').format(getCartTotal())}</span>
            </div>
            <div class="summary-row">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <div class="summary-row total">
              <span>Total</span>
              <span>KSh ${new Intl.NumberFormat('en-KE').format(getCartTotal())}</span>
            </div>
            <a href="${whatsappUrl}" class="btn-primary btn-full checkout-btn" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center;">
              Checkout on WhatsApp
            </a>
            <a href="shop.html" class="continue-shopping-link">Continue Shopping</a>
          </div>
        </div>
      </div>
    `;
}

// Global functions for onclick handlers
window.updateCartQuantity = function(id, qty) {
    updateQuantity(id, qty);
    renderCartPage();
};

window.removeCartItem = function(id) {
    removeFromCart(id);
    renderCartPage();
};
