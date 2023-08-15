import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([])

  const handleCartUpdate = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const handleWishlistUpdate = (item) => {
    setWishlist((wishlist) => [...wishlist, item]);
  };

  return (
    <OrderContext.Provider value={{ cart, setCart, handleCartUpdate, wishlist, setWishlist, handleWishlistUpdate }}>
      {children}
    </OrderContext.Provider>
  );
}
