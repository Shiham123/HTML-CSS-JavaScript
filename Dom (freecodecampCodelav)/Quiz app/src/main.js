const shopEl = document.getElementById('shop'),
  cartAmountEl = document.getElementById('cartAmount');

let basket = JSON.parse(localStorage.getItem('data')) || [];

function showProduct() {
  return (shopEl.innerHTML = shopItemsData
    .map((x) => {
      let { name, id, price, img, desc } = x;
      let searchItem = basket.find((x) => x.id === id) || [];
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
        searchItem.item === undefined ? 0 : searchItem.item
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
  localStorage.setItem('data', JSON.stringify(basket));
}

function updateProduct(id) {
  let searchItem = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculationProduct();
}

function calculationProduct() {
  let searchItem = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  cartAmountEl.innerHTML = searchItem;
}

calculationProduct();
