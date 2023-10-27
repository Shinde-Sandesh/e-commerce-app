import React from 'react';

export default function FilterComponent({ rating, handleRating, categoryData, handleCategory, handlePriceSorting }) {
  return <div className="filter-sidebar">
    <div className="filter-sidebar-heading">
      <p><b>Filters</b></p>
      <p>Clear</p>
    </div>
    <div className="filter-cat">
      <h4 className="price-heading">Rating</h4>
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
        onChange={handleRating} />{rating}
    </div>
    <div className="filter-cat">
      <h4  className="price-heading">Category</h4>
      <div className="filter-item">
        <ul className="filter-item">
          {categoryData.map((category) => <li style={{ listStyle: "none", display: 'contents' }} key={category._id}>
            <input type="checkbox" value={category.categoryName} name="category" onClick={handleCategory} />
            <label className='checkboxLabel'>{category.categoryName}</label>
          </li>
          )}
        </ul>
      </div>
    </div>
    <div className="filter-cat">
      <h4  className="price-heading">Price</h4>
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
}