import { Box, Button, Text, Image, useBreakpointValue } from '@chakra-ui/react';

export const GridItem = ({ id, title, thumbnail = "logo192.png", setWork }) => {
  
  const clicked = () => {
    setWork(id); 
  };

  return (
    <Box
      as={Button}
      p={0}
      role="group"
      w="100%"
      cursor="pointer"
      pos="relative"
      boxSize={useBreakpointValue({base:"60px", sm:"80px"})}
      onClick={clicked}
    >
      <Image
        src={thumbnail}
        alt={title}
        boxSize="full" 
        rounded="md"
        filter="auto"
        _groupHover={{
          brightness: "30%"
        }}
        transition="0.3s"
      />
      <Text
        w="inherit"
        pos="absolute"
        top="5%"
        px={1}
        fontSize={14}
        fontWeight="medium"
        color="white"
        opacity={0}
        _groupHover={{
          opacity: 1
        }}
        transition="0.3s"
        align="center"
        whiteSpace="normal"
      >
        {title}
      </Text>
    </Box>
  );
};