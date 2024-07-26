import { showModal } from './modalWindow.js';
import { promoState } from '../index.js';
import changePrice from './changePrice.js';

const input = document.querySelector('.promo-input');
const price = document.getElementById('out-price');

function handlePromoCodeSuccess() {
    const src = '../img/checkmark.svg';
    showModal(src, 'Your promo code applied successfully');
}

function handlePromoCodeError(message) {
    const src = '../img/cross.svg';
    showModal(src, message);
}

function checkPromoCode(promoCode) {
    let called = false;

    return () => {
        if (called) {
            handlePromoCodeError('Your promo code has already been applied');
            return;
        }

        if (input.value === promoCode) {
            called = true;
            promoState.promoApplied = true;
            changePrice();
            handlePromoCodeSuccess();
        } else {
            handlePromoCodeError('The promo code is incorrect! Please try again');
        }
    };
}

export { checkPromoCode };
