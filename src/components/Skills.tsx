import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "⚡",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C#",
        "C++",
        "C",
        "SQL",
        "HTML/CSS",
        "GDScript"
      ]
    },
    {
      title: "Technical Skills",
      icon: "🚀",
      skills: [
        "React",
        "Flask",
        "FastAPI",
        "Git",
        "MongoDB",
        "REST APIs",
        "Godot",
        "Unity"
      ]
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      skills: [
        "Problem Solving",
        "Communication",
        "Time Management",
        "Critical Thinking",
        "Adaptability",
        "Team Collaboration",
        "Leadership"
      ]
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="min-h-screen bg-[#13111C] py-20 relative overflow-hidden">
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
          Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#E2E1E6] opacity-90 mb-16 max-w-2xl mx-auto"
        >
          My expertise across different areas
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(157, 140, 255, 0.1)",
              }}
              className="group p-6 rounded-xl bg-[#1A1625]/50 border border-[#2D2B3D] backdrop-blur-sm
                        transition-all duration-300 hover:border-[#9D8CFF]/50 hover:shadow-[0_0_30px_rgba(157,140,255,0.15)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  className="text-3xl p-3 rounded-lg bg-[#2D2B3D] text-[#9D8CFF] group-hover:bg-[#9D8CFF]/20"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-[#9D8CFF] pt-3 group-hover:text-[#E2E1E6]"
                >
                  {category.title}
                </motion.h3>
              </div>

              <motion.div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-2 text-sm rounded-lg bg-[#2D2B3D] text-[#E2E1E6] 
                             group-hover:bg-[#9D8CFF]/20 transition-colors duration-300
                             flex items-center justify-center text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 