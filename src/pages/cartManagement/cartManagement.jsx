import './cartManagement.css'
import { Navigation } from '../../components/Navigation'
import img from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import { useState } from 'react';

function Card() {

      const[quantity, setQuantity] = useState(1)

      const increaseQuantity = () => {
            setQuantity(quantity + 1)
      }

      const decreaseQuantity = () => {
            setQuantity(quantity - 1)
      }

      return(
            <div className="cart-container">
                  <div>
                        <img className="cart-image" src={img} alt="" />
                  </div>
                  <div className="cart-description">
                        <div className="description">
                              <p>Adidas Shoe</p>
                              <h4 className="price">₹3000</h4>
                              <small className="off-price">50% off</small>
                              <div>Quantity 
                                    <button onClick={increaseQuantity}>+</button>
                                    <p className="number-of-items">{quantity}</p>
                                    <button onClick={decreaseQuantity}>-</button>
                              </div>
                        </div>
                        <button className="btn-remove">Remove from Cart</button>
                        <button className="btn-wishlist">Move to Wishlist</button>
                  </div>
            </div>
      )
}

function PriceDetails() {

      const[amonut, setAmount] = useState(0)

      return (
            <div className="price-container">
            <h3 className="price-details-heading">PRICE DETAILS</h3>
            <hr />
            <div className="item">
                  <p className="list">Price of 2 pairs</p>
                  <span className="price-items">₹5000</span>
            </div>
            <div className="item">
                  <p className="list">Discount</p>
                  <span className="price-items">-10%</span>
            </div>
            <div className="item">
                  <p className="list">Delievery charges</p>
                  <span className="price-items">₹1000</span>
            </div>
            <hr />
            <div className="item">
                  <p className="list">Total Amount</p>
                  <span className="price-items">₹5000</span>
            </div>
            <hr />
            <div className="item saved-money">
                  <p className="list">You will save ₹1000 in this order</p>
            </div>
            <button className="btn-place-order">Place Order</button>
      </div>
      )
}

export default function CartManagement()
{
      return (
            <>
                  <Navigation />
                  <h1 className="cart-heading">My Cart</h1>
                  <Card />
                  <PriceDetails />
            </>
      )
}