import { Box, useColorModeValue } from '@chakra-ui/react';

const ContentBox = (props) => {
  
  return (
    <Box
      maxW={props.maxW}
      h={props.h}
      marginTop={props.marginTop}
      bgColor={useColorModeValue("RGBA(171, 186, 201, 0.3)", "RGBA(69, 86, 102, 0.3)")}
      borderRadius="lg"
      px={4}
      py={2}
      overflow="auto"
      __css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: "gray.400",
          borderRadius: '24px',
        },
      }}
    >
      {props.children}
    </Box>
  )
}

export { ContentBox };