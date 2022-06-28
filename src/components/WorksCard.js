import {
  Box,
  Button,
  Image,
  Heading,
  Stack,
  Flex,
  Tag,
  VStack,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContentTransitions } from "../theme/Transitions";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { GithubIcon } from './GithubIcon';

const WorksCard = ({ data, isSelected }) => {

  const url = "images/works/" + data.image;

  return (
    <ContentTransitions key ={isSelected}>
    <Box hidden={!isSelected}>
      <Heading fontSize="2xl" mb={3} variant="code">
        {data.title}
      </Heading>
      <Stack direction={{ base: 'column', sm: 'row'}} spacing='24px'>
        <Stack direction="column">
          <Box w='300px' h='200px' bg='aqua' mb={1}>
          <Image  w='300px' h='200px' src={url} fit="cover" objectPosition="center" />
          </Box>
          <Flex flexFlow="row wrap" w="300px" h="inherit">
            {data.stack.map((tech) => {
              return(
                <Tag w="fit-content" mr={4} mt={2}>
                  {tech}
                </Tag>
              );
            })}
          </Flex>
          
        </Stack>
        <VStack justifyContent="space-between" w="full">
          <Text color={useColorModeValue("#3e4444", "#dee3e3")}>
            {data.description}
          </Text>
          <HStack w="full" justifyContent="flex-end" pr={2}>
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
