import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { MainRouter } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
        <MainRouter />
    </ChakraProvider>
  )
}

export default App
