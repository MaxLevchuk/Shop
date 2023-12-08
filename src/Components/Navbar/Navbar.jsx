import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
const{getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" className='logo-image' />
        <p>PC Hardware</p>
      </div>
      <ul className='nav-menu'>
        <li
          onClick={() => {
            setMenu('shop');
          }}
          className={menu === 'shop' ? 'selected-menu' : ''}
        >
          <Link to='/' style={{textDecoration:'none'}}>Shop</Link>
        </li>
        <li
          onClick={() => {
            setMenu('CPU');
          }}
          className={menu === 'CPU' ? 'selected-menu' : ''}
        >
          <Link to='/CPUs' style={{textDecoration:'none'}}>CPU</Link>
        </li>
        <li
          onClick={() => {
            setMenu('GPU');
          }}
          className={menu === 'GPU' ? 'selected-menu' : ''}
        >
          <Link to='/GPUs' style={{textDecoration:'none'}}>GPU</Link>
        </li>
        <li
          onClick={() => {
            setMenu('RAM');
          }}
          className={menu === 'RAM' ? 'selected-menu' : ''}
        >
          <Link to='/RAMs' style={{textDecoration:'none'}}>RAM</Link>
        </li>
        <li
          onClick={() => {
            setMenu('MB');
          }}
          className={menu === 'MB' ? 'selected-menu' : ''}
        >
          <Link to='/MBs' style={{textDecoration:'none'}}>MB</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login' style={{textDecoration:'none'}}><button>Login</button></Link>
        <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt="" className='cart-icon' /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
