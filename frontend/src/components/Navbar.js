import React from 'react';

import { Search, ShoppingBag } from 'react-feather';
import {
  Grid, SearchBar, SearchIcon, CartButton,
} from './Navbar/styles';

export default function Navbar({
  brand, cartItems, isCartOpen, searchValue, handleSearch,
}) {
  return (
    <Grid>
      <div>
        <img src={brand} alt="Pokestore" />
      </div>
      <div>
        <SearchIcon>
          <Search color="#B2B2B2" size={28} />
        </SearchIcon>
        <SearchBar type="text" placeholder="Pesquisar pokemon..." value={searchValue} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div>
        <CartButton type="button" onClick={isCartOpen}>
          <ShoppingBag color="#313131" size={28} />
          Carrinho:
          {' '}
          {cartItems}
        </CartButton>
      </div>
    </Grid>
  );
}
