window.addEventListener('click', (e) => {
  // обьявляем переменную для счетчика
  let counter;
  // проверка - на какую кнопку было нажатие
  if (e.target.dataset.action === 'minus' || e.target.dataset.action === 'plus') {
    const counterWrapper = e.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }

   //  отслеживаем нажатие на плюс
  if (e.target.dataset.action === 'plus')  {
    counter.innerText = ++counter.innerText;
  }
      
  //  отслеживаем нажатие на минус
  if (e.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
    // удаляем товар из корзины
    e.target.closest('.cart-item').remove();
    }
    
    // отображение статуса корзины пустая / полная
    toggleCartStatus();

    // пересчет стоимости товаров в корзине
    calcCartPriceAndDelivery();

    // проверяем на + или -
    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
      calcCartPriceAndDelivery();
    }
  }
});