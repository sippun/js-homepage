import { Box, Text, useColorModeValue } from '@chakra-ui/react';


const TechTag = (props) => {
  const tagColor = useColorModeValue("clearergrey", "whiteAlpha.300");

  return (
    <Box
      w="fit-content"
      py={0.5}
      px={2}
      bg={tagColor}
      borderRadius="md"
    >
      <Text fontSize="sm">
        {props.children}
      </Text>
    </Box>
  )
}

export { TechTag };