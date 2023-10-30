import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Textarea,
  Input,
  Icon,
} from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = ({ contact2Ref }) => {
  //form state
  const [state, handleSubmit] = useForm('xvojlnrw');
  //form post-submit message
  if (state.succeeded) {
    return (
      <>
        {/* <Box ref={contact2Ref}></Box> */}
        <Box
          pt="82px"
          borderTop="10px solid #FFA726"
          h="84.3vh"
          style={{
            backgroundImage: 'linear-gradient(to left, #555, black)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative', // Important for positioning the image
          }}
        >
          {/* Content of the component */}
          <Box ml="200px">
            <HStack spacing="250px">
              <VStack align={'left'} spacing="30px" color="orange.400" pt="0px">
                <Heading fontFamily="Oswald" fontSize="50px">
                  GET IN TOUCH
                </Heading>
                <Text fontFamily="Montserrat" fontSize="20px">
                  Do you need a professional website or app? <br />
                  Do you need a full-time Developer? <br />
                  Let's talk.
                </Text>
                <VStack align="left" spacing="20px">
                  <Button
                    as="a"
                    href="https://calendly.com/tomofficer/30-minute-consultation"
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
                      color: 'teal.400',
                    }}
                    textAlign="center"
                  >
                    FREE CONSULTATION
                  </Button>
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
                      color: 'teal.400',
                    }}
                    textAlign="center"
                  >
                    GRAIPFRUT AGENCY
                  </Button>
                  <Button
                    as="a"
                    href="/"
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
                      color: 'teal.400',
                    }}
                    textAlign="center"
                  >
                    MY RESUME
                  </Button>
                </VStack>
              </VStack>
              <section id="#FormReturn">
                <VStack
                  align="left"
                  spacing="10px"
                  pt="170px"
                  color="orange.400"
                >
                  <Icon as={AiOutlineMail} boxSize="60px" />
                  <Text w="400px" fontFamily="Montserrat" fontSize="20px">
                    Thanks for reaching out!
                  </Text>
                  <Text w="400px" fontFamily="Montserrat" fontSize="20px">
                    I'll get back to you asap.
                  </Text>
                  <Text w="400px" fontFamily="Montserrat" fontSize="20px">
                    If you need to reach me sooner...
                  </Text>
                  <Text w="400px" fontFamily="Montserrat" fontSize="20px">
                    tomofficerwebdev@gmail.com
                  </Text>
                  <Text w="400px" fontFamily="Montserrat" fontSize="20px">
                    (530) 925-9482
                  </Text>
                  <Text
                    w="400px"
                    fontFamily="Montserrat"
                    fontSize="20px"
                    color="orange.400"
                  >
                    -Tom
                  </Text>
                </VStack>
              </section>
            </HStack>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <>
      <section id="Contact">
        <Box ref={contact2Ref}></Box>
        <Box
          borderTop="10px solid #FFA726"
          h="84.3vh"
          style={{
            backgroundImage: 'linear-gradient(to left, #555, black)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative', // Important for positioning the image
          }}
        >
          {/* Content of the component */}
          <Box ml="200px">
            <HStack spacing="250px">
              <VStack align={'left'} spacing="30px" color="orange.400" pt="0px">
                <Heading fontFamily="Oswald" fontSize="50px">
                  GET IN TOUCH
                </Heading>
                <Text fontFamily="Montserrat" fontSize="20px">
                  Do you need a professional website or app? <br />
                  Do you need a full-time Developer? <br />
                  Let's talk.
                </Text>
                <VStack align="left" spacing="20px">
                  <Button
                    as="a"
                    href="https://calendly.com/tomofficer/30-minute-consultation"
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
                      color: 'teal.400',
                    }}
                    textAlign="center"
                  >
                    FREE CONSULTATION
                  </Button>
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
                      color: 'teal.400',
                    }}
                    textAlign="center"
                  >
                    GRAIPFRUT AGENCY
                  </Button>
                  <Button
                    as="a"
                    href="/"
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
                      color: 'teal.400',
                    }}
                    textAlign="center"
                  >
                    MY RESUME
                  </Button>
                </VStack>
              </VStack>
              <section id="#form">
                <form onSubmit={handleSubmit}>
                  <VStack align="left" spacing="15px" pt="180px">
                    <Box>
                      <Text
                        htmlFor="name"
                        color="white"
                        fontFamily="Oswald"
                        fontWeight={'900'}
                      >
                        NAME
                      </Text>
                      <Input
                        id="name"
                        type="name"
                        name="name"
                        color="white"
                        bg="none"
                        w="300px"
                        placeholder=""
                        variant="filled" // You can use different variants like "outline" or "flushed"
                        size="md" // Adjust the size as needed (sm, md, lg)
                        borderColor="orange.400"
                        _hover={{ bg: 'none' }}
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </Box>
                    <Box>
                      <Text
                        color="white"
                        fontFamily="Oswald"
                        fontWeight={'900'}
                        htmlFor="email"
                      >
                        EMAIL
                      </Text>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        color="white"
                        bg="none"
                        placeholder=""
                        w="300px"
                        variant="filled" // You can use different variants like "outline" or "flushed"
                        size="md" // Adjust the size as needed (sm, md, lg)
                        borderColor="orange.400"
                        _hover={{ bg: 'none' }}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </Box>
                    <Box>
                      <Text
                        color="white"
                        fontFamily="Oswald"
                        fontWeight={'900'}
                      >
                        MESSAGE
                      </Text>
                      <Textarea
                        id="message"
                        name="message"
                        borderColor="orange.400"
                        color="white"
                        bg="none"
                        placeholder=""
                        w="300px"
                        h="200px"
                        // Add other props and styles as needed
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </Box>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      color="orange.400"
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
                        color: 'teal.400',
                      }}
                      textAlign="center"
                    >
                      EMAIL ME
                    </Button>
                  </VStack>
                </form>
              </section>
            </HStack>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Contact;
