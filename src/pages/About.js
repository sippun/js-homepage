import {
  Container,
  Heading,
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
            Product person passionately, perennially, perpetually perusing publications.
          </Heading>
          <Heading ml={4} fontSize="lg" fontWeight="light">
            <b>I like to build stuff and read things. </b><br />
            One of my life goals: develop tools that improve human eudaimonic wellbeing.
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
                  Currently working mostly with JavaScript and React. <br />
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
                  1. Have a wide array of hobbies <br />
                  2. Martial Arts <br />
                  3. Reading <br />
                  4. Rhythm Games <br />
                  5. Skateboarding <br />
                  6. etc. <br />
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