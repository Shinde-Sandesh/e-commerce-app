import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Navigation = () => {

  const { cart } = useContext(CartContext)
  const { wishlist } = useContext(CartContext)

  return (
    <div>
      <nav className="flex nav-item">
        <div className="left-nav flex">
          <Link to="/" className="btn round-button" type="button">Sports Cart</Link>
          <input className="search-bar" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="right-nav flex position">
          <Link to="/login" className="btn round-button" type="button">Login</Link>
          <Link to="/signup" className="btn round-button" type="button">Signup</Link>
          <button className="btn-badge badge-lg ">
            <Link to="/wishlist" className="btn round-button" type="button">Wishlist</Link>
            <span className="icon-button-badge flex center icon-xl" style={{display : wishlist.length === 0 ? "none" : ""}}>{wishlist.length}</span>
          </button>
          <button className="btn-badge badge-lg">
            <Link to="/cart" className="btn round-button" type="button">Cart</Link>
            <span className="icon-button-badge flex center icon-xl" style={{display : cart.length === 0 ? "none" : ""}}>{cart.length}</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
