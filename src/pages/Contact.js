import {
  Box,
  Button,
  Container,
  Center,
  Link,
  VStack,
  HStack,
  Heading,
  Show,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { CopyIcon, EmailIcon, LinkIcon } from '@chakra-ui/icons';
import { DiscordIcon } from '../components/icons/DiscordIcon';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { NavLeft } from '../components/NavArrowButtons';

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
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0}>
        <HStack>
          <Show above="md">
              <SectionTransitions delay={0.25}>
                <Box 
                  h="calc((100vh - 64px) * 0.95)"
                  w={{md: "calc(((100vw - 768px) / 2) - 8px)", xl: "248px"}}
                  ml="8px"
                >
                  <NavLeft target="/readinglist" />
                </Box>
              </SectionTransitions>
            </Show>
            <Container h="calc(100vh - 64px)" maxW="container.md" px={8}>
              <Center h="calc((100vh - 64px) * 0.8)">
                <VStack w="full" spacing={8}>
                  <Heading>Get in touch</Heading>
                  <HStack w="full" justifyContent="space-between">
                    <Text alignSelf="start" mt={2}>Email:</Text>
                    <Stack
                      direction={{ base: "column", sm: "row"}}
                      alignItems="end"
                    >
                      <Button
                        //value="email"
                        rightIcon={<CopyIcon />}
                        onClick={() => copy("email")}
                        //onClick={(e) => copy(e.target.value)}
                        variant="default"
                      >
                        joel.s.sheng@gmail.com
                      </Button>
                      <Button
                        as={Link}
                        href="mailto:joel.s.sheng@gmail.com"
                        rightIcon={<EmailIcon />}
                      >
                        Send email
                      </Button>
                    </Stack>
                  </HStack>
                  <HStack w="full" justifyContent="space-between">
                    <Text alignSelf="start" mt={2}>Discord: </Text>
                    <Stack
                      direction={{ base: "column", sm: "row"}}
                      alignItems="end"
                    >
                      <Button
                        rightIcon={<CopyIcon />}
                        onClick={() => copy("discord")}
                      >
                        sippy#8480
                      </Button>
                      <Button
                        as={Link}
                        href="discord:///discord.com/users/sippy#8480"
                        rightIcon={<DiscordIcon />}
                        alignSelf="end"
                      >
                        Add discord
                      </Button>
                    </Stack>
                  </HStack>
                  <HStack w="full" justifyContent="space-between">
                    <Text alignSelf="start" mt={2}>See more: </Text>
                    <Button
                      as={Link}
                      href="https://links.joelsheng.com"
                      rel="noreferrer noopener"
                      rightIcon={<LinkIcon />}
                      alignSelf="end"
                    >
                      Visit my links page
                    </Button>
                  </HStack>
                </VStack>
              </Center>
            </Container>
            <Show above="md">
              <SectionTransitions delay={0.25}>
                <Box 
                  h="calc((100vh - 64px) * 0.95)"
                  w={{md: "calc(((100vw - 768px) / 2) - 8px)", xl: "248px"}}
                  ml="8px"
                >
                </Box>
              </SectionTransitions>
            </Show>       
          </HStack>
        </Container>
    </LayoutTransitions>
    
  );
};

export default Home;
