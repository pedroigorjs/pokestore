import styled from 'styled-components';
import { darken } from 'polished';

export const Grid = styled.div`
  width: 30vw;
  padding: 4rem;
  border-left: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
  position: fixed;
  top: 84px;
  right: 0;
  transition: all .2s ease-in;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      background: none;
      cursor: pointer;

      svg {
        margin-left: 1rem;
      }
    }
  }
`;

export const CartList = styled.ul`
  list-style: none;
`;
export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  strong {
    text-transform: capitalize;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 50px;
    margin-right: 1rem;
  }

  + li {
    border-top: 1px solid #ebebeb;
  }
`;
export const CartButton = styled.button`
  width: 100%;
  background-color: #D83352;
  color: #fff;
  border: none;
  padding: 1.5rem;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  transition: background .2s ease-in;

  &:hover {
    background-color: ${darken(0.05, '#D83352')}
  }
`;
export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  span {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const EmptyCart = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  flex-direction: column;

  span {
    margin-bottom: 1.5rem;
  }
`;

export const OrderComplete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 2rem;
  }

  strong, span {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: #61D138;
    color: #fff;
    cursor: pointer;
    border: none;
    font-weight: 500;
    border-radius: 10px;
    padding: 1rem 1.5rem;


    &hover {
      background-color: ${darken(0.05, '#61D138')}
    }
  }
`;
