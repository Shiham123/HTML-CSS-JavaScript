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
              <i class="fa-sharp fa-solid fa-circle-xmark"></i>
            </div>
            <div class="cart-buttons"></div>
            <h3></h3>
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
