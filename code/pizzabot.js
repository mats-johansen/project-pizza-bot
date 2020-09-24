const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";
const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);
let orderName = prompt('Enter the name of the pizza you want to order today.');

const validateOrderName = () => { 
    if (orderName.toLowerCase() === vegetarian.toLowerCase()
    || orderName.toLowerCase() === hawaiian.toLowerCase()
    || orderName.toLowerCase() === pepperoni.toLowerCase()) { 
        orderQuantity = prompt(`How many ${orderName} pizzas do you want?`); 
    } else {
        alert("Select a pizza from the menu");
        prompt('Enter the name of the pizza you want to order today.');
        validateOrderName();
    };
};
validateOrderName();

const calculateTotalCost = () => {
    orderTotal = orderQuantity * pizzaPrice;
    };
calculateTotalCost();
   
const cookingTime = () => {
    if (orderQuantity >0 && orderQuantity <=2) {
      pizzaTime = "10 minutes.";
    } else if ( orderQuantity >2 && orderQuantity <6) {
      pizzaTime = "15 minutes.";
    } else if ( orderQuantity >=6 && orderQuantity <100) {
      pizzaTime = "20 minutes."
    } else {
      alert(
        `${orderQuantity} is not a valid order quantity. Please try again and enter a number between 1-100.`
      );
    };
};
cookingTime();

document.getElementById("pizza-order").innerHTML = (
  `Greeeaat, I'll get started on your ${orderName} pizza(s) right away, it will cost ${orderTotal} kr. The pizzas will take ${pizzaTime}`
);