import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Circle,
  Box,
  Flex,
  Link,
  Container,
  Stack,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg='brand.400' px={4}>
      <Container as={Stack} maxW={'6xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={12} alignItems={'center'}>
          <Link as={ReactLink} to="/">
            <HStack spacing={2}>
              
                <Circle size='30px' bg='white'>
                  {/* logo img goes here */}
                </Circle>
                <Text>Joel Sheng</Text>
              
            </HStack>
            </Link>
            
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link as={ReactLink} to="/works">
                Works
              </Link>
              <Link as={ReactLink} to="/books">
                Books
              </Link>
            </HStack>
          </HStack>
          <ColorModeSwitcher />
        </Flex>
      </Container>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link as={ReactLink} to="/works">
              Works
            </Link>
            <Link as={ReactLink} to="/books">
              Books
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
