import React, { useState, useEffect } from 'react';

import { ShoppingBag, Trash2, CheckCircle } from 'react-feather';
import convertToCurrency from '../utils/convertToCurrency';

import {
  Grid, CartList, CartItem, CartButton, CartTotal, EmptyCart, OrderComplete,
} from './Cart/styles';

const IsEmptyCart = () => (
  <EmptyCart>
    <span>Seu carrinho está vazio</span>
    <ShoppingBag color="#3e3e3e" size={42} />
  </EmptyCart>
);

const IsOrderComplete = ({ setOrderStatus }) => (
  <OrderComplete>
    <CheckCircle color="#61D138" size={52} />
    <strong>Parabéns!!</strong>
    <span>Compra Realizada</span>
    <button type="button" onClick={() => setOrderStatus(false)}>Continuar Comprando</button>
  </OrderComplete>
);

export default function Cards({ cart, clearCart, cartIsOpen }) {
  const [total, setTotal] = useState(0);
  const [orderStatus, setOrderStatus] = useState(false);

  function handleCompleteOrder() {
    setOrderStatus(true);
    clearCart();
  }

  useEffect(() => {
    function getTotal() {
      setTotal((cart.reduce((acc, crr) => acc + crr.price, 0)));
    }

    getTotal();
  }, [cart]);

  return (
    <Grid isOpen={cartIsOpen}>
      { !orderStatus && (
        <>
          <header>
            <h2>Meu Carrinho</h2>
            <button type="button" onClick={clearCart}>
              <strong>Limpar Carrinho</strong>
              <Trash2 color="#3e3e3e" size={24} />
            </button>
          </header>
          <CartList>
            { !!cart && cart.map((pokemon) => (
              <CartItem key={pokemon.id}>
                <div>
                  <img src={pokemon.image} alt={pokemon.name} />
                  <strong>{pokemon.name}</strong>
                </div>
                <span>{convertToCurrency('pt-BR', pokemon.price)}</span>
              </CartItem>
            )) }
            { cart.length < 1 && <IsEmptyCart /> }
          </CartList>
          <div>
            <CartTotal>
              <strong>Total: </strong>
              <span>{convertToCurrency('pt-BR', total)}</span>
            </CartTotal>
            <CartButton type="button" onClick={handleCompleteOrder}>Finalizar Pedido</CartButton>
          </div>
        </>
      ) }
      { orderStatus && <IsOrderComplete setOrderStatus={setOrderStatus} />}
    </Grid>
  );
}
