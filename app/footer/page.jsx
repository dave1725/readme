"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart, FaTerminal, FaCode, FaCoffee, FaRocket } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiTailwindcss, SiVercel } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/dave1725", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/dave-meshak-j-6801b2204/", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:davedmj1725@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Internships", href: "#internships" },
    { name: "Communities", href: "#communities" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Podcasts", href: "#podcasts" }
  ];

  const techStack = [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiFramer, name: "Framer Motion" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiVercel, name: "Vercel" }
  ];

  const footerStats = [
    { icon: FaCode, number: "7+", label: "projects", color: "text-blue-400" },
    { icon: FaRocket, number: "5", label: "awards", color: "text-yellow-400" },
    { icon: FaCoffee, number: "∞", label: "coffee", color: "text-orange-400" },
    { icon: FaHeart, number: "1", label: "passion", color: "text-red-400" }
  ];

  return (
    <footer className="relative w-full bg-black/95 backdrop-blur-lg border-t border-white/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Terminal-style Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-4 gap-4 mb-12"
        >
          {footerStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 rounded-xl border border-white/20 bg-black/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className={`${stat.color} text-2xl mb-2`} />
              <div className={`${stat.color} text-xl font-mono font-bold mb-1`}>
                {stat.number}
              </div>
              <div className="text-white/60 font-mono text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Profile Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-blue-500/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">
                CONTACT_INFO
              </span>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              <div className="font-mono text-white/60 text-xs mb-4">
                {"// Developer Profile"}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">
                Dave Meshak J
              </h3>
              <p className="text-blue-400 font-mono text-sm mb-4">
                Software Developer
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white/70 font-mono">
                  <FaMapMarkerAlt className="text-green-400" size={12} />
                  <span>Amaravati, India</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 font-mono">
                  <FaPhone className="text-yellow-400" size={12} />
                  <span>+91 93458 72568</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 font-mono">
                  <FaEnvelope className="text-blue-400" size={12} />
                  <span>davedmj1725@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-green-500/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                NAVIGATION
              </span>
            </div>

            {/* Navigation Content */}
            <div className="p-6">
              <div className="font-mono text-white/60 text-xs mb-4">
                {"// Quick Navigation"}
              </div>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-green-400 transition-all duration-300 flex items-center font-mono text-sm"
                    >
                      <span className="text-green-400 mr-2">▸</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social & Tech Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex flex-col border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-purple-500/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-400/10 px-2 py-1 rounded border border-purple-400/20">
                CONNECT
              </span>
            </div>

            {/* Social & Tech Content */}
            <div className="p-6">
              <div className="font-mono text-white/60 text-xs mb-4">
                {"// Social Links"}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 p-2 rounded border border-white/20 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
                  >
                    <social.icon size={16} className="text-purple-400" />
                    <span className="text-white/70 font-mono text-xs">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="font-mono text-white/60 text-xs mb-3">
                {"// Built With"}
              </div>
              <div className="flex gap-2 flex-wrap">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 px-2 py-1 rounded border border-white/20 bg-white/5"
                  >
                    <tech.icon size={12} className="text-white/60" />
                    <span className="text-white/60 font-mono text-xs">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Terminal Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative flex flex-col border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <FaTerminal className="text-white/60" size={12} />
              <span className="text-xs font-mono text-white/60">FOOTER_CREDITS</span>
            </div>
          </div>

          {/* Footer Credits */}
          <div className="p-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-mono text-sm mb-2 md:mb-0">
              {"© 2025 Dave Meshak J. All rights reserved."}
            </p>
            <p className="text-white/60 font-mono text-sm flex items-center gap-2">
              {"Made with"} <FaHeart size={12} className="text-red-400" /> {"using Next.js & Framer Motion"}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
