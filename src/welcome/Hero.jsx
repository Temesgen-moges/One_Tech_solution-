import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Hero() {
  const [text, setText] = useState('');
  const fullText = "MERN Stack & Python Developer";
  const [index, setIndex] = useState(0);
  
  const { scrollY } = useScroll();
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const slideVariants = {
    hidden: (direction) => ({
      y: direction === "up" ? 100 : -100,
      opacity: 0
    }),
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ y }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          variants={slideVariants}
          custom="up"
        >
          Hi, I'm{" "}
          <motion.span 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Temesgen Moges
          </motion.span>
        </motion.h1>

        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl mb-8 h-10"
          variants={slideVariants}
          custom="up"
        >
          {text}<span className="animate-pulse">|</span>
        </motion.h2>

        <motion.p 
          className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
          variants={slideVariants}
          custom="up"
        >
          Crafting innovative digital solutions with clean, efficient code. 
          Specialized in building full-stack web applications with modern technologies.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={staggerContainer}
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-lg"
            variants={slideVariants}
            custom="up"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium px-6 py-3 rounded-lg"
            variants={slideVariants}
            custom="up"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;