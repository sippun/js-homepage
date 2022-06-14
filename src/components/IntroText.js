/* 
  This file contains awful code. Read at your own risk
*/
import { Box, Heading, Container, chakra } from '@chakra-ui/react'
import React from 'react'
import { motion, isValidMotionProp } from 'framer-motion';

const lines = ['Hi, my name is', 'Joel Sheng', 'I am an aspiring polymath'];

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
  return (
    <Container>
      <MotionBox variants={containerVariants} initial="before" animate="after">
        <Box key={lines[0]} overflow="hidden">
          <MotionBox variants={textVariants} initial="before" animate="after">
            <Heading color="ice" fontSize="2xl" variant="mono">
              {lines[0]}
            </Heading>
          </MotionBox>
        </Box>
        <Box key={lines[1]}>
          <MotionBox variants={textVariants1} initial="before" animate="after">
            <Heading fontSize="7xl">
              {lines[1]}
            </Heading>
          </MotionBox>
        </Box>
        <Box key={lines[2]} overflow="hidden">
          <MotionBox variants={textVariants2} initial="before" animate="after">
            <Heading paddingTop={2} color="edward" fontSize="3xl" variant="code">
              {lines[2]}
            </Heading>
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
