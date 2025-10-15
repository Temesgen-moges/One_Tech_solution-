import React from 'react';

const Footer = ({ language, currentContent }) => {
  return (
    <footer 
      className="bg-gray-800 text-white py-8"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div 
          className="flex justify-center mb-4"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-75"></div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" className="fill-yellow-400" />
              <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93"
                stroke="orange" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl font-bold ml-2">Tsehay</span>
        </div>
        <p 
          className="text-gray-400 mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {language === 'en'
            ? 'Bridging mental health gaps in Ethiopia'
            : 'በኢትዮጵያ ውስጥ ያለውን የአእምሮ ጤና ልዩነት ማሟላት'}
        </p>
        <p 
          className="text-gray-400 text-sm mb-6"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          {language === 'en'
            ? 'You are not alone. Help is available.'
            : 'ብቻዎ አይደሉም። ድጋፍ ይገኛል።'}
        </p>
        <div 
          className="mt-6 flex justify-center space-x-6"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="text-xl">📘</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="text-xl">🐦</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="text-xl">📷</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="text-xl">💼</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;