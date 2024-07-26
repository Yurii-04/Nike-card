// chooseActiveColorBtn
import chooseActiveColorBtn from './modules/chooseActiveColor.js';
chooseActiveColorBtn();

export const promoState = {
    promoApplied: false
};

// promoCode
import {checkPromoCode} from './modules/PromoCode.js';

const PROMOCODE = '123'
const promoBtn = document.getElementById('promo-btn');
const callPromoCode = checkPromoCode(PROMOCODE);
promoBtn.onclick = () => callPromoCode();

//changePrice
import changePrice from './modules/changePrice.js';
changePrice();
