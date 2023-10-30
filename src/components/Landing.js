import { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Text,
  Heading,
  Icon,
  Button,
  VStack,
  HStack,
  Flex,
  css,
} from '@chakra-ui/react';
import landing0 from '../imageAssets/landing0.jpg';
import landing1 from '../imageAssets/landing1.jpg';
import landing2 from '../imageAssets/landing2.jpg';
import landing3 from '../imageAssets/landing3.jpg';
import landing4 from '../imageAssets/landing4.jpg';
import landing5 from '../imageAssets/landing5.jpg';
import landing6 from '../imageAssets/landing6.jpg';

import '../components/Landing.css';

// Custom inline CSS
const zoomOutAnimation = css`
  @keyframes zoomOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(
        1.1
      ); /* Adjust the scale factor for the desired zoom-out effect */
    }
  }
`;

// Define the fade-in animation
const fadeInAnimation = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const fadeInOutAnimation = css`
  @keyframes fade-in-out {
    0% {
      opacity: 0; // Start with opacity 0 (faded out)
    }
    50% {
      opacity: 1; // Peak at 50% opacity (faded in)
    }
    100% {
      opacity: 0; // End with opacity 0 (faded out)
    }
  }
`;

const Landing = ({ scrollToAbout }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Apply the animation classes when the component mounts
    setAnimate(true);
  }, []);

  //background image swapper
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    landing0,
    landing1,
    landing2,
    landing3,
    landing4,
    landing5,
    landing6,
  ];

  useEffect(() => {
    // Function to update the image index
    const changeImage = () => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Schedule image change every 10 seconds
    const intervalId = setInterval(changeImage, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box width="100vw" height="100vh" position="relative">
        {/* Apply the animations to this container */}
        <Box
          bgImage={`url(${landing5})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          width="100%"
          height="100%"
          opacity="100%"
          position="absolute"
          top="0"
          left="0"
          className={animate ? 'animate__animated' : ''}
          css={[animate ? zoomOutAnimation : '', fadeInAnimation]} // Apply the fadeIn animation here
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 2s ease',
          }}
        ></Box>

        {/* Content */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Center>
            {/* Your content */}
            <VStack mt="380px">
              <Text color="white" fontFamily="poppins" fontSize="30px">
                SOFTWARE ENGINEER | WEB DESIGNER
              </Text>
              <Heading fontFamily="Oswald" fontSize="100px" color="white">
                TOM OFFICER
              </Heading>
              <Center>
                <VStack spacing="20px">
                  <Button
                    mt="10px"
                    bg="none"
                    color="white"
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
                    onClick={() => scrollToAbout()}
                  >
                    TAKE A DIGITAL TOUR
                  </Button>
                </VStack>
              </Center>
            </VStack>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
