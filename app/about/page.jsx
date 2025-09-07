"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaRocket, FaCoffee, FaTerminal, FaUser, FaLaptopCode, FaDiscord } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import { SiDevdotto, SiEthereum } from "react-icons/si";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const aboutStats = [
  {
    icon: FaCode,
    number: "3+",
    label: "years.coding",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaRocket,
    number: "10+",
    label: "projects.built",
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-400/30"
  },
  {
    icon: FaCoffee,
    number: "∞",
    label: "coffee.cups",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: FaLaptopCode,
    number: "24/7",
    label: "debug.mode",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      "#bio-text",
      { text: "" },
      { 
        duration: 6, 
        text: "Software Engineering student with strong foundations in data structures, algorithms, and object-oriented programming (CodeChef rating: 1400). Experienced in full-stack development, distributed systems, CI/CD pipelines, and observability.",
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <>
      <div id="about" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        
        {/* Main Content */}
        <div className="flex flex-row gap-[80px] justify-center items-center max-w-7xl mx-auto px-6">
          {/* Profile Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col w-[450px] h-[550px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-blue-500/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-400" size={14} />
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">
                  PROFILE
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="flex flex-col p-6 flex-grow">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="h-[180px] w-[180px] rounded-full border-2 border-blue-400/50 overflow-hidden">
                  <img src="/image.webp" alt="Dave Meshak J Profile" className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="mb-4">
                <div className="font-mono text-white/60 text-xs mb-1">
                  {"// Developer: "}<span className="text-blue-400">Dave Meshak J</span>
                </div>
                <div className="font-mono text-white/60 text-xs mb-1">
                  {"// Role: "}<span className="text-green-400">Software Developer</span>
                </div>
                <div className="font-mono text-white/60 text-xs mb-3">
                  {"// Status: "}<span className="text-yellow-400">Available for opportunities</span>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-white mb-2 font-mono text-center">
                Dave Meshak J
              </h1>
              <h2 className="text-lg font-mono text-blue-400 mb-4 text-center">
                Software Developer
              </h2>

              {/* Buy Me Coffee with ETH Button */}
              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    navigator.clipboard.writeText("0x88C8665671C970813afF2172043e93a00b941c54");
                    alert("ETH Address copied to clipboard!");
                  }}
                  className="w-full px-4 py-3 text-white text-sm font-mono rounded border border-yellow-400/30 bg-yellow-500/10 backdrop-blur-sm transition duration-300 hover:bg-yellow-500/20 hover:border-yellow-400/50 flex items-center justify-center gap-2"
                >
                  <FaCoffee className="text-yellow-400" size={16} />
                  {"buy_me_coffee_with_ETH()"}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Info Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex flex-col w-[600px] h-[600px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-green-500/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <FaTerminal className="text-green-400" size={14} />
                <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                  README.md
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="flex flex-col p-6 flex-grow">
              {/* Bio Section */}
              <div className="mb-6">
                <div className="text-white/80 font-mono text-sm mb-3">{"// About Me:"}</div>
                <p id="bio-text" className="text-white/70 text-sm leading-relaxed min-h-[80px] font-mono">
                  {/* Text will be animated by GSAP */}
                </p>
              </div>

              {/* Specializations */}
              <div className="mb-6">
                <div className="text-white/80 font-mono text-sm mb-3">{"// Specializations:"}</div>
                <div className="flex flex-wrap gap-2">
                  {["Full Stack Development", "zkProofs", "Blockchain", "AI/ML", "C++", "Docker", "Cloud","NodeJS","Express", "Ethereum", "Solidity","MongoDB","CouchDB","Hyperledger Fabric","Github Actions","NextJS","ReactJS","HTML5/CSS3","Python"].map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded border border-blue-400/20 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div className="mb-6">
                <div className="text-white/80 font-mono text-sm mb-3">{"// Current Focus:"}</div>
                <ul className="space-y-1">
                  {[
                    "Building innovative Web3 applications",
                    "Exploring AI-powered solutions", 
                    "Contributing to open source projects"
                  ].map((focus, idx) => (
                    <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 text-xs">▸</span>
                      <span className="leading-tight">{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                <motion.a
                  href="#education"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 text-white text-sm font-mono rounded border border-green-400/30 bg-green-500/10 backdrop-blur-sm transition duration-300 hover:bg-green-500/20 hover:border-green-400/50 flex items-center justify-center gap-2"
                >
                  {"./explore_journey.sh"}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 mt-10 gap-6 "
        >
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`flex flex-col items-center p-6 rounded-xl border ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              <stat.icon className={`${stat.color} text-3xl mb-3`} />
              <div className={`${stat.color} text-2xl font-mono font-bold mb-1`}>
                {stat.number}
              </div>
              <div className="text-white/60 font-mono text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-white/80 font-mono text-sm mb-6 text-center">
            {"// Connect with me:"}
          </div>
          <div className="flex gap-6 items-center justify-center">
            {[
              { icon: FaGithub, href: "https://github.com/dave1725", label: "GitHub" },
              { icon: BsLinkedin, href: "https://www.linkedin.com/in/dave-meshak-j-6801b2204/", label: "LinkedIn" },
              { icon: SiDevdotto, href: "https://devfolio.co/@dave1725", label: "Devfolio" },
              { icon: FaQuora, href: "https://www.quora.com/profile/DAVE-MESHACH", label: "Quora" },
              { icon: FaLaptopCode, href: "https://www.codechef.com/users/dave1725", label: "CodeChef" },
              { icon: FaDiscord, href: "https://discord.gg/davemeshak", label: "Discord" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <social.icon size={24} className="text-white hover:text-blue-400 transition-colors" />
                <span className="text-xs font-mono text-white/60">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
