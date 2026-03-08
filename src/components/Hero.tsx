import React from 'react';
import { motion } from 'motion/react';
import { FileText, Github, Linkedin, ChevronRight, ArrowRight, Cloud } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Altamash Alam</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
            DevOps Engineer & Cloud Architect
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            I specialize in building scalable, secure, and automated cloud infrastructures. 
            AWS Certified Solutions Architect with a passion for CI/CD, containerization, and infrastructure as code.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href={SOCIAL_LINKS.resume} className="btn-secondary">
              Download Resume <FileText className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <div className="h-px w-12 bg-neutral-800" />
            <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest">Connect with me</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-neutral-800 group">
            {/* PROFILE PICTURE PLACEHOLDER */}
            {/* Change the src below to your actual profile picture URL */}
            <img 
              src="https://picsum.photos/seed/dev/800/800https://avatars.githubusercontent.com/u/170336719?v=4" 
              alt="Altamash Alam" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-emerald-400 mb-1">Current Role</p>
                  <p className="text-sm font-semibold text-white">Aspiring DevOps Engineer</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10">
                  <Cloud className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
