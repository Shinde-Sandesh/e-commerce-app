import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navigation } from '../../components/Navigation'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Wishlist.css'

export default function Wishlist() {

  const { wishlist, setWishlist, handleCartUpdate } = useContext(CartContext);

  const removeFromWishlist = (_id) => {
    setWishlist(wishlist.filter(item => item._id !== _id));
  }

  // Function to move an item to the wishlist
  const moveToCart = (_id) => {
    const itemToMove = wishlist.find((item) => item._id === _id);
    if (itemToMove) {
      handleCartUpdate(itemToMove);
      removeFromWishlist(_id);
    }
  }

  return (
    <>
      <Navigation />
      {wishlist.length === 0 &&
        <>
          <div>
            <h1 className="wishlist-heading center">My Wishlist ({wishlist.length}) </h1>
          </div>
          <div>
            <h2 className="wishlist-heading center">Your wishlist is empty</h2>
          </div>
        </>
      }
      <div className="wishist-cart flex flex-wrap">
        {
          wishlist.map((data) => {
            const { _id, title, price, image } = data

            return (
              <div className="card-container" key={_id}>
                <h4 className="card-with-badge"><FavoriteIcon onClick={() => removeFromWishlist(_id)} /></h4>
                <img className="image-card" src={image} alt={title} />
                <div className="description">
                  <p className="card-heading">{title}</p>
                  <p className="price">Price: ₹{price}</p>
                  <button className="add-cart-btn" onClick={() => moveToCart(_id)}>
                    Move to Cart
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}