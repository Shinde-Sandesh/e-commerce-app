import './cartManagement.css'
import { Navigation } from '../../components/Navigation'
import img from '../../assets/sneakers-shoes-adidas-shoes.jpg';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

// function Card() {



//       return(

//       )
// }

// function PriceDetails() {

//       const[amonut, setAmount] = useState(0)

//       return (
//             <div className="price-container">
//             <h3 className="price-details-heading">PRICE DETAILS</h3>
//             <hr />
//             <div className="item">
//                   <p className="list">Price of 2 pairs</p>
//                   <span className="price-items">₹5000</span>
//             </div>
//             <div className="item">
//                   <p className="list">Discount</p>
//                   <span className="price-items">-10%</span>
//             </div>
//             <div className="item">
//                   <p className="list">Delievery charges</p>
//                   <span className="price-items">₹1000</span>
//             </div>
//             <hr />
//             <div className="item">
//                   <p className="list">Total Amount</p>
//                   <span className="price-items">₹5000</span>
//             </div>
//             <hr />
//             <div className="item saved-money">
//                   <p className="list">You will save ₹1000 in this order</p>
//             </div>
//             <button className="btn-place-order">Place Order</button>
//       </div>
//       )
// }

export default function CartManagement() {
      const { cart } = useContext(CartContext)
      const [quantity, setQuantity] = useState(1)

      const increaseQuantity = () => {
            setQuantity(quantity + 1)
      }

      const decreaseQuantity = () => {
            setQuantity(quantity - 1)
      }
      return (
            <div>
                  {cart.length === 0 && <h3>Empty Cart</h3>}
                  {cart.map((item) => {
                        const { _id, title, price } = item;

                        return (
                              <div key={_id}>
                                    <div>
                                          <img className="cart-image" src="/" alt="" />
                                    </div>
                                    <div className="cart-description">
                                          <div className="description">
                                                <p>{title}</p>
                                                <h4 className="price">{price}</h4>
                                                {/* <small className="off-price">50% off</small> */}
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
                              // <div
                              //   key={_id}
                              //   style={{
                              //     border: "1px solid gray",
                              //     margin: "0.5rem",
                              //     padding: "0.5rem"
                              //   }}
                              // >
                              //   <h2>
                              //     {title} <small> INR {price} </small>
                              //   </h2>
                              // </div>

                        );
                  })}
                  <h3>
                        Total Price : {cart.reduce((total, item) => (total += item.price), 0)}
                  </h3>
            </div>
      );
}