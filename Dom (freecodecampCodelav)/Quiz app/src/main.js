const shopEl = document.getElementById('shop'),
  cartAmountEl = document.getElementById('cartAmount');

let storeProduct = JSON.parse(localStorage.getItem('data')) || [];

function showProduct() {
  return (shopEl.innerHTML = shopItemsData
    .map((product) => {
      let { name, img, price, id, desc } = product;
      let updateItem = storeProduct.find((product) => product.id === id) || [];
      return `
    <div id="product-${id}" class="item">
        <img width="326" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>

          <div class="prince-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="incrementProduct(${id})" class="fa-solid fa-square-plus"></i>
              <div id="${id}" class="quantity">${
        updateItem.item === undefined ? 0 : updateItem.item
      }</div>
              <i onclick="decrementProduct(${id})" class="fa-solid fa-square-minus"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(''));
}

showProduct();

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
  localStorage.setItem('data', JSON.stringify(storeProduct));
}

function updateProduct(id) {
  let searchItem = storeProduct.find((product) => product.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculationProduct();
}

function calculationProduct() {
  let countAll = storeProduct
    .map((product) => product.item)
    .reduce((itemOne, itemTwo) => itemOne + itemTwo, 0);
  cartAmountEl.innerHTML = countAll;
}

calculationProduct();
