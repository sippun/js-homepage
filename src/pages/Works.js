import { Container, Center, Text } from '@chakra-ui/react';
import Transitions from '../theme/Transitions';

const Works = () => {
  return (
    <Transitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <Center h="full">
          <Text>
            Works Coming Soon.
          </Text>
        </Center>
      </Container>
    </Transitions>
  );
};

export default Works;
