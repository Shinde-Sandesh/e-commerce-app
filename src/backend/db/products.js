import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Adidas Shoes",
    rating: 5,
    price: 5000,
    categoryName: "men",
    image : "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/10533a775dfe4c60852caf8d011b6270_9366/solderrun-m.jpg"
  },
  {
    _id: uuid(),
    title: "Mountain Bike Rockrider ST50 - Black",
    rating: 1,
    price: 3000,
    categoryName: "women",
    image : "https://contents.mediadecathlon.com/p1836363/09444f07e84fb37d0fc52d417e084de8/p1836363.jpg?format=auto&quality=70&f=650x0"
  },
  {
    _id: uuid(),
    title: "Cross Trainer EL520B (2022)",
    rating: 2,
    price: 1000,
    categoryName: "women",
    image : "https://contents.mediadecathlon.com/p2340283/e76d77a4150ad426e03e61f25581371d/p2340283.jpg?format=auto&quality=70&f=650x0"
  },
];
