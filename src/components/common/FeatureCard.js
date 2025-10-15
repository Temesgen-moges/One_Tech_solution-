import React from 'react';

const FeatureCard = ({ feature, index }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
      <div className="relative p-6 z-10">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4
          bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300
        `}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
      
      {/* Static border */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
    </div>
  );
};

export default FeatureCard;