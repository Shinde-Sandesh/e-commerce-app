import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useAuth } from "../../context/AuthContext";
import './cartManagement.css'

export default function CartManagement() {
  const { cart, setCart, handleWishlistUpdate } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const { token } = useAuth();

  const updateQuantity = (_id, newQuantity) => {
    setQuantities({ ...quantities, [_id]: newQuantity });
  }

  function addToWishlist(product, toast) {
    try {
      axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: token,
          },
        }
      ).then(() => {
        const updatedCart = cart.filter(item => item._id !== product._id);
        setCart(updatedCart);
        toast.success("Added In Wishlist !");
      }).catch(error => {
        toast.error("Something Went Wrong !");
        console.log("Error in Add To Cart Service", error);
      });
    } catch (error) {
      toast.error("Something Went Wrong !");
      console.log("Error in Add To Cart Service", error);
    }
  }

  const removeFromCart = (_id) => {
    setCart(cart.filter(item => item._id !== _id));
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[_id];
    setQuantities(updatedQuantities);
    toast.error("Removed from cart")
  }
  
  const moveToWishlist = (_id) => {
    const itemToMove = cart.find((item) => item._id === _id);
    if (itemToMove) {
      handleWishlistUpdate(itemToMove);
      addToWishlist(itemToMove, toast)
      removeFromCart(_id);
    }
  }

  return (
    <>
      {/* <Navigation /> */}
      <p className="cart-heading"><strong>My Cart </strong>({cart.length})</p>
      <div className="cart-container">
        <div className="product-card">
          {cart.length === 0 && <h3>Your cart is empty</h3>}
          {cart.map((item) => {
            const { _id, title, price, image } = item;
            const quantity = quantities[_id] || 1;

            return (
              <div className="cart-item" key={_id}>
                <div className="image-container">
                  <img className="cart-image" src={image} alt={title} />
                </div>
                <div className="cart-description">
                  <p className="title">{title}</p>
                  <h4 className="price">${price}</h4>
                  <div className="quantity-container">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(_id, Math.max(quantity - 1, 1))}
                    >
                      -
                    </button>
                    <p className="number-of-items">{quantity}</p>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(_id, quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="button-container">
                    <button className="btn-remove" onClick={() => removeFromCart(_id)}>
                      Remove from Cart
                    </button>
                    <button className="btn-wishlist" onClick={() => moveToWishlist(_id)}>
                      Move to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

{      cart.length > 0 && <div className="total-price-card">
          <h3 className="total-price">
            Total Price : ${cart.reduce((total, item) => (total += item.price * (quantities[item._id] || 1)), 0)}
          </h3>
          <Link to="/checkout">
            <button className="btn-place-order">Checkout</button>
          </Link>
        </div>}
      </div>
    </>
  );
}