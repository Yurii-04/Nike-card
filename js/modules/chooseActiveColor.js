import { removeClassFromElements } from './utils.js';
import changePrice from './changePrice.js';

const colorButtons = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');

export default function chooseActiveColor() {
    if (colorButtons.length !== shoes.length || colorButtons.length !== gradients.length) {
        console.warn('Масиви мають різну довжину');
        return;
    }

    colorButtons.forEach((btn, index) => {
        const shoe = shoes[index];
        const gradient = gradients[index];

        btn.onclick = () => {
            removeClassFromElements(colorButtons, 'active');
            removeClassFromElements(shoes, 'show');
            removeClassFromElements(gradients, 'second');

            btn.classList.add('active');
            shoe.classList.add('show');
            gradient.classList.add('second');

            changePrice();
        };
    });
}
