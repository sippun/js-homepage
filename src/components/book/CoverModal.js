import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';

const CoverModal = ({bookImage}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="200px" h="200px" bg="aqua" mb={1}>
      <Image
        w="200px"
        h="200px"
        objectFit="cover"
        objectPosition="top"
        src={bookImage}
        onClick={onOpen}
        cursor="pointer"
      />
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered="true">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader/>
            <ModalCloseButton color="white"/>
            <ModalBody>
              <Image
                w="full"
                h="75vh"
                objectFit="contain"
                src={bookImage}
                onClick={onClose}
                cursor="pointer"
              />
            </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CoverModal;
