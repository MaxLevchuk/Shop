import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import compsale_banner from './Components/Assets/banner_compsale.png'


function App() {
  return (
    <div>
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/CPUs' element={<ShopCategory banner = {compsale_banner} category="CPU" />} />
          <Route path='/GPUs' element={<ShopCategory banner = {compsale_banner} category="GPU" />} />
          <Route path='/RAMs' element={<ShopCategory banner = {compsale_banner} category="RAM" />} />
          <Route path='/MBs' element={<ShopCategory banner = {compsale_banner} category="MB" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
