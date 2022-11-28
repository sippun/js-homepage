import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
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
  Wrap, WrapItem,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox';
import { aboutData, quotesData } from '../data/AboutData';
import EudaimonicPopover from '../components/about/EudaimonicPopover';
import SDTPopover from '../components/about/SDTPopover';
import { NavLeft, NavRight } from '../components/NavArrowButtons';
import { TechTag } from '../components/TechTag';
//import { Markup } from 'interweave';
import ActualizationPopover from '../components/about/ActualizationPopover';
import FavBooks from '../components/about/FavBooks';

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const footerLinks = () => {
    return(
      <VStack w="full">
        { tabIndex === 0 ?
          <HStack w="full" justifyContent="flex-end">
            <Text>See my</Text>
            <Button as={ReactLink} to="/works">Works</Button>
          </HStack> :
          tabIndex === 1 ?
          <HStack w="full" justifyContent="flex-end">
            <Text>See my</Text>
            <Button as={ReactLink} to="/readinglist">Reading List</Button>
          </HStack> :
          <></>
        }
        <Box w="full" h="4px"/>
      </VStack>
    );
  }

  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <HStack justifyContent="space-evenly">
          <Show above="md">
            <SectionTransitions delay={0.25}>
              <Box
                h="calc((100vh - 64px) * 0.95)"
                w={{md: "calc(((100vw - 768px) / 2) - 8px)", xl: "248px"}}
                ml="8px"
              >
                <NavLeft target="/" />
              </Box>
            </SectionTransitions>
          </Show>
          <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="container.md" >
            <VStack h="full" justifyContent="space-between">
              <Box>
                <Heading mb={3} fontSize="2xl" variant="code">
                  About Me
                </Heading>
                <Box pl={4}>
                  <Heading fontSize="lg" variant="kanit" fontWeight="light">
                    A product person perpetually and pleasingly perusing publications.
                  </Heading>
                  <Heading fontSize="lg">
                    I like to build stuff and read things.<br />
                  </Heading>
                  <Heading fontSize="lg" fontWeight="light" as="span">
                    One of my life goals is to develop tools that improve human {' '}
                  </Heading>
                  <EudaimonicPopover />
                  <Heading fontSize="lg" fontWeight="light" as="span">
                    wellbeing.
                  </Heading>
                </Box>
                
                <Tabs mt={6} isFitted colorScheme="accent" index={tabIndex} onChange={handleTabsChange}>
                  <TabList borderColor="cleargrey">
                    <Tab fontSize={{base: "xs", md: "md"}}>Professional</Tab>
                    <Tab fontSize={{base: "xs", md: "md"}}>Personal</Tab>
                    <Tab fontSize={{base: "xs", md: "md"}}>Philosophical</Tab>
                  </TabList>
                  <TabPanels>
                    {/* Professional */}
                    <TabPanel>
                      <VStack h="full" justifyContent="space-between" flexFlow="column">
                        <HStack w="full" justifyContent="space-between">
                          <Wrap>
                            {aboutData.skills.map((skill) => {
                              return(
                                <WrapItem key={skill}>
                                  <TechTag>{skill}</TechTag>
                                </WrapItem>
                              );
                            })}
                          </Wrap>
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
                          <br />
                          <p>{aboutData.goal}</p>
                          <Box ml={8} mt={2}>
                            {/* <Markup content={aboutData.domains} /> */}
                            <ul>
                              <li>Learn and acquire knowledge.</li>
                              <li>Gain <SDTPopover />.</li>
                              <li>Move towards <ActualizationPopover />.</li>
                              <li>Improve their physical and/or mental health.</li>
                            </ul>
                          </Box>
                        </Box>
                      </VStack>
                    </TabPanel>
                    {/* Personal */}
                    <TabPanel>
                      <p>{aboutData.interests}</p>
                      <br />
                      <p>{aboutData.books}</p>
                      <br />
                      <FavBooks />
                    </TabPanel>
                    {/* Philosophical */}
                    <TabPanel>
                      {quotesData.map((q, i) => {
                        return (
                          <Box key={q.quote.substring(0, 8)}>
                            <Text
                              fontFamily={q.font}
                              fontSize={q.size}
                              fontStyle={q.style}
                            >
                              <q>{q.quote}</q>
                            </Text>
                            <Text
                              mb={8}
                              mr={1}
                              textAlign="end"
                              fontFamily={q.font}
                              fontStyle={q.style}
                              fontSize="1rem"
                            >
                              &mdash;&nbsp;{q.by}
                            </Text>
                          </Box>
                        )
                      })
                      }
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              {/* <HStack w="full" justifyContent="flex-end">
                <Button>{tabIndex}</Button>
              </HStack> */}
              {footerLinks()}
            </VStack>
          </ContentBox>
          <Show above="md">
            <SectionTransitions delay={0.25}>
              <Box 
                h="calc((100vh - 64px) * 0.95)"
                w={{md: "calc(((100vw - 768px) / 2) - 8px)", xl: "248px"}}
                mr="8px"
              >
                <NavRight target="/works" />
              </Box>
            </SectionTransitions>
          </Show>
        </HStack>
      </Container>
    </LayoutTransitions>
  );
};

export default About;