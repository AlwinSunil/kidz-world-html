const addToCartDelegation = document.querySelector("main");
const cartQuantityElem = document.querySelector(".cart-quantity");

let cartQuantity = 0;
const cartItems = [];

addToCartDelegation.addEventListener("click", (event) => {
  const clickedElement = event.target;

  const addtocartButton = clickedElement.closest(".addtocart");
  if (addtocartButton) {
    const itemElement = addtocartButton.closest(".item");
    const itemName = itemElement.querySelector("p").textContent;
    const itemPrice = itemElement.querySelector(".price").textContent;

    const isItemInCart = cartItems.some((product) => {
      if (product.name === itemName) {
        product.quantity += 1;
        return true;
      }
    });

    if (!isItemInCart) {
      cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    cartQuantity += 1;

    cartQuantityElem.innerHTML = cartQuantity;
  }
});

const cartBtn = document.querySelector(".cart");
cartBtn.addEventListener("click", () => {
  totalAmount = 0;
  cartItems.forEach((item) => {
    console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    totalAmount += item.price * item.quantity;
  });

  let dollarAmount = Math.floor(totalAmount);
  let centsAmount = Math.round((totalAmount - dollarAmount) * 100);

  console.log(`The total amount is $${dollarAmount} and ${centsAmount} cents`);
});