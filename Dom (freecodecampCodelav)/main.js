const shopEl = document.getElementById('shop');

let shopItemData = [
  {
    id: '1',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-1.jpg',
  },
  {
    id: '2',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-2.jpg',
  },
  {
    id: '3',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-3.jpg',
  },
  {
    id: '4',
    name: 'Mens Suit',
    price: 300,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-4.jpg',
  },
  {
    id: '5',
    name: 'Mens Tie',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-5.png',
  },
  {
    id: '6',
    name: 'Casual shoes',
    price: 200,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-6.png',
  },
  {
    id: '7',
    name: 'black suit',
    price: 450,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-7.png',
  },
  {
    id: '8',
    name: 'polo shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-8.png',
  },
  {
    id: '9',
    name: 'denim shirt',
    price: 85,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-9.png',
  },
  {
    id: '10',
    name: 'denim pants',
    price: 120,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-10.png',
  },
  {
    id: '11',
    name: 'basic cap',
    price: 35,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-11.png',
  },
  {
    id: '12',
    name: 'leather boots',
    price: 350,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: '../Img/img-12.png',
  },
];

function generateShop() {
  return (shopEl.innerHTML = shopItemData
    .map((item) => {
      let { id, name, price, desc, img } = item;
      return `
    <div id="product-id-${id} "class="item">
        <img width="326" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc} ${id}</p>
          <div class="prince-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="incrementProduct()"class="fa-solid fa-square-plus"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="decrementProduct()"class="fa-solid fa-square-minus"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(''));
}

generateShop();

function incrementProduct() {}

function decrementProduct() {}

function updateProduct() {}
