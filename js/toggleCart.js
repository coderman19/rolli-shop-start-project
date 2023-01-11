function toggleCartStatus () {

  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmptyBadge = document.querySelector('[data-cart-empty]');
  const orderForm = document.querySelector('#order-form');

  if (cartWrapper.children.length > 0) {
    // состояние - в корзине есть товар
    // пров-яем кор-у на нал-е товара, если есть показываем
    cartEmptyBadge.classList.add('none');
    orderForm.classList.remove('none');
  } else {
    // состояние - корзина пуста
    cartEmptyBadge.classList.remove('none');
    orderForm.classList.add('none');
  }
}