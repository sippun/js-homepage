import { Box, Text, Image, } from '@chakra-ui/react';

export const GridItem = ({ id, title, thumbnail = "logo192.png", setWork }) => {
  
  const clicked = () => {
    setWork(title); 
  };

  return (
    <Box
      role="group"
      w="100%"
      textAlign="center"
      cursor="pointer"
      pos="relative"
      boxSize="80px"
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
        pos="absolute"
        top="5%"
        px={1}
        fontSize={14}
        color="white"
        opacity={0}
        _groupHover={{
          opacity: 1
        }}
        transition="0.3s"
      >
        {title}
      </Text>
    </Box>
  );
};