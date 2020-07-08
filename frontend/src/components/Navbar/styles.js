import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 9fr 2fr;

  div {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    padding: 1rem 4rem;
    position: relative;

    + div {
      border-left: 1px solid #ebebeb;
    }
  }
`;

export const SearchBar = styled.input`
  border: none;
  background-color: #f9f9f9;
  padding: 1rem;
  padding-left: 3.5rem;
  width: 30vw;
  border-radius: 10px;

  ::placeholder {
    color: #bebebe;
    font-family: inherit;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  margin-left: 1rem;
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;

  svg {
    margin-right: 1rem;
  }
`;
