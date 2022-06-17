import { Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LayoutTransitions } from "../theme/Transitions";
import { ContentBox } from "../components/ContentBox";
import { BooksData } from "../components/BooksData";

const ReadingList = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="inherit" p={0}>
        <ContentBox h="calc((100vh - 64px) * 0.9)" maxW="inherit" >
          <Heading fontSize="2xl" mb={3} as="span" variant="code">
            Reading List 
          </Heading>
          <Heading fontSize="xl" as="span" variant="mono">
            &nbsp;-&nbsp;A list of recently read books
          </Heading>

          <Box flex={1} alignItems="center">
            <Text>
              {BooksData.books2021[0].title}
            </Text>
            <SimpleGrid>

            </SimpleGrid>
          </Box>
        </ContentBox>
      </Container>
    </LayoutTransitions>
  );
};

export default ReadingList;
