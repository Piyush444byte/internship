
// Get cart 
function getCart() {
    const cart = localStorage.getItem('yumtyto-cart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('yumtyto-cart', JSON.stringify(cart));
    updateCartCount();
}

// Add item to cart
function addToCart(itemName, itemPrice, restaurant = 'Restaurant') {
    let cart = getCart();
    
    // Check if item already exists
    const existingItem = cart.find(item => 
        item.name === itemName && item.restaurant === restaurant
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: Date.now(),
            name: itemName,
            price: parseFloat(itemPrice.replace('₹', '').split('/')[0]),
            originalPrice: itemPrice,
            quantity: 1,
            restaurant: restaurant
        });
    }
    
    saveCart(cart);
    showNotification(`${itemName} added to cart!`);
}

// Remove item from cart
function removeFromCart(itemId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== itemId);
    saveCart(cart);
    displayCart();
}

// Update item quantity
function updateQuantity(itemId, quantity) {
    let cart = getCart();
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
            displayCart();
        }
    }
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElements = document.querySelectorAll('#cart-count');
    
    countElements.forEach(element => {
        if (count > 0) {
            element.textContent = count;
            element.style.display = 'inline-block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Display cart on cart page
function displayCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartTable = document.getElementById('cart-table');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return; // Not on cart page
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartTable.style.display = 'none';
        cartSummary.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartTable.style.display = 'table';
    cartSummary.style.display = 'block';
    
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.restaurant}</td>
            <td>₹${item.price}</td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>₹${itemTotal}</td>
            <td>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
    });
    
    // Update summary
    const delivery = 50;
    const total = subtotal + delivery;
    
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('total').textContent = `₹${total}`;
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #14B8A6;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Checkout
function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your order! Your order has been placed successfully.');
    localStorage.removeItem('yumtyto-cart');
    location.href = 'index.html';
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
        localStorage.removeItem('yumtyto-cart');
        updateCartCount();
        displayCart();
    }
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Display cart if on cart page
    if (document.getElementById('cart-items')) {
        displayCart();
    }
    
    //  animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
