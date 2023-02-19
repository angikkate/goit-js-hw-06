const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
const parentUl = document.querySelector('#ingredients');

// const elements = ingredients.map(option => {
//   const listEl = document.createElement('li');
//   listEl.textContent = option;
//   listEl.classList.add('item');

//   return listEl;
// });

const ingredientOptions = options => {
  return options.map(option => {
    const listEl = document.createElement('li');
    listEl.textContent = option;
    listEl.classList.add('item');
  
    return listEl;
  });
};

const elements = ingredientOptions(ingredients);
parentUl.append(...elements);

