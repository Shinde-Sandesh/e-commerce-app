import React, { useState, useEffect } from 'react';
import { Navigation } from '../../components/Navigation';

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
    fetchData();
  }, []);

  useEffect(() => {
    // Filter the productData based on the searchItem
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
      <div>
        <input type="text" placeholder="Search" onChange={handleInputText} />
        <ul>
          {filterData.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchProducts;
