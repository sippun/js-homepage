import { Box, Container, Center, Text } from '@chakra-ui/react';
import WorksModal from '../components/WorksModal';
import Transitions from '../theme/Transitions';

const Works = () => {
  return (
    <Transitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <Box
          maxW="container.md"
          h="30%"
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
        <Box
          maxW="container.md"
          h="60%"
          marginTop={4}
          bgColor="RGBA(69, 86, 102, 0.3)"
          borderRadius="lg"
        >
          
        </Box>
      </Container>
    </Transitions>
  );
};

export default Works;
