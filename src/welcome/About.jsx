import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const skills = [
    "MERN Stack",
    "Python",
    "Tailwind CSS",
    "MongoDB",
    "RESTful APIs"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-40 right-20 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block mb-3">
            About Me
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="w-full h-80 bg-gray-800 rounded-xl overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-600/30" />
              <div className="h-full w-full flex items-center justify-center text-xl font-medium">
                Your Profile Image Here
              </div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl"
              animate={{
                rotate: [12, 24, 12],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold"
              variants={itemVariants}
            >
              Software Engineer
            </motion.h3>
            <motion.p 
              className="text-gray-300"
              variants={itemVariants}
            >
              I'm Temesgen Moges, a passionate software engineer specializing in MERN stack and Python development. With a blend of technical expertise and creative problem-solving skills, I build robust applications that deliver exceptional user experiences.
            </motion.p>
            <motion.p 
              className="text-gray-300"
              variants={itemVariants}
            >
              My journey in software development has equipped me with deep knowledge in MongoDB, Express.js, React, Node.js, and various Python frameworks. I'm committed to writing clean, maintainable code and always eager to explore new technologies.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;