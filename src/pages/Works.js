import { useState } from 'react';
import { Box, Container, Center, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { LayoutTransitions, SectionTransitions } from '../theme/Transitions';
import { GridItem } from '../components/GridItem';

const Works = () => {
  const[showWork, setShowWork] = useState("");

  return (
    <LayoutTransitions>
      <Container h={"calc(100vh - 64px)"} maxW="inherit" p={0}>
        <Box
          maxW="container.md"
          h="calc((100vh - 64px) * 0.3)"
          bgColor="RGBA(69, 86, 102, 0.3)"
          borderRadius="lg"
        >
          <Center h="full">
            <Text>
              {showWork}
            </Text>
          </Center>
        </Box>
        <SectionTransitions delay={0.1}>
          <Box
            maxW="inherit"
            h="calc((100vh - 64px) * 0.6)"
            marginTop="calc((100vh - 64px) * 0.05)"
            bgColor="RGBA(69, 86, 102, 0.3)"
            borderRadius="lg"
            px={4}
            py={2}
            overflow="auto"
          >
            <Heading fontSize="2xl" mb={2}>
              Works
            </Heading>
            <Center>
              <SimpleGrid columns={[2, 4]} spacingX={16} spacingY={8}>
                <GridItem
                  id="sad"
                  title="work work sadface"
                  thumbnail="workwork.png"
                  setWork={setShowWork}
                />
                <GridItem
                  id="smug"
                  title="sleep sleep smugface"
                  thumbnail="smug.jpg"
                  setWork={setShowWork}
                />
              </SimpleGrid>
            </Center>
          </Box>
        </SectionTransitions>
        
      </Container>
    </LayoutTransitions>
  );
};

export default Works;
