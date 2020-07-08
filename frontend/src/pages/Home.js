import React, { useState, useEffect } from 'react';

import logo from '../logo.svg';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Cart from '../components/Cart';

import api from '../services/api';
import { Container } from './Home/styles';

export default function Home() {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  async function getPokemon() {
    const { data: response } = await api.get('/pokemon');

    setPokemon(response.results);
    setData(response);
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

  function isCartOpen() {
    setCartIsOpen((old) => !old);
  }

  async function nextPage() {
    const { data: response } = await api.get(data.next);

    setPokemon([...pokemon, ...response.results]);
    setData(response);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Navbar brand={logo} cartItems={cart.length} isCartOpen={isCartOpen} />
      <Container>
        <Cards data={pokemon} handleAddToCart={handleAddToCart} nextPage={nextPage} />
        <Cart cart={cart} clearCart={clearCart} cartIsOpen={cartIsOpen} />
      </Container>
    </>
  );
}
