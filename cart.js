const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

//Fix loop condition
function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i< cartItems.length; i++) { // Bug: <= should be <, removed = from the loop.
      debugger; // use sources tab to pause and inspect values.
      total += cartItems[i].price;
     
  }
  return total;
}

// Bug: Apply validation for discountRate
function applyDiscount(total, discountRate) {

   if (typeof total !== "number" || isNaN(total)) {
    return 0; // Check for invalid total
  }
  
  if (discountRate < 0 || discountRate > 1) {
    console.log("DiscountRate must be between 0 and 1.");
    return total; // Don’t apply discount if invalid
  }
  return total - total * discountRate; 
}

//Fix browser format , replace \n with <br>
function generateReceipt(cartItems, total) {
  let receipt = "Items:<br>";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}<br>`;
  });
  receipt += `Total: $${total.toFixed(2)}`; 
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);


document.getElementById("total").textContent = `Total: $${discountedTotal}`;

//Use innerHTML to maintain line breaks
document.getElementById("receipt").innerHTML = receipt;

//Step 3 Validate Fixes tested in the browser console
//Empty cart
console.log(calculateTotal([])); // 0
console.log(applyDiscount(0, 0.2)); // 0

//Single Item
const singleItemCart = [{ name: "Phone", price: 500 }];
console.log(calculateTotal(singleItemCart)); // 500

//Discount Edge cases

applyDiscount(1000, 0);// 100 (no discount).

applyDiscount(1000, 1);// 0 (100% off).

applyDiscount(1000, -0.5) //DiscountRate must be between 0 and 1. 1000


