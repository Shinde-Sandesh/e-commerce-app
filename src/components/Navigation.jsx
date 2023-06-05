import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Navigation = () => {

      const {cart} = useContext(CartContext)

  return (
    <div>
      <nav class="flex nav-item">
            <div class="left-nav flex">
                  <Link to="/" className="btn round-button" type="button">Sports Cart</Link>
                  <input class="search-bar" placeholder="Search" />
                  <button>Search</button>
            </div>
            <div class="right-nav flex position">
                  <Link to="/login" className="btn round-button" type="button">Login</Link>
                  <Link to="/signup" className="btn round-button" type="button">Signup</Link>
                  <button  class="btn-badge badge-lg ">
                        {/* <a href="wishlist.html">
                              <i class="fas fa-heart fa-2x" style={{color: "beige"}}></i>
                        </a> */}
                        <Link to="/wishlist" className="btn round-button" type="button">Wishlist</Link>
                        <span class="icon-button-badge flex center icon-xl">10</span>
                  </button>
                  <button  class="btn-badge badge-lg">
                        {/* <a href="cart.html">
                        <i class="fas fa-shopping-cart fa-2x" style={{color: "beige"}}></i>
                        <i className="material-icons">favorite_border</i>
                        </a> */}
                        <Link to="/cart" className="btn round-button" type="button">Cart</Link>
                        <span class="icon-button-badge flex center icon-xl">{cart.length}</span>
                  </button>
            </div>
      </nav>
    </div>
  )
}
