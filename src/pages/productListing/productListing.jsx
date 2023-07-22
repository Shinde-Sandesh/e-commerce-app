import React, { useEffect, useState } from 'react';

import { Navigation } from '../../components/Navigation';
import ProductCard from '../../components/ProductCard';
import FilterComponent from '../../components/FilterComponent';
import './productListing.css';

export default function ProductListingPage() {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    console.log(data);
    setProductData(data.products);
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Navigation />
      <div className="main-body-sec">
        <FilterComponent />
        <div className="right-body-section">
          <h1 className="showing-heading">Showing all products</h1>
          <div className="product-flex">
            <>
              {productData.length > 0 && productData.map((item) =>
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