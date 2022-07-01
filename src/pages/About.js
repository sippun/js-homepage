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
                <Tab fontSize={{base: "xs", md: "md"}}>Professional</Tab>
                <Tab fontSize={{base: "xs", md: "md"}}>Personal</Tab>
                <Tab fontSize={{base: "xs", md: "md"}}>Philosophical</Tab>
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
                      <>
                      <Text
                        key={i}
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
                      </>
                    )
                  })
                  }
                  
                </TabPanel>
              </TabPanels>
            </Tabs>
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