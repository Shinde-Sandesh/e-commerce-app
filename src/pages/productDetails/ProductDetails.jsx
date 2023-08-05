import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Navigation } from '../../components/Navbar/Navigation';
import { CartContext } from '../../context/CartContext';
import './ProductDetails.css'

function ProductDetails() {
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [addToWishlist, setAddToWishlist] = useState(true)
  const [addToCart, setAddToCart] = useState(true);
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishlistUpdate } = useContext(CartContext)

  const fetchData = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProductData(data.products);
  };

  const getProductData = (data, productId) => {
    return data.find((product) => product._id === productId);
  };

  const product = getProductData(productData, productId);

  function WishlistUpdate() {
    setAddToWishlist(!addToWishlist);
    handleWishlistUpdate(product);
  }

  function CartUpdate() {
    setAddToCart(!addToCart);
    handleCartUpdate(product);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className='card-details-container'>
        {product ? (
          <>
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <Link to='/products' className="back-arrow">
                  <ArrowBackIcon style={{ color: "black" }} /></Link>
              </div>
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">Product description goes here.</p>
                <span className="product-price">${product.price}</span>
                <div className="product-buttons">
                  <button className="add-to-cart" onClick={CartUpdate}>{!addToCart ? "Added to Cart" : "Add to Cart" }</button>
                  <button className="add-to-wishlist" onClick={WishlistUpdate}>{!addToWishlist ? "Added to Wishlist" : "Add to Wishlist"}</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;