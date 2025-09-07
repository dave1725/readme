"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, GraduationCap, Briefcase, Trophy, Mic, Users } from 'lucide-react';

const navItems = [
    {name:"About", path:"#about", icon: User},
    {name:"Education", path:"#education", icon: GraduationCap},
    {name:"Projects", path:"#projects", icon: Briefcase},
    {name:"Internships", path:"#internships", icon: Briefcase},
    {name:"Communities", path:"#communities", icon: Users},
    {name:"Hackathons", path:"#hackathons", icon: Trophy},
    {name:"Podcasts", path:"#podcasts", icon: Mic},
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position with improved detection
      const sections = navItems.map(item => item.path.substring(1));
      let currentSection = 'about'; // default to first section
      
      // Check each section to find which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // A section is active if it's top is above or at the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling when clicking nav links
  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 80; // navbar height
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update active section immediately for better UX
      setActiveSection(targetId);
      
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center flex-shrink-0"
          >
            <span className="text-white font-bold text-xl font-[family-name:var(--font-orbitron)] tracking-wider whitespace-nowrap">
              Dave Meshak J
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.path.substring(1);
              
              return (
                <motion.a
                  key={index}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                    isActive 
                      ? 'bg-blue-500/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={16} className={`transition-colors duration-300 ${isActive ? 'text-blue-400' : 'group-hover:text-blue-300'}`} />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.a>
              );
            })}
            
            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1az7opAcouYeNpyufZJ4sJZgfHNXXAaZS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-blue-500/20 text-white font-medium text-sm rounded-lg hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/20"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.path.substring(1);
                
                return (
                  <motion.a
                    key={index}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-500/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} className={`${isActive ? 'text-blue-400' : ''}`} />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                );
              })}
              
              {/* Mobile Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1az7opAcouYeNpyufZJ4sJZgfHNXXAaZS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center mt-4 px-4 py-3 bg-blue-500/20 text-white font-medium rounded-lg hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50"
              >
                <span>View Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
