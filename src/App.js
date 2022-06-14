import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Books from './pages/Books';
import ParticlesBackground from './components/ParticlesBackground';
import theme from './theme/theme';

function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ParticlesBackground />

        <Navbar />
        <Container maxW="container.md" overflow="hidden">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/books" element={<Books />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
