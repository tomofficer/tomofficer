import { Box, Text, VStack, Heading, Flex, Button } from '@chakra-ui/react';
import whiteDogBg from '../imageAssets/project3Bg.jpg';

const Project3 = ({ project3Ref, scrollToContact2 }) => {
  return (
    <>
      <section id="Project3">
        <Box borderTop="10px solid #4299e1" ref={project3Ref}></Box>

        <Box
          h="85vh"
          bgImage={`url(${whiteDogBg})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          // width="100%"
          height="85vh"
          opacity="100%"
          position="relative" // Set a relative position
          zIndex="1" // Ensure the background image is at the back
        >
          {/* Text and button content */}
          <Box top="30%" left="50%" position="relative" zIndex="2">
            <VStack align={'left'} spacing="30px" color="blue.400">
              <Heading fontFamily="Oswald" fontSize="50px">
                WHITE DOG WOODWORKING
              </Heading>
              <Text fontFamily="Montserrat" fontSize="18px" maxW="500px">
                Commission website for a client. <br />
                White Dog Woodworking is an Architectural Millwork Firm
                providing fabrication and installation to General Contractors
                and Owners throughout New England.
              </Text>

              <VStack align="left" spacing="20px">
                <Button
                  as="a"
                  href="https://www.whitedogwoodworking.com/"
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

export default Project3;
