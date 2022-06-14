import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { MotionBox } from './animation'

const lines = ['One Line', 'at a time', 'from the Top']

const containerVariants = {
  before: {},
  after: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

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
}

const lineContainerVariants = {
  before: {},
  after: {
    transition: {
      delayChildren: 0.3 * 3,
    },
  },
}

const lineVariants = {
  before: {
    opacity: 0,
    width: 0,
  },
  after: {
    opacity: 1,
    width: '40%',
    transition: {ease: 'easeIn', duration: 0.2},
  },
}

export const MultiLineChildren = () => {
  return (
    <Container>
      <MotionBox variants={containerVariants} initial="before" animate="after">
        {lines.map((line) => (
          <Box key={line} overflow="hidden">
            <MotionBox variants={textVariants} initial="before" animate="after">
              {line}
            </MotionBox>
          </Box>
        ))}
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
            left="50%"
            height="2px"
            bg="whiteAlpha.800"
          />
          <MotionBox
            variants={lineVariants}
            initial="before"
            animate="after"
            position="absolute"
            right="50%"
            height="2px"
            bg="whiteAlpha.800"
          />
        </MotionBox>
      </MotionBox>
    </Container>
  )
}
