import React from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navigation />
      <main className="pt-16">
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
