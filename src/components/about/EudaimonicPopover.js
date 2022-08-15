import {
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const EudaimonicPopover = () => {
  return (
    <Popover variant="definition">
      <Heading fontSize="lg" fontWeight="light" as="span">
        <PopoverTrigger>
          <Link color="accent.300" fontWeight="350">
            eudaimonic
          </Link>
        </PopoverTrigger>
      </Heading>
      <PopoverContent w="sm">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>eudaimonic // eu·​dai·​mo·​nic</PopoverHeader>
        <PopoverBody>
          Relating to the “pursuit of virtue, excellence, and the best within us.”
          As opposed to hedonic, or the pursuit of comfort and pleasure.
          (Which can be good too.)
          <br />
          <Link
            color='accent.300'
            href='https://positivepsychology.com/eudaimonia/'
            target="_blank"
            rel="noreferrer noopener"
          >
            positivepsychology.com/eudaimonia/
          </Link>
          <br />
          <Link
            color='accent.300'
            href='https://www.researchgate.net/publication/258819690_Eudaimonia_and_Its_Distinction_from_Hedonia_Developing_a_Classification_and_Terminology_for_Understanding_Conceptual_and_Operational_Definitions'
            target="_blank"
            rel="noreferrer noopener"
          >
            Huta, V., &amp; Waterman, A. S. (2014)
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default EudaimonicPopover;
