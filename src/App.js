import React, { useRef, useState, useEffect } from 'react';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import Landing2 from './components/Landing2';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Contact2 from './components/Contact2';
import Footer2 from './components/Footer2';

function App() {
  //useRef
  const scrollToAboutRef = useRef();
  const scrollToProject1Ref = useRef();
  const scrollToProject2Ref = useRef();
  const scrollToProject3Ref = useRef();
  const scrollToContact2Ref = useRef();

  //scroll handlers
  const scrollToAboutHandle = () => {
    scrollToAboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProject1Handle = () => {
    scrollToProject1Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProject2Handle = () => {
    scrollToProject2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProject3Handle = () => {
    scrollToProject3Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact2Handle = () => {
    scrollToContact2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box style={{ backgroundColor: 'black' }} overflow={'hidden'}>
        <Landing2 scrollToAbout={scrollToAboutHandle} />
        <About
          aboutRef={scrollToAboutRef}
          scrollToProject1={scrollToProject1Handle}
        />
        <Project1
          project1Ref={scrollToProject1Ref}
          scrollToProject2={scrollToProject2Handle}
        />
        <Project2
          project2Ref={scrollToProject2Ref}
          scrollToProject3={scrollToProject3Handle}
        />
        <Project3
          project3Ref={scrollToProject3Ref}
          scrollToContact2={scrollToContact2Handle}
        />
        <Contact2 contact2Ref={scrollToContact2Ref} />
        <Footer2 />
      </Box>
    </ChakraProvider>
  );
}

export default App;

//testing deployment
