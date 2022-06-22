import { Button, Container, Center } from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';

const Home = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <Center h="calc((100vh - 64px) * 0.8)">
          Contact
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
