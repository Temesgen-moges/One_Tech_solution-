import React, { useState } from 'react';
import { motion } from 'framer-motion';
import scann from '../ass/bar.png';

const Three = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const teamMembers = [
    {
      name: "Temesgen Moges",
      role: "CEO & Co-founder",
      title: "Software Engineer",
      color: "from-blue-400 to-indigo-600"
    },
    {
      name: "Abirham S.",
      role: "Technical Lead",
      title: "Electrical Engineer",
      color: "from-green-400 to-emerald-600"
    },
    {
      name: "Kalkidan K.",
      role: "Technology Expert",
      title: "IT Specialist",
      color: "from-purple-400 to-pink-600"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/temu1554@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <>
      {/* Team Section with Curved Top */}
      <section className="relative bg-gray-50 pt-20" id="team">
        <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.45,22.34,82.88,41.6,130.87,46.32A515.54,515.54,0,0,0,321.39,56.44Z" 
                  className="fill-white"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
          >
            Our Team
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
                transition={{ duration: 0.3 }}
                className={`relative bg-gradient-to-br ${member.color} rounded-xl shadow-xl p-6 text-center text-white transform transition-all duration-300`}
              >
                <motion.div 
                  className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 backdrop-blur-sm"
                  animate={{
                    rotate: hoveredMember === index ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-white/90 mb-1">{member.role}</p>
                <p className="text-white/80">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Curved Background */}
      <section className="relative py-20 bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text"
          >
            Contact Us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <span className="w-20 font-bold">Location:</span>
                  <span className="text-gray-600">Wolkita City, Ethiopia</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <span className="w-20 font-bold">Email:</span>
                  <a href="mailto:temu1554@gmail.com" className="text-blue-600 hover:text-blue-700">
                    temu1554@gmail.com
                  </a>
                </motion.div>

                {/* Barcode Section */}
                <motion.div 
                  className="mt-8 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={scann}
                      alt="Scan to join Telegram"
                      className="w-80 h-60 object-contain rounded-lg"
                      animate={{
                        boxShadow: isHovered ? "0 0 25px rgba(59, 130, 246, 0.5)" : "0 0 0 rgba(59, 130, 246, 0)",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-blue-700 font-semibold"
                        initial={{ y: 10 }}
                        animate={{ y: isHovered ? 0 : 10 }}
                      >
                        Scan to Join
                      </motion.span>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="text-sm text-gray-600 mt-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Scan to join our Telegram community
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className={`w-full py-3 rounded-lg shadow-lg transition duration-300 ${
                    submitStatus === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  }`}
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-center"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Curved Bottom for Contact Section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.45,22.34,82.88,41.6,130.87,46.32A515.54,515.54,0,0,0,321.39,56.44Z" 
                  className="fill-gray-900"></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">One Tech Solution</h2>
            <p className="text-gray-400 mb-6">
              Innovating Solutions for Ethiopia's Future
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} One Tech Solution. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Three;