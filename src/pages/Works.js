import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
  Stack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { GridItem } from '../components/GridItem';
import { ContentBox } from '../components/ContentBox';
import { worksData } from '../data/WorksData';
import { GithubIcon } from '../components/GithubIcon';

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

  const workImage = () => {
    var url = "images/works/" + showWork.image;
    return (<Image  w='300px' h='200px' src={url} fit="cover" objectPosition="center">

    </Image>)
  }

  return (
    <LayoutTransitions>
      <Container h={"calc(100vh - 64px)"} maxW="inherit" p={0}>
        <ContentBox
          maxW="container.md"
          h="calc((100vh - 64px) * 0.65)"
        >
          <Heading fontSize="2xl" mb={3} variant="code">
            {showWork.title}
          </Heading>
          <Stack direction={{ base: 'column', sm: 'row'}} spacing='24px'>
            <Stack direction="column">
              <Box w='300px' h='200px' bg='aqua' mb={1}>
                {workImage()}
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
            <VStack justifyContent="space-between" w="full">
              <Text color={useColorModeValue("#3e4444", "#dee3e3")}>
                {showWork.description}
              </Text>
              <HStack w="full" justifyContent="flex-end" pr={2}>
                {showWork.github === "" ? <></> :
                  <a href={showWork.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      rightIcon={<GithubIcon />}
                      order="1"
                    >
                      Source
                    </Button>
                  </a>
                }
                {showWork.link === "" ? <></> :
                  <a href={showWork.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      rightIcon={<ExternalLinkIcon />}
                      order="1"
                    >
                      Link
                    </Button>
                  </a>
                }
              </HStack>
            </VStack>
          </Stack>
        </ContentBox>

        <SectionTransitions delay={0.1}>
          <ContentBox
            maxW="inherit"
            h="calc((100vh - 64px) * 0.25)"
            marginTop="calc((100vh - 64px) * 0.05)"
          >
            <Heading fontSize="2xl" mb={3} variant="code">
              Works
            </Heading>
            <Box flex={1} alignItems="center">
              <SimpleGrid
                flex={1}
                rows={{base: 3, sm: 1}}
                columns={{base: 4, sm:6}}
                spacingX={{base: 2, sm: 8}}
                spacingY={8}
              >
                {gridWorkIcons}
              </SimpleGrid>
            </Box>
          </ContentBox>
        </SectionTransitions>
        
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
