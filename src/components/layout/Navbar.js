import React from 'react';

const Navbar = ({ 
  language, 
  setLanguage, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollPosition, 
  currentContent 
}) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-lg py-1' : 'bg-transparent py-2'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
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
          <span className="text-2xl font-bold text-orange-600">Tsehay</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.home}</a>
          <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.about}</a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.services}</a>
          <a href="#psychiatrists" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.psychiatrists}</a>
          <a href="#blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.blog}</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.contact}</a>

          <button
            onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
            className="flex items-center space-x-1 bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded-full transition-colors"
          >
            <span className="text-orange-600 font-medium">{language === 'en' ? 'EN' : 'AM'}</span>
            <span className="text-orange-500">🌐</span>
          </button>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-3 px-4">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.home}</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.about}</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.services}</a>
            <a href="#psychiatrists" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.psychiatrists}</a>
            <a href="#blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.blog}</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">{currentContent.nav.contact}</a>

            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                className="flex items-center space-x-2"
              >
                <span className="text-orange-600 font-medium">
                  {language === 'en' ? 'Switch to Amharic' : 'Switch to English'}
                </span>
                <span className="text-orange-500">🌐</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;