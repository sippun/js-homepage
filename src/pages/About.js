import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  VStack,
  HStack,
  Show,
  Text,
  Tag,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox';
import { aboutData, quotesData } from '../data/AboutData';
import EudaimonicPopover from '../components/EudaimonicPopover';
import { NavLeft, NavRight } from '../components/NavArrowButtons';

const About = () => {
  return (
    <LayoutTransitions>
      <HStack justifyContent="space-evenly">
        <Show above="md">
          <SectionTransitions delay={0.25}>
            <NavLeft target="/" />
          </SectionTransitions>
        </Show>
        <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
          <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="inherit" >
            <Heading mb={3} fontSize="2xl" variant="code">
              About Me
            </Heading>
            <Heading ml={4} fontSize="lg" variant="kanit" fontWeight="light">
              A product person pleasingly and perpetually perusing publications.
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
                    <HStack w="full" justifyContent="space-between">
                      <HStack>
                        {aboutData.skills.map((skill) => {
                          return(
                            <Tag key={skill} w="fit-content">
                              {skill}
                            </Tag>
                          );
                        })}
                      </HStack>
                      <Button
                        as={Link}
                        rightIcon={<DownloadIcon />}
                        href="jsresume.pdf"
                        target="_blank"
                        alignSelf="end"
                      >
                        Resume
                      </Button>
                    </HStack>
                    <Box>
                      <p>{aboutData.history}</p>
                      <br/>
                      <p>{aboutData.recent}</p>
                    </Box>
                  </VStack>
                </TabPanel>
                {/* Personal */}
                <TabPanel>
                  <p>{aboutData.interests}</p>
                  <br />
                  <p>{aboutData.books}</p>
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
        <Show above="md">
          <SectionTransitions delay={0.25}>
            <NavRight target="/works" />
          </SectionTransitions>
        </Show>
      </HStack>
    </LayoutTransitions>
  );
};

export default About;