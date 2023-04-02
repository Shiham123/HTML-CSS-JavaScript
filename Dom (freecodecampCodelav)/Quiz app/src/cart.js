const cartAmountEl = document.getElementById('cartAmount'),
  labelEl = document.getElementById('label'),
  shoppingCartEl = document.getElementById('shopping-cart');

let storeProduct = JSON.parse(localStorage.getItem('data')) || [];

function calculationProduct() {
  let searchItem = storeProduct
    .map((item) => item.item)
    .reduce((itemOne, itemTwo) => itemOne + itemTwo, 0);
  cartAmountEl.innerHTML = searchItem;
}

calculationProduct();

function generateCartItems() {
  if (storeProduct.length !== 0) {
    console.log(storeProduct);
  } else {
    labelEl.innerHTML = `
    <h2>Cart is empty</h2>
    <a href="index.html">
      <button class="homeBtn">Back to Home</button>
    </a>
    `;
  }
}

generateCartItems();
