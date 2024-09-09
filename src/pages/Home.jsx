import React from 'react'
import { ItemListContainer } from '../components'
import { useProducts } from '../hooks/useProducts';

export const Home = () => {

  const { products, loading } = useProducts();

  return <ItemListContainer greeting="Hola a Todos" />;
};

