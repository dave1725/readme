"use client";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import Background from "./background/page";
import Navbar from "./navbar/page";

// Lazy load components for better performance
const About = lazy(() => import("./about/page"));
const Education = lazy(() => import("./education/page"));
const Projects = lazy(() => import("./projects/page"));
const Internships = lazy(() => import("./internships/page"));
const Communities = lazy(() => import("./communities/page"));
const Hackathons = lazy(() => import("./hackathons/page"));
const Podcasts = lazy(() => import("./podcasts/page"));
const Footer = lazy(() => import("./footer/page"));

// Loading component
const LoadingSection = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
  </div>
);

export default function Home() {
  return (
    <>
      <Background /> 
      <Navbar />
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <About />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Education />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Projects />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Internships />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Communities />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Hackathons />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Podcasts />
        </motion.div>
      </Suspense>
      
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
    </>
  );
}
