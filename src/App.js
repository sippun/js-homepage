import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  theme,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './theme/particlesConfig';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Books from './pages/Books';

function App() {
  const location = useLocation();

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />

        <Navbar />

        <Container maxW="container.md">
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
