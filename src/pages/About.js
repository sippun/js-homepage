import {
  Container,
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Tabs, TabList, TabPanels, Tab, TabPanel,

} from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox';

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
                  eudaimonic wellbeing
                </Link>
              </PopoverTrigger>
              .
            </Heading>
            <PopoverContent w="sm">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>eudaimonia // eu·​dai·​mo·​nia</PopoverHeader>
              <PopoverBody>
                “Pursuit of virtue, excellence, and the best within us.”
                As opposed to hedonia, or the pursuit of comfort and pleasure.
                (Which is good too.)<br />
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
          <Heading ml={4} fontSize="lg" fontWeight="light">
            To do that I am improving my tech skills, gaining knowledge, and pursuing my own truth.
          </Heading>
          
          <Tabs mt={6} isFitted colorScheme="accent">
            <TabList>
              <Tab>Tech</Tab>
              <Tab>Generalist</Tab>
              <Tab>Personal</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>
                  I have a BSc. in Computer Science from UCSC, where I <br />
                  1. Short overview, loves to learn <br />
                  2. Academic achievements <br />
                  3. Current Strongest skills <br />
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  1. Love of learning extends beyond tech, to xyz areas <br />
                  2. Communication <br />
                  3. Design <br />
                  4. Business <br />
                  5. etc. <br />
                </p>
              </TabPanel>
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