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
import About from './pages/About';
import Works from './pages/Works';
import ReadingList from './pages/ReadingList';
import ParticlesBackground from './components/ParticlesBackground';
import theme from './theme/theme';
import './theme/styles.css';

function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ParticlesBackground />
        <Navbar />

        <Container maxW="container.md" overflow="hidden" p={0}>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/readinglist" element={<ReadingList />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
