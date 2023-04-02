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
    return (shoppingCartEl.innerHTML = storeProduct
      .map((product) => {
        let { id, item } = product;
        let searchItem = shopData.find((item) => item.id === id) || [];

        return `
        <div class="cart-item">
          <img width="170" src="${searchItem.img}" alt="" />
          <div class="details">
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${searchItem.name}</p>
                <p class="cart-item-price">$ ${searchItem.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="fa-sharp fa-solid fa-circle-xmark"></i>
            </div>
            <div class="buttons">
              <i onclick="incrementProduct(${id})" class="fa-solid fa-square-plus"></i>
              <div id="${id}" class="quantity">${item}</div>
              <i onclick="decrementProduct(${id})" class="fa-solid fa-square-minus"></i>
            </div>
            <h3>$ ${item * searchItem.price}</h3>
          </div>
        </div>
      `;
      })
      .join(''));
  } else {
    shoppingCartEl.innerHTML = `
    <h2>Cart is empty</h2>
    <a href="index.html">
      <button class="homeBtn">Back to Home</button>
    </a>
    `;
  }
}

generateCartItems();

function incrementProduct(id) {
  let selectItem = id;
  let searchItem = storeProduct.find((item) => item.id === selectItem.id);

  if (searchItem === undefined) {
    storeProduct.push({
      id: selectItem.id,
      item: 1,
    });
  } else {
    searchItem.item += 1;
  }
  updateProduct(selectItem.id);
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function decrementProduct(id) {
  let selectItem = id;
  let searchItem = storeProduct.find((item) => item.id === selectItem.id);

  if (searchItem === undefined) return;
  else if (searchItem.item === 0) return;
  else {
    searchItem.item -= 1;
  }
  updateProduct(selectItem.id);
  storeProduct = storeProduct.filter((item) => item.item !== 0);
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function updateProduct(id) {
  let searchItem = storeProduct.find((item) => item.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculationProduct();
  totalAmount();
}

function removeItem(id) {
  let selectItem = id;
  storeProduct = storeProduct.filter((item) => item.id !== selectItem.id);
  localStorage.setItem('data', JSON.stringify(storeProduct));
  generateCartItems();
  totalAmount();
}

function totalAmount() {
  if (storeProduct.length !== 0) {
    let amount = storeProduct
      .map((x) => {
        let { item, id } = x;
        let searchItem = shopData.find((item) => item.id === id) || [];
        return item * searchItem.price;
      })
      .reduce((x, y) => x + y, 0);
    labelEl.innerHTML = `
        <h2>Total Bill : $ ${amount}</h2>
        <button class="checkOut">Checkout</button>
        <button class="removeAll">remove All</button>
      `;
  } else return;
}

totalAmount();
