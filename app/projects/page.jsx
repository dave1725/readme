"use client";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaExternalLinkAlt, FaTrophy, FaRocket, FaShieldAlt, FaDatabase, FaCog } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiSolidity, SiMongodb, SiPython, SiTailwindcss, SiIpfs, SiCloudflare, SiDocker, SiPolygon, SiEthereum } from "react-icons/si";

const projectStats = [
  {
    icon: FaCode,
    number: "6+",
    label: "projects.total",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaTrophy,
    number: "3",
    label: "hackathon.wins",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10", 
    borderColor: "border-yellow-400/30"
  },
  {
    icon: FaRocket,
    number: "$450",
    label: "prize.money",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30"
  },
  {
    icon: FaDatabase,
    number: "20+",
    label: "technologies.used",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

const projectData = [
  {
    id: 1,
    title: "Briefcase",
    subtitle: "// Web 3.0 Secure Document Exchange Platform",
    category: "HEALTHCARE",
    status: "AWARD_WINNING",
    description: "Exchange sensitive information and documents in scrambled and encrypted form through our Web 3.0 platform and storing logistics, ensuring confidentiality and integrity at every step. Addresses the pressing need for secure and efficient exchange and storage of medical files in today's digital healthcare landscape.",
    achievements: [
      "Leverages blockchain and encryption technology for utmost security",
      "Decentralized storage eliminating centralized system vulnerabilities", 
      "Transparent transaction recording on blockchain",
      "User-friendly interface with subscription model",
      "Resilient platform for medical file management",
      "Supports healthcare professionals, researchers, and patients",
      "Ongoing innovation and development in healthcare field"
    ],
    technologies: ["Solidity", "React", "Node.js", "Metabase", "Express.js", "Remix IDE", "Ethereum", "web3j", "Tailwind CSS", "Polygon"],
    techIcons: [SiSolidity, SiReact, SiNodedotjs, SiTailwindcss, SiEthereum],
    githubLink: "https://github.com/bhowmik1234/briifee",
    liveLink: "https://devfolio.co/projects/briefcase-ebad",
    featured: true,
    type: "blockchain",
    date: "14th April 2024",
    views: "839",
    likes: "12"
  },
  {
    id: 2,
    title: "UPI CryptoConnect",
    subtitle: "// Revolutionary FinTech Application",
    category: "FINTECH",
    status: "AWARD_WINNING",
    description: "Revolutionary fintech application that brings crypto transactions and finance transactions under the same umbrella through UPI. Bridges the gap between traditional fiat and cryptocurrency payments using a unified platform with common identifiers.",
    achievements: [
      "$100 bounty and CEO recognition at ETHIndia",
      "Built at Recurzive'24 hackathon (5th July 2024)",
      "2.4K views and 21 likes on Devfolio",
      "Unified crypto and fiat transaction platform",
      "UPI integration for seamless payments",
      "Flash loan protocol implementation"
    ],
    technologies: ["Solidity", "Node.js", "Express.js", "AAVE", "MongoDB", "Ethereum", "React.js"],
    techIcons: [SiReact, SiSolidity, SiNodedotjs, SiMongodb],
    githubLink: "https://github.com/nishant-Tiwari24/upi-cryptoconnect",
    liveLink: "https://devfolio.co/projects/upi-cryptoconnect-ce5c",
    featured: true,
    type: "defi",
    hackathon: "Recurzive'24",
    date: "5th July 2024",
    views: "2.4K",
    likes: "21"
  },
  {
    id: 3,
    title: "OneHeart Website",
    subtitle: "// Music Club Official Website",
    category: "WEB_DEVELOPMENT",
    status: "LIVE",
    description: "Designed and deployed the official website for SRM University's music club with Next.js and TailwindCSS, integrating Sanity CMS for content management. Optimized performance and SEO using Cloudflare CDN.",
    achievements: [
      "Official SRM Music Club website",
      "Cloudflare CDN optimization",
      "Sanity CMS integration",
      "Responsive design with Framer Motion"
    ],
    technologies: ["Next.js", "TailwindCSS", "Sanity CMS", "Cloudflare", "Framer Motion"],
    techIcons: [SiNextdotjs, SiTailwindcss, SiCloudflare],
    githubLink: "https://github.com/dave1725",
    liveLink: "https://devfolio.co/@dave1725",
    featured: false,
    type: "web"
  },
  {
    id: 4,
    title: "Poseidon",
    subtitle: "// ZK-SNARK Automation Toolkit",
    category: "CRYPTOGRAPHY",
    status: "COMPLETED",
    description: "Built CLI toolkit for end-to-end zk-SNARK development, automating proof lifecycle. Reduced manual setup steps by 90% through flexible automation flags and CI/CD integration.",
    achievements: [
      "90% reduction in manual setup steps",
      "End-to-end zk-SNARK automation",
      "CLI tooling with GitHub Actions",
      "Flexible automation flags"
    ],
    technologies: ["Python", "Circom", "ZK-SNARKs", "CLI Tooling", "GitHub Actions"],
    techIcons: [SiPython],
    githubLink: "https://github.com/dave1725",
    liveLink: "https://github.com/dave1725",
    featured: false,
    type: "crypto"
  },
  {
    id: 5,
    title: "PegasusX",
    subtitle: "// Penetration Testing Toolkit",
    category: "CYBERSECURITY",
    status: "COMPLETED",
    description: "Created modular penetration testing toolkit with 15+ utilities for encryption, exploits, and forensics. Designed extensible architecture with authentication layer and rapid-use configurations.",
    achievements: [
      "15+ security utilities included",
      "Modular penetration testing tools",
      "Extensible architecture design",
      "Authentication layer implementation"
    ],
    technologies: ["Python", "Cryptography", "CyberSecurity", "Git"],
    techIcons: [SiPython],
    githubLink: "https://github.com/dave1725",
    liveLink: "https://github.com/dave1725",
    featured: false,
    type: "security"
  },
  {
    id: 6,
    title: "Heracles",
    subtitle: "// PC Maintenance Application",
    category: "DESKTOP_APP",
    status: "COMPLETED", 
    description: "Built PC maintenance application as part of Next Tech Lab R&D work. Focused on system optimization and automated maintenance tasks for better computer performance.",
    achievements: [
      "Automated PC maintenance tasks",
      "System optimization features",
      "Next Tech Lab R&D project",
      "Performance monitoring tools"
    ],
    technologies: ["Python", "System Programming", "Desktop App"],
    techIcons: [SiPython],
    githubLink: "https://github.com/dave1725",
    liveLink: "https://github.com/dave1725",
    featured: false,
    type: "desktop"
  }
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex mb-[80px] flex-col gap-3 justify-center text-center items-center"
        >
          <div className="flex items-center gap-4 text-[50px] font-mono text-white">
            <FaCode className="text-white" />
            <span>./projects</span>
          </div>
          <div className="text-white/60 font-mono text-sm">
            {"// Building innovative solutions and award-winning applications"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaTrophy className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-mono text-sm">3 National hackathon wins</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-8 mb-[100px]"
        >
          {projectStats.map((stat, index) => {
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

        {/* Featured Projects */}
        <div className="mb-[60px]">
          <h3 className="text-2xl font-bold text-white mb-8 font-mono text-center">
            {"// Featured Projects"}
          </h3>
          <div className="flex flex-row gap-[60px] flex-wrap justify-center max-w-7xl">
            {projectData.filter(project => project.featured).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-[60px]">
          <h3 className="text-2xl font-bold text-white mb-8 font-mono text-center">
            {"// All Projects"}
          </h3>
          <div className="flex flex-row gap-[50px] flex-wrap justify-center max-w-7xl">
            {projectData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
      className={`relative flex flex-col h-[680px] w-[450px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 group ${
        project.featured ? 'hover:border-yellow-400/40' : 'hover:border-blue-400/40'
      }`}
    >
      {/* Terminal Header */}
      <div className={`flex items-center justify-between px-4 py-3 border-b border-white/10 ${
        project.featured ? 'bg-yellow-500/5' : 'bg-blue-500/5'
      }`}>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          {project.featured && <FaTrophy className="text-yellow-400" size={14} />}
          <span className={`text-xs font-mono px-2 py-1 rounded ${
            project.status === 'AWARD_WINNING' 
              ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20'
              : project.status === 'LIVE'
              ? 'text-green-400 bg-green-400/10 border border-green-400/20'
              : 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 flex-grow overflow-hidden">
        {/* Project Info */}
        <div className="mb-4">
          <div className="font-mono text-white/60 text-xs mb-1">
            {"// Project: "}<span className={project.featured ? "text-yellow-400" : "text-blue-400"}>{project.title}</span>
          </div>
          <div className="font-mono text-white/60 text-xs mb-1">
            {"// Category: "}<span className="text-white">{project.category}</span>
          </div>
          <div className="font-mono text-white/60 text-xs mb-1">
            {"// Type: "}<span className="text-green-400">{project.type}</span>
          </div>
          {project.hackathon && (
            <div className="font-mono text-white/60 text-xs mb-1">
              {"// Hackathon: "}<span className="text-yellow-400">{project.hackathon}</span>
            </div>
          )}
          {project.date && (
            <div className="font-mono text-white/60 text-xs mb-1">
              {"// Date: "}<span className="text-purple-400">{project.date}</span>
            </div>
          )}
          {(project.views || project.likes) && (
            <div className="font-mono text-white/60 text-xs mb-1">
              {"// Engagement: "}
              {project.views && <span className="text-blue-400">{project.views} views</span>}
              {project.views && project.likes && <span className="text-white/60"> • </span>}
              {project.likes && <span className="text-red-400">{project.likes} likes</span>}
            </div>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-1 font-mono">
          {project.title}
        </h3>
        <p className={`font-mono text-sm mb-4 ${project.featured ? 'text-yellow-400' : 'text-blue-400'}`}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Achievements */}
        <div className="mb-4">
          <div className="text-white/80 font-mono text-sm mb-2">{"// Achievements:"}</div>
          <ul className="space-y-1">
            {project.achievements.slice(0, 3).map((achievement, idx) => (
              <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                <span className="text-green-400 mt-0.5 text-xs">▸</span>
                <span className="leading-tight line-clamp-1">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="text-white/80 font-mono text-sm mb-2">{"// Tech Stack:"}</div>
          <div className="flex flex-wrap gap-1 mb-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Tech Icons */}
          <div className="flex gap-2">
            {project.techIcons.slice(0, 5).map((Icon, iconIndex) => (
              <Icon key={iconIndex} size={16} className="text-white/60 hover:text-blue-400 transition-colors" />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-2">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-2 text-white text-sm font-mono rounded border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <FaGithub size={14} />
            {"view.code()"}
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-2 text-white text-sm font-mono rounded border backdrop-blur-sm transition duration-300 group-hover:scale-[1.02] flex items-center justify-center gap-2 ${
              project.featured 
                ? 'border-yellow-400/30 bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-400/50'
                : 'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50'
            }`}
          >
            <FaExternalLinkAlt size={12} />
            {"demo"}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
