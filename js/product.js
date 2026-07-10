// product.js
// Handles rendering the product details page based on URL parameter

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = document.getElementById('product-details-container');
    
    if (!container || typeof products === 'undefined') return;

    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = `
          <div class="container section text-center">
            <h2>Product not found</h2>
            <a href="shop.html" class="btn-primary" style="margin-top: 20px;">Back to Shop</a>
          </div>
        `;
        return;
    }

    // Set page title
    document.title = `${product.name} - Best Wood Furniture`;

    let quantity = 1;

    function renderProduct() {
        const productJson = JSON.stringify(product).replace(/"/g, '&quot;');
        const whatsappMessage = encodeURIComponent(
            `Hello Best Wood Furniture, I'm interested in the ${product.name} (x${quantity}) priced at KSh ${formatPrice(product.price * quantity)}.`
        );

        container.innerHTML = `
        <div class="product-details-page">
          <div class="breadcrumb-nav">
            <div class="container">
              <a href="index.html">Home</a> &gt; <a href="shop.html">Shop</a> &gt; <span>${product.name}</span>
            </div>
          </div>

          <div class="container section product-main">
            <div class="product-gallery fade-in visible">
              <div class="main-image-container">
                <img src="${product.image}" alt="${product.name}" class="main-image" />
              </div>
              <div class="thumbnail-row">
                <div class="thumbnail active"><img src="${product.image}" alt="Thumb 1" /></div>
              </div>
            </div>
            
            <div class="product-info fade-in delay-100 visible">
              <h1 class="product-title">${product.name}</h1>
              <p class="product-price">KSh ${formatPrice(product.price)}</p>

              <div class="product-description">
                <p>${product.description} Crafted from premium solid wood. Designed for comfort, durability and timeless style.</p>
              </div>

              <table class="product-specs-table">
                <tbody>
                  <tr>
                    <td class="spec-label">Material:</td>
                    <td class="spec-value">${product.material}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Finish:</td>
                    <td class="spec-value">Natural Finish</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Size:</td>
                    <td class="spec-value">${product.dimensions}</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Assembly:</td>
                    <td class="spec-value">Carpenter Assembly</td>
                  </tr>
                  <tr>
                    <td class="spec-label">Availability:</td>
                    <td class="spec-value">${product.availability}</td>
                  </tr>
                </tbody>
              </table>

              <div class="quantity-selector">
                <span class="qty-label">Quantity:</span>
                <div class="qty-controls">
                   <button onclick="updateQty(-1)">-</button>
                   <span>${quantity}</span>
                   <button onclick="updateQty(1)">+</button>
                </div>
              </div>

              <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button 
                  class="btn-primary" 
                  style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 8px;"
                  onclick="addToCart(${productJson}, ${quantity}); alert('Added to cart!');"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Add to Cart
                </button>
                <a 
                  href="https://wa.me/254791998680?text=${whatsappMessage}"
                  class="btn-primary"
                  style="flex: 1; background-color: #25D366; border-color: #25D366; display: flex; justify-content: center; align-items: center; gap: 8px;"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
        `;
    }

    window.updateQty = function(delta) {
        quantity = Math.max(1, quantity + delta);
        renderProduct();
    };

    renderProduct();
});
