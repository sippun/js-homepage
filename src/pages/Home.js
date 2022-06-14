import { Container, Center, Text } from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';
import { IntroText } from '../components/IntroText';

const Home = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <Center h="calc((100vh - 64px) * 0.8)">
          <IntroText />
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
