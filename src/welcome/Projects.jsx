import React, { useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product management, user authentication, and payment processing.",
      image: "ecommerce-placeholder",
      category: "mern",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "Python-based application that uses machine learning to generate content based on user prompts.",
      image: "ai-placeholder",
      category: "python",
      technologies: ["Python", "TensorFlow", "Flask", "AWS"]
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates using WebSockets.",
      image: "task-placeholder",
      category: "mern",
      technologies: ["React", "Redux", "Node.js", "Socket.IO", "MongoDB"]
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with filterable charts and graphs.",
      image: "dashboard-placeholder",
      category: "mern",
      technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 5,
      title: "Automated Test Framework",
      description: "Python-based automated testing framework for web applications with detailed reporting.",
      image: "testing-placeholder",
      category: "python",
      technologies: ["Python", "Selenium", "PyTest", "GitHub Actions"]
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "Tool that collects and analyzes social media data to provide actionable insights.",
      image: "analytics-placeholder",
      category: "fullstack",
      technologies: ["React", "Python", "Flask", "MongoDB", "Redis"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block mb-3">
            My Projects
          </h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "5rem" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p 
            className="mt-4 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Here's a collection of my recent work. Each project represents my commitment to creating high-quality solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-12 flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {['all', 'mern', 'python', 'fullstack'].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="bg-gray-900/80 backdrop-blur-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="h-full w-full flex items-center justify-center text-xl font-medium">
                  {project.image}
                </div>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-3">
                    <motion.a 
                      href="#" 
                      className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;