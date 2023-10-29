import React from 'react';
import {
  useColorModeValue,
  Box,
  Button,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
import { BsArrowDownShort } from 'react-icons/bs';

const About = ({ aboutRef, scrollToProject1 }) => {
  const bg = useColorModeValue('black', 'gray.800');

  return (
    <section id="About">
      {/* Container for the component */}
      <Box ref={aboutRef}></Box>
      <Box
        borderTop="10px solid #4DB6AC"
        h="85vh"
        style={{
          backgroundImage: 'linear-gradient(to right, #555, black)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative', // Important for positioning the image
        }}
      >
        {/* Content of the component */}
        <Box ml="200px" mt="200px">
          <VStack align={'left'} spacing="30px" color="teal.300">
            <Heading fontFamily="Oswald" fontSize="50px">
              HI, I'M TOM.
            </Heading>
            <Text fontFamily="Montserrat" fontSize="20px">
              I run a Web Dev Agency called Graipfrut. <br />I build modern,
              elegant websites. <br />
              And I'm open for hire.
            </Text>

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
              onClick={() => scrollToProject1()}
            >
              <Flex align="center">
                LET'S GO
                {/* <Icon boxSize="40px" as={BsArrowDownShort} mr="4px" /> */}
              </Flex>
            </Button>
          </VStack>
        </Box>

        {/* Image in the bottom right corner */}
        <Image
          src="https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie1_g2mRpUuHe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662507998685"
          position="absolute"
          bottom="0px" // Adjust as needed to position the image
          right="0px" // Adjust as needed to position the image
          maxW="37%" // Adjust 4he width as needed
          alt="Tom's selfie"
        />
      </Box>
    </section>
  );
};

export default About;
