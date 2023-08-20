import { createContext, useReducer, useState } from "react";
import { orderState, orderReducer } from "../reducer/OrderReducer";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, orderState);
  const [couponValue, setCouponValue] = useState({ couponName: "", value: 0 });

  const [order, setOrder] = useState([]);

  const handleOrderUpdate = (item) => {
    setOrder((cart) => [...cart, item]);
  };

  console.log("order",order);

  return (
    <OrderContext.Provider
      value={{
        priceDetails: state.priceDetails,
        orderAddress: state.orderAddress,
        dispatch,
        couponValue,
        setCouponValue,
        order,
        setOrder,
        handleOrderUpdate
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
