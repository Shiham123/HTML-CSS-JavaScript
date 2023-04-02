const cartAmountEl = document.getElementById('cartAmount');

let storeProduct = JSON.parse(localStorage.getItem('data')) || [];

function calculationProduct() {
  let searchItem = storeProduct
    .map((item) => item.item)
    .reduce((itemOne, itemTwo) => itemOne + itemTwo, 0);
  cartAmountEl.innerHTML = searchItem;
}

calculationProduct();
