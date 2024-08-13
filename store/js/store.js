document.addEventListener('DOMContentLoaded', function() {
    var email = localStorage.getItem('email');
    var username = localStorage.getItem('username');

    if (!email || !username) {
        window.location.href = 'login.html'; // Redirect to login page if not signed in
    }

    document.getElementById('user-email').textContent = email;
    document.getElementById('user-username').textContent = username;

    // Load products
    loadProducts();
});

var cart = [];

function addProduct() {
    var name = document.getElementById('product-name').value;
    var price = document.getElementById('product-price').value;
    var imageUrl = document.getElementById('product-image').value;

    if (!name || !price || !imageUrl) {
        alert('Please fill in all product details.');
        return;
    }

    var product = {
        id: Date.now(), // Unique ID for product
        name: name,
        price: price,
        imageUrl: imageUrl
    };

    // Save product to server or Google Sheets (not shown here)
    // For demonstration, we'll add it directly
    displayProduct(product);

    // Clear inputs
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image').value = '';
}

function loadProducts() {
    // Simulate loading products from a server or Google Sheets
    var products = [
        {id: 1, name: 'YOUTUBE STREAM source code with exe', price: '$15', imageUrl: 'https://ibb.co/n334L6y'},
        {id: 2, name: 'Product 2', price: '$20', imageUrl: 'img'}
    ];

    products.forEach(function(product) {
        displayProduct(product);
    });
}

function displayProduct(product) {
    var productsDiv = document.getElementById('products');
    var productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', '${product.price}')">Add to Cart</button>
    `;
    productsDiv.appendChild(productDiv);
}

function addToCart(productId, productName, productPrice) {
    cart.push({id: productId, name: productName, price: productPrice});
    updateCart();
}

function updateCart() {
    var cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(function(item, index) {
        var cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
    // Show or hide the checkout button based on cart content
    document.getElementById('checkout-button').style.display = cart.length > 0 ? 'inline-block' : 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function confirmOrder() {
    var password = document.getElementById('checkout-password').value;
    var email = localStorage.getItem('email');
    var username = localStorage.getItem('username');

    var data = {
        action: 'order',
        email: email,
        username: username,
        cart: cart,
        password: password
    };

    fetch('https://script.google.com/macros/s/AKfycbz6ggriH0SRiOWVBHAm1eyIrfr8ONqtOBZN9XkRqzAvzibYRnfSVGCRxYeuVNeflqbxUg/exec', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    }).then(response => response.json()).then(result => {
        if (result.status === 'success') {
            alert('Order placed successfully. We will contact you via email for more information.');
            cart = []; // Clear cart after successful order
            updateCart();
        } else {
            alert(result.message);
        }
    });
    closeCheckout();
}

function logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    window.location.href = 'login.html'; // Redirect to login page
}
