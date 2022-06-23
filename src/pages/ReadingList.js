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

const mapBookIcons = (books) => {
  return books.map(function(book){
    var bookImage = 'images/books/' + book.image;
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
          alt={book.title}
          boxSize="full" 
          rounded="md"
          filter="auto"
          _groupHover={{
            brightness: "30%"
          }}
          transition="0.3s"
          fit="cover"
          objectPosition="top"
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
          {book.title}
        </Text>
      </Box>
    );
  })
};

const currentList = mapBookIcons(booksData.current);
const bookList22 = mapBookIcons(booksData.books2022);
const bookList21 = mapBookIcons(booksData.books2021);

const ReadingList = () => {
  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="inherit" p={0}>
        <ContentBox h="calc((100vh - 64px) * 0.9)" maxW="inherit" >
          <Heading fontSize="2xl" as="span" variant="code">
            Reading List 
          </Heading>

          <Heading mt={3} fontSize="xl">
            Currently Reading
          </Heading>
          <Box mt={3} flex={1} alignItems="center">
            <SimpleGrid columns={{base: 3, sm: 5}} rowGap={4}>
              {currentList}
            </SimpleGrid>
          </Box>

          <Heading mt={3} fontSize="xl">
            2022
          </Heading>
          <Box mt={3} flex={1} alignItems="center">
            <SimpleGrid columns={{base: 3, sm: 5}} rowGap={4}>
              {bookList22}
            </SimpleGrid>
          </Box>

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
