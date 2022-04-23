import { Box } from '@mui/material';
import './App.css';
import Content from './Components/Content';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Catrgorys from './Components/Catrgory';
import Cart from './Components/Cart'
import Products from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import Healtcare from './Components/HealthCare'

import DemoCarousel from './Components/TopCrousal';
import PaymentPage from './Components/PaymentPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Success from './Components/Success';
// import SimpleSlider from './Components/TopCrousal';


function App() {
  return (
    <div>
        <Routes>
          <Route path={"/"} element={<Catrgorys />} />
          <Route path={"/Products/:id"} element={<Products />} />
          <Route path={"/Products/ProductDetails/:id"} element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path={"/HealtcareProduct"} element={<Healtcare />} />
          <Route path={"/PaymentPage"} element={<PaymentPage />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Signup"} element={<Signup />} />
          <Route path={"/Success"} element={<Success />} />
        </Routes>
    </div>
  );
}

export default App;
