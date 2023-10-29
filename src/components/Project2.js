import { Box, Button, Text, VStack, Heading, Flex } from '@chakra-ui/react';
import leadrproBg from '../imageAssets/project2Bg.jpg';

const Project2 = ({ project2Ref, scrollToProject3 }) => {
  return (
    <>
      <section id="Project1">
        <Box borderTop="10px solid #9F7AEA" ref={project2Ref}></Box>
        <Box
          h="85vh"
          bgImage={`url(${leadrproBg})`}
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
          <Box
            top="30%"
            left="15%"
            position="relative"
            zIndex="2"
            color="white"
          >
            <VStack align={'left'} spacing="30px">
              <Heading fontFamily="Oswald" fontSize="50px">
                LEADRPRO
              </Heading>
              <Text fontFamily="Montserrat" fontSize="18px" maxW="500px">
                Founding Software Engineer. <br />
                LeadrPro is the very first B2B Software Marketplace connecting
                Buyers of Software with Sellers of SaaS Products through video
                sales calls.
              </Text>

              <VStack align="left" spacing="20px">
                <Button
                  as="a"
                  href="https://www.leadrpro.com/"
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
                  onClick={() => scrollToProject3()}
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

export default Project2;
