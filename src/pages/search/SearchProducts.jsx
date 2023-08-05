import React, { useState, useEffect } from 'react';
import { Navigation } from '../../components/Navbar/Navigation';
import FilterComponent from '../../components/FilterComponent';
import ProductCard from '../../components/ProductCard';
import './SearchProducts.css'

function SearchProducts() {
  const [searchItem, setSearchItem] = useState('');
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [categoryData, setCategoryData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortByPrice, setSortByPrice] = useState([])
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState(false)

  const fetchCategories = async () => {
    const response = await fetch("/api/categories")
    const data = await response.json()
    setCategoryData(data.categories)
  }

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

    setFilterData(filteredData);
  };

  const fetchData = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProductData(data.products);
  };

  function handleInputText(event) {
    setSearchItem(event.target.value);
  }

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilterData(filteredProducts);
  }, [searchItem, productData]);

  console.log(searchItem);
  console.log('product', productData);

  return (
    <>
      <Navigation />
      <div className="main-body-sec">
      <FilterComponent rating={rating} handleRating={handleRating} categoryData={categoryData} handleCategory={handleCategory} handlePriceSorting={handlePriceSorting} />
      <div className="right-body-section">
        <h1 className="showing-heading">Showing all products</h1>
            <input type="text" placeholder="Search" onChange={handleInputText} />
        <div className="product-flex">
          <ul>
            {filterData.map((product) => (
              <>
                <ProductCard {...product} />
              </>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default SearchProducts;
