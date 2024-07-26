function removeClassFromElements(arr, className) {
    arr.forEach(el => el.classList.remove(className));
}

export {removeClassFromElements};