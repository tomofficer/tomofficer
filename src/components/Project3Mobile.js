import { Box, Text, VStack, Heading, Flex, Button } from '@chakra-ui/react';
import whiteDogBg from '../imageAssets/project3Bg.jpg';

const Project3Mobile = ({ project3Ref, scrollToContact2 }) => {
  return (
    <>
      <section id="Project3">
        <Box borderTop="10px solid #4299e1" ref={project3Ref}></Box>

        <Box
          bgImage={`url(${whiteDogBg})`}
          bgSize="400%"
          bgPosition="20% 90%"
          bgRepeat="no-repeat"
          height="90vh"
          opacity="100%"
          position="relative" // Set a relative position
          zIndex="1" // Ensure the background image is at the back
        >
          {/* Text and button content */}
          <Box
            top="30%"
            left="0%"
            position="relative"
            zIndex="2"
            background="rgba(0, 0, 0, 0.7)"
            px="20px"
            pb="30px"
            pt="10px"
          >
            <VStack align={'left'} spacing="30px" color="blue.400">
              <Heading fontFamily="Oswald" fontSize="50px">
                WHITE DOG WOODWORKING
              </Heading>
              <Text fontFamily="Montserrat" fontSize="18px" maxW="500px">
                Commission website for a client. <br />
                White Dog Woodworking is an Architectural Millwork Firm based in
                New England.
              </Text>

              <VStack align="left" spacing="20px">
                <Button
                  as="a"
                  href="https://www.whitedogwoodworking.com/"
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
                  onClick={() => scrollToContact2()}
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

export default Project3Mobile;
