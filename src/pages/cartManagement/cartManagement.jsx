import './cartManagement.css'
import { Navigation } from '../../components/Navigation'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartManagement() {
   const { cart, setCart, wishlist, handleWishlistUpdate } = useContext(CartContext);
   const [quantities, setQuantities] = useState({});

   // Function to update the quantity of an item in the cart
   const updateQuantity = (_id, newQuantity) => {
      setQuantities({ ...quantities, [_id]: newQuantity });
   }

   // Function to remove an item from the cart
   const removeFromCart = (_id) => {
      setCart(cart.filter(item => item._id !== _id));
      const updatedQuantities = { ...quantities };
      delete updatedQuantities[_id];
      setQuantities(updatedQuantities);
   }

   // Function to move an item to the wishlist
   const moveToWishlist = (_id) => {
    const itemToMove = cart.find((item) => item._id === _id);
    if (itemToMove) {
      handleWishlistUpdate(itemToMove);
      removeFromCart(_id);
   }
  }

  //  console.log("cart data",cart)

   return (
      <>
        <Navigation />
        <h2 className="cart-heading">My Cart</h2>
        <div className="cart-container">
          <div className="product-card">
            {cart.length === 0 && <h3>Empty Cart</h3>}
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
                        onClick={() => updateQuantity(_id, Math.max(quantity - 1, 1)) }
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
  
          <div className="total-price-card">
            <h3 className="total-price">
              Total Price : ${cart.reduce((total, item) => (total += item.price * (quantities[item._id] || 1)), 0)}
            </h3>
            <button className="btn-place-order">Place Order</button>
          </div>
        </div>
      </>
    );
  }