import React from 'react';
import { motion } from 'framer-motion';

import img from './ass/logo.png';
import One from './components/One';
import Two from './components/Two';
import Thre from './components/Thre';

const App = () => {
  return (
    <div className="overflow-hidden">
      <nav className="bg-gray-900 text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Replacing text with logo image */}
              <img src={img} alt="Ethio Capital Logo" className="h-[100px] w-auto" />

            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="hover:text-green-400 px-3 py-2">About</a>
                <a href="#projects" className="hover:text-green-400 px-3 py-2">Projects</a>
                <a href="#team" className="hover:text-green-400 px-3 py-2">Team</a>
                <a href="#contact" className="hover:text-green-400 px-3 py-2">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-gray-50">
        <One />
        <Two />
        <Thre />
      </main>
    </div>
  );
};

export default App;
