"use client";
import { motion } from "framer-motion";
import { FaUsers, FaCode, FaMusic, FaLaptop, FaCog, FaGithub, FaExternalLinkAlt, FaTrophy, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython, SiReact, SiCloudflare } from "react-icons/si";

const communityStats = [
  {
    icon: FaUsers,
    number: "2",
    label: "communities.active",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaCode,
    number: "3+",
    label: "years.experience",
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-400/30"
  },
  {
    icon: FaTrophy,
    number: "4",
    label: "projects.delivered",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: FaRocket,
    number: "100+",
    label: "members.impacted",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

const communityData = [
  {
    id: 1,
    name: "Next Tech Lab",
    role: "R&D Member",
    duration: "March 2023 - Present",
    status: "ACTIVE",
    type: "TECHNICAL",
    description: "Developed tools exploring distributed systems, ZK-SNARK workflows, and blockchain-based applications. Served as interim board member, driving technical discussions and mentoring peers.",
    keyAchievements: [
      "Built Heracles (PC maintenance app)",
      "Developed Poseidon (ZK-SNARK automation toolkit)",
      "Served as interim board member",
      "Led technical discussions and mentoring",
      "Explored distributed systems and blockchain"
    ],
    responsibilities: [
      "Research & Development on emerging technologies",
      "Blockchain and distributed systems exploration",
      "ZK-SNARK workflows and automation",
      "Technical mentoring and peer guidance",
      "Innovation in tech solutions"
    ],
    technologies: ["Python", "Blockchain", "ZK-SNARKs", "Distributed Systems", "CLI Tools"],
    techIcons: [SiPython],
    impact: "Built automation tools that reduced manual processes by 90%",
    websiteLink: "https://nexttechlab.com",
    featured: true
  },
  {
    id: 2,
    name: "Music Club",
    role: "Website Lead & Former Convener",
    duration: "Aug 2024 - Present",
    status: "ACTIVE",
    type: "LEADERSHIP",
    description: "Leading website development with Next.js and Cloudflare CDN; previously managed events and budgeting as Convener. Built the official OneHeart website for SRM University's music club.",
    keyAchievements: [
      "Designed and deployed official club website",
      "Managed events and budgeting as Convener",
      "Integrated Sanity CMS for content management",
      "Optimized performance with Cloudflare CDN",
      "Enhanced UX with responsive design"
    ],
    responsibilities: [
      "Website development and maintenance",
      "Event planning and coordination",
      "Budget management and allocation",
      "Team leadership and collaboration",
      "Performance optimization and SEO"
    ],
    technologies: ["Next.js", "TailwindCSS", "Sanity CMS", "Cloudflare", "Framer Motion"],
    techIcons: [SiNextdotjs, SiTailwindcss, SiCloudflare],
    impact: "Successfully delivered official club website serving 500+ students",
    websiteLink: "https://oneheartmusic.com",
    projectLink: "https://devfolio.co/@dave1725",
    featured: true
  }
];

const Communities = () => {
  return (
    <>
      <div id="communities" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex mb-[80px] flex-col gap-3 justify-center text-center items-center"
        >
          <div className="flex items-center gap-4 text-[50px] font-mono text-white">
            <FaUsers className="text-white" />
            <span>./communities</span>
          </div>
          <div className="text-white/60 font-mono text-sm">
            {"// Building communities through technology and leadership"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaCode className="text-blue-400" size={20} />
            <span className="text-blue-400 font-mono text-sm">Technical innovation & Creative leadership</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-8 mb-[100px]"
        >
          {communityStats.map((stat, index) => {
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

        {/* Community Cards */}
        <div className="flex flex-row gap-[60px] flex-wrap justify-center max-w-7xl mb-[80px]">
          {communityData.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative flex flex-col h-[800px] w-[480px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 group"
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
                    community.status === 'ACTIVE' 
                      ? 'text-green-400 bg-green-400/10 border border-green-400/20' 
                      : 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
                  }`}>
                    {community.status}
                  </span>
                  {community.status === 'ACTIVE' && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-grow overflow-hidden">
                {/* Community Info */}
                <div className="mb-4">
                  <div className="font-mono text-white/60 text-xs mb-1">
                    {"// Community: "}<span className="text-blue-400">{community.name}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-1">
                    {"// Role: "}<span className="text-white">{community.role}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-1">
                    {"// Duration: "}<span className="text-green-400">{community.duration}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-4">
                    {"// Type: "}<span className="text-yellow-400">{community.type}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {community.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Key Achievements:"}</div>
                  <ul className="space-y-1">
                    {community.keyAchievements.slice(0, 4).map((achievement, idx) => (
                      <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                        <span className="text-green-400 mt-0.5 text-xs">▸</span>
                        <span className="leading-tight">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Responsibilities:"}</div>
                  <ul className="space-y-1">
                    {community.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5 text-xs">•</span>
                        <span className="leading-tight">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Technologies:"}</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {community.technologies.map((tech, techIndex) => (
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
                    {community.techIcons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} size={16} className="text-white/60 hover:text-blue-400 transition-colors" />
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4 p-3 border border-green-400/20 rounded bg-green-500/5">
                  <div className="text-white/80 font-mono text-sm mb-1">{"// Impact:"}</div>
                  <p className="text-green-400 font-mono text-xs">{community.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex gap-2">
                  <a
                    href={community.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 text-white text-sm font-mono rounded border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt size={14} />
                    {"visit.site()"}
                  </a>
                  {community.projectLink && (
                    <a
                      href={community.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-white text-sm font-mono rounded border border-green-400/30 bg-green-500/10 backdrop-blur-sm transition duration-300 hover:bg-green-500/20 hover:border-green-400/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <FaGithub size={14} />
                      {"projects"}
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

export default Communities;
