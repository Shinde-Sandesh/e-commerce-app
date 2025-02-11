import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useAuth } from "../../context/AuthContext";
import { priceCalc } from '../../utils/priceCalc';
import { displayRazorpay } from './razorpay';
import { toast } from "react-toastify";

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const { currUser: user } = useAuth();
  const { price, checkoutPrice } = priceCalc(cart);
  const [order, setOrder] = useState(null);
  const totalPrice = cart.reduce((total, item) => (total += item.price), 0);

  const handlePayment = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    if (!user) {
      toast.error("Please log in to proceed with checkout.");
      return;
    }
    displayRazorpay(totalPrice, cart, setOrder);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {order ? (
        <div>
          <h3>Order Placed Successfully! 🎉</h3>
          <p>Order ID: {order.paymentId}</p>
          <p>Total Amount: ₹{order.amount}</p>
          <h4>Ordered Items:</h4>
          {order.products.map((item) => (
            <div key={item._id}>
              <p>{item.title}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id}>
                <p>{item.title}</p>
                <p>₹{item.price}</p>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
          <p>Total: ₹{totalPrice}</p>
          <p className="paragraph-md">{user?.firstName} {user?.lastName}</p>
          <button onClick={handlePayment}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
