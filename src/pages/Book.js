import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox'; 
import NotFound from './NotFound';
import { GOOGLE_API_KEY } from '../keys';
import axios from 'axios';
import { getBookId } from '../data/BooksData';
import { Markup } from 'interweave';

const Book = () => {
  const { book } = useParams();
  const id = getBookId(book);
  const [bookInfo, setBookInfo] = useState(null);
  const baseURL = "https://www.googleapis.com/books/v1/volumes/" + id + "?projection=lite&key=";

  useEffect(() => {
    axios.get(baseURL + GOOGLE_API_KEY).then((response) => {
      setBookInfo(response);
      console.log(response.data);
    });
  }, [baseURL]);

  if(!bookInfo) return (
    <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} centerContent>
      Loading
    </Container>
  );

  const bookDescription = bookInfo.data.volumeInfo.description;

  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} centerContent>
        <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="container.md">
          <HStack>
            <Heading
              as={Link}
              to="/readinglist"
              fontSize="2xl"
              variant="code"
              color="accent.300"
              _hover={{ textDecoration: "underline"}}
            >
              Reading List
            </Heading>
            <ChevronRightIcon boxSize="28px" />
            <Heading fontSize="xl" variant="code">
              {bookInfo.data.volumeInfo.title}
            </Heading>
          </HStack>
          <Box mt={3}>
            <Text>{bookInfo.data.volumeInfo.subtitle}</Text>
            <Text>By&nbsp;
            {bookInfo.data.volumeInfo.authors.map((author, i, { length }) => {
              if(length === 1) return <>{author}</>;
              if(i < length - 1) return <>{author}, &nbsp;</>;
              return <>{author}</>;
            })}
            </Text>
            <br/>
            <Markup content={bookDescription} />
            <Text>{bookInfo.data.id}</Text>
          </Box>
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Book;
