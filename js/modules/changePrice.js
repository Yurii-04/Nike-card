import { promoState } from '../index.js';
const colorButtons = document.querySelectorAll('.color');
const outPrice = document.getElementById('out-price');

export default function changePrice() {
    let price;
    colorButtons.forEach(button => {
        if (button.classList.contains('active')) {
            price = button.dataset.price;
        }
    });

    if (promoState.promoApplied) {
        const oldPrice = parseFloat(price);
        const newPrice = (oldPrice - ((oldPrice * 10) / 100)).toFixed(2);
        outPrice.innerText = `${newPrice}$`;
    } else {
        outPrice.innerText = `${price}$`;
    }
}