import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function Skills() {
  const skills = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Flutter", level: 88, color: "#02569B" },
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "MongoDB", level: 80, color: "#47A248" },
    { name: "Express.js", level: 85, color: "#000000" },
    { name: "Python", level: 80, color: "#3776AB" },
    { name: "JavaScript", level: 95, color: "#F7DF1E" },
    { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
    { name: "Git", level: 85, color: "#F05032" }
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animation controls
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

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

  // Scroll progress animations
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section 
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.3])
        }}
      >
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, 200]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -200]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -45])
          }}
        />
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title section */}
        <motion.div 
          className="text-center mb-16"
          style={{
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Crafting digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardAnimation}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative bg-gray-800 rounded-xl p-6 overflow-hidden group backdrop-blur-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 25px ${skill.color}30`
              }}
            >
              {/* Skill bar animation */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
              />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 50
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    style={{
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}
                  />
                </div>

                {/* Hover effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;