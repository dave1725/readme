"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/dave1725", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/davemeshak", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/davemeshak", label: "Twitter" },
    { icon: Mail, href: "mailto:davemeshak@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Internships", href: "#internships" }
  ];

  return (
    <footer className="relative bg-black/95 backdrop-blur-lg border-t border-white/20">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">DM</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Dave Meshak J</h3>
            </div>
            <p className="text-white/70 text-lg mb-6 max-w-md">
              Passionate full-stack developer creating innovative solutions and building the future through code.
            </p>
            <div className="flex items-center space-x-4 text-white/60 mb-4">
              <MapPin size={18} />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center space-x-4 text-white/60">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-white transition-all duration-300 flex items-center"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              Open to opportunities and collaborations
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Dave Meshak J. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-400" /> using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
