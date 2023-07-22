import './Wishlist.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navigation } from '../../components/Navigation'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Wishlist() {

  const { cart, setCart, wishlist, setWishlist, handleWishlistUpdate } = useContext(CartContext);
  const [addToCart, setAddToCart] = useState(true);
  const { handleCartUpdate } = useContext(CartContext);

  // const removeFromWishlist = (_id) => {
  //   setWishlist(wishlist.filter(item => item._id !== _id));
  //   // const updatedQuantities = { ...quantities };
  //   // delete updatedQuantities[_id];
  //   // setQuantities(updatedQuantities);
  // }

  // // Function to move an item to the wishlist
  // const moveToCart = (_id) => {
  //   const itemToMove = wishlist.find((item) => item._id === _id);
  //   if (itemToMove) {
  //     handleCartUpdate(itemToMove);
  //     removeFromWishlist(_id);
  //   }
  // }

  // console.log("wishlist data", wishlist)
  // console.log({ _id, image, title, price })

  return (
    <>
      <Navigation />
      
        {wishlist.length === 0 &&
          <>
            <div>
              <h1 className="wishlist-heading center">My Wishlist ({wishlist.length}) </h1>
            </div>
            <div>
              <h2 className="wishlist-heading center">Empty Wishlist</h2>
            </div>
          </>
        }
      <div className="wishist-cart flex flex-wrap">
        {
          wishlist.map((data) => {
            const { _id, title, price, image } = data;
            return (

              <div className="card-container" key={_id}>
                <h4 className="card-with-badge"><FavoriteIcon /></h4>
                <img className="image-card" src={image} alt={title} />
                <div className="description">
                  <p className="card-heading">{title}</p>
                  <p className="price">Price : ₹ {price}</p>
                  <button className="add-cart-btn">
                    {addToCart ? 'Move to Cart' : 'Moved to Cart'}
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