import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './firebaseConfig';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [carregandoCarrinho, setCarregandoCarrinho] = useState(true);

  // Escuta o login do usuário e carrega o carrinho correto
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUsuario(user);
      setCarregandoCarrinho(true);

      if (user) {
        try {
          const docRef = doc(db, 'carrinhos', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const dados = docSnap.data();
            setCarrinho(Array.isArray(dados.produtos) ? dados.produtos : []);
          } else {
            setCarrinho([]);
          }
        } catch (error) {
          console.log('Erro ao carregar carrinho do Firebase:', error);
          setCarrinho([]);
        }
      } else {
        setCarrinho([]);
      }

      setCarregandoCarrinho(false);
    });

    return () => unsubscribe();
  }, []);

  // Salva o carrinho sempre que ele mudar
  useEffect(() => {
    async function salvarCarrinhoNoFirebase(lista) {
      if (!usuario || carregandoCarrinho) return;

      try {
        const docRef = doc(db, 'carrinhos', usuario.uid);
        await setDoc(docRef, { produtos: lista });
      } catch (error) {
        console.log('Erro ao salvar carrinho no Firebase:', error);
      }
    }

    salvarCarrinhoNoFirebase(carrinho);
  }, [carrinho, usuario, carregandoCarrinho]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((anterior) => Array.isArray(anterior) ? [...anterior, produto] : [produto]);
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho((anterior) => anterior.filter(item => item.id !== produtoId));
  };

  return (
    <CarrinhoContext.Provider value={{ 
      carrinho, 
      adicionarAoCarrinho, 
      removerDoCarrinho,
      carregandoCarrinho 
    }}>
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