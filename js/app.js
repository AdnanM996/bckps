'use strict';

let cart = (JSON.parse(localStorage.getItem('cart')) || []);
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

if(cart.length > 0) {
    cart.forEach(cartItem => {

        const product = cartItem;

        insertItemToDom(product);
        countCartTotal();

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if(productDOM.querySelector('.product--name').innerText === product.name) {
                handleActionButtons(addToCartButtonDOM, product);
            }
        })
    });
}


addToCartButtonsDOM.forEach((addToCartButtonDOM) => {
    addToCartButtonDOM.addEventListener('click', () => {

        const productDOM = addToCartButtonDOM.parentNode;

        const product = {
            image: productDOM.querySelector('.product--img').getAttribute('src'),
            name: productDOM.querySelector('.product--name').innerText,
            price: productDOM.querySelector('.product--price').innerText,
            quantity: 1,
        };

        const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

        if(!isInCart) {
            insertItemToDom(product);
            cart.push(product);
            saveCart();
            handleActionButtons(addToCartButtonDOM, product);
        }
    });
})

function insertItemToDom(product) {
    cartDOM.insertAdjacentHTML('beforeEnd', `
        <div class="cart__item">
            <div class="cart__item__info">
                <img class="cart__item--img" src="${product.image}">
                <p class="cart__item--name">${product.name}</p>
                <p class="cart__item--price">${product.price}</p>
            </div>
            <div class="cart__item--buttons">
                <button class="btn--cart btn--cart--decrese" data-action="DECRESE_ITEM">&minus;</button>
                <span class="cart__item__quantity">${product.quantity}</span>
                <button class="btn--cart btn--cart--increase" data-action="INCREASE_ITEM">&plus;</button>
                <button class="btn--cart btn--cart--remove" data-action="REMOVE_ITEM">&times;</button>
            </div>
        </div>
    `);

    addCartFooter(cartDOM);
}

function handleActionButtons(addToCartButtonDOM, product) {
    addToCartButtonDOM.innerText = 'In Cart';
    addToCartButtonDOM.disabled = true;

    const cartItemsDom = cartDOM.querySelectorAll('.cart__item');

    cartItemsDom.forEach(cartItemDOM => {

        if(cartItemDOM.querySelector('.cart__item--name').innerText === product.name) {
            cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM, addToCartButtonDOM));
            cartItemDOM.querySelector('[data-action="DECRESE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
            cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
    }
});
}

function increaseItem(product, cartItemDOM) {
    cart.forEach(cartItem => {
        if(cartItem.name === product.name) {
            cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
            saveCart();
        }
    });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
    cart.forEach(cartItem => {
        if(cartItem.name === product.name) {
           if(cartItem.quantity > 1) {
                cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
                saveCart();
           } else {
                removeItem(product, cartItemDOM, addToCartButtonDOM)
           }
        }
    })
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
    cart.forEach(cartItem => {
        cartItemDOM.remove();
        saveCart();
        cart = cart.filter(cartItem => cartItem.name !== product.name);
        addToCartButtonDOM.innerText = 'Add To Cart';
        addToCartButtonDOM.disabled = false;

        if(cart.length < 1) {
            document.querySelector('.cart__footer').remove();
        }
    })
}

function addCartFooter(cartDOM){
    if (document.querySelector('.cart__footer') === null) {
        cartDOM.insertAdjacentHTML('beforeEnd', `
            <div class="cart__footer">
                <button class="clear" data-action="CLEAR_CART">Clear Cart</button>
                <button class="pay" data-action="CHECKOUT">Pay</button>
            </div>
        `);

        document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
        document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => checkout());
    }
}

function clearCart() {
    cartDOM.querySelectorAll('.cart__item').forEach(cartItem => {
        cartItem.remove();
    })

    
    cart = [];
    localStorage.removeItem('cart');
    if(cart.length < 1) {
        document.querySelector('.cart__footer').remove();
    }

    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
        addToCartButtonDOM.innerText = 'Add To Cart';
        addToCartButtonDOM.disabled = false;
    })
}

function checkout() {
    let payPalForm = `
    <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="adnanmusinovic98@gmail.com">
    `;

    cart.forEach((cartItem, index)=> {
        ++index;
        payPalForm += `
            <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
            <input type="hidden" name="amount_${index}" value="${cartItem.price}">
            <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">
        ;`
    });
    payPalForm += `
        <input type="submit" value="PayPal">
    </form>
    <section class="loader">
        <p class="loader--text">backpacks</p>
    </section>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', payPalForm);
    document.getElementById('paypal-form').submit();

    console.log('pay');
}

function countCartTotal() {
    let cartTotal = 0;
    cart.forEach(cartItem => {
        cartTotal += cartItem.quantity * cartItem.price;
    });

    document.querySelector('[data-action="CHECKOUT"]').innerText = 'Pay $ ' + cartTotal;
};

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartTotal();
}