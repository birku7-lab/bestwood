// shop.js
// Handles rendering products

function formatPrice(price) {
    return new Intl.NumberFormat('en-KE').format(price);
}

function renderProductCard(product) {
    // Escaping JSON for onclick handler
    const productJson = JSON.stringify(product).replace(/"/g, '&quot;');
    
    return `
    <div class="product-card fade-in visible">
      <a href="product.html?id=${product.id}" class="product-card-image-link">
        <div class="product-card-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <button class="wishlist-btn" aria-label="Add to Wishlist" onclick="event.preventDefault()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
      </a>
      <div class="product-card-content">
        <a href="product.html?id=${product.id}">
          <h3 class="product-card-title">${product.name}</h3>
        </a>
        <div class="product-card-bottom">
          <p class="product-card-price">KSh ${formatPrice(product.price)}</p>
          <button 
            class="wishlist-btn-bottom" 
            aria-label="Add to Cart"
            onclick="event.preventDefault(); addToCart(${productJson}); alert('Added to cart!');"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
        </div>
      </div>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Render featured products on Home page
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer && typeof products !== 'undefined') {
        const featuredProducts = products.slice(0, 8);
        featuredContainer.innerHTML = featuredProducts.map(renderProductCard).join('');
    }

    // Render shop products on Shop page
    const shopContainer = document.getElementById('shop-products');
    if (shopContainer && typeof products !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        let selectedCategory = urlParams.get('category') || 'All';
        
        const categoryList = document.getElementById('category-list');
        const resultsCount = document.getElementById('results-count');

        function renderShop() {
            // Filter products
            const filteredProducts = selectedCategory === 'All' 
                ? products 
                : products.filter(p => p.category === selectedCategory);
            
            // Render products
            shopContainer.innerHTML = filteredProducts.map(renderProductCard).join('');
            
            // Update counts
            if (resultsCount) {
                resultsCount.textContent = `Showing 1-${filteredProducts.length} of ${filteredProducts.length} results`;
            }

            // Update active category button
            if (categoryList) {
                const buttons = categoryList.querySelectorAll('button');
                buttons.forEach(btn => {
                    if (btn.textContent.trim() === selectedCategory) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
            
            // Update URL without reloading (optional, for shareability)
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('category', selectedCategory);
            window.history.pushState({}, '', newUrl);
        }

        // Render categories
        if (categoryList && typeof categories !== 'undefined') {
            categoryList.innerHTML = categories.map(cat => 
                `<li><button onclick="setCategory('${cat}')">${cat}</button></li>`
            ).join('');
        }

        // Expose setCategory to window for onclick handlers
        window.setCategory = function(cat) {
            selectedCategory = cat;
            renderShop();
        };

        renderShop();
    }
});
