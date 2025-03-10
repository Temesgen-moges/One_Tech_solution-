import React, { useState, useEffect } from 'react';
import Navbar from '../welcome/Navbar';
import Hero from '../welcome/Hero';
import About from '../welcome/About';
import Skills from '../welcome/Skills';
import Projects from '../welcome/Projects';
import Contact from '../welcome/Contact';
import Footer from '../welcome/Footer';

function Welcome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Welcome;