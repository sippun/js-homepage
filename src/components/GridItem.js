import { Box, Text, Image, } from '@chakra-ui/react';

export const GridItem = ({ children, thumbnail }) => (
  <Box
    role="group"
    w="100%"
    textAlign="center"
    cursor="pointer"
    pos="relative"
    boxSize="120px"
  >
    <Image
      src={thumbnail}
      alt={children}
      boxSize="full" 
      rounded="md"
      filter="auto"
      _groupHover={{
        brightness: "30%"
      }}
      transition="0.3s"
    />
    <Text
      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
      fontSize={14}
      opacity={0}
      _groupHover={{
        opacity: 1
      }}
      transition="0.3s"
    >
      {children}
    </Text>
  </Box>
);