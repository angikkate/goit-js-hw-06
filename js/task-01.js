// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categories = document.querySelector('#categories');

const numberCategories = categories.children.length;
console.log(`Number of categories: ${numberCategories}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const childrenItem = categories.querySelectorAll('.item');

const items = [...childrenItem].forEach((child) => {
    const title = child.querySelector('h2').textContent;
    console.log(`Category: ${title}`);

    const ulChild = child.querySelector('ul').children.length;
    console.log(`Elements: ${ulChild}`); 
});
