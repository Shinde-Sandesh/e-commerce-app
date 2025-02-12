import React, { useEffect, useState, useContext } from 'react';
import { SearchContext, useSearch } from '../../context/SearchContext';
import ProductCard from '../../components/ProductCard';
import FilterComponent from '../../components/FilterComponent';
import './productListing.css';

export default function ProductListingPage() {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState([]);
  const { searchQuery } = useContext(SearchContext);

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [category, rating, sortByPrice, searchQuery]);

  const fetchData = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProductData(data.products);
    setFilteredProducts(data.products);
  };

  const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategoryData(data.categories);
  };

  const handleCategory = (event) => {
    const { value, checked } = event.target;
    setCategory((prev) =>
      checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  const handleRating = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handlePriceSorting = (event) => {
    setSortByPrice(event.target.value);
  };

  const clearFilters = () => {
    setCategory([]);
    setRating(0);
    setSortByPrice("");
    setFilteredProducts(productData);
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
    document.querySelectorAll('input[type=radio]').forEach(el => el.checked = false);
  };

  const filterProducts = () => {
    let filteredData = [...productData];

    if (searchQuery) {
      console.log("CHECKQUERY", searchQuery);
      filteredData = filteredData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category.length > 0) {
      filteredData = filteredData.filter((product) => category.includes(product.categoryName));
    }

    if (rating > 0) {
      filteredData = filteredData.filter((product) => product.rating >= rating);
    }

    if (sortByPrice === "lowToHigh") {
      filteredData.sort((a, b) => a.price - b.price);
    }

    if (sortByPrice === "highToLow") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredData);
  };

  return (
    <div className="main-body-sec">
      <FilterComponent
        rating={rating}
        handleRating={handleRating}
        categoryData={categoryData}
        handleCategory={handleCategory}
        handlePriceSorting={handlePriceSorting}
        clearFilters={clearFilters}
      />
      <div className="right-body-section">
        <p className="showing-heading"><b>Showing all products </b>({filteredProducts.length})</p>
        <div className="product-flex">
          {filteredProducts.length > 0 && filteredProducts.map((item) => <ProductCard key={item._id} {...item} />)}
        </div>
      </div>
    </div>
  );
}
