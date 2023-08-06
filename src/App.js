import {Route, Routes} from 'react-router-dom'
import Mockman from "mockman-js";

import LandingPage from './pages/Landing/Landing'
import CartManagement from './pages/cartManagement/cartManagement';
import ProductListing from './pages/productListing/productListing';
import Wishlist from './pages/wishlistPage/Wishlist';
import ProductDetails from './pages/productDetails/ProductDetails';
import SearchProducts from './pages/search/SearchProducts';
import SignUp from './pages/Auth/signup/signup';
import Login from './pages/Auth/login/login';
import Logout from './pages/Auth/logout/Logout';
import { Profile } from './pages/profile/Profile';
import { PrivateRoute } from './components/PrivateRoute';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/cart" element = {<PrivateRoute><CartManagement /></PrivateRoute>} />
        <Route path = "/search" element = {<SearchProducts />} />
        <Route path = "/products" element = {<ProductListing />} />
        <Route path = "/products/:productId" element = {<ProductDetails />} />
        <Route path = "/wishlist" element = {<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/logout" element = {<Logout />} />
        <Route path='/user_profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path = "/mockman" element = {<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
