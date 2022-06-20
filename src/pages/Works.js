import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { GridItem } from '../components/GridItem';
import { worksData } from '../data/WorksData';

const Works = () => {

  const showWorkInit = () => {
    return worksData.find(({ id }) => id === "js-homepage");
  };
  const[showWork, setShowWork] = useState(showWorkInit());

  const changeWork = (set) => {
    setShowWork(worksData.find(({ id }) => id === set));
  };

  const gridWorkIcons = worksData.map((work) => {
    return (
      <GridItem
        key={work.id}
        id={work.id}
        title={work.title}
        thumbnail={work.thumbnail}
        setWork={changeWork}
      />
    );
  });

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
            {showWork.title}
          </Heading>
          <Stack direction={{ base: 'column', sm: 'row'}} spacing='24px'>
            <Stack direction="column">
              <Box w='300px' h='200px' bg='aqua' mb={1}>
                Image here
              </Box>
              <Flex flexFlow="row wrap" w="300px" h="inherit">
                {showWork.stack.map((tech) => {
                  return(
                    <Tag w="fit-content" mr={4} mt={2}>
                      {tech}
                    </Tag>
                  );
                })}
              </Flex>
              
            </Stack>
            <VStack>
              <Text>
                {showWork.description}
              </Text>
            </VStack>
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
                {gridWorkIcons}
              </SimpleGrid>
            </Box>
          </Box>
        </SectionTransitions>
        
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
