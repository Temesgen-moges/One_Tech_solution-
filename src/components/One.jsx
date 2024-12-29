import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const One = () => {
const [activeTab, setActiveTab] = useState("story");
const [hoveredItem, setHoveredItem] = useState(null);


const contentData = {
    story: {
        title: "Our Story",
        icon: "🚀",
        color: "from-indigo-600 to-violet-600",
        content: [
            {
                title: "Beginning",
                year: "2022",
                description: "Founded with a vision to revolutionize Ethiopian technology",
                details: "Started with a small team of passionate innovators, we set out to transform the technological landscape of Ethiopia.",
                stats: { team: "1 members", projects: "1 projects", impact: "100+ users" }
            },
            {
                title: "Growth",
                year: "2023",
                description: "Expanded our services across multiple sectors",
                details: "Rapid expansion into various industries including finance, education, and healthcare.",
                stats: { team: "5 members", projects: "2 projects", impact: "1000+ users" }
            },
            {
                title: "Present",
                year: "2024",
                description: "Leading innovative solutions across Ethiopia",
                details: "Now recognized as a pioneer in Ethiopian tech solutions, serving enterprises nationwide.",
                stats: { team: "50+ members", projects: "3 projects", impact: "1000+ users" }
            }
        ]
    },
    mission: {
        title: "Our Mission",
        icon: "🎯",
        color: "from-emerald-600 to-teal-600",
        content: [
            {
                title: "Innovation",
                icon: "💡",
                description: "Developing cutting-edge technological solutions",
                details: "Pushing boundaries with AI, blockchain, and cloud computing solutions.",
                focus: ["Artificial Intelligence", "Blockchain", "Cloud Computing"]
            },
            {
                title: "Impact",
                icon: "🌍",
                description: "Creating meaningful change in Ethiopian society",
                details: "Implementing solutions that address real societal challenges.",
                focus: ["Digital Inclusion", "Social Impact", "Community Development"]
            },
            {
                title: "Growth",
                icon: "📈",
                description: "Driving economic development through technology",
                details: "Fostering digital transformation across industries.",
                focus: ["Economic Empowerment", "Digital Transformation", "Industry 4.0"]
            }
        ]
    },
    vision: {
        title: "Our Vision",
        icon: "✨",
        color: "from-rose-600 to-pink-600",
        content: [
            {
                title: "Leadership",
                icon: "👑",
                description: "Becoming Ethiopia's premier tech solutions provider",
                details: "Setting the standard for technological excellence in East Africa.",
                goals: ["Market Leadership", "Innovation Hub", "Tech Education"]
            },
            {
                title: "Innovation",
                icon: "🔮",
                description: "Pioneering breakthrough technologies",
                details: "Creating solutions that put Ethiopia on the global tech map.",
                goals: ["Research & Development", "Patent Development", "Global Recognition"]
            },
            {
                title: "Excellence",
                icon: "🏆",
                description: "Setting new standards in technological excellence",
                details: "Delivering world-class solutions with Ethiopian expertise.",
                goals: ["Quality Standards", "Best Practices", "International Certification"]
            }
        ]
    }
};

return (
    <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-50"></div>
            
            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 px-4"
            >
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
                    animate={{ backgroundPosition: ['0%', '100%'], color: ['#4ade80', '#3b82f6'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                    One tech solution
                </motion.h1>
                <p className="text-xl md:text-2xl mb-8">
                    Innovating Solutions for Ethiopia's Future
                </p>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full text-lg transition duration-300 shadow-lg"
                >
                    Explore Our Projects
                </motion.button>
            </motion.div>

            {/* Curved Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.45,22.34,82.88,41.6,130.87,46.32A515.54,515.54,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </div>

        {/* About Section */}
        <section className="py-20">
            <div className="max-w-8xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl font-bold mb-6">
                        About <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">One Tech</span>
                    </h2>
                    <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 to-violet-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Content Layout */}
                <div className="flex flex-col gap-12">
                    {/* Top Navigation */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {Object.entries(contentData).map(([key, data]) => (
                            <motion.button
                                key={key}
                                whileHover={{ scale: 1.02, x: 10 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center p-4 rounded-2xl transition-all duration-500
                                    ${activeTab === key 
                                        ? `bg-gradient-to-r ${data.color} text-white shadow-2xl`
                                        : 'bg-white text-gray-700 hover:shadow-xl'
                                    }`}
                            >
                                <span className="text-2xl mr-2">{data.icon}</span>
                                <span className="text-lg font-bold">{data.title}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Side Content */}
                    
{/* Right Side Content */}
<div className="w-full mx-auto">
    <AnimatePresence mode="wait">
        <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`bg-gradient-to-r ${contentData[activeTab].color} rounded-3xl p-8 shadow-2xl`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contentData[activeTab].content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            onHoverStart={() => setHoveredItem(index)}
                            onHoverEnd={() => setHoveredItem(null)}
                            className="relative"
                        >
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer h-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-start mb-4">
                                    <span className="text-3xl mr-3">{item.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                        {item.year && (
                                            <span className="text-white/80 text-base">{item.year}</span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-white/90 text-base mb-4">{item.description}</p>
                                <AnimatePresence>
                                    {hoveredItem === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-4 pt-4 border-t border-white/20"
                                        >
                                            <p className="text-white/90 mb-4 text-sm">{item.details}</p>
                                            {item.stats && (
                                                <div className="grid grid-cols-3 gap-2 text-sm">
                                                    {Object.entries(item.stats).map(([key, value]) => (
                                                        <div key={key} className="text-center">
                                                            <div className="text-white/80">{key}</div>
                                                            <div className="text-white font-bold">{value}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {item.focus && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {item.focus.map((focus, i) => (
                                                        <span key={i} className="bg-white/20 px-2 py-1 rounded-full text-xs text-white">
                                                            {focus}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            {item.goals && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {item.goals.map((goal, i) => (
                                                        <span key={i} className="bg-white/20 px-2 py-1 rounded-full text-xs text-white">
                                                            {goal}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
</div>
                </div>
            </div>
        </section>
    </div>
);
};

export default One;