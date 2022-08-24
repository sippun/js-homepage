import { useEffect, useState } from 'react';
import { Link as ReactLink, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox'; 
import axios from 'axios';
import { getBook } from '../data/BooksData';
import { Markup } from 'interweave';
import CoverModal from '../components/book/CoverModal';

const Book = () => {
  const { book } = useParams();
  const bookData = getBook(book); //bookData - local book data
  const [bookInfo, setBookInfo] = useState(null); //bookInfo - from google books api
  const baseURL = "https://www.googleapis.com/books/v1/volumes/" + bookData.id + "?projection=lite&key=";

  useEffect(() => {
    axios.get(baseURL + process.env.REACT_APP_GOOGLE_API_KEY).then((response) => {
      setBookInfo(response);
      //console.log(response.data);
    });
  }, [baseURL]);

  if(!bookInfo) return (
    <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} centerContent justifyContent="center">
      
      <CoverModal bookImage={'/images/books/' + bookData.image} />
    </Container>
  );

  const bookDescription = bookInfo.data.volumeInfo.description;
  const bookAuthors = bookInfo.data.volumeInfo.authors;
  const bookImage = bookData.image ?
                      '/images/books/' + bookData.image
                      : bookInfo.data.volumeInfo.imageLinks.medium;

  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} centerContent>
        <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="container.md">
          <VStack h="full" justifyContent="space-between">
            <Box>
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
              
              <HStack alignItems="start" mt={3}>
                
                <Box w="200px" h="200px" bg="aqua" mb={1}>
                  <Image
                    w="200px"
                    h="200px"
                    objectFit="cover"
                    objectPosition="top"
                    src={bookImage}
                  />
                </Box>
                <Box maxW="calc(768px - 200px - 2rem - 12px)">
                  <Heading fontSize="2xl" fontFamily="Inter">{bookInfo.data.volumeInfo.title}</Heading>
                  <Heading fontSize="md">{bookInfo.data.volumeInfo.subtitle}</Heading>
                  {bookAuthors && <Heading fontSize="md" fontFamily="Inter" mt={2} as="span">By&nbsp;</Heading>}
                  <Heading fontSize="md" fontFamily="Inter" mt={2} as="span">
                    {bookAuthors && bookAuthors.map((author, i, { length }) => {
                        if(length === 1) return author;
                        if(i < length - 1) return author + ", ";
                        return author;
                      })}
                  </Heading>
                </Box>
              </HStack>
              <Heading fontSize="xl" mt={3}>
                Description
              </Heading>
              <Text fontSize="sm" mt={1}>
                <Markup content={bookDescription} />
              </Text>
            </Box>
            <VStack w="full">
              <HStack w="full" justifyContent="flex-end">
                {bookData.url && <a href={bookData.url} target="_blank" rel="noopener noreferrer">
                  <Button 
                    rightIcon={<ExternalLinkIcon />}
                  >
                    Link
                  </Button>
                </a>}
              </HStack>
              <Box w="full" h="4px"/>
            </VStack>
          </VStack>
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Book;
