import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
//import Works from './pages/Works';
//import ReadingList from './pages/ReadingList';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import theme from './theme/theme';
import './theme/styles.css';

const ReactLazyPreload = (importStatement) => {
  const Component = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

const Works = ReactLazyPreload(() => import('./pages/Works'));
const ReadingList = ReactLazyPreload(() => import('./pages/ReadingList'));

function App() {
  const location = useLocation();
  
  useEffect(() => {
    Works.preload();
    ReadingList.preload();
  }, []);
  

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <ParticlesBackground />
        <Navbar />

        <Container maxW="container.xl" overflow="hidden" p={0}>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="*" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/readinglist" element={<ReadingList />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
