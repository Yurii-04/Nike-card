const modalContentTitle = document.querySelector('.modal-content__img-container');
const modalContentP = document.querySelector('.modal-content__p');
const closeBtn = document.querySelector('.btn-close');
const modalWindow = document.querySelector('.modal-window');

function renderModalContent(imgSrc, text) {
    modalContentTitle.innerHTML = '';
    modalContentP.textContent = '';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('modal-content__img');
    modalContentTitle.append(img);

    modalContentP.textContent = text;
}

function showModal(imgSrc, text) {
    renderModalContent(imgSrc, text);
    modalWindow.classList.remove('hidden');

    setTimeout(closeModal, 1500);
}

function closeModal() {
    modalWindow.classList.add('hidden');
}

closeBtn.addEventListener('click', closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
        closeModal();
    }
});

export { showModal };