import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
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
      {/* <Navigation /> */}
      <div className="main-body-sec">
        <div className="body-section">
          <div>
            <h3>Showing all products ({filterData.length})</h3>
            <input type="text" placeholder="Search" className='searchText' onChange={handleInputText} />
          </div>
          <div className="search-flex">
            {/* <ul className='arrangeCards'> */}
            <div className='cardsPosition'>
              {filterData.map((product) => (
                <ProductCard {...product} />
              ))}
            </div>
            {/* </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchProducts;
