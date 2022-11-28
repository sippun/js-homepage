import {
  Box,
  Button,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { booksData } from "../../data/BooksData";

const favs = booksData.favorites;

const BookButton = ({ title, img, thumbPos = "top" }) => {
  return (
    <LinkBox
      as={Button}
      p={0}
      w="fit-content"
      h="fit-content"
    >
      <Box
        role="group"
        w="100%"
        textAlign="center"
        cursor="pointer"
        pos="relative"
        boxSize="100px"
      >
        <Image
          src={"/images/books/" + img}
          alt={title}
          boxSize="full" 
          rounded="md"
          filter="auto"
          _groupHover={{
            brightness: "30%"
          }}
          transition="0.3s"
          fit="cover"
          objectPosition={thumbPos}
        />
        <LinkOverlay
          as={ReactLink}
          to={"/readinglist/" + title}
          tabIndex="-1"
        >
          <Text
            pos="absolute"
            w="full"
            top="5%"
            px={1}
            fontSize={14}
            fontWeight="medium"
            color="white"
            opacity={0}
            _groupHover={{
              opacity: 1
            }}
            transition="0.3s"
            align="center"
            whiteSpace="normal"
          >
            {title}
          </Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
}

const FavBooks = () => {
  return (
    <HStack w="100%" justifyContent="space-evenly">
      {favs.map(fav => (
        <BookButton
          key={fav.title}
          title={fav.title}
          img={fav.image}
          thumbPos={fav.thumbPosition}
        />
      ))}
    </HStack>
  )
}

export default FavBooks;