import { Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LayoutTransitions } from "../theme/Transitions";
import { ContentBox } from "../components/ContentBox";
import { booksData } from "../data/BooksData";

var bookList21 = booksData.books2021.map(function(books){
  var bookImage = 'images/books/' + books.image;
  return (
    <Box
      role="group"
      w="100%"
      textAlign="center"
      cursor="pointer"
      pos="relative"
      boxSize="100px"
    >
      <Image
        src={bookImage}
        alt={books.title}
        boxSize="full" 
        rounded="md"
        filter="auto"
        _groupHover={{
          brightness: "30%"
        }}
        transition="0.3s"
        fit="cover"
      />
      <Text
        pos="absolute"
        top="5%"
        px={1}
        fontSize={14}
        color="white"
        opacity={0}
        _groupHover={{
          opacity: 1
        }}
        transition="0.3s"
      >
        {books.title}
      </Text>
    </Box>
  );
});

const ReadingList = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="inherit" p={0}>
        <ContentBox h="calc((100vh - 64px) * 0.9)" maxW="inherit" >
          <Heading fontSize="2xl" as="span" variant="code">
            Reading List 
          </Heading>
          <Heading fontSize="xl" as="span" variant="mono">
            &nbsp;-&nbsp;A list of recently read books
          </Heading>

          <Heading mt={3} fontSize="xl">
            2021
          </Heading>
          <Box mt={3} flex={1} alignItems="center">
            <SimpleGrid columns={{base: 3, sm: 5}} rowGap={4}>
              {bookList21}
            </SimpleGrid>
          </Box>
        </ContentBox>
      </Container>
    </LayoutTransitions>
  );
};

export default ReadingList;
