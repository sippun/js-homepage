import { IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from 'react-router-dom';

const NavLeft = ({ target }) => {
  return (
    <IconButton
      h="100%"
      w="100%"
      bg="none"
      as={ReactLink}
      to={target}
      icon={<ArrowLeftIcon />}
      _hover={{ bg: "cleargrey" }}
    />
  )
}

const NavRight = ({ target }) => {
  return (
    <IconButton
      h="inherit"
      w="inherit"
      bg="none"
      as={ReactLink}
      to={target}
      icon={<ArrowRightIcon />}
      _hover={{ bg: "cleargrey" }}
    />
  )
}

export { NavLeft, NavRight };