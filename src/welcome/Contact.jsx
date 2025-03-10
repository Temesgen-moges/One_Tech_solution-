import React, { useState } from 'react';
import { Send, Mail, MapPin, Link2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const scaleHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Email content to send to temu1554@gmail.com
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `;

      console.log('Email content to send:', emailContent);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 bg-gray-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block mb-3">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div 
              variants={scaleHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-400">temu1554@gmail.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={scaleHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-400">Ethiopia</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={scaleHoverVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Social Profiles</h3>
                  <div className="flex mt-2 space-x-4">
                    {['github', 'linkedin', 'twitter'].map((platform) => (
                      <motion.a
                        key={platform}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="capitalize">{platform}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <motion.div
                  key={field}
                  variants={itemVariants}
                >
                  <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2">
                    Your {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  />
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                ></motion.textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isLoading}
                variants={scaleHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-center mt-4 ${
                    status === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {status === 'success' 
                    ? 'Message sent successfully! We\'ll get back to you soon.'
                    : 'There was an error sending your message. Please try again.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;