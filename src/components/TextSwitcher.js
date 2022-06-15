import React, { useState } from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const TextSwitcher = (props) => {
  const [index, setIndex] = useState(0);
  const imaColor = useColorModeValue("edwarddark", "edward");

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const switchText = () => {
    if (index < props.texts.length - 1) setIndex(index + 1);
    else setIndex(0);
  }

  return(
    <>
      <motion.div
        key={vowels.includes(props.texts[index].charAt(0)).toString() + index}
        initial={{ x: 124, opacity: 0.6 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading color={imaColor} fontSize={["xl", "3xl"]} variant="code">
          {vowels.includes(props.texts[index].charAt(0)) ? props.intro[0] : props.intro[1]}
        </Heading>
      </motion.div>
      <motion.div
        key={index}
        initial={{ x: 0, opacity: 0.6}}
        animate=
          {vowels.includes(props.texts[index].charAt(0)) ? (
            { x: 124, opacity: 1 }
          ) : (
            { x: 106, opacity: 1 }
          )}
        transition={{ duration: 1 }}
      >
        <Heading
          bg="aqua"
          ml={2}
          px={2}
          color={imaColor}
          fontSize={["xl", "3xl"]}
          variant="code"
          onClick={switchText}
          cursor="pointer"
          _hover={{bg: "canary"}}
        >
          &lt;{props.texts[index]}&gt;
        </Heading>
      </motion.div>
    </>
  );
};