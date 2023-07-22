import React, { useState, useEffect } from 'react'

function FilterComponent({ onChange }) {

  const [productRange, setProductRange] = useState(3);
  const [categoryData, setCategoryData] = useState([])
  const [categories, setCategories] = useState()

  const fetchCategories = async () => {
    const response = await fetch("/api/categories")
    const data = await response.json()
    console.log("category data: ", data)
    setCategoryData(data.categories)
  }

  // const handleCategory = (event) => {
  //   const selectedCategory = event.target.value;
  //   let updatedCategories = [...categories];

  //   if (updatedCategories.includes(selectedCategory)) {
  //     updatedCategories = updatedCategories.filter((category) => category !== selectedCategory);
  //   } else {
  //     updatedCategories.push(selectedCategory);
  //   }

  //   setCategories(updatedCategories);
  //   onChange({ productRange, categories: updatedCategories });
  // };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
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
        <input type="range" min="0" max="5" value={productRange} className="price-range" onChange={(event) => setProductRange(event.target.value)} />{productRange}
      </div>
      <div className="filter-cat">
        <p><b>Category</b></p>
        <div className="filter-item">
          <ul className="filter-item">
            {
              categoryData.map((category) =>
                <li style={{ listStyle: "none" }} key={category._id}>
                  <input type="checkbox" value={category.categoryName} name="category" />
                  <label>{category.categoryName}</label>
                </li>
              )}
          </ul>
        </div>
      </div>
      <div className="filter-cat">
        <span><b>Price</b></span>
        <div className="filter-item">
          <input type="radio" value="lowToHigh" id="lowToHigh" name='priceRange' />
          <label for="lowToHigh">Price - Low to High</label>
        </div>
        <div className="filter-item">
          <input type="radio" id="highToLow" value="highToLow" name='priceRange' />
          <label for="highToLow">Price - High to Low</label>
        </div>
      </div>
    </div>
  )
}

export default FilterComponent