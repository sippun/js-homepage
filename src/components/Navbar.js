import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
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
              <MenuItem as={ReactLink} to="/about" zIndex="docked">
                About
              </MenuItem>
              <MenuItem as={ReactLink} to="/works" zIndex="docked">
                Works
              </MenuItem>
              <MenuItem as={ReactLink} to="/readinglist" zIndex="docked">
                Reading List
              </MenuItem>
              <MenuItem as={ReactLink} to="/contact" zIndex="docked">
                Contact
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
                  <Text fontFamily="kanit" fontWeight="bold">Joel Sheng</Text>
                </Show>
              </HStack>
            </Link>
            
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link as={ReactLink} to="/about" zIndex="docked">
                About
              </Link>
              <Link as={ReactLink} to="/works" zIndex="docked">
                Works
              </Link>
              <Link as={ReactLink} to="/readinglist" zIndex="docked">
                Reading List
              </Link>
              <Link as={ReactLink} to="/contact" zIndex="docked">
                Contact
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
