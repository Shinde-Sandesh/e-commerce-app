import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([])

  // console.log({ cart });
  // console.log("wishlist context",{ wishlist });

  const handleCartUpdate = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const handleWishlistUpdate = (item) => {
    setWishlist((wishlist) => [...wishlist, item]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleCartUpdate, wishlist, setWishlist, handleWishlistUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
