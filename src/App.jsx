import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MainRouter } from './routes';
import { CartProvider } from './context';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
