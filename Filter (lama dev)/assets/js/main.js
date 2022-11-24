const data = [
  {
    id: 1,
    name: "Men's Pro Diver",
    img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
    price: 34,
    categories: 'Dress',
  },
  {
    id: 2,
    name: "Men's Pro Diver 2",
    img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
    price: 74,
    categories: 'Dress',
  },
  {
    id: 3,
    name: "Timex Men's Expedition Scout ",
    img: 'https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg',
    price: 40,
    categories: 'Sport',
  },
  {
    id: 4,
    name: ' Heritage',
    img: 'https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg',
    price: 200,
    categories: 'Luxury',
  },
  {
    id: 5,
    name: 'Casio Classic Resin Strap ',
    img: 'https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg',
    price: 16,
    categories: 'Sport',
  },
  {
    id: 6,
    name: 'Garmin Smartwatch ',
    img: 'https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg',
    price: 23,
    categories: 'Casual',
  },
  {
    id: 7,
    name: 'SAMSUNG Galaxy Watch 5 Pro',
    img: 'https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_UL320_.jpg',
    price: 78,
    categories: 'Casual',
  },
  {
    id: 8,
    name: 'Garmin Forerunner 55',
    img: 'https://m.media-amazon.com/images/I/51rkKGpa0WS._AC_UL320_.jpg',
    price: 44,
    categories: 'Sport',
  },
  {
    id: 9,
    name: 'Casio Unisex F-108WH-1ACF Big',
    img: 'https://m.media-amazon.com/images/I/510T962DtNL._AC_UL320_.jpg',
    price: 55,
    categories: 'Luxury',
  },
  {
    id: 10,
    name: 'Charge 5 Advanced Fitness',
    img: 'https://m.media-amazon.com/images/I/41MOVNsGMbL._AC_UL320_.jpg',
    price: 99,
    categories: 'Luxury',
  },
  {
    id: 11,
    name: 'Anne Klein Women',
    img: 'https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL320_.jpg',
    price: 44,
    categories: 'Dress',
  },
];

const searchInput = document.querySelector('.search'),
  categoriesContainer = document.querySelector('.categories'),
  priceRange = document.querySelector('.price-range'),
  priceValue = document.querySelector('.price-value'),
  productContainer = document.querySelector('.products');

const displayProduct = (filterProduct) => {
  productContainer.innerHTML = filterProduct
    .map(
      (product) => `
  <div class="product">
    <img
      src=${product.img}
      alt=""
    />
    <span class="name">${product.name}</span>
    <span class="text">${product.price}</span>
  </div>
  `
    )
    .join('');
};

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProduct(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProduct(data);
  }
});

const setCategories = () => {
  const allCategories = data.map((item) => item.categories);
  const addCategories = [
    'All',
    ...allCategories.filter(
      (item, index) => allCategories.indexOf(item) === index
    ),
  ];

  categoriesContainer.innerHTML = addCategories
    .map(
      (category) => `
  <div class="category">${category}</div>

  `
    )
    .join('');

  categoriesContainer.addEventListener('click', (e) => {
    const selectedCategory = e.target.textContent;

    selectedCategory === 'All'
      ? displayProduct(data)
      : displayProduct(
          data.filter((item) => item.categories === selectedCategory)
        );
  });
};

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const maxPrice = Math.max(...priceList);
  const minPrice = Math.min(...priceList);

  priceRange.max = maxPrice;
  priceRange.min = minPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = '$' + maxPrice;

  priceRange.addEventListener('input', (e) => {
    priceValue.textContent = '$' + e.target.value;
    displayProduct(data.filter((item) => item.price <= e.target.value));
  });
};

setPrice();
setCategories();
displayProduct(data);
