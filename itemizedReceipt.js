// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) => {
  let total = 0;
  items.forEach(function (item) {
    total = total + item.price;
    console.log(`${item.descr} - $${item.price.toFixed(2)}`);
  });
  console.log(`Total is ${total}`);
};
/*const object1 = { description: "Burger", price: 11.99 };
const object2 = { description: "Fries", price: 1.99 };
const object3 = { description: "Fish", price: 21.99 };
const object4 = { description: "Falafel", price: 10.99 };
logReceipt(object1, object2, object3, object4);*/

// Check
logReceipt(
  { descr: "Burrito", price: 5.99 },
  { descr: "Chips & Salsa", price: 2.99 },
  { descr: "Sprite", price: 1.99 }
);

// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
