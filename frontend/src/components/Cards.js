import React from 'react';

import {
  Grid, CardButton,
} from './Cards/styles';
import Card from './Cards/Card';

export default function Cards({ data, handleAddToCart, nextPage }) {
  return (
    <Grid>
      {data.map((pokemon) => (
        <Card key={pokemon.name} data={pokemon} handleAddToCart={handleAddToCart} />
      ))}
      <CardButton type="button" onClick={nextPage} color="#07BDEF">Próxima Página</CardButton>
    </Grid>
  );
}
