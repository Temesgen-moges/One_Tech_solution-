
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Two from './Two';
import One from './One';


const Three = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Abebe Kebede',
      role: 'Tech Entrepreneur',
      company: 'TechEth Solutions',
      text: 'Ethio Capital helped me connect with investors who believed in my vision. Now my startup is thriving with over 50 employees and growing!',
      rating: 5,
      investment: '$500K',
      sector: 'Technology',
      year: '2023',
      avatar: `data:image/svg+xml,${encodeURIComponent(
        '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#4A90E2"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">AK</text></svg>'
      )}`,
    },
    {
      name: 'Sara Mohammed',
      role: 'Student Innovator',
      company: 'GreenGrow Agriculture',
      text: 'Thanks to this platform, I found mentorship and funding to turn my university project into a successful agritech business.',
      rating: 5,
      investment: '$250K',
      sector: 'Agriculture',
      year: '2024',
      avatar: `data:image/svg+xml,${encodeURIComponent(
        '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#E24A84"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">SM</text></svg>'
      )}`,
    },
    {
      name: 'Daniel Tesfaye',
      role: 'Angel Investor',
      company: 'Ethiopian Angels',
      text: 'This platform makes it easy to discover and invest in Ethiopia\'s most promising startups. I\'ve invested in 10 startups through Ethio Capital.',
      rating: 5,
      investment: '$1.2M',
      sector: 'Multiple',
      year: '2024',
      avatar: `data:image/svg+xml,${encodeURIComponent(
        '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#4AE278"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">DT</text></svg>'
      )}`,
    },
    {
      name: 'Mebruk Hassan',
      role: 'University Student',
      company: 'Addis Ababa University',
      text: 'Ethio Capital\'s education funding program changed my life. I received a full scholarship to pursue my Computer Science degree. Their support covers tuition, accommodation, and learning materials.',
      rating: 5,
      investment: '$15K',
      sector: 'Education',
      year: '2024',
      avatar: `data:image/svg+xml,${encodeURIComponent(
        '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#9B4AE2"/><text x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">MH</text></svg>'
      )}`,
    },
    useEffect(() => {
        AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Only animate once on scroll
        });
        }, [])
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-gray-800 text-xl font-bold">Ethio Capital</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 data-aos="fade-down-right" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting Ethiopian Innovation with Global Capital
            </h1>
            <p data-aos="fade-up-left" className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We bridge the gap between Ethiopian entrepreneurs and investors worldwide,
              fostering growth and innovation in the Ethiopian startup ecosystem.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Two/>
    
      <One/>

      {/* Enhanced Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Success Stories</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Read how entrepreneurs and investors are achieving their goals with Ethio Capital
        </p>


{/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-white rounded-2xl p-8 shadow-lg">
            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar and Details */}
              <div className="flex flex-col items-center space-y-4">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 rounded-full border-4 border-gray-200"
                />
                <StarRating rating={testimonials[currentTestimonial].rating} />
              </div>

              {/* Testimonial Text and Info */}
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute -top-4 -left-4 w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl text-gray-600 italic mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                  
                  {/* Additional Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-600 text-sm">Investment</div>
                      <div className="text-gray-900 font-bold">
                        {testimonials[currentTestimonial].investment}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-600 text-sm">Sector</div>
                      <div className="text-gray-900 font-bold">
                        {testimonials[currentTestimonial].sector}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-600 text-sm">Year</div>
                      <div className="text-gray-900 font-bold">
                        {testimonials[currentTestimonial].year}
                      </div>
                    </div>


<div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-gray-600 text-sm">Rating</div>
                      <div className="text-gray-900 font-bold">
                        {testimonials[currentTestimonial].rating}/5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-600">
                Connecting Ethiopian entrepreneurs with global investors to foster
                innovation and growth in the Ethiopian startup ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Email: info@ethiocapital.com</li>
                <li className="text-gray-600">Phone: +251 911 123 456</li>
                <li className="text-gray-600">Address: Addis Ababa, Ethiopia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">

Temesgen, [11/17/2024 4:18 PM]
Temesgen, [11/9/2024 9:14 PM]
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Ethio Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Three;