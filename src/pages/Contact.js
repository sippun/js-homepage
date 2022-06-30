import {
  Button,
  Container,
  Center,
  Link,
  VStack,
  HStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { CopyIcon, EmailIcon } from '@chakra-ui/icons';
import { LayoutTransitions } from '../theme/Transitions';

const Home = () => {
  const toast = useToast();

  const copy = (option) => {
    let text = "";
    if (option === "email") text = "joel.s.sheng@gmail.com";
    if (option === "discord") text = "sippy#8480";
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied '" + text + "' to clipboard",
        status: "success",
        variant: "subtle",
        duration: 2000,
      })
    });
  }

  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.md" p={0}>
        <Center h="calc((100vh - 64px) * 0.8)">
          <VStack w="sm" spacing={8}>
            <Heading>Get in touch</Heading>
            <HStack w="full" justifyContent="space-between">
              <Text alignSelf="start" mt={2}>Email:</Text>
              <VStack>
                <Button
                  //value="email"
                  rightIcon={<CopyIcon />}
                  onClick={() => copy("email")}
                  //onClick={(e) => copy(e.target.value)}
                >
                  joel.s.sheng@gmail.com
                </Button>
                <Button
                  as={Link}
                  href="mailto:joel.s.sheng@gmail.com"
                  rightIcon={<EmailIcon />}
                  alignSelf="end"
                >
                  Send email
                </Button>
              </VStack>
            </HStack>
            <HStack w="full" justifyContent="space-between">
              <Text>Discord: </Text>
              <Button
                rightIcon={<CopyIcon />}
                onClick={() => copy("discord")}
              >
                sippy#8480
              </Button>
            </HStack>
          </VStack>
        </Center>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
