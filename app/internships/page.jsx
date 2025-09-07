"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiPolygon, SiHyperledger, SiPrometheus, SiGrafana, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const internshipStats = [
  {
    icon: FaBriefcase,
    number: "2",
    label: "internships.total",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaBuilding,
    number: "2",
    label: "companies.worked",
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-400/30"
  },
  {
    icon: FaCode,
    number: "10+",
    label: "technologies.used",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  },
  {
    icon: FaCalendarAlt,
    number: "5",
    label: "months.experience",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  }
];

const internshipData = [
  {
    id: 1,
    company: "2LYP Computations",
    position: "Software Engineering Intern",
    duration: "June 2025 - July 2025",
    location: "Remote",
    type: "CURRENT",
    description: "Designed and deployed distributed token infrastructure on Polygon testnet, focusing on scalability and security. Built token vesting system and analytics dashboard with performance optimization.",
    keyAchievements: [
      "Deployed distributed token infrastructure on Polygon testnet",
      "Built token vesting system with analytics dashboard",
      "Applied Agile methodologies and CI/CD with GitHub Actions",
      "Optimized performance and user experience"
    ],
    technologies: ["Polygon", "Solidity", "Git", "GitHub Actions", "Analytics"],
    githubLink: "https://github.com/2LYP",
    status: "active"
  },
  {
    id: 2,
    company: "SRM University, AP",
    position: "Software Developer Intern",
    duration: "Dec 2024 - Feb 2025",
    location: "Amaravati, AP",
    type: "COMPLETED",
    description: "Built prototype for secure medical record sharing using Hyperledger Fabric. Integrated monitoring stack with Prometheus and Grafana for real-time diagnostics of distributed applications.",
    keyAchievements: [
      "Developed secure medical record sharing prototype",
      "Implemented Hyperledger Fabric for data integrity", 
      "Integrated Prometheus & Grafana monitoring stack",
      "Enhanced distributed application reliability"
    ],
    technologies: ["Hyperledger Fabric", "Prometheus", "Grafana", "Distributed Systems"],
    detailsLink: "https://drive.google.com/file/d/1oy59FMarm94FYv-9k1zA_OAxph5c8lCG/view?usp=sharing",
    status: "completed"
  },
];

const Internships = () => {
  return (
    <>
      <div id="internships" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex mb-[80px] flex-col gap-3 justify-center text-center items-center"
        >
          <div className="flex items-center gap-4 text-[50px] font-mono text-white">
            <FaBriefcase className="text-white" />
            <span>./internships</span>
          </div>
          <div className="text-white/60 font-mono text-sm">
            {"// Professional experience and industry exposure"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaCode className="text-blue-400" size={20} />
            <span className="text-blue-400 font-mono text-sm">Building industry expertise</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-8 mb-[100px]"
        >
          {internshipStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative flex flex-col items-center p-6 rounded-xl border ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
              >
                {/* Terminal-like header */}
                <div className="absolute top-2 left-3 flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="mt-4 mb-4">
                  <IconComponent size={32} className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/40 font-mono text-xs">const</span>
                    <span className="text-white font-mono text-sm">{stat.label}</span>
                    <span className="text-white/40 font-mono text-xs">=</span>
                  </div>
                  <span className={`text-3xl font-bold font-mono ${stat.color}`}>{stat.number}</span>
                  <span className="text-white/60 font-mono text-sm">;</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Internship Cards */}
        <div className="flex flex-row gap-[50px] flex-wrap justify-center max-w-7xl">
          {internshipData.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative flex flex-col h-[650px] w-[400px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 group"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-blue-500/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    internship.status === 'active' 
                      ? 'text-green-400 bg-green-400/10 border border-green-400/20' 
                      : 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
                  }`}>
                    {internship.type}
                  </span>
                  {internship.status === 'active' && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-grow">
                {/* Company Info */}
                <div className="mb-4">
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Company: "}<span className="text-blue-400">{internship.company}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Position: "}<span className="text-white">{internship.position}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Duration: "}<span className="text-green-400">{internship.duration}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-4">
                    {"// Location: "}<span className="text-yellow-400">{internship.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {internship.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Achievements:"}</div>
                  <ul className="space-y-1">
                    {internship.keyAchievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Tech Stack:"}</div>
                  <div className="flex flex-wrap gap-1">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-2">
                  {internship.githubLink && (
                    <a
                      href={internship.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 text-white text-sm font-mono rounded border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <FaGithub size={14} />
                      {"view.code()"}
                    </a>
                  )}
                  {internship.detailsLink && (
                    <a
                      href={internship.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 text-white text-sm font-mono rounded border border-white/30 bg-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:border-white/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt size={12} />
                      {"details"}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Internships;
