const shopEl = document.getElementById('shop'),
  cartAmountEl = document.getElementById('cartAmount');

const shopData = [
  {
    id: 'one',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-1.jpg',
  },
  {
    id: 'two',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-2.jpg',
  },
  {
    id: 'three',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-3.jpg',
  },
  {
    id: 'four',
    name: 'Mens Suit',
    price: 300,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-4.jpg',
  },
  {
    id: 'five',
    name: 'Mens Tie',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-5.png',
  },
  {
    id: 'six',
    name: 'Casual shoes',
    price: 200,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-6.png',
  },
  {
    id: 'seven',
    name: 'black suit',
    price: 450,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-7.png',
  },
  {
    id: 'eight',
    name: 'polo shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-8.png',
  },
  {
    id: 'nine',
    name: 'denim shirt',
    price: 85,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-9.png',
  },
  {
    id: 'ten',
    name: 'denim pants',
    price: 120,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-10.png',
  },
  {
    id: 'eleven',
    name: 'basic cap',
    price: 35,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-11.png',
  },
  {
    id: 'twelve',
    name: 'leather boots',
    price: 350,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-12.png',
  },
];

let basket = JSON.parse(localStorage.getItem('data')) || [];

function showProduct() {
  shopEl.innerHTML = shopData
    .map((item) => {
      let { id, name, price, desc, img } = item;
      let searchLocalStorage = basket.find((item) => item.id === id) || [];
      return `
    <div id="product-${id}" class="item">
        <img width="326" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc} ${id}</p>

          <div class="prince-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="increment(${id})" class="fa-solid fa-square-plus"></i>
              <div id="${id}" class="quantity">${
        searchLocalStorage.item === undefined ? 0 : searchLocalStorage.item
      }</div>
              <i onclick="decrement(${id})" class="fa-solid fa-square-minus"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join('');
}

showProduct();

function increment(id) {
  let selectItem = id;
  let searchItem = basket.find((item) => item.id === selectItem.id);

  if (searchItem === undefined) {
    basket.push({
      id: selectItem.id,
      item: 1,
    });
  } else {
    searchItem.item += 1;
  }
  update(selectItem.id);
  localStorage.setItem('data', JSON.stringify(basket));
}

function decrement(id) {
  let selectItem = id;
  let searchItem = basket.find((item) => item.id === selectItem.id);

  if (searchItem === undefined) {
    return;
  } else if (searchItem.item === 0) {
    return;
  } else {
    searchItem.item -= 1;
  }
  update(selectItem.id);
  basket = basket.filter((item) => item.item !== 0);
  localStorage.setItem('data', JSON.stringify(basket));
}

function update(id) {
  let searchItem = basket.find((item) => item.id === id);
  document.getElementById(id).innerHTML = searchItem.item;
  calculation();
}

function calculation() {
  let searchItem = basket
    .map((item) => item.item)
    .reduce((itemOne, itemTwo) => itemOne + itemTwo, 0);
  cartAmountEl.innerHTML = searchItem;
}

calculation();
