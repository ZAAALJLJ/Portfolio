import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clashcardsPreview from '../assets/clashcards-preview.jpg';
import codeasePreview from '../assets/codease.jpg';
import chavatarPreview from '../assets/chavatar.jpg';
import datusandiganPreview from '../assets/datusandigan.jpg';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'ClashCards: Battle of Knowledge',
      description: 'A competitive web-based flashcard platform that transforms learning into an exciting multiplayer experience. Features include real-time battles, custom flashcard creation, lobby system, and live leaderboards. The platform makes studying interactive and fun by incorporating game mechanics into a flashcard system.',
      image: clashcardsPreview,
      techStack: ['ReactJS', 'Python', 'FastAPI', 'WebSocket', 'CSS'],
      link: 'https://github.com/ZAAALJLJ/ClashCards'
    },
    {
      title: 'CODEase: Legacy Visual Programming',
      description: 'A web-based visual programming simulator featuring block-based coding with drag-and-drop functionality. Users can create programs by connecting blocks, visualize execution line-by-line, and see real-time output. Includes features like variable initialization, loops, conditionals, and arithmetic operations.',
      image: codeasePreview,
      techStack: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js'],
      link: 'https://github.com/ZAAALJLJ/CODEase'
    },
    {
      title: 'CHAVATAR: AI-Integrated SDG Awareness Platform',
      description: 'An innovative online platform built with C# that promotes awareness of the Sustainable Development Goals (SDGs) through AI technology. Features include AI-driven conversations with a speaking and moving avatar, user-to-user interactions with interactive avatars, and online forums focused on sustainable development goals.',
      image: chavatarPreview,
      techStack: ['C#', '.NET', 'Gemini API', 'WPF', 'AI Integration'],
      link: 'https://github.com/ZAAALJLJ/SpeakingChatbot'
    },
    {
      title: 'Datu Sandigan: The Moonborne Oath',
      description: 'A 2D platformer hack-and-slash game built with Godot Engine, immersing players in Philippine mythology. Features dynamic melee combat with traditional Filipino weapons, interactive controls utilizing device sensors, and a rich narrative spanning three epic chapters. Players protect the last moon as Datu Sandigan against mythical creatures like aswang, kapre, and Bakunawa.',
      image: datusandiganPreview,
      techStack: ['Godot Engine', 'GDScript', 'Game Design', '2D Animation', 'Level Design'],
      link: 'https://github.com/HusPhil/DatuSandigan'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="min-h-screen bg-[#13111C] py-20 relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#13111C] via-[#1A1625] to-[#13111C] opacity-50" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(157 140 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-[#E2E1E6]"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#E2E1E6] opacity-90 mb-12 max-w-2xl mx-auto"
        >
          Explore my recent work and projects
        </motion.p>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 rounded-full bg-[#1A1625]/80 text-[#E2E1E6] hover:bg-[#9D8CFF]/20 transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 rounded-full bg-[#1A1625]/80 text-[#E2E1E6] hover:bg-[#9D8CFF]/20 transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1625]/50 backdrop-blur-sm border border-[#2D2B3D] rounded-xl overflow-hidden
                        hover:border-[#9D8CFF]/50 transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(157,140,255,0.15)]"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1625] z-10" />
                <img 
                  src={projects[currentIndex].image}
                  alt={`${projects[currentIndex].title} Interface`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Error loading image:', e);
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '';
                    e.currentTarget.alt = 'Error loading image';
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#9D8CFF] mb-4 group-hover:text-[#E2E1E6] transition-colors">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-[#E2E1E6]/70 text-lg mb-6">
                  {projects[currentIndex].description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {projects[currentIndex].techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 text-sm rounded-full bg-[#2D2B3D] text-[#9D8CFF] 
                               hover:bg-[#9D8CFF]/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Code Button */}
                <motion.a
                  whileHover={{ scale: 1.02, backgroundColor: "#8A7BE6" }}
                  whileTap={{ scale: 0.98 }}
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#7B6EDB] text-[#E2E1E6] 
                           rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#7B6EDB]/20 
                           text-lg font-medium group"
                >
                  <span>View on GitHub</span>
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#9D8CFF] w-6' 
                    : 'bg-[#2D2B3D] hover:bg-[#9D8CFF]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 