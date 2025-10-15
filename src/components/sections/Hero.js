import React from 'react';

const Hero = ({ currentContent, setShowSupportModal, setShowDownloadModal }) => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 px-4"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4">
              {currentContent.hero.weAreHere}
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {currentContent.hero.subtitle}
            </p>
            <p className="text-gray-700 mb-8">
              {currentContent.hero.description}
            </p>

            <div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <button
                onClick={() => setShowSupportModal(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors"
              >
                {currentContent.hero.cta}
              </button>
              <button
                onClick={() => setShowDownloadModal(true)}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-6 rounded-full transition-colors"
              >
                {currentContent.hero.download}
              </button>
            </div>
          </div>

          <div 
            className="md:w-1/2 relative"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="relative mx-auto w-64 h-64">
              <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-yellow-300 rounded-full opacity-40"></div>
              <div className="absolute inset-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white text-6xl">🧠</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;