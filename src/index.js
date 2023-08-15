import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { OrderProvider } from "./context/OrderContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <OrderProvider>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </OrderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
