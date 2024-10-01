import React from 'react'
import { ItemListContainer } from '../components'
import { useItemsCollection } from '../hooks/useItemsCollection';
import { Flex, Spinner, Box } from "@chakra-ui/react";

export const Home = () => {

  const { items, loading, error } = useItemsCollection("products");

  return loading ? (
    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner />
    </Flex>
  ) : error ? (
    <Box>
      Hay un error un durante carga de los productos.
    </Box>
  ) : (
    <ItemListContainer products={items} />
  );  

  //return <ItemListContainer greeting="Hola a Todos" />;
};

