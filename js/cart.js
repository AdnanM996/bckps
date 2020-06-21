let cartEl = document.querySelector('.cart');
let cartIcon = document.querySelector('.cart-icon');

cartIcon.addEventListener('click', () => {
    cartEl.classList.toggle('open--cart');
});