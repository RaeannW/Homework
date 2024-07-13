// 1. Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["sausage", "pepperoni", "olives", "mushrooms"];

//list toppings function - add spaces between items
function listToppings() {
  // pizzaToppings.splice(pizzaToppings.length - 1, 0, "and"); plz help :/
  let message = pizzaToppings.join(", ");
  return message;
}

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings

let newArr = [];

function greetCustomer() {
  for (let topping of pizzaToppings) {
    newArr.push(topping);
  }
  console.log(`Welcome to Pizza House, our toppings are: ${listToppings()}.`);
}
greetCustomer();

// 3. Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings - AKA array

let pizzaArray = [];

function getPizzaOrder(size, crust, ...indefToppings) {
  console.log(
    `One ${size}, ${crust}, crust pizza with ${listToppings()} coming up!`
  );
  pizzaArray.push(size, crust, ...indefToppings);
  //console.log(pizzaArray);
  return pizzaArray;
}
getPizzaOrder("large", "garlic", "pepperoni", "olives", "sausage");

// 4. Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

let pizzaObj = {};

function preparePizza([size, crust, ...indefToppings]) {
  console.log(
    `Cooking your ${size}, ${crust} crust pizza, with ${listToppings()} toppings.`
  );
  pizzaObj = {
    size: size,
    crust: crust,
    toppings: indefToppings
  };
  //console.log(pizzaObj);
  return pizzaObj;
}
preparePizza(pizzaArray);

// 5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size}, ${
      pizzaObject.crust
    } crust pizza with ${listToppings()}. Enjoy!`
  );
  //console.log(pizzaObject);
  return pizzaObject;
}
servePizza(pizzaObj);
