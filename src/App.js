import {Route, Routes} from 'react-router-dom'
import Mockman from "mockman-js";
import LandingPage from './pages/Landing/Landing'
import ProductListing from './pages/productListing/productListing';
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/product" element = {<ProductListing />} />
        <Route path = "/mockman" element = {<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
