import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Two = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectCards = [
    {
      id: 1,
      title: "GEBERA Mobile App",
      description: "Connecting farmers to markets, providing weather information, and facilitating access to agricultural equipment suppliers. GEBERA revolutionizes farming in Ethiopia through technology.",
      features: [
        "Market connectivity for farmers",
        "Real-time weather updates",
        "Agricultural equipment marketplace",
        "Farming community platform"
      ],
      color: "from-green-400 to-emerald-600"
    },
    {
      id: 2,
      title: "Ethio Capital Platform",
      description: "A revolutionary platform connecting entrepreneurs with investors in Ethiopia, fostering economic growth and innovation through strategic partnerships.",
      features: [
        "Entrepreneur-investor matching",
        "Investment opportunity showcase",
        "Secure communication channel",
        "Project evaluation tools"
      ],
      color: "from-blue-400 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-gray-50 to-white" id="projects">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
        >
          Our Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projectCards.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative rounded-xl overflow-hidden"
            >
              <div className={`p-8 h-full bg-gradient-to-br ${project.color} transform transition-all duration-300 ${hoveredProject === project.id ? 'scale-105' : ''}`}>
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-white"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-white/90 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="text-white/90 flex items-center"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        className="mr-2 text-xl"
                      >
                        ⭐
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Future Innovations
          </h3>
          <p className="text-gray-600 text-lg">
            We're continuously working on new solutions to address Ethiopia's technological needs.
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block ml-2"
            >
              ✨
            </motion.span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Two;