import React from 'react';
import {
  Box,
  Button,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  HStack,
  useMediaQuery,
} from '@chakra-ui/react';

const AboutMobile = ({ aboutRef, scrollToProject1 }) => {
  // Use useMediaQuery to check the screen width
  const [isSmallerThan375] = useMediaQuery('(max-width: 375px)');

  // Define your padding values for each breakpoint
  const marginTop = isSmallerThan375 ? '20px' : '80px';

  return (
    <section id="About">
      {/* Container for the component */}
      <Box ref={aboutRef}></Box>
      <Box
        borderTop="10px solid #4DB6AC"
        h="94vh"
        style={{
          backgroundImage: 'linear-gradient(to right, #555, black)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative', // Important for positioning the image
        }}
      >
        {/* Content of the component */}
        <Box ml="20px" mt={marginTop} textAlign="left">
          <VStack align={'left'} spacing="15px" color="teal.300">
            <HStack>
              <Heading fontFamily="Oswald" fontSize="40px" pr="25px">
                HI, I'M TOM.
              </Heading>
              <Button
                zIndex="1"
                maxW="100px"
                mt="10px"
                bg="none"
                border="2px solid"
                rounded="68px"
                px="60px"
                py="25px"
                lineHeight="30px"
                _hover={{
                  bg: 'none',
                  transform: 'scale(1.08)',
                }}
                textAlign="center"
                onClick={() => scrollToProject1()}
              >
                <Flex align="center">
                  SHOW ME
                  {/* <Icon boxSize="40px" as={BsArrowDownShort} mr="4px" /> */}
                </Flex>
              </Button>
            </HStack>

            <Text fontFamily="Montserrat" fontSize="16px">
              I run a Web Dev Agency called Graipfrut. <br />I build modern,
              elegant websites. <br />
              And I'm open for hire.
            </Text>
          </VStack>
        </Box>

        {/* Image in the bottom right corner */}
        <Image
          src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie1_g2mRpUuHe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662507998685"
          position="absolute"
          bottom="0px" // Adjust as needed to position the image
          right="0px" // Adjust as needed to position the image
          maxW="100%" // Adjust 4he width as needed
          alt="Tom Officer Profile Pic"
        />
      </Box>
    </section>
  );
};

export default AboutMobile;
