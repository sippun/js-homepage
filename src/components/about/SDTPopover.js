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

const SDTPopover = () => {
  return (
    <Popover variant="definition">
      <PopoverTrigger>
        <Link color="accent.300">
          self-determination
        </Link>
      </PopoverTrigger>
      <PopoverContent w="sm">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Self-determination theory (SDT)</PopoverHeader>
        <PopoverBody>
          A theory of human motivation and personality that concerns people's growth tendencies and psychological needs. The three needs for autonomy, competence, and relatedness lead to self-initiated behavior and psychological health.
          <br />
          <Link
            color='accent.300'
            href='https://en.wikipedia.org/wiki/Self-determination_theory'
            target="_blank"
            rel="noreferrer noopener"
          >
            Self-determination theory - Wikipedia
          </Link>
          <br />
          <Link
            color='accent.300'
            href='https://psycnet.apa.org/record/2022-90266-001'
            target="_blank"
            rel="noreferrer noopener"
          >
            A meta-analysis of the dark side of the American dream
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default SDTPopover;
