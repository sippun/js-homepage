import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox';
import { aboutData } from '../data/AboutData';
import EudaimonicPopover from '../components/EudaimonicPopover';

const About = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <ContentBox h="calc((100vh - 64px) * 0.9)" maxW="inherit" >
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
            <TabList>
              <Tab>For employers</Tab>
              <Tab>For collaborators</Tab>
              <Tab>For the curious</Tab>
            </TabList>
            <TabPanels>
              {/* For employers */}
              <TabPanel>
                <VStack h="full" justifyContent="space-between">
                  <Box>
                    <p>{aboutData.education}</p>
                    <br />
                    <p>{aboutData.tech}</p>
                  </Box>
                  {/* button positions forced now, fix later */}
                  <HStack
                    position="absolute"
                    bottom="calc((100vh - 64px) * 0.1)"
                    w="full" 
                    pr={4}
                    pb={4}
                    justifyContent="end"
                  >
                    <Button as={ReactLink} to="/works">
                      My works
                    </Button>
                    <Button
                      as={Link}
                      rightIcon={<DownloadIcon />}
                      href="jsresume.pdf"
                      target="_blank"
                    >
                      Resume
                    </Button>
                  </HStack>
                </VStack>
              </TabPanel>
              {/* For collaborators */}
              <TabPanel>
                <p>{aboutData.interests}</p>
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
              {/* For the curious */}
              <TabPanel>
                <p>
                  Currently on the dilettante to polymath pipeline.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default About;