import { Box, VStack, Heading, Text, Button, Flex } from '@chakra-ui/react';
import graipfrutBg from '../imageAssets/project1Bg.jpg';
const Project1 = ({ project1Ref, scrollToProject2 }) => {
  return (
    <>
      <section id="Project1">
        <Box borderTop="10px solid #F6E05E" ref={project1Ref}></Box>
        <Box
          bgImage={`url(${graipfrutBg})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          width="100%"
          height="85vh"
          opacity="100%"
          position="relative" // Set a relative position
          zIndex="1" // Ensure the background image is at the back
        >
          {/* Text and button content */}
          <Box top="30%" left="50%" position="relative" zIndex="2">
            <VStack align={'left'} spacing="30px" color="yellow.300">
              <Heading fontFamily="Oswald" fontSize="50px">
                GRAIPFRUT
              </Heading>
              <Text fontFamily="Montserrat" fontSize="18px" maxW="500px">
                CEO / Owner. <br />
                Graipfrut is an Ai-driven Web Development agency <br />
                building high quality, custom websites, e-commerce shops and
                mobile apps precisely catered to your unique business needs.
              </Text>
              <VStack align="left" spacing="20px">
                <Button
                  as="a"
                  href="https://www.graipfrut.com/"
                  target="_blank"
                  maxW="300px"
                  mt="10px"
                  bg="none"
                  border="2px solid"
                  rounded="68px"
                  px="40px"
                  py="25px"
                  lineHeight="30px"
                  _hover={{
                    bg: 'none',
                    transform: 'scale(1.08)',
                  }}
                  textAlign="center"
                >
                  SHOW ME
                </Button>
                <Button
                  maxW="300px"
                  bg="none"
                  border="2px solid"
                  rounded="68px"
                  px="40px"
                  py="25px"
                  lineHeight="30px"
                  _hover={{
                    bg: 'none',
                    transform: 'scale(1.08)',
                  }}
                  textAlign="center"
                  onClick={() => scrollToProject2()}
                >
                  NEXT
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Project1;
