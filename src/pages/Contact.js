import {
  Button,
  Container,
  Center,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { CopyIcon, EmailIcon } from '@chakra-ui/icons';
import { LayoutTransitions } from '../theme/Transitions';

const Home = () => {

  const copyDiscord = () => {
    navigator.clipboard.writeText("sippy#8480").then(() => {
      //alert("Copied sippy#8480 to clipboard");
  });
  }
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <Center h="calc((100vh - 64px) * 0.8)">
          <VStack>
            <Heading>Get in touch</Heading>
            <HStack>
              <Text>Email:</Text>
              <Button
                as={Link}
                href="mailto:joel.s.sheng@gmail.com"
                rightIcon={<EmailIcon />}
              >
                joel.s.sheng@gmail.com
              </Button>
            </HStack>
            <HStack>
              <Text>Discord: </Text>
              <Popover placement="top">
                <PopoverTrigger>
                  <Button
                    rightIcon={<CopyIcon />}
                    onClick={copyDiscord}
                  >
                    sippy#8480
                  </Button>
                </PopoverTrigger>
                <PopoverContent bg="cleargrey" border="none">
                  <PopoverArrow />
                  <PopoverBody>
                    Copied sippy#8480 to clipboard
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </HStack>
          </VStack>
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
