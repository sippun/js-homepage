import { useEffect, useState } from 'react';
import { Link as ReactLink, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox'; 
import { GOOGLE_API_KEY } from '../keys';
import axios from 'axios';
import { getBook } from '../data/BooksData';
import { Markup } from 'interweave';

const Book = () => {
  const { book } = useParams();
  const bookData = getBook(book); //bookData - local book data
  const [bookInfo, setBookInfo] = useState(null); //bookInfo - from google books api
  const baseURL = "https://www.googleapis.com/books/v1/volumes/" + bookData.id + "?projection=lite&key=";

  useEffect(() => {
    axios.get(baseURL + GOOGLE_API_KEY).then((response) => {
      setBookInfo(response);
      console.log(response.data);
    });
  }, [baseURL]);

  if(!bookInfo) return (
    <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} centerContent justifyContent="center">
      Loading
    </Container>
  );

  const bookDescription = bookInfo.data.volumeInfo.description;

  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} centerContent>
        <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="container.md">
          
          <Link as={ReactLink} to="/readinglist">
            <HStack spacing={0}>
              <ChevronLeftIcon boxSize={6} color="accent.300"/>
              <Heading
                fontSize="2xl"
                variant="code"
                color="accent.300"
                _hover={{ textDecoration: "underline"}}
              >
                Reading List
              </Heading>
            </HStack>
          </Link>
            
            
          <Box mt={3}>
            <Heading fontSize="xl">{bookInfo.data.volumeInfo.title}</Heading>
            <Heading fontSize="sm">{bookInfo.data.volumeInfo.subtitle}</Heading>
            <Heading fontSize="md">By&nbsp;
            {bookInfo.data.volumeInfo.authors.map((author, i, { length }) => {
              if(length === 1) return <>{author}</>;
              if(i < length - 1) return <>{author}, &nbsp;</>;
              return <>{author}</>;
            })}
            </Heading>
            <br/>
            <Heading fontSize="lg">
              Description
            </Heading>
            <Text fontSize="sm">
              <Markup content={bookDescription} />
            </Text>
            <HStack w="full" justifyContent="flex-end">
              
                <a href={bookData.url} target="_blank" rel="noopener noreferrer">
                  <Button 
                    rightIcon={<ExternalLinkIcon />}
                  >
                    Link
                  </Button>
                </a>
            </HStack>
          </Box>
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Book;
