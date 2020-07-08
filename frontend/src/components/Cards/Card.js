import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle } from 'react-feather';

import convertToCurrency from '../../utils/convertToCurrency'

import {
  Container, StatList, StatItem, StatName, StatBar, CardButton, PokemonName,
} from './styles';

export default function Card({ data, handleAddToCart }) {
  const [stats, setStats] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getStats(statName) {
      const response = await axios.get(data.url);

      const pokemonStats = response.data.stats.map((stat) => ({ name: stat.stat.name, base_stat: stat.base_stat }));

      setPokemon(response.data)
      setStats(pokemonStats);
    }

    getStats();
  }, [data.url]);

  return (
    <Container>
      <PokemonName>{pokemon.name}</PokemonName>
      <StatList>
        <StatItem>
          <StatName>HP</StatName>
          <StatBar max={255} value={stats[0]?.base_stat} color="#8AE82C" />
        </StatItem>
        <StatItem>
          <StatName>Ataque</StatName>
          <StatBar max={190} value={stats[1]?.base_stat} color="#FFC300" />
        </StatItem>
        <StatItem>
          <StatName>Ataque Especial</StatName>
          <StatBar max={194} value={stats[2]?.base_stat} color="#FF4732" />
        </StatItem>
        <StatItem>
          <StatName>Defesa</StatName>
          <StatBar max={230} value={stats[3]?.base_stat} color="#02AFFF" />
        </StatItem>
        <StatItem>
          <StatName>Defesa Especial</StatName>
          <StatBar max={230} value={stats[4]?.base_stat} color="#3366FF" />
        </StatItem>
        <StatItem>
          <StatName>Velocidade</StatName>
          <StatBar max={180} value={stats[5]?.base_stat} color="#1DE0F9" />
        </StatItem>
      </StatList>
      <CardButton type="button" onClick={() => handleAddToCart({ ...pokemon, price: stats[0]?.base_stat })}>
        {convertToCurrency('pt-BR', stats[0]?.base_stat * 10)}
        <PlusCircle color="#FFF" size={28} />
      </CardButton>
    </Container>
  );
}
