import React from 'react'

export const Navigation = () => {
  return (
    <div>
      <nav class="flex nav-item">
            <div class="left-nav flex">
                  <a href="/" class="nav-heading">Sports Cart</a>
                  <input class="search-bar" placeholder="Search" />
            </div>
            <div class="right-nav flex position">
                  <button class="btn round-button"><a href="login.html">Login</a></button>
                  <button class="btn round-button"><a href="signup.html">Signup</a></button>
                  <button  class="btn-badge badge-lg ">
                        <a href="wishlist.html">
                              <i class="fas fa-heart fa-2x" style={{color: "beige"}}></i>
                        </a>
                        <span class="icon-button-badge flex center icon-xl">10</span>
                  </button>
                  <button  class="btn-badge badge-lg">
                        <a href="cart.html">
                        <i class="fas fa-shopping-cart fa-2x" style={{color: "beige"}}></i>
                        <i className="material-icons">favorite_border</i>
                        </a>
                        <span class="icon-button-badge flex center icon-xl">10</span>
                  </button>
            </div>
    </nav>
    </div>
  )
}
