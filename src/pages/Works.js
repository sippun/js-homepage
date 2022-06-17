import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
} from '@chakra-ui/react';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { GridItem } from '../components/GridItem';
import DescriptionCard from '../components/DescriptionCard';

const Works = () => {
  const[showWork, setShowWork] = useState("js-homepage");

  return (
    <LayoutTransitions>
      <Container h={"calc(100vh - 64px)"} maxW="inherit" p={0}>
        <Box
          maxW="container.md"
          h="calc((100vh - 64px) * 0.6)"
          bgColor="RGBA(69, 86, 102, 0.3)"
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
          <Heading fontSize="2xl" mb={3} variant="code">
            {showWork}
          </Heading>
          <Stack direction={{ base: 'column', sm: 'row'}} spacing='24px'>
            <Stack direction="column">
              <Box w='300px' h='200px' bg='aqua'>
                Image here
              </Box>
              <Text>
                Tech Stack here
              </Text>
            </Stack>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Stack>
          
          
        </Box>
        <SectionTransitions delay={0.1}>
          <Box
            maxW="inherit"
            h="calc((100vh - 64px) * 0.25)"
            marginTop="calc((100vh - 64px) * 0.05)"
            bgColor="RGBA(69, 86, 102, 0.3)"
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
            <Heading fontSize="2xl" mb={3} variant="code">
              Works
            </Heading>
            <Box flex={1} alignItems="center">
              <SimpleGrid
                flex={1}
                rows={{base: 3, sm: 1}}
                columns={{base: 3, sm:6}}
                spacingX={[4, 8]}
                spacingY={8}
              >
                <GridItem
                  id="js-homepage"
                  title="js-homepage"
                  thumbnail="yot.png"
                  setWork={setShowWork}
                />
                <GridItem
                  id="sad"
                  title="work work sadface"
                  thumbnail="workwork.png"
                  setWork={setShowWork}
                />
                <GridItem
                  id="smug"
                  title="sleep sleep smugface"
                  thumbnail="smug.jpg"
                  setWork={setShowWork}
                />
                <GridItem
                  id="ezorg"
                  title="EZOrg"
                  setWork={setShowWork}
                />
                <GridItem
                  id="elevate"
                  title="Elevate"
                  setWork={setShowWork}
                />
              </SimpleGrid>
            </Box>
          </Box>
        </SectionTransitions>
        
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
