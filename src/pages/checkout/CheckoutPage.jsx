import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useAuth } from "../../context/AuthContext";
import { priceCalc } from '../../utils/priceCalc';
import { displayRazorpay } from './razorpay';
import './CheckoutPage.css'
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', padding: '2rem', width: '100%', maxWidth: '28rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>Checkout</h2>
        {order ? (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Order Placed Successfully! 🎉</h3>
            <p>Order ID: {order.paymentId}</p>
            <p>Total Amount: ₹{order.amount}</p>
            <h4 style={{ marginTop: '1rem', fontWeight: '500' }}>Ordered Items:</h4>
            {order.products.map((item) => (
              <div key={item._id} style={{ borderBottom: '1px solid #e5e7eb', padding: '0.5rem 0' }}>
                <p style={{ color: '#1f2937', fontWeight: '600' }}>{item.title}</p>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ borderBottom: '1px solid rgb(114, 117, 123)' }}>
            {cart.length > 0 ? (
              cart.map((item) => (
                  <div key={item._id} style={{ paddingBottom: '0.5rem' }}>
                    <span className='item-details'>{item.title}
                      <span>₹{item.price}</span>
                    </span>
                  </div>
              ))
            ) : (
              <p>Your cart is empty!</p>
            )}
            </div>
            <p style={{ marginTop: '10px' }}><span className='item-details'>Total: <span>₹{totalPrice}</span></span></p>
            <p style={{ marginTop: '0.5rem' }}>{user?.firstName} {user?.lastName}</p>
            <button style={{ marginTop: '1rem', backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={handlePayment}>Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
