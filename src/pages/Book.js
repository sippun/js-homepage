import {
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import { LayoutTransitions } from '../theme/Transitions';
import { ContentBox } from '../components/ContentBox'; 
import { GOOGLE_API_KEY } from '../keys';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Book = () => {
  const [bookInfo, setBookInfo] = useState(null);
  // const baseURL = "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC?key=";
  const baseURL = "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key=";

  useEffect(() => {
    axios.get(baseURL + GOOGLE_API_KEY).then((response) => {
      setBookInfo(response);
      console.log(response.data);
    });
  }, []);

  if(!bookInfo) return null;

  return (
    <LayoutTransitions>
      <Container h="calc(100vh - 64px)" maxW="container.xl" p={0} alignItems="center">
        <ContentBox h="calc((100vh - 64px) * 0.95)" maxW="container.md">
          <Heading>Reading List -> title</Heading>
            {bookInfo.data.volumeInfo.description}
        </ContentBox>
      </Container>
    </LayoutTransitions>
    
  );
};

export default Book;
