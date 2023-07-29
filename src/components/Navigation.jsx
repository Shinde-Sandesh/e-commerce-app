import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import './Navigation.css'

export const Navigation = () => {

  const { cart } = useContext(CartContext)
  const { wishlist } = useContext(CartContext)

  return (
    <div>
      <nav className="flex nav-item">
        <div className="left-nav flex">
          <Link to="/" style={{ color: "white" }}>Sports Cart</Link>
          <input className="search-bar" placeholder="Search" />
          <Link to='/search'>
            <SearchIcon style={{ color: "white" }} />
          </Link>
        </div>
        <div className="right-nav flex position">
          <Link to="/product">
            <LocalMallIcon style={{ color: "white" }} />
          </Link>
          <Link to="/wishlist" className="btn round-button">
            <FavoriteBorderOutlinedIcon style={{ color: "white" }} className="btn-badge badge-lg">
              <span className="icon-button-badge flex center icon-xl" style={{ display: wishlist.length === 0 ? "none" : "" }}>{wishlist.length}</span>
            </FavoriteBorderOutlinedIcon>
          </Link>
          <Link to="/cart" className="btn round-button">
            <ShoppingCartIcon style={{ color: "white" }} className="btn-badge badge-lg">
              <span className="icon-button-badge flex center icon-xl" style={{ display: cart.length === 0 ? "none" : "" }}>{cart.length}</span>
            </ShoppingCartIcon>
          </Link>
          <Link to="/login" className="btn round-button" type="button"><AccountCircleIcon style={{ color: "white" }} /></Link>
          {/* <Link to="/signup" className="btn round-button" type="button">Signup</Link> */}
        </div>
      </nav>
    </div>
  )
}
