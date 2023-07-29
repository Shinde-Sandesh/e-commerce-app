import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CartContext } from '../context/CartContext';

function ProductCard({ _id, image, title, price, rating }) {
  const [addToCart, setAddToCart] = useState(true);
  const [addToWishlist, setAddToWishlist] = useState(true)
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishlistUpdate } = useContext(CartContext)

  function CartUpdate() {
    setAddToCart(!addToCart);
    handleCartUpdate({ _id, image, title, price, rating });
  }

  function WishlistUpdate() {
    setAddToWishlist(!addToWishlist);
    handleWishlistUpdate({ _id, image, title, price, rating });
  }

  return (
    <div>
      <div className="card-container" key={_id}>
        <h4 className="card-with-badge">
          <div onClick={WishlistUpdate}>{addToWishlist ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}</div>
        </h4>
        <Link to={`/product/${_id}`} >
          <img className="card-image" src={image} alt={title} />
        </Link>
        <p className="card-heading">{title}</p>
        <p className="price">{price}</p>
        <p className="price">{rating}</p>
        <button className="add-cart-btn" onClick={CartUpdate}>
          {addToCart ? 'Add to Cart' : 'Added to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
