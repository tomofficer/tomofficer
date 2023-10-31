import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import graipfrutBg from '../imageAssets/project1Bg.jpg';

const Project1Mobile = ({ project1Ref, scrollToProject2 }) => {
  // Use useMediaQuery to check the screen width
  const [isSmallerThan375] = useMediaQuery('(max-width: 375px)');

  // Define your padding values for each breakpoint
  const paddingTop = isSmallerThan375 ? '80px' : '220px';
  const paddingBottom = isSmallerThan375 ? '30px' : '30px';

  return (
    <>
      <section id="Project1">
        <Box borderTop="10px solid #F6E05E" ref={project1Ref}></Box>
        <Box
          h="90vh"
          bgImage={`url(${graipfrutBg})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          opacity="100%"
          position="relative" // Set a relative position
          zIndex="1" // Ensure the background image is at the back
        >
          {/* Text and button content */}
          <Box
            top={paddingTop} // Apply dynamic padding-top
            left="0%"
            position="relative"
            zIndex="2"
            background="rgba(0, 0, 0, 0.7)"
            px="20px"
            pb={paddingBottom} // Apply dynamic padding-bottom
            pt="10px"
          >
            <VStack spacing="20px" color="yellow.300" align="left">
              <Heading fontFamily="Oswald" fontSize="50px">
                GRAIPFRUT
              </Heading>
              <Text fontFamily="Montserrat" fontSize="18px" textAlign="left">
                CEO / Owner. <br />
                Graipfrut is an Ai-driven Web Development agency <br />
                building high quality, custom websites, e-commerce shops and
                mobile apps precisely catered to your unique business needs.
              </Text>
              <VStack spacing="20px" align="left">
                <Button
                  as="a"
                  href="https://www.graipfrut.com/"
                  target="_blank"
                  w="250px"
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
                  w="250px"
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

export default Project1Mobile;
