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
      <div className="cart-container">
        <div className="cart-main-container flex-center">
          <h3>MY CART ({cart.length})</h3>
          <div className="cart-manage">
            <div className="cart-manage-item">
              {cart.length > 0 ? (
                cart.map((product) => {

                  const { _id, title, price, image } = product;
                  const quantity = quantities[_id] || 1;
                  return (
                    <div key={_id} className="card horizontal-container">
                      <div className="card-horizontal">
                        <img className="card-img horizontal-img" src={image} alt={title} />
                        <div className="card-info">
                          <div className="card-title">
                            <div>
                              <h4>{title}</h4>
                              <p className="card-description">{product.author}</p>
                            </div>
                          </div>
                          <div className="price">
                            <p className="disc-price">₹{price}</p>
                            <p className="actual-price">₹{price}</p>
                            <p className="price-percentage">({price}% OFF)</p>
                          </div>
                          <div className="qty">
                            <button
                              className="minus"
                              onClick={() => updateQuantity(_id, Math.max(quantity - 1, 1))}
                            >
                              -
                            </button>
                            <span className="qty-count">{quantity}</span>
                            <button className="add" onClick={() => updateQuantity(_id, quantity + 1)}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="horizontal-btn">
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(_id)}
                        >
                          REMOVE
                        </button>
                        <button
                          className="later-btn"
                          onClick={() => moveToWishlist(_id)}
                        >
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h1 className="text-center"> Your Cart Is Empty ! ☹️</h1>
              )}
            </div>
            {cart.length > 0 && <div className="price-details">
              <ul className="coupon">
                <p>
                  <i className="fa fa-tag" aria-hidden="true"></i> Have A Coupon ?
                </p>
                <div className="btn outlined-default coupon-btn" onClick={() => setCouponModal(true)}>
                  Apply
                </div>
              </ul>
              <h4 className="text-center">PRICE DETAILS</h4>

              <div className="price-calculate">
                <li>
                  <ul>
                    <p>Price ({cart.length} items)</p>
                    <p>₹ {cart.reduce((total, item) => (total += item.price * (quantities[item._id] || 1)), 0)}</p>
                  </ul>
                  <ul>
                    <p>Discount</p>
                    <p>No Discount</p>
                  </ul>
                  <ul>
                    <p>Delivery Charges</p>
                    <p>FREE</p>
                  </ul>
                  {/* <ul>
            <p>Coupon Discount</p>
            <p>
              {coupon !== 0 && "-"}₹ {coupon.toFixed(2)}
            </p>
          </ul>
          {coupon !== 0 && (
            <ul className="coupon-msg">
              <p>
                <img src="https://cdn-icons-png.flaticon.com/512/726/726448.png" />
                {couponValue.couponName}
              </p>
              <p
                className="remove-coupon"
                onClick={() => setCouponValue({ couponName: "", value: 0 })}
              >
                ❌
              </p>
            </ul>
          )} */}
                </li>
              </div>
              <ul className="price-totalAmt">
                Total Price : ₹{cart.reduce((total, item) => (total += item.price * (quantities[item._id] || 1)), 0)}
              </ul>
              <p className="save-msg">You will save ₹100 on this order</p>
              <div className="primary-btn text-center" onClick={() => checkoutHandler()}>
                <button className="link-btn checkout-btn">Checkout</button>
              </div>
            </div>}
          </div>
        </div>
      </div>
      {/* <div className="cart-container">
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
      </div> */}
    </>
  );
}