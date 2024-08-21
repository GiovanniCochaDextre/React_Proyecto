import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting="Bievenidos a Arti"/>
    </ChakraProvider>
  )
}

export default App
