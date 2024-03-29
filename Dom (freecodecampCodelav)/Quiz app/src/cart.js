const shoppingCartEl = document.getElementById('shopping-cart'),
  labelEl = document.getElementById('label'),
  cartAmountEl = document.getElementById('cartAmount');

let storeProduct = JSON.parse(localStorage.getItem('data')) || [];

function calculationProduct() {
  let searchItem = storeProduct
    .map((product) => product.item)
    .reduce((productOne, productTwo) => productOne + productTwo, 0);

  cartAmountEl.innerHTML = searchItem;
}

calculationProduct();

function generateProduct() {
  if (storeProduct.length !== 0) {
    return (shoppingCartEl.innerHTML = storeProduct.map((product) => {
      let { id, item } = product;
      let searchItem = shopItemsData.find((product) => product.id === id);
      let { name, img, price } = searchItem;
      return `
      <div class="cart-item">
        <img width="170" src="${img}" alt="" />
        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>$ ${price}</p>
              <p class="cart-item-price">${name}</p>
            </h4>
            <i onclick="removeItem(${id})" class="fa-sharp fa-solid fa-circle-xmark"></i>
          </div>
          <div class="buttons">
            <i onclick="incrementProduct(${id})" class="fa-solid fa-square-plus"></i>
            <div id="${id}" class="quantity">${item}</div>
            <i onclick="decrementProduct(${id})" class="fa-solid fa-square-minus"></i>
          </div>
          <h3>$ ${price * item}</h3>
        </div>
      </div>
      `;
    }));
  } else {
    return (shoppingCartEl.innerHTML = `
    <h2>Cart is empty</h2>
    <a href="index.html">
      <button class="homeBtn">Back to home</button>
    </a>
    `);
  }
}

generateProduct();

function incrementProduct(id) {
  let selectItem = id;
  let searchItem = storeProduct.find((product) => product.id === selectItem.id);

  if (searchItem === undefined) {
    storeProduct.push({
      id: selectItem.id,
      item: 1,
    });
  } else {
    searchItem.item += 1;
  }
  updateProduct(selectItem.id);
  generateProduct();
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function decrementProduct(id) {
  let selectItem = id;
  let searchItem = storeProduct.find((product) => product.id === selectItem.id);

  if (searchItem === undefined) return;
  else if (searchItem.item === 0) return;
  else {
    searchItem.item -= 1;
  }
  updateProduct(selectItem.id);
  storeProduct = storeProduct.filter((product) => product.item !== 0);
  generateProduct();
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function updateProduct(id) {
  let searchItem = storeProduct.find((product) => product.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculationProduct();
  generateProduct();
  totalCost();
}

function totalCost() {
  if (storeProduct.length !== 0) {
    let amount = storeProduct
      .map((product) => {
        let { id, item } = product;
        let searchItem = shopItemsData.find((product) => product.id === id);
        return searchItem.price * item;
      })
      .reduce((productOne, productTwo) => productOne + productTwo, 0);

    labelEl.innerHTML = `
    <h2>Total bill : $ ${amount}</h2>
    <button class="checkout">Check out</button>
    <button onclick="removeAllItem()" class="removeAll">remove All item</button>
    `;
  } else return;
}

totalCost();

function removeItem(id) {
  let selectItem = id;
  storeProduct = storeProduct.filter((product) => product.id !== selectItem.id);
  generateProduct();
  calculationProduct();
  totalCost();
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function removeAllItem() {
  storeProduct = [];
  generateProduct();
  totalCost();
  calculationProduct();
  localStorage.setItem('data', JSON.stringify(storeProduct));
}
