const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItem = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}, Elements: ${categoryItem}`);
  });