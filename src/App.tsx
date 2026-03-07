import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import { SOCIAL_LINKS } from './constants.tsx';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Contact />
      </main>

      <footer className="py-12 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="text-xl font-bold tracking-tighter text-white mb-2">
              Altamash<span className="text-emerald-500">.</span>
            </a>
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} Altamash Alam. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-neutral-600 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-600">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & Tailwind
          </div>
        </div>
      </footer>
    </div>
  );
}
