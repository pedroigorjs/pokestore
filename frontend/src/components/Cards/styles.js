import styled from 'styled-components';
import { darken } from 'polished';

export const Grid = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  padding: 4rem;
  position: relative;
  margin: 4rem 0;

  > button {
    width: 200px;
    position: absolute;
    right: 4rem;
    bottom: 0;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  border-radius: 10px;
`;

export const PokemonName = styled.h2`
  background-color: #61D138;
  text-align: center;
  text-transform: capitalize;
  padding: .5rem;
  border-radius: 10px;
  color: #fff;
`;
export const StatList = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0 1.5rem;
`;
export const StatItem = styled.li`
  margin: 1rem 0;
`;
export const StatName = styled.p`
  font-weight: 500;
`;

export const StatBar = styled.progress`
  &[value] {
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
  }

  &[value]::-webkit-progress-bar {
    background-color: #ebebeb;
    border-radius: 5px;
  }

  &[value]::-webkit-progress-value {
    background-color: ${(props) => props.color};
    border-radius: 5px;
  }

`;

export const CardButton = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  color: #fff;
  font-weight: 500;
  transition: background .2s ease-in;

  &:hover {
    background-color: ${(props) => darken(0.05, props.color)}
  }
`;
