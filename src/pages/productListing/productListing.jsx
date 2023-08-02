import React, { useEffect, useState } from 'react';
import { Navigation } from '../../components/Navigation';
import ProductCard from '../../components/ProductCard';
import FilterComponent from '../../components/FilterComponent';
import './productListing.css';

export default function ProductListingPage() {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categoryData, setCategoryData] = useState([])
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

  console.log("check products",filteredProducts)

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

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  return (
    <>
      <Navigation />
      <div className="main-body-sec">
        <FilterComponent rating={rating} handleRating={handleRating} categoryData={categoryData} handleCategory={handleCategory} handlePriceSorting={handlePriceSorting} />
        <div className="right-body-section">
          <p className="showing-heading"><b>Showing all products </b>({filteredProducts.length})</p>
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