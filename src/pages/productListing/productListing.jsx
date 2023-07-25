import React, { useEffect, useState } from 'react';

import { Navigation } from '../../components/Navigation';
import ProductCard from '../../components/ProductCard';
// import FilterComponent from '../../components/FilterComponent';
import './productListing.css';

export default function ProductListingPage() {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortByPrice, setSortByPrice] = useState([])
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState(false)

  const fetchData = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProductData(data.products);
    setFilteredProducts(data.products)
  };

  const fetchCategories = async () => {
    const response = await fetch("/api/categories")
    const data = await response.json()
    setCategoryData(data.categories)
  }

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const handleCategory = (event) => {
    const category = event.target.value;
    setCategory(category);
    filterProducts(category, rating, sortByPrice);
  };

  const handleRating = (event) => {
    const rating = event.target.value
    setRating(parseInt(rating))
    filterProducts(category, rating, sortByPrice)
  }

  const handlePriceSorting = (event) => {
    const sortByPrice = event.target.value
    setSortByPrice(sortByPrice)
    filterProducts(category, rating, sortByPrice)
  }

  const filterProducts = (category, rating, sortByPrice) => {
    let filteredData = productData;

    if (category !== "") {
      filteredData = filteredData.filter((product) => product.categoryName === category);
    }
    
    if (rating > 0) {
      filteredData = filteredData.filter(
        (product) => product.rating >= Number(rating)
      );
    }

    if (sortByPrice === "lowToHigh") {
      filteredData = filteredData.sort((a, b) => a.price - b.price)
    }

    if (sortByPrice === "highToLow") {
      filteredData = filteredData.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(filteredData);
  };

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
            <h2 className="price-heading">Rating</h2>
            <div className="range">
              <span>0</span>
              <span>5</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              value={rating}
              className="price-range"
              onChange={handleRating}
            />{rating}
          </div>
          <div className="filter-cat">
            <p><b>Category</b></p>
            <div className="filter-item">
              <ul className="filter-item">
                {
                  categoryData.map((category) =>
                    <li style={{ listStyle: "none" }} key={category._id}>
                      <input type="checkbox" value={category.categoryName} name="category" onClick={handleCategory} />
                      <label>{category.categoryName}</label>
                    </li>
                  )}
              </ul>
            </div>
          </div>
          <div className="filter-cat">
            <span><b>Price</b></span>
            <div className="filter-item">
              <input type="radio" value="lowToHigh" id="lowToHigh" name='priceRange' onChange={handlePriceSorting} />
              <label for="lowToHigh">Price - Low to High</label>
            </div>
            <div className="filter-item">
              <input type="radio" id="highToLow" value="highToLow" name='priceRange' onChange={handlePriceSorting} />
              <label for="highToLow">Price - High to Low</label>
            </div>
          </div>
        </div>
        <div className="right-body-section">
          <h1 className="showing-heading">Showing all products</h1>
          <div className="product-flex">
            <>
              {filteredProducts.length > 0 && filteredProducts.map((item) =>
                <ProductCard {...item} />
              )
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}