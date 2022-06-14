import React, { useState } from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

export const TextSwitcher = (props) => {
  const [index, setIndex] = useState(0);
  const imaColor = useColorModeValue("edwarddark", "edward");

  const switchText = () => {
    console.log('clicked ' + index);
    if (index < props.texts.length - 1) setIndex(index + 1);
    else setIndex(0);
  }

  return(
    <Heading
      bg="canary"
      ml={2}
      px={2}
      as="span"
      color={imaColor}
      fontSize={["lg", "3xl"]}
      variant="code"
      onClick={switchText}
      cursor="pointer"
      _hover={{bg: "edwarddark"}}
    >
      {props.texts[index]}
    </Heading>
  );
};