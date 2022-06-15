import { Box, Container, Center, Heading, Text } from '@chakra-ui/react';
import WorksModal from '../components/WorksModal';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { GridItem } from '../components/GridItem';

const Works = () => {
  return (
    <LayoutTransitions>
      <Container h={"calc(100vh - 64px)"} maxW="container.xl" p={0}>
        <Box
          maxW="container.md"
          h="calc((100vh - 64px) * 0.3)"
          bgColor="RGBA(69, 86, 102, 0.3)"
          borderRadius="lg"
        >
          <Center h="full">
            <Text>
              Works Coming Soon.
            </Text>
            <WorksModal />
          </Center>
        </Box>
        <SectionTransitions delay={0.1}>
          <Box
            maxW="container.md"
            h="calc((100vh - 64px) * 0.6)"
            marginTop="calc((100vh - 64px) * 0.05)"
            bgColor="RGBA(69, 86, 102, 0.3)"
            borderRadius="lg"
            px={4}
            py={2}
            overflow="auto"
          >
            <Heading fontSize="2xl">
              Works
            </Heading>
            <GridItem id="inkdrop" title="Inkdrop" thumbnail="workwork.png">
              Work work sadface
            </GridItem>
            
          </Box>
        </SectionTransitions>
        
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
