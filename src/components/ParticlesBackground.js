import React, { useEffect, useMemo, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { useColorModeValue } from "@chakra-ui/react";
import { Bubbles } from './ParticlesConfig';

function ParticlesBackground() {
  const [particlesContainer, setParticlesContainer] = useState();
  const theme = useColorModeValue("light", "dark");

  const particlesLoaded = (container) => {
    setParticlesContainer(container);
  };

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);

  return useMemo(
    () => (
      <Particles
        id={theme}
        init={particlesInit}
        loaded={particlesLoaded}
        options={Bubbles}
      />
    ),
    []
  );
}

export default ParticlesBackground;
