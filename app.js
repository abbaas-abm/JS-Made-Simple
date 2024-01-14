let item;
// SINGLE ELEMENT SELECTORS
item = document.getElementById('list');

item = document.querySelector('h1')

// Will Select First Instance Of Item - Talk About . # tagname
document.querySelector('.list-item')
// document.querySelector('#list-item')
// document.querySelector('h1')

// MULTIPLE ELEMEMNT SELECTORS
let items;
items = document.getElementsByClassName('.list-item');

items = document.getElementsByTagName('li');

// All In One Solution
items = document.querySelectorAll('.list-item');

// Looping Through HTML Collection
// let itemsArr = Array.from(items);

// itemsArr.forEach(items => {
//     console.log(items.innerText);
// })

// Styling ODD and EVEN Items
items = document.querySelectorAll('.list-item:nth-of-type(even)');
let itemsArr = Array.from(items);

itemsArr.forEach(item => {
    item.style.color = 'red';
})

