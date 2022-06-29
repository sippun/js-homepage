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
      <HStack justifyContent="space-evenly">
        <Show above="md">
          <NavLeft target="/about" />
        </Show>
        <Container h={"calc(100vh - 64px)"} maxW="container.md" p={0}>
          <ContentBox
            maxW="container.md"
            h="calc((100vh - 64px) * 0.65)"
          >
            {worksData.map(work => {
              return (
                <WorksCard key={work.id} data={work} isSelected={work.id === showWork}/>
              );
            })}
          </ContentBox>

          <SectionTransitions delay={0.25}>
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
        <Show above="md">
          <NavRight target="/readinglist" />
        </Show>
      </HStack>
    </LayoutTransitions>
  );
};

export default Works;
