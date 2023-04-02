const shopEl = document.getElementById('shop'),
  cartAmountEl = document.getElementById('cartAmount');

let storeProduct = JSON.parse(localStorage.getItem('data')) || [];

function showProduct() {
  shopEl.innerHTML = shopData
    .map((item) => {
      let { id, name, price, desc, img } = item;
      let showLocalStorage = storeProduct.find((item) => item.id === id) || [];
      return `
    <div id="product-${id}" class="item">
    <img width="326" src="${img}" alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc} ${id}</p>

      <div class="prince-quantity">
        <h2>$ ${price}</h2>
        <div class="buttons">
          <i onclick="incrementProduct(${id})" class="fa-solid fa-square-plus"></i>
          <div id="${id}" class="quantity">${
        showLocalStorage.item === undefined ? 0 : showLocalStorage.item
      }</div>
          <i onclick="decrementProduct(${id})" class="fa-solid fa-square-minus"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join('');
}

showProduct();

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
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function updateProduct(id) {
  let searchItem = storeProduct.find((item) => item.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculationProduct();
}

function calculationProduct() {
  let searchItem = storeProduct
    .map((item) => item.item)
    .reduce((itemOne, itemTwo) => itemOne + itemTwo, 0);
  cartAmountEl.innerHTML = searchItem;
}

calculationProduct();
