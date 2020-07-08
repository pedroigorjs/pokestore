import React from 'react';

import {
  Grid,
} from './Cards/styles';
import Card from './Cards/Card';

export default function Cards({ data, handleAddToCart }) {
  return (
    <Grid>
      {data.map((pokemon) => (
        <Card key={pokemon.name} data={pokemon} handleAddToCart={handleAddToCart} />
      ))}
    </Grid>
  );
}
