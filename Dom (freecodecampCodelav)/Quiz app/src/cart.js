const shoppingCartEl = document.getElementById('shopping-cart'),
  labelEl = document.getElementById('label'),
  cartAmountEl = document.getElementById('cartAmount');

let basket = JSON.parse(localStorage.getItem('data')) || [];

function calculationProduct() {
  let searchItem = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  cartAmountEl.innerHTML = searchItem;
}

calculationProduct();

function generateProduct() {
  if (basket.length !== 0) {
    return (shoppingCartEl.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let searchItem = shopItemsData.find((x) => x.id === id);
        let { img, name, price } = searchItem;
        return `
      <div class="cart-item">
        <img width="170" src="${img}" alt="" />
        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>$ ${price}</p>
              <p class="cart-item-price">$ ${name}</p>
            </h4>
            <i onclick="removeItem(${id})" class="fa-sharp fa-solid fa-circle-xmark"></i>
          </div>
          <div class="buttons">
            <i onclick="incrementProduct(${id})" class="fa-solid fa-square-plus"></i>
            <div id="${id}" class="quantity">${item}</div>
            <i onclick="decrementProduct(${id})" class="fa-solid fa-square-minus"></i>
          </div>
          <h3>$ ${item * price}</h3>
        </div>
      </div>
      `;
      })
      .join(''));
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
  let searchItem = basket.find((x) => x.id === selectItem.id);

  if (searchItem === undefined) {
    basket.push({
      id: selectItem.id,
      item: 1,
    });
  } else {
    searchItem.item += 1;
  }
  updateProduct(selectItem.id);
  generateProduct();
  localStorage.setItem('data', JSON.stringify(basket));
}

function decrementProduct(id) {
  let selectItem = id;
  let searchItem = basket.find((x) => x.id === selectItem.id);

  if (searchItem === undefined) return;
  else if (searchItem.item === 0) return;
  else {
    searchItem.item -= 1;
  }
  updateProduct(selectItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateProduct();
  localStorage.setItem('data', JSON.stringify(basket));
}

function updateProduct(id) {
  let searchItem = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculationProduct();
  totalAmount();
}

function totalAmount() {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let searchItem = shopItemsData.find((x) => x.id === id);
        return searchItem.price * item;
      })
      .reduce((x, y) => x + y, 0);

    labelEl.innerHTML = `
    <h2>Total Bill :$ ${amount}</h2>
    <button class="checkout">CheckOut</button>
    <button class="removeAll" onclick="clearItem()" >Remove all item</button>
    `;
  } else return;
}

totalAmount();

function removeItem(id) {
  let selectItem = id;
  basket = basket.filter((x) => x.id !== selectItem.id);
  generateProduct();
  calculationProduct();
  totalAmount();
  localStorage.setItem('data', JSON.stringify(basket));
}

function clearItem() {
  basket = [];
  totalAmount();
  generateProduct();
  calculationProduct();
  localStorage.setItem('data', JSON.stringify(basket));
}
