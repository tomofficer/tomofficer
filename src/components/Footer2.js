import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import {
  AiOutlineFacebook,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer2 = () => {
  return (
    <>
      <Box h="auto" w="100vh" bg="black" pl="200px" py="21px">
        <HStack spacing="30px" mb="20px" color="orange.400">
          <a href="https://www.linkedin.com/in/tomofficer/" target="_blank">
            <Icon
              as={FaLinkedin}
              boxSize="30px"
              _hover={{
                transform: 'scale(1.08)',
                color: 'teal.400',
                cursor: 'pointer',
              }}
            />
          </a>
          <a href="https://github.com/tomofficer" target="_blank">
            <Icon
              as={FaGithub}
              boxSize="30px"
              _hover={{
                transform: 'scale(1.08)',
                color: 'teal.400',
                cursor: 'pointer',
              }}
            />
          </a>

          <a href="https://www.instagram.com/graipfrutco/" target="_blank">
            <Icon
              as={FaInstagram}
              boxSize="35px"
              _hover={{
                transform: 'scale(1.08)',
                color: 'teal.400',
                cursor: 'pointer',
              }}
            />
          </a>

          <a href="https://www.facebook.com/graipfrut/" target="_blank">
            <Icon
              as={AiFillFacebook}
              boxSize="37px"
              _hover={{
                transform: 'scale(1.08)',
                color: 'teal.400',
                cursor: 'pointer',
              }}
            />
          </a>

          <a href="https://www.twitter.com/graipfrut/" target="_blank">
            <Icon
              as={FaTwitter}
              boxSize="28px"
              _hover={{
                transform: 'scale(1.08)',
                color: 'teal.400',
                cursor: 'pointer',
              }}
            />
          </a>
        </HStack>
        <Text color="gray.500" fontFamily="Montserrat">
          &copy; Tom Officer 2023. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer2;
