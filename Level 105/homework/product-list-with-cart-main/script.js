document.addEventListener('DOMContentLoaded', () => {
    let cart = {};
    const cartQuantityElement = document.querySelector('.quantity');
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyCartContent = document.querySelector('.empty-content');
    const cartTotalElement = document.querySelector('.cart-total');
    const confirmOrderButton = document.querySelector('.confirm-order');
    const overlay = document.querySelector('.overlay');
    const orderSummaryContainer = document.querySelector('.order-summary');
    const startNewOrderButton = document.querySelector('.start-new-order');
    const cartSummary = document.querySelector('.cart-summary');

    let productData = [];

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            productData = data;
            initializeCart();
        });

    const initializeCart = () => {
        document.querySelectorAll('.products-card').forEach(card => {
            const productName = card.querySelector('.product-name').textContent;
            const productPrice = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
            const addToCartButton = card.querySelector('.addToCart');
            const counterElement = card.querySelector('.counter');
            const productImage = card.querySelector('.image-product');

            addToCartButton.addEventListener('click', () => {
                addToCartButton.classList.add('hidden');
                counterElement.classList.remove('hidden');
                productImage.classList.add('active');
                if (!cart[productName]) {
                    cart[productName] = { price: productPrice, quantity: 1 };
                } else {
                    cart[productName].quantity += 1;
                }
                counterElement.querySelector('span').textContent = cart[productName].quantity;
                updateCartDisplay();
            });

            card.querySelector('.icon-increment').addEventListener('click', () => {
                if (!cart[productName]) {
                    cart[productName] = { price: productPrice, quantity: 1 };
                } else {
                    cart[productName].quantity += 1;
                }
                counterElement.querySelector('span').textContent = cart[productName].quantity;
                updateCartDisplay();
            });

            card.querySelector('.icon-decrement').addEventListener('click', () => {
                if (cart[productName] && cart[productName].quantity > 0) {
                    cart[productName].quantity -= 1;
                    if (cart[productName].quantity === 0) {
                        delete cart[productName];
                        addToCartButton.classList.remove('hidden');
                        counterElement.classList.add('hidden');
                        productImage.classList.remove('active');
                    }
                    counterElement.querySelector('span').textContent = cart[productName] ? cart[productName].quantity : 0;
                    updateCartDisplay();
                }
            });
        });
    };

    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';
        let totalQuantity = 0;
        let totalPrice = 0;

        for (const [productName, product] of Object.entries(cart)) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div>
                    <h2>${productName}</h2>
                    <div class="pdcs-infos">
                        <p class="product-quantity">${product.quantity}x</p>
                        <p class="single-price">@ $${product.price.toFixed(2)}</p>
                        <p class="total-price">$${(product.quantity * product.price).toFixed(2)}</p>
                    </div>
                </div>
                <svg class="icon-remove" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="10" height="10" fill="none"
                    viewBox="0 0 10 10">
                    <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                </svg>
            `;
            cartItemsContainer.appendChild(cartItem);
            totalQuantity += product.quantity;
            totalPrice += product.quantity * product.price;

            cartItem.querySelector('.icon-remove').addEventListener('click', () => {
                delete cart[productName];
                document.querySelectorAll('.products-card').forEach(card => {
                    if (card.querySelector('.product-name').textContent === productName) {
                        card.querySelector('.addToCart').classList.remove('hidden');
                        card.querySelector('.counter').classList.add('hidden');
                        card.querySelector('.counter span').textContent = '0';
                        card.querySelector('.image-product').classList.remove('active');
                    }
                });
                updateCartDisplay();
            });
        }

        cartQuantityElement.textContent = totalQuantity;
        emptyCartContent.style.display = totalQuantity > 0 ? 'none' : 'block';
        cartSummary.style.display = totalQuantity > 0 ? 'block' : 'none';
        cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
    };

    confirmOrderButton.addEventListener('click', () => {
        overlay.style.display = 'block';
        let summaryHtml = '';
        let totalPrice = 0;

        for (const [productName, product] of Object.entries(cart)) {
            const productInfo = productData.find(p => p.name === productName);
            if (productInfo) {  // Check if productInfo is defined
                summaryHtml += `
                    <div class="summary-item">
                        <div class="final-infos">
                            <img class="image-thumbnail" src="${productInfo.image.thumbnail}" alt="${productName} thumbnail">
                            <div>
                                <h2>${productName}</h2>
                                <div class="final-div-infos">
                                    <p class="product-quantity">${product.quantity}x</p>
                                    <p class="single-price">@ $${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <p class="final-price">$${(product.quantity * product.price).toFixed(2)}</p>
                    </div>
                `;
                totalPrice += product.quantity * product.price;
            }
        }

        summaryHtml += `<p class ="final-total">Order Total <strong>$${totalPrice.toFixed(2)}</strong></p>`;
        orderSummaryContainer.innerHTML = summaryHtml;
    });

    startNewOrderButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        cart = {};
        cartItemsContainer.innerHTML = '';
        cartQuantityElement.textContent = '0';
        cartTotalElement.textContent = 'Total: $0.00';
        cartSummary.style.display = 'none';
        emptyCartContent.style.display = 'block';
        document.querySelectorAll('.addToCart').forEach(button => button.classList.remove('hidden'));
        document.querySelectorAll('.counter').forEach(counter => counter.classList.add('hidden'));
        document.querySelectorAll('.image-product').forEach(image => image.classList.remove('active'));
    });
});