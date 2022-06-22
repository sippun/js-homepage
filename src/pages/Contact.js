import { Button, Container, Center, Link } from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';

const Home = () => {

  const copyDiscord = () => {
    navigator.clipboard.writeText("sippy#8480").then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      alert("Copied sippy#8480 to clipboard");
  });
  }
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <Center h="calc((100vh - 64px) * 0.8)">
          Get in touch
          <Button as={Link} href="mailto:joel.s.sheng@gmail.com">
            Email
          </Button>
          <Button onClick={copyDiscord}>
            Discord
          </Button>
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
