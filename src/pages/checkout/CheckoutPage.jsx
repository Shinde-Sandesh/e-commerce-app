import React from 'react'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useAuth } from "../../context/AuthContext";
import { priceCalc } from '../../utils/priceCalc';
import { displayRazorpay } from './razorpay';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { OrderContext } from "../../context/OrderContext";

function CheckoutPage() {

  const { cart } = useContext(CartContext);
  const { currUser: user, logoutHandler } = useAuth();
  const { price, checkoutPrice } = priceCalc(cart);
  const [order, setOrder] = useState({});
  const totalPrice =  cart.reduce((total, item) => (total += item.price), 0)

  return (
    <div>
      <h2>CheckoutPage</h2>
      {
        cart.map((item) => 
        <>
        <p>{item.title}</p>
        <p>{item.price}</p>
        </>
        )
      }
      {/* {cart.reduce((total, item) => (total += item.price * (quantities[item._id] || 1)), 0)} */}
      <p>total: {totalPrice}</p>
      <p className="paragraph-md">{user?.firstName} {user?.lastName}</p>
      <button onClick={() => displayRazorpay(totalPrice, cart, setOrder)}>Place Order</button>

    </div>
  )
}

export default CheckoutPage