import { Container, Center, Text } from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';

const Home = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <Center h="full">
          <Text>
            Coming Soon.
          </Text>
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
