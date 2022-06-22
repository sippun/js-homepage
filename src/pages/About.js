import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox';
import { aboutData } from '../data/AboutData';

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
          <Popover variant="definition">
            <Heading ml={4} fontSize="lg" fontWeight="light" as="span">
              One of my life goals is to develop tools that improve human&nbsp;
              <PopoverTrigger>
                <Link color="accent.300" fontWeight="350">
                  eudaimonic
                </Link>
              </PopoverTrigger>
              &nbsp;wellbeing.
            </Heading>
            <PopoverContent w="sm">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>eudaimonic // eu·​dai·​mo·​nic</PopoverHeader>
              <PopoverBody>
                Relating to the “pursuit of virtue, excellence, and the best within us.”
                As opposed to hedonic, or the pursuit of comfort and pleasure.
                (Which is also good.)<br />
                <Link
                  color='accent.300'
                  href='https://positivepsychology.com/eudaimonia/'
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://positivepsychology.com/eudaimonia/
                </Link>
                <br />
                <Link
                  color='accent.300'
                  href='https://www.researchgate.net/publication/258819690_Eudaimonia_and_Its_Distinction_from_Hedonia_Developing_a_Classification_and_Terminology_for_Understanding_Conceptual_and_Operational_Definitions'
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Huta, V., &amp; Waterman, A. S. (2014)
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          
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