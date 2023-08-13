import React, { useState, useEffect } from 'react';
import { Navigation } from '../../components/Navbar/Navigation';
import ProductCard from '../../components/ProductCard';
import './SearchProducts.css'
// import FilterComponent from '../../components/FilterComponent';

function SearchProducts() {
  const [searchItem, setSearchItem] = useState('');
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProductData(data.products);
  };

  function handleInputText(event) {
    setSearchItem(event.target.value);
  }

  useEffect(() => {
    fetchData()
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilterData(filteredProducts);
  }, [searchItem, productData]);

  return (
    <>
      <Navigation />
      <div className="main-body-sec">
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
