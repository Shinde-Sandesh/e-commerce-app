import {Route, Routes} from 'react-router-dom'
import Mockman from "mockman-js";
import LandingPage from './pages/Landing/Landing'
import CartManagement from './pages/cartManagement/cartManagement';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/cart" element = {<CartManagement />} />
        <Route path = "/mockman" element = {<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
