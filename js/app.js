'use strict';

let cart = (JSON.parse(localStorage.getItem('cart')) || []);



const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

if(cart.length > 0) {
    cart.forEach(cartItem => {

        const product = cartItem;

        insertItemToDom(product);
        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if(productDOM.querySelector('.product--name').innerText === product.name) {
                addToCartButtonDOM.innerText = 'In Cart';
                addToCartButtonDOM.disabled = true;

                const cartItemsDom = cartDOM.querySelectorAll('.cart__item');
        cartItemsDom.forEach(cartItemDOM => {
            if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
                cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => {
                    cart.forEach(cartItem => {
                        if(cartItem.name === product.name) {
                            cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
                            localStorage.setItem('cart', JSON.stringify(cart));
                        }
                    })
                });

            }// end of if statement

            //my try
            if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
                cartItemDOM.querySelector('[data-action="DECRESE_ITEM"]').addEventListener('click', () => {
                    cart.forEach(cartItem => {
                        if(cartItem.name === product.name) {
                           if(cartItem.quantity > 1) {
                                cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
                                localStorage.setItem('cart', JSON.stringify(cart));
                           } else {
                               cartItemDOM.remove();
                               cart = cart.filter(cartItem => cartItem.name !== product.name);
                               localStorage.setItem('cart', JSON.stringify(cart));
                               addToCartButtonDOM.innerText = 'Add To Cart';
                               addToCartButtonDOM.disabled = false;
                           }
                        }
                    })
                });

                cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => {
                    cart.forEach(cartItem => {
                        if(cartItem.name === product.name) {
                          
                        cartItemDOM.remove();
                        cart = cart.filter(cartItem => cartItem.name !== product.name);
                        localStorage.setItem('cart', JSON.stringify(cart));
                        addToCartButtonDOM.innerText = 'Add To Cart';
                        addToCartButtonDOM.disabled = false;
                           
                        }
                    })
                });
            }
        });
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

            localStorage.setItem('cart', JSON.stringify(cart));

            addToCartButtonDOM.innerText = 'In Cart';
            addToCartButtonDOM.disabled = true;
            const cartItemsDom = cartDOM.querySelectorAll('.cart__item');
            cartItemsDom.forEach(cartItemDOM => {
                if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
                    cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => {
                        cart.forEach(cartItem => {
                            if(cartItem.name === product.name) {
                                cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
                                localStorage.setItem('cart', JSON.stringify(cart));
                            }
                        })
                    });

                }// end of if statement

            //my try
            if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
                cartItemDOM.querySelector('[data-action="DECRESE_ITEM"]').addEventListener('click', () => {
                    cart.forEach(cartItem => {
                        if(cartItem.name === product.name) {
                           if(cartItem.quantity > 1) {
                                cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
                                localStorage.setItem('cart', JSON.stringify(cart));
                           } else {
                               cartItemDOM.remove();
                               cart = cart.filter(cartItem => cartItem.name !== product.name);
                               localStorage.setItem('cart', JSON.stringify(cart));
                               addToCartButtonDOM.innerText = 'Add To Cart';
                               addToCartButtonDOM.disabled = false;
                           }
                        }
                    })
                });

                cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => {
                    cart.forEach(cartItem => {
                        if(cartItem.name === product.name) {
                          
                        cartItemDOM.remove();
                        cart = cart.filter(cartItem => cartItem.name !== product.name);
                        localStorage.setItem('cart', JSON.stringify(cart));
                        addToCartButtonDOM.innerText = 'Add To Cart';
                        addToCartButtonDOM.disabled = false;
                           
                        }
                    })
                });
            }
        });
    
        }
    });
})

function insertItemToDom(product) {
    cartDOM.insertAdjacentHTML('beforeend', `
        <div class="cart__item">
            <img class="cart__item__img" src="${product.image}">
            <p class="cart__item__name">${product.name}</p>
            <p class="cart__item__price">${product.price}</p>
            <button class="btn--cart" data-action="DECRESE_ITEM">&minus;</button>
            <span class="cart__item__quantity">${product.quantity}</span>
            <button class="btn--cart" data-action="INCREASE_ITEM">&plus;</button>
            <button class="btn--cart" data-action="REMOVE_ITEM">&times;</button>
        </div>
`);
}