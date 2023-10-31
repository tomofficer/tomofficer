import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import leadrproBg from '../imageAssets/project2Bg.jpg';

const Project2Mobile = ({ project2Ref, scrollToProject3 }) => {
  // Use useMediaQuery to check the screen width
  const [isSmallerThan375] = useMediaQuery('(max-width: 375px)');

  // Define your padding values for each breakpoint
  const paddingTop = isSmallerThan375 ? '80px' : '270px';
  const paddingBottom = isSmallerThan375 ? '30px' : '30px';

  return (
    <>
      <section id="Project1">
        <Box borderTop="10px solid #9F7AEA" ref={project2Ref}></Box>
        <Box
          bgImage={`url(${leadrproBg})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          height="90vh"
          opacity="100%"
          position="relative" // Set a relative position
          zIndex="1" // Ensure the background image is at the back
        >
          {/* Text and button content */}
          <Box
            top={paddingTop}
            left="0%"
            position="relative"
            zIndex="2"
            color="white"
            background="rgba(0, 0, 0, 0.7)"
            px="20px"
            pb={paddingBottom}
            pt="10px"
          >
            <VStack spacing="20px" align="left">
              <Heading fontFamily="Oswald" fontSize="50px">
                LEADRPRO
              </Heading>
              <Text
                fontFamily="Montserrat"
                fontSize="18px"
                maxW="500px"
                textAlign="left"
              >
                Founding Software Engineer. <br />
                LeadrPro is the very first B2B Software Marketplace connecting
                Buyers of Software with Sellers of SaaS Products through video
                sales calls.
              </Text>

              <VStack spacing="20px" align="left">
                <Button
                  as="a"
                  href="https://www.leadrpro.com/"
                  target="_blank"
                  mt="10px"
                  bg="none"
                  border="2px solid"
                  rounded="68px"
                  px="40px"
                  py="25px"
                  w="250px"
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
                  mt="10px"
                  bg="none"
                  border="2px solid"
                  rounded="68px"
                  w="250px"
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

export default Project2Mobile;
