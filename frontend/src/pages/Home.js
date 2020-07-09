import React, { useState, useEffect } from 'react';

import logo from '../logo.svg';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Cart from '../components/Cart';

import api from '../services/api';
import { Container } from './Home/styles';

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  async function getPokemon() {
    const { data: response } = await api.get('/pokemon');

    setPokemon(response.results);
    setPokemonList(response);
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
    const { data: response } = await api.get(pokemonList.next);

    setPokemon([...pokemon, ...response.results]);
    setPokemonList(response);
  }

  async function handleSearch(value) {
    setSearchValue(value);

    const { data: { results } } = await api.get('/pokemon');

    const newPokemon = results.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    setPokemon(newPokemon);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Navbar brand={logo} cartItems={cart.length} isCartOpen={isCartOpen} searchValue={searchValue} handleSearch={handleSearch} />
      <Container>
        <Cards data={pokemon} handleAddToCart={handleAddToCart} nextPage={nextPage} />
        <Cart cart={cart} clearCart={clearCart} cartIsOpen={cartIsOpen} />
      </Container>
    </>
  );
}
