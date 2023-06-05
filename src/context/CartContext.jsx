import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  console.log({ cart });

  const handleCartUpdate = (item) => {
    setCart((cart) => [...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
