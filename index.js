const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

//function to Get the products sorted by popularity
function sortProductByRatings(prod1, prod2) {
  return prod2.rating - prod1.rating;
}
//EndPoint 1:Get the products sorted by popularity
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductByRatings);
  res.json({ products: sortedProducts });
});
//products/sort/popularity

//function to Get the products sorted by “high-to-low” price
function sortProductPrice(prod1, prod2) {
  return prod2.price - prod1.price;
}

//Endpoint 2: Get the products sorted by “high-to-low” price
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductPrice);
  res.json({ products: sortedProducts });
});
//products/sort/price-high-to-low

//function to Get the products sorted by “low-to-high” price
function sortProductsFromLowToHigh(prod1, prod2) {
  return prod1.price - prod2.price;
}
//Endpoint 3: Get the products sorted by “low-to-high” price
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsFromLowToHigh);
  res.json({ products: sortedProducts });
});
//products/sort/price-low-to-high

//function to Filter the products based on the “RAM” option.
function filterByRam(prod1, ram) {
  return prod1.ram === ram;
}
//Endpoint 4: Filter the products based on the “RAM” option
app.get('/products/filter/ram', (req, res) => {
  let ram = parseFloat(req.query.ram);
  let filteredProducts = products.filter((prod1) => filterByRam(prod1, ram));
  res.json({ products: filteredProducts });
});
//products/filter/ram?ram=8

//function to Filter the products based on the "ROM" option.
function filterByRom(prod1, rom) {
  return prod1.rom === rom;
}
//Endpoint 5: Filter the products based on the "ROM" option
app.get('/products/filter/rom', (req, res) => {
  let rom = parseFloat(req.query.rom);
  let filteredProducts = products.filter((prod1) => filterByRom(prod1, rom));
  res.json({ products: filteredProducts });
});
//products/filter/rom?rom=64

//function to Filter the products based on the “Brand” option.
function filterByBrand(prod1, brand) {
  return prod1.brand.toLowerCase() === brand.toLowerCase();
}
//Endpoint 6: Filter the products based on the “Brand” option
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  let checkBrand = products.filter((prod1) => filterByBrand(prod1, brand));
  res.json({ products: checkBrand });
});
//products/filter/brand?brand=apple

//function to Filter the products based on the “OS” option
function filterByOs(prod1, os) {
  return prod1.os.toLowerCase() === os.toLowerCase();
}
//Endpoint 7: Filter the products based on the “OS” option
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  let checkOs = products.filter((prod1) => filterByOs(prod1, os));
  res.json({ products: checkOs });
});
//products/filter/os?os=Android
function filterByPrice(prod1, price) {
  return prod1.price <= price;
}
//Endpoint 8: Filter the products based on the “Price” option
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let checkPrice = products.filter((prod1) => filterByPrice(prod1, price));
  res.json({ products: checkPrice });
});
//products/filter/price?price=30000

//Endpoint 9: Send original array of products
app.get('/products', (req, res) => {
  res.json({ products: products });
});
//products

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
