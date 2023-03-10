// import '@fontsource/montserrat/700.css'
// import '@fontsource/montserrat/500.css'
// import '@fontsource/montserrat/400.css'

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Home, Navbar } from './Components';
import { theme } from './Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
