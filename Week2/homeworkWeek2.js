let pizzaPlace = "Pizza Palace";

let numberOfToppings = 12;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

let message = `${pizzaPlace} offers ${numberOfToppings} toppings, all made with fresh ingredients.`;

console.log(message);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (let i = 2; i <= numberOfToppings; i += 2) {
  console.log(i);
}
