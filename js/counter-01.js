// находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// отслеживаем кнопку -
btnMinus.addEventListener('click', () => {
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
  
});
// отслеживаем кнопку +
btnPlus.addEventListener('click', () => {
  counter.innerText = ++counter.innerText;
})