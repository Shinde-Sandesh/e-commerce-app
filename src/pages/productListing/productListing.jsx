import './productListing.css';
import { Navigation } from '../../components/Navigation'
import img1 from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import img2 from '../../assets/backpack.jpg';
import img3 from '../../assets/cycles.png';

import { useState, useEffect } from 'react';

const products = [
  {
    _id: 1,
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "men",
    image : img1
  },
  {
    _id: 2,
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "women",
    image : img2
  },
  {
    _id: 3,
    title: "3",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    image : img2
  },
  {
    _id: 4,
    title: "4",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    image : img2
  },
  {
    _id: 5,
    title: "5",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "women",
    image : img1
  },
  {
    _id: 6,
    title: "6",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "men",
    image : img1
  },
  {
    _id: 7,
    title: "7",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    image : img3
  },
  {
    _id: 8,
    title: "8",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "kids",
    image : img2
  },
];

function ProductCards() {
  const[addToCart, setAddToCart] = useState(true);
  return (
    <div className="product-flex">
    {
      products.map((product) => ( 
        <>
          <div className="card-container">
            <h4 className="card-with-badge"><i className="fas fa-heart"></i></h4>
            <img className="card-image" src={product.image} alt="Adidas Shoe" />
            <div className="description">
              <p className="card-heading">{product.author}</p>
              <p className="price">{product.price}</p>
              <button className="add-cart-btn" onClick={() => setAddToCart(!addToCart)}>{addToCart ? "Add to Cart" : "Added to Cart"}</button>
            </div>
            </div>
          </>
        )
      )}
    </div>
  )
}

export default function ProductListingPage (){

  const[productRange, setProductRange] = useState(0)
  const [category, setCategory] = useState("men");

return (
  <>
  <Navigation />
  <div className="main-body-sec">
    <div className="filter-sidebar">
      <div className="filter-sidebar-heading">
        <p><b>Filters</b></p>
        <p>clear</p>
      </div>
      <div className="filter-price">
        <h2 className="price-heading">Price</h2>
        <div className="range">
          <span>1000</span>
          <span>2500</span>
          <span>5000</span>
        </div>
        <input type="range" min="0" max="5000" value={productRange} className="price-range" onChange={(event) => setProductRange(event.target.value)} />{productRange}
      </div>
      <div className="filter-cat">
        <p><b>Category</b></p>
        <div className="filter-item">
          <input type="radio" value="men" name="category" />
          <label name="men">Men</label>
        </div>
        <div className="filter-item">
          <input type="radio" value="women" name="category" />
          <label for="women">Women</label>
        </div>
        <div className="filter-item">
          <input type="radio" value="kids" name="category" />
          <label for="women">Kids</label>
        </div>
      </div>
      <div className="filter-cat">
        <span><b>Rating</b></span>
        <div className="filter-item">
          <input type="checkbox" />
          <label>5stars</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" />
          <label>4stars and above</label>
        </div>
        <div className="filter-item">
          <input type="checkbox" />
          <label>3stars and above</label>
        </div>
      </div>
      <div className="filter-cat">
        <span><b>Sort by</b></span>
        <div className="filter-item">
          <input type="radio" />
          Price - Low to High
        </div>
        <div className="filter-item">
          <input type="radio" />
          Price - High to Low
        </div>
      </div>
      </div>
      <div className="right-body-section">
        <h1 className="showing-heading">Showing all products</h1>
            <ProductCards />
        {/* <div className="product-flex">
          <div className="card-container">
          </div>
        </div> */}
      </div>
    </div>
  </>
  )
}