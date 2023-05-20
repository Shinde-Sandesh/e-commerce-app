import './productListing.css';
import { Navigation } from '../../components/Navigation'
import img1 from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import img2 from '../../assets/backpack.jpg';
import img3 from '../../assets/cycles.png';

import { useState } from 'react';

const products = [
  {
    _id: 1,
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    image : img1
  },
  {
    _id: 2,
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
    image : img2
  },
  {
    _id: 3,
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    image : img2
  },
  {
    _id: 4,
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    image : img2
  },
  {
    _id: 5,
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    image : img1
  },
  {
    _id: 6,
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    image : img1
  },
  {
    _id: 7,
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    image : img3
  },
  {
    _id: 8,
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
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
return (
  <>
  <Navigation />
  <div className="main-body-sec">
    <div className="filter-sidebar">
      <div className="filter-sidebar-heading">
        <span><b>Filters</b></span>
        <span>clear</span>
      </div>
      <div className="filter-price">
        <h2 className="price-heading">Price</h2>
        <div className="range">
          <span>1000</span>
          <span>2500</span>
          <span>5000</span>
        </div>
        <input type="range" min="1" max="100" value="50" className="price-range" />
      </div>
      <div className="filter-cat">
        <span><b>Category</b></span>
        <div className="filter-item">
          <input type="checkbox" />
            Men
        </div>
        <div className="filter-item">
          <input type="checkbox" />
            Women
        </div>
      </div>
      <div className="filter-cat">
        <span><b>Rating</b></span>
        <div className="filter-item">
          <input type="checkbox" />
            5stars
        </div>
        <div className="filter-item">
          <input type="checkbox" />
          4stars & above
        </div>
        <div className="filter-item">
          <input type="checkbox" />
          3stars & above
        </div>
        <div className="filter-item">
          <input type="checkbox" />
          2stars & above
        </div>
        <div className="filter-item">
          <input type="checkbox" />
          1star & above
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