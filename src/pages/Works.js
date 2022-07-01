import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  HStack,
  Show,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  LayoutTransitions,
  SectionTransitions
} from '../theme/Transitions';
import { GridItem } from '../components/GridItem';
import { ContentBox } from '../components/ContentBox';
import WorksCard from '../components/WorksCard';
import { worksData } from '../data/WorksData';
import { NavLeft, NavRight } from '../components/NavArrowButtons';

const Works = () => {

  // const showWorkInit = () => {
  //   return worksData.find(({ id }) => id === "js-homepage");
  // };
  //const[showWork, setShowWork] = useState(showWorkInit());
  const[showWork, setShowWork] = useState("js-homepage");

  const changeWork = (set) => {
    //setShowWork(worksData.find(({ id }) => id === set));
    setShowWork(set);
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
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <HStack justifyContent="space-evenly">
          <Show above="md">
            <SectionTransitions delay={0.25}>
              <Box 
                h="calc((100vh - 64px) * 0.95)"
                w={{md: "calc(((100vw - 768px) / 2) - 8px)", xl: "248px"}}
                ml="8px"
              >
                <NavLeft target="/about" />
              </Box>
            </SectionTransitions>
          </Show>
          <Container maxW="container.md" p={0}>
            <ContentBox
              maxW="container.md"
              h="calc(((100vh - 64px) * 0.70) - 8px)"
            >
              {worksData.map(work => {
                return (
                  <WorksCard key={work.id} data={work} isSelected={work.id === showWork}/>
                );
              })}
            </ContentBox>

            <SectionTransitions delay={0.5}>
              <ContentBox
                maxW="inherit"
                h="calc((100vh - 64px) * 0.25)"
                marginTop="8px"
              >
                <Heading fontSize="2xl" mb={3} variant="code">
                  Works
                </Heading>
                <Box h="calc(100% - 3rem)" alignItems="center">
                  <SimpleGrid
                    h="full"
                    alignItems="center"
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
          <Show above="md">
            <SectionTransitions delay={0.25}>
              <Box 
                h="calc((100vh - 64px) * 0.95)"
                w={{md: "calc(((100vw - 768px) / 2) - 8px)", xl: "248px"}}
                mr="8px"
              >
                <NavRight target="/readinglist" />
              </Box>
            </SectionTransitions>
          </Show>
        </HStack>
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
