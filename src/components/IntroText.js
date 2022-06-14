/* 
  This file contains awful code. Read at your own risk
*/
import {
  chakra,
  Box,
  Heading,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { motion, isValidMotionProp } from 'framer-motion';
import { TextSwitcher } from './TextSwitcher';

const lines = ['Hi, my name is', 'Joel Sheng'];
const labels = [
  'aspiring polymath',
  'software developer',
  'martial artist',
  'book lover',
  'rhythm gamer',
];

const containerVariants = {
  before: {},
  after: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

//I have created an awful solution and am deeply ashamed for it
const textVariants = {
  before: {
    y: -64 * 1.5,
    opacity: 0.6,
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {ease: 'easeOut', duration: 0.4},
  },
};
const textVariants1 = {
  before: {
    y: -64 * 1.5,
    opacity: 0.6,
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {ease: 'easeOut', duration: 0.4, delay: 0.1},
  },
};
const textVariants2 = {
  before: {
    y: -64 * 1.5,
    opacity: 0.6,
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {ease: 'easeOut', duration: 0.4, delay: 0.2},
  },
};

const lineContainerVariants = {
  before: {},
  after: {
    transition: {
      delayChildren: 0.3 * 3,
    },
  },
};

const lineVariants = {
  before: {
    opacity: 0,
    width: 0,
  },
  after: {
    opacity: 1,
    width: '100%',
    transition: {ease: 'easeIn', duration: 0.8},
  },
};

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export const IntroText = () => {
  const hiColor = useColorModeValue("icedark", "ice");

  return (
    <Container>
      <MotionBox variants={containerVariants} initial="before" animate="after">
        <Box key={lines[0]} overflow="hidden">
          <MotionBox variants={textVariants} initial="before" animate="after">
            <Heading color={hiColor} fontSize={["xl", "2xl"]} variant="mono">
              {lines[0]}
            </Heading>
          </MotionBox>
        </Box>
        <Box key={lines[1]}>
          <MotionBox variants={textVariants1} initial="before" animate="after">
            <Heading fontSize={["6xl", "7xl"]}>
              {lines[1]}
            </Heading>
          </MotionBox>
        </Box>
        <Box key={lines[2]} overflow="hidden" justifyContent="space-between">
          <MotionBox marginTop={2} variants={textVariants2} initial="before" animate="after">
            <TextSwitcher texts={labels} intro={['I am an', 'I am a']}/>
          </MotionBox>
        </Box>
        
        <MotionBox
          position="relative"
          mt={3}
          display="block-flex"
          flexDirection="row"
          variants={lineContainerVariants}
          initial="before"
          animate="after"
        >
          <MotionBox
            variants={lineVariants}
            initial="before"
            animate="after"
            position="absolute"
            height="1px"
            bg="whiteAlpha.800"
          />
        </MotionBox>
      </MotionBox>
    </Container>
  )
};
