import {
  Box,
  Button,
  Image,
  Heading,
  Stack,
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { TechTag } from '../TechTag';
import { ContentTransitions } from "../../theme/Transitions";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { GithubIcon } from '../icons/GithubIcon';

const WorksCard = ({ data, isSelected }) => {

  const url = "images/works/" + data.image;

  return (
    <ContentTransitions key ={isSelected}>
      <Box hidden={!isSelected} h="calc((100vh - 64px) * 0.6)" pb={2}>
        <Heading fontSize="2xl" mb={3} variant="code">
          {data.title}
        </Heading>
        <Stack direction={{ base: 'column', sm: 'row'}} spacing='24px' h="full">
          <Stack direction="column">
            <Box w='300px' h='200px' bg='aqua' mb={1}>
            <Image  w='300px' h='200px' src={url} fit="cover" objectPosition="center" />
            </Box>
            <Wrap spacing={3}>
              {data.stack.map((tech) => {
                return(
                  <WrapItem key={tech}>
                    <TechTag>{tech}</TechTag>
                  </WrapItem>
                );
              })}
            </Wrap>
            
          </Stack>
          <VStack justifyContent="space-between" w="full">
            <Text color={useColorModeValue("#3e4444", "#dee3e3")}>
              {data.description.map((desc, i) => {
                return(<Text key={i}>{desc}</Text>);
              })}
            </Text>
            <HStack w="full" justifyContent="flex-end">
              {data.github === "" ? <></> :
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  <Button 
                    rightIcon={<GithubIcon />}
                    order="1"
                  >
                    Source
                  </Button>
                </a>
              }
              {data.link === "" ? <></> :
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    rightIcon={<ExternalLinkIcon />}
                    order="1"
                  >
                    Link
                  </Button>
                </a>
              }
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </ContentTransitions>
  );
};

export default WorksCard;
