import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['about', 'skills', 'projects', 'contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-theme-dark/95 backdrop-blur-sm shadow-lg z-50 border-b border-theme-darker"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8"
            >
              <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" rx="128" fill="#13111C"/>
                <path d="M128 128L384 384M128 384H384" stroke="#9D8CFF" stroke-width="64" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-theme-purple to-theme-purple-dark text-transparent bg-clip-text">
              Zyrach Adrian
            </span>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-theme-darker focus:outline-none"
          >
            <motion.svg
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              className="h-6 w-6 text-theme-light"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#9D8CFF" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className="text-theme-light transition-colors capitalize font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10, color: "#9D8CFF" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item)}
                    className="text-theme-light transition-colors capitalize font-medium py-2 text-left"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 