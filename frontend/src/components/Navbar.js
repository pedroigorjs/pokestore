import React from 'react';

import { Search, ShoppingBag } from 'react-feather';
import {
  Grid, SearchBar, SearchIcon, CartButton,
} from './Navbar/styles';

export default function Navbar({ brand, cartItems }) {
  return (
    <Grid>
      <div>
        <img src={brand} alt="Pokestore" />
      </div>
      <div>
        <SearchIcon>
          <Search color="#B2B2B2" size={28} />
        </SearchIcon>
        <SearchBar type="text" placeholder="Pesquisar pokemon..." />
      </div>
      <div>
        <CartButton type="button">
          <ShoppingBag color="#313131" size={28} />
          Carrinho:
          {' '}
          {cartItems}
        </CartButton>
      </div>
    </Grid>
  );
}
