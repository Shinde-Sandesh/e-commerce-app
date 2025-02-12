import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { OrderProvider } from "./context/OrderContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <OrderProvider>
        <CartProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CartProvider>
      </OrderProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
