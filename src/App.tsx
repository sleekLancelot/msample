import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './Components';
import { theme } from './Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
