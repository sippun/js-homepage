import React, { useCallback } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './theme/particlesjs-config.json';
import particlesConfigDark from './theme/particlesjs-configdark.json';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Books from './pages/Books';

function App() {
  const location = useLocation();

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Particles options={useColorModeValue(particlesConfig, particlesConfigDark)} init={particlesInit}/>

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
}

export default App;
