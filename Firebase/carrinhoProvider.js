import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prevCarrinho => [...prevCarrinho, produto]);
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.id !== produtoId));
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho must be used within a CarrinhoProvider');
  }
  return context;
} 