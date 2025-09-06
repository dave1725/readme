"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      "#description",
      { text: "" },
      { 
        duration: 8, 
        text: "Full Stack Developer | AI Enthusiast | Problem Solver. Passionate about creating innovative solutions and building the future through code. I love turning complex problems into simple, beautiful and intuitive solutions.",
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <>
      <div id="about" className="mb-[10px]"></div>
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="flex flex-row gap-[100px] justify-center items-center max-w-7xl mx-auto px-6">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] w-[400px] rounded-full border-2 border-white overflow-hidden"
          >
            <img src="/image.webp" alt="Dave Meshak J Profile" className="h-full w-full object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center gap-12 w-[600px] h-[400px]"
          >
            <h1 className="text-6xl font-bold text-white">
              README.md
            </h1>
            <h2 className="text-4xl font-bold text-white">
              It's <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Dave!</span>
            </h2>
            <p id="description" className="text-xl text-white/80 min-h-[120px] leading-relaxed tracking-wide word-spacing-wide">
              {/* Text will be animated by GSAP */}
            </p>
            
            {/* Social Icons */}
            <div className="flex mt-5 flex-row gap-10 items-center">
              <motion.a
                href="https://github.com/dave1725"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub size={40} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/davemeshak"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <BsLinkedin size={40} />
              </motion.a>
              <motion.a
                href="https://devfolio.co/@dave1725"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <SiDevdotto size={40} />
              </motion.a>
              <motion.a
                href="https://quora.com/profile/davemeshak"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <FaQuora size={40} />
              </motion.a>
              <motion.a
                href="https://leetcode.com/davecodes"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <FaLaptopCode size={40} />
              </motion.a>
              <motion.a
                href="https://discord.gg/davemeshak"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <FaDiscord size={40} />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#education"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 bg-transparent backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-xl font-semibold hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 text-center w-fit font-mono"
            >
              ./start_journey.sh
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
