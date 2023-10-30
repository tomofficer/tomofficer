import React, { useRef, useState, useEffect } from 'react';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import Landing from './components/Landing';
import LandingMobile from './components/LandingMobile';
import About from './components/About';
import AboutMobile from './components/AboutMobile';
import Project1 from './components/Project1';
import Project1Mobile from './components/Project1Mobile';
import Project2 from './components/Project2';
import Project2Mobile from './components/Project2Mobile';
import Project3 from './components/Project3';
import Project3Mobile from './components/Project3Mobile';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    console.log('testing the click handle');
  };

  const scrollToProject1Handle = () => {
    scrollToProject1Ref.current.scrollIntoView({ behavior: 'smooth' });
    console.log('testing the click handle');
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

  // Initialize a state variable to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add an event listener to update the windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define a breakpoint value for switching between mobile and desktop views
  const breakpoint = 1000; // Adjust this value as needed

  return (
    <ChakraProvider theme={theme}>
      <Box style={{ backgroundColor: 'black' }} overflow={'hidden'}>
        {windowWidth < breakpoint ? (
          <LandingMobile scrollToAbout={scrollToAboutHandle} />
        ) : (
          <Landing scrollToAbout={scrollToAboutHandle} />
        )}

        {windowWidth < breakpoint ? (
          <AboutMobile
            aboutRef={scrollToAboutRef}
            scrollToProject1={scrollToProject1Handle}
          />
        ) : (
          <About
            aboutRef={scrollToAboutRef}
            scrollToProject1={scrollToProject1Handle}
          />
        )}

        {windowWidth < breakpoint ? (
          <Project1Mobile
            project1Ref={scrollToProject1Ref}
            scrollToProject2={scrollToProject2Handle}
          />
        ) : (
          <Project1
            project1Ref={scrollToProject1Ref}
            scrollToProject2={scrollToProject2Handle}
          />
        )}

        {windowWidth < breakpoint ? (
          <Project2Mobile
            project2Ref={scrollToProject2Ref}
            scrollToProject3={scrollToProject3Handle}
          />
        ) : (
          <Project2
            project2Ref={scrollToProject2Ref}
            scrollToProject3={scrollToProject3Handle}
          />
        )}

        {windowWidth < breakpoint ? (
          <Project3Mobile
            project3Ref={scrollToProject3Ref}
            scrollToContact2={scrollToContact2Handle}
          />
        ) : (
          <Project3
            project3Ref={scrollToProject3Ref}
            scrollToContact2={scrollToContact2Handle}
          />
        )}

        <Contact contact2Ref={scrollToContact2Ref} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
