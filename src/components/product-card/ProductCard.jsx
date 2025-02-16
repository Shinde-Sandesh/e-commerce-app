import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';
import { toast } from "react-toastify";

function ProductCard({ _id, image, title, price, rating }) {
  const [addToCart, setAddToCart] = useState(true);
  const [addToWishlist, setAddToWishlist] = useState(true);
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishlistUpdate } = useContext(CartContext);
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem('loginItems');

  function CartUpdate() {
    if (!loggedInUser) {
      toast.warning("Please login to add items to your cart.");
      navigate('/login');
      return;
    }
    setAddToCart(!addToCart);
    handleCartUpdate({ _id, image, title, price, rating });
    toast.success("Added to Cart!");
  }

  function WishlistUpdate() {
    if (!loggedInUser) {
      toast.warning("Please login to add items to your wishlist.");
      navigate('/login');
      return;
    }
    setAddToWishlist(!addToWishlist);
    handleWishlistUpdate({ _id, image, title, price, rating });
    toast.success("Added to Wishlist!");
  }

  return (
    <div>
      <div className="card-container" key={_id}>
        <h4 className="card-with-badge">
          <div onClick={WishlistUpdate}>
            {addToWishlist ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
          </div>
        </h4>
        <Link to={`/products/${_id}`} >
          <div>
            <img className="card-image" src={image} alt={title} />
          </div>
        </Link>
        <div>
          <span className="card-heading">{title}</span>
          <span className="price">Price: ₹{price}</span>
          <span className="price">Rating: {rating}</span>
        </div>
        <button className="add-cart-btn" onClick={CartUpdate}>
          {addToCart ? 'Add to Cart' : 'Added to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
