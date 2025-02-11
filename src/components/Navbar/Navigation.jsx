import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../../context/AuthContext';
import './Navigation.css'

export const Navigation = () => {
  const { token } = useAuth();
  const { cart } = useContext(CartContext)
  const { wishlist } = useContext(CartContext)
  const [input, setInput] = useState("");
  const [searchItem, setSearchItem] = useState('');

  function handleInputText(event) {
    setSearchItem(event.target.value);
  }

  return (
    <div className='nav-header'>
      <ul className='navbar'>
        <div className='navbar-main'>
          <div className="navbar-left" style={{paddingLeft: '30px'}}>
            <Link to="/" style={{ color: "white" }}><h2>Sports Cart</h2></Link>
          </div>
          <div className="search-container search-mob">
          <SearchIcon style={{ color: "white" }} />
          <input
            type="search"
            name="search"
            className="search-bar"
            placeholder="Search for product"
            onChange={handleInputText}
            id=""
          />
        </div>
          <ul className="navbar-right">
            <li>
              <div className="icon cart-badge">
                <Link to="/products" className="btn round-button">
                  <LocalMallIcon style={{ color: "white" }} className="btn-badge badge-lg" />
                </Link>
              </div>
            </li>
            <li>
              <div className="icon cart-badge">
                <Link to="/search" className="btn round-button">
                  <SearchIcon style={{ color: "white" }} className="btn-badge badge-lg" />
                </Link>
              </div>
            </li>
            <li>
              <div className="icon cart-badge">
                <Link to="/wishlist" className="btn round-button">
                  <FavoriteBorderOutlinedIcon style={{ color: "white" }} className="btn-badge badge-lg">
                    {wishlist && wishlist.length > 0 && (
                      <div className="notification-icon flex-center">
                        <span>{wishlist.length}</span>
                      </div>
                    )}
                  </FavoriteBorderOutlinedIcon>
                </Link>
              </div>
            </li>
            <li className="nav-cart">
              <div className="icon cart-badge">
                <Link to="/cart" className="btn round-button">
                  <ShoppingCartIcon style={{ color: "white" }} className="btn-badge badge-lg">
                    {cart && cart.length > 0 && (
                      <div className="notification-icon flex-center">
                        <span>{cart.length}</span>
                      </div>
                    )}
                  </ShoppingCartIcon>
                </Link>
              </div>
            </li>
            <li>
              <div className="icon cart-badge">
                <Link to="/user_profile" className="btn round-button" title={token ? "User Profile" : "Sign In"} type="button">
                  <AccountCircleIcon style={{ color: "white" }} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="search-container search-mob">
          <SearchIcon style={{ color: "white" }} />
          <input
            type="search"
            name="search"
            className="search-bar"
            placeholder="Search for product"
            id=""
          />
        </div> */}
      </ul>
    </div>
  )
}
