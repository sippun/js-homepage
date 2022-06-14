import { Box, Container, Center, Text } from '@chakra-ui/react';
import WorksModal from '../components/WorksModal';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';

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
          >
            <Center h="full">
              <Text>
                Content Section.
              </Text>
              <WorksModal />
            </Center>
          </Box>
        </SectionTransitions>
        
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
