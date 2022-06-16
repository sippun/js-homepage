import {
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";

const DescriptionCard = (props) => {
  <>
  <Stack direction={['column', 'row']} spacing='24px'>
  <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    99
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
</Stack>
</>
}

export default DescriptionCard;