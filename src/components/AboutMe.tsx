import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const AboutMe: React.FC = () => {
  const highlights = [
    {
      number: "5",
      label: "Completed Projects",
      icon: "💻"
    },
    {
      number: "100%",
      label: "Problem Solving",
      icon: "🧩"
    },
    {
      number: "24/7",
      label: "Learning",
      icon: "📚"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-theme-dark py-20 relative">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-dark via-theme-darker to-theme-dark opacity-50" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(157 140 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-theme-purple to-theme-purple-dark blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Image container */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-theme-darker bg-theme-darker"
                >
                  <img 
                    src={profileImage}
                    alt="Zyrach Adrian Agres"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:w-2/3"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                className="bg-theme-darker/50 backdrop-blur-sm border border-theme-darker rounded-xl p-8 hover:border-theme-purple/50 transition-colors duration-300"
              >
                <motion.span 
                  className="text-theme-purple text-lg font-medium mb-4 block"
                  whileHover={{ scale: 1.05 }}
                >
                  Hello, I'm
                </motion.span>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4 text-theme-light"
                  whileHover={{ scale: 1.02 }}
                >
                  Zyrach Adrian Agres
                </motion.h1>
                <motion.h2 
                  className="text-2xl text-theme-purple mb-6 font-semibold"
                  whileHover={{ scale: 1.02 }}
                >
                  Aspiring Software Developer
                </motion.h2>
                <motion.p 
                  className="text-theme-light/80 leading-relaxed text-lg mb-8"
                >
                  I'm a passionate Computer Science student and Game Development Mentor at SCRIPT, exploring the diverse world of software development.
                  I enjoy building web apps, games, and mobile applications, and I'm eager to grow and apply my creativity in real-world projects.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.2 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-lg bg-theme-darker hover:bg-theme-purple/20 transition-colors duration-300"
                    >
                      <span className="text-2xl mb-2 block">{item.icon}</span>
                      <span className="text-2xl font-bold text-theme-purple block">{item.number}</span>
                      <span className="text-theme-light/70 text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4 justify-start">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    className="px-6 py-3 bg-theme-purple-dark text-theme-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-theme-purple-dark/20 hover:shadow-2xl hover:bg-theme-purple"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects" 
                    className="px-6 py-3 bg-theme-darker text-theme-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-theme-darker hover:bg-theme-darker/80"
                  >
                    View Projects
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/ZAAALJLJ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-theme-darker text-theme-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-theme-darker hover:bg-theme-darker/80 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 