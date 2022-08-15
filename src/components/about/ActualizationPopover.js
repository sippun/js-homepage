import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const ActualizationPopover = () => {
  return (
    <Popover variant="definition">
      <PopoverTrigger>
        <Link color="accent.300">
          self-actualization
        </Link>
      </PopoverTrigger>
      <PopoverContent w="sm">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Self-actualization</PopoverHeader>
        <PopoverBody>
          The highest level of psychological development in Maslow's hierarchy of needs, where personal potential is fully realized.
          <br />
          <Link
            color='accent.300'
            href='https://en.wikipedia.org/wiki/Self-actualization'
            target="_blank"
            rel="noreferrer noopener"
          >
            Self-actualization - Wikipedia
          </Link>
          <br />
          Fun fact: Maslow actually later added another step beyond self-actualization: self transcendence.
          <br />
          <Link
            color='accent.300'
            href='https://academic.udayton.edu/JackBauer/Readings%20595/Koltko-Rivera%2006%20trans%20self-act%20copy.pdf'
            target="_blank"
            rel="noreferrer noopener"
          >
            Rediscovering the Later Version of Maslow’s Hierarchy of Needs
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ActualizationPopover;
