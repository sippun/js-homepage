import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  VStack,
  HStack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox';
import { aboutData, quotesData } from '../data/AboutData';
import EudaimonicPopover from '../components/EudaimonicPopover';

const About = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="inherit" >
          <Heading mb={3} fontSize="2xl" variant="code">
            About Me
          </Heading>
          <Heading ml={4} fontSize="lg" variant="kanit" fontWeight="light">
            A product person passionately and perpetually perusing publications.
          </Heading>
          <Heading ml={4} fontSize="lg">
            I like to build stuff and read things.<br />
          </Heading>

          <Heading ml={4} fontSize="lg" fontWeight="light" as="span">
            One of my life goals is to develop tools that improve human&nbsp;
          </Heading>
          <EudaimonicPopover />
          <Heading fontSize="lg" fontWeight="light" as="span">
            &nbsp;wellbeing.
          </Heading>
          
          <Tabs mt={6} isFitted colorScheme="accent">
            <TabList borderColor="cleargrey">
              <Tab>Professional</Tab>
              <Tab>Personal</Tab>
              <Tab>Philosophical</Tab>
            </TabList>
            <TabPanels>
              {/* Professional */}
              <TabPanel>
                <VStack h="full" justifyContent="space-between" flexFlow="column">
                  <Button
                    as={Link}
                    rightIcon={<DownloadIcon />}
                    href="jsresume.pdf"
                    target="_blank"
                    alignSelf="end"
                  >
                    Resume
                  </Button>
                  <Box>
                    <p>{aboutData.education}</p>
                    <br />
                    <p>{aboutData.tech}</p>
                  </Box>
                  
                  <StackDivider h={16} />
                  <Button
                    as={ReactLink}
                    to="/works"
                    alignSelf="end"
                  >
                    Works
                  </Button>
                </VStack>
              </TabPanel>
              {/* Personal */}
              <TabPanel>
                <p>{aboutData.interests}</p>
                <br />
                <p>{aboutData.books}</p>
                <HStack
                  position="absolute"
                  bottom="calc((100vh - 64px) * 0.1)"
                  w="95%"
                  pr={4}
                  pb={4}
                  justifyContent="end"
                >
                  <Button as={ReactLink} to="/works">
                    My works
                  </Button>
                  <Button as={ReactLink} to="/readinglist">
                    Reading List
                  </Button>
                </HStack>
              </TabPanel>
              {/* Philosophical */}
              <TabPanel>
                {quotesData.map((q, i) => {
                  return (
                    <Text mb={4} key={i}>
                      <q>{q.quote}</q>
                      &nbsp;&mdash;&nbsp;{q.by}
                    </Text>
                  )
                })
                }
                
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default About;