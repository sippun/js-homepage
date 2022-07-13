import { Button, Container, Center } from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';
import { Link as ReactLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <Center h="calc((100vh - 64px) * 0.8)">
          Not Found
          <Button as={ReactLink} to="/">
            Home
          </Button>
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default NotFound;
