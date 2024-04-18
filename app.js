function cart() {
    console.log(CART);
    let msg = JSON.stringify(CART);
    
    window.alert(msg);
}
// Глобальный объект для хранения товаров в корзине
let CART = {};

// Функция для увеличения количества товара
function increaseCount() {
    const countElement = this.parentNode.querySelector('.count');
    const itemName = this.parentNode.parentNode.querySelector('.name').textContent;

    countElement.textContent = parseInt(countElement.textContent) + 1;

    // Проверяем, есть ли товар в корзине
    if (CART[itemName]) {
        CART[itemName]++;
    } else {
        CART[itemName] = 1;
    }
}

// Функция для уменьшения количества товара
function decreaseCount() {
    const countElement = this.parentNode.querySelector('.count');
    const itemName = this.parentNode.parentNode.querySelector('.name').textContent;

    // Проверяем, чтобы значение счетчика было больше 0
    if (parseInt(countElement.textContent) > 0) {
        countElement.textContent = parseInt(countElement.textContent) - 1;

        // Уменьшаем количество в корзине и удаляем, если оно становится равным 0
        if (CART[itemName]) {
            CART[itemName]--;
            if (CART[itemName] === 0) {
                delete CART[itemName];
            }
        }
    }
}

// Находим все кнопки увеличения и добавляем для них обработчики
const increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach(button => {
    button.addEventListener('click', increaseCount);
});

// Находим все кнопки уменьшения и добавляем для них обработчики
const decreaseButtons = document.querySelectorAll('.decrease');
decreaseButtons.forEach(button => {
    button.addEventListener('click', decreaseCount);
});
