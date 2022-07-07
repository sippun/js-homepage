import { Container, Center } from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox'; 
import { GOOGLE_API_KEY } from '../keys';

const Home = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <ContentBox>
          
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
