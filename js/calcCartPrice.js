function calcCartPriceAndDelivery () {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

  let totalPrice = 0;
  
  cartItems.forEach((item) => {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  })

  // вывод на страницу общей суммы заказа
  totalPriceEl.innerText = totalPrice;

  // скрываем/показываем блок с доставкой
  if (totalPrice > 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  // выводим на страницу условия доставка бесплатна если заказ больше 600р
  if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }
}