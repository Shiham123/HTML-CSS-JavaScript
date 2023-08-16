const products = [
  { id: 1, name: 'phone one', price: 1000 },
  { id: 2, name: 'phone two', price: 2000 },
  { id: 3, name: 'Phone three', price: 3000 },
  { id: 4, name: 'laptop', price: 4000 },
  { id: 5, name: 'desktop', price: 5000 },
  { id: 6, name: 'tab', price: 6000 },
  { id: 7, name: 'device', price: 7000 },
];

function findPhone(products, search) {
  let find = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      find.push(product);
    }
  }
  return find;
}

const returnFun = findPhone(products, 'device');
console.log(returnFun);
