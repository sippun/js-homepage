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
  Image,
  Text,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
  return (
    <Box px={4}>
      <Container as={Stack} maxW={'6xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Menu>
            <MenuButton
              as={IconButton}
              size={'md'}
              icon={<HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
            />
            <MenuList>
              <MenuItem as={ReactLink} to="/works" zIndex="docked">
                Works
              </MenuItem>
              <MenuItem as={ReactLink} to="/books" zIndex="docked">
                Books
              </MenuItem>
            </MenuList>
          </Menu>
          
          
          <HStack spacing={12} alignItems={'center'}>
            <Link as={ReactLink} to="/" zIndex="docked">
              <HStack spacing={2}>
                <Image
                  boxSize='30px'
                  src='/yot.png'
                  alt='js img'
                />
                <Show above="sm">
                  <Text>Joel Sheng</Text>
                </Show>
              </HStack>
            </Link>
            
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link as={ReactLink} to="/works" zIndex="docked">
                Works
              </Link>
              <Link as={ReactLink} to="/books" zIndex="docked">
                Books
              </Link>
            </HStack>
          </HStack>
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
