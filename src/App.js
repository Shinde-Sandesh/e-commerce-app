import {Route, Routes} from 'react-router-dom'
import Mockman from "mockman-js";

import LandingPage from './pages/Landing/Landing'
import CartManagement from './pages/cartManagement/cartManagement';
import ProductListing from './pages/productListing/productListing';
import Wishlist from './pages/wishlistPage/Wishlist';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import ProductDetails from './pages/productDetails/ProductDetails';
import SearchProducts from './pages/search/SearchProducts';
import { PrivateRoute } from './components/PrivateRoute';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/cart" element = {<PrivateRoute><CartManagement /></PrivateRoute>} />
        <Route path = "/search" element = {<SearchProducts />} />
        <Route path = "/product" element = {<ProductListing />} />
        <Route path = "/product/:productId" element = {<ProductDetails />} />
        <Route path = "/wishlist" element = {<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/mockman" element = {<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
