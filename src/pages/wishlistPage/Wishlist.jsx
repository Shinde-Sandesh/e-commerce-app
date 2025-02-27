import axios from 'axios';
import { toast } from "react-toastify";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Wishlist.css'

export default function Wishlist() {

  const { wishlist, setWishlist, handleCartUpdate } = useContext(CartContext);
  const { token } = useAuth();
  const removeFromWishlist = (_id) => {
    setWishlist(wishlist.filter(item => item._id !== _id));
  }

  function addToCart(product, toast) {
    try {
      axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      ).then(response => {
        const updatedWishlist = wishlist.filter(item => item._id !== product._id);
        setWishlist(updatedWishlist);
        console.log("first", response.data)
        // handleCartUpdate(response.data); // Assuming the response contains updated cart information
        toast.success("Added In Cart !");
      }).catch(error => {
        // toast.error("Something Went Wrong !");
        console.log("Error in Add To Cart Service", error);
      });
    } catch (error) {
      toast.error("Something Went Wrong !");
      console.log("Error in Add To Cart Service", error);
    }
  }


  const moveToCart = (_id) => {
    const itemToMove = wishlist.find((item) => item._id === _id);
    if (itemToMove) {
      addToCart(itemToMove)
      handleCartUpdate(itemToMove, toast);
      removeFromWishlist(_id);
    }
  }

  return (
    <>
      {/* <Navigation /> */}
          <div>
            <h1 className="wishlist-heading center">My Wishlist ({wishlist.length}) </h1>
          </div>
      {wishlist.length === 0 &&
        <>
          <div>
            <h2 className="wishlist-heading center">Your wishlist is empty</h2>
          </div>
        </>
      }
      <div className="wishist-cart-flex">
        {
          wishlist.map((data) => {
            const { _id, title, price, image } = data

            return (
              <div className="card-container-wishlist" key={_id}>
                <h4 className="card-with-badge-wishlist"><FavoriteIcon onClick={() => removeFromWishlist(_id)} /></h4>
                <div>
                  <img className="image-card-wishlist" src={image} alt={title} />
                </div>
                <div className="description-wishlist">
                  <p className="card-heading-wishlist">{title}</p>
                  <p className="price-wishlist">Price: ₹{price}</p>
                </div>
                  <button className="add-cart-btn-wishlist" onClick={() => moveToCart(_id)}>
                    Move to Cart
                  </button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}