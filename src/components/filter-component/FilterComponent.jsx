import React from 'react';
import './FilterComponent.css';

export default function FilterComponent({ rating, handleRating, categoryData, handleCategory, handlePriceSorting, clearFilters }) {
  return (
    <div className="filter-sidebar">
      <div className="filter-sidebar-heading">
        <p><b>Filters</b></p>
        <p onClick={clearFilters} style={{ cursor: "pointer", color: "blue" }}>Clear</p>
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
          onChange={handleRating}
        />
        <span style={{ padding: '5px', fontSize: 'larger' }}>{rating}</span>
      </div>
      <div className="filter-cat">
        <h4 className="price-heading">Category</h4>
        {categoryData.map((category) => (
          <div className="filter-item">
            <input type="checkbox" value={category.categoryName} name="category" onChange={handleCategory} />
            <label className='checkboxLabel'>{category.categoryName}</label>
          </div>
        ))}
      </div>
      <div className="filter-cat">
        <h4 className="price-heading">Price</h4>
        <div className="filter-item">
          <input type="radio" value="lowToHigh" id="lowToHigh" name='priceRange' onChange={handlePriceSorting} />
          <label htmlFor="lowToHigh">Price - Low to High</label>
        </div>
        <div className="filter-item">
          <input type="radio" id="highToLow" value="highToLow" name='priceRange' onChange={handlePriceSorting} />
          <label htmlFor="highToLow">Price - High to Low</label>
        </div>
      </div>
    </div>
  );
}
