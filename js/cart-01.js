//  div внутри корзины, куда добывляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

// отслеживаем клик на странице
window.addEventListener('click', (e) => {
  // проверяем что клик был совершен по кнопке button
  if (e.target.hasAttribute('data-cart')) {
    //  находим карточку с товаром, внутри которой был совершен клик
    const card = e.target.closest('.card');
    
    // собираем данные товара и записываем в константу
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };
    console.log(productInfo);

    // формируем разметку товара в корзине
    const cartItemHtml = `
                <div class="cart-item" data-id="${productInfo.id}">
                  <div class="cart-item__top">
                    <div class="cart-item__img">
                      <img src="${productInfo.imgSrc}" alt="${productInfo.title}" />
                    </div>
                    <div class="cart-item__desc">
                      <div class="cart-item__title">${productInfo.title}</div>
                      <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                      <!-- cart-item__details -->
                      <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                          <div class="items__control" data-action="minus">
                            -
                          </div>
                          <div class="items__current" data-counter="">${productInfo.counter}</div>
                          <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                          <div class="price__currency">${productInfo.price}</div>
                        </div>
                      </div>
                      <!-- // cart-item__details -->
                    </div>
                  </div>
                </div>
    `;
    console.log(cartItemHtml);
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
  }
})