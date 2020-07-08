import React, { useState, useEffect } from 'react';

import logo from '../logo.svg';
import Navbar from '../components/Navbar';
import api from '../services/api';
import { Container } from './Home/styles';

export default function Home() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar brand={logo} cartItems={cart.length} />
    </>
  );
}
