import React, { useState, useEffect } from 'react';

import logo from '../logo.svg';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Cart from '../components/Cart';

import api from '../services/api';
import { Container } from './Home/styles';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);

  async function getPokemon() {
    const { data: { results } } = await api.get('/pokemon');

    setPokemon(results);
  }

  function handleAddToCart({ name, id, price }) {
    setCart([...cart, {
      name,
      image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      price,
    }]);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    getPokemon();
  });

  return (
    <>
      <Navbar brand={logo} cartItems={cart.length} />
      <Container>
        <Cards data={pokemon} handleAddToCart={handleAddToCart} />
        <Cart cart={cart} clearCart={clearCart} />
      </Container>
    </>
  );
}
