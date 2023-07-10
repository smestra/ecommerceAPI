import { products } from "./src/types/products.types";

const productsDB: products[] = [
  {
    id: "1",
    productName: "Led Zeppelin t-shirt",
    itemNumber: "0987654321",
    size: "large",
    listingCategory: "Apparel",
  },

  {
    id: "2",
    productName: "Vans sneakers",
    itemNumber: "0987654322",
    size: "9.5",
    listingCategory: "Shoes",
  },

  {
    id: "3",
    productName: "Louisville Slugger Bat",
    itemNumber: "0987654323",
    size: "33 in",
    listingCategory: "Sport implements",
  },

  {
    id: "4",
    productName: "Rawlings glove",
    itemNumber: "0987654324",
    size: '12.25"',
    listingCategory: "Sport implements",
  },

  { id: "5",
  productName: "Laptop case",
  itemNumber: "0987654325",
  size: "13-14 Inches",
  listingCategory: "computer accessories",
},
];


export { productsDB, products};