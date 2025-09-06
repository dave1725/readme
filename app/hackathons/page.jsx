"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaMedal, FaUsers, FaTerminal } from "react-icons/fa";

const hackathonStats = [
  {
    icon: FaCode,
    number: "3",
    label: "projects.length",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaMedal,
    number: "3",
    label: "prizes.count()",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30"
  },
  {
    icon: FaTrophy,
    number: "$450+",
    label: "prize.money",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: FaUsers,
    number: "3.4K+",
    label: "total.views",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

const hackathonData = [
  {
    id: 1,
    name: "Recurzive'24",
    position: "// $100 Bounty Winner",
    project: "UPI CryptoConnect",
    date: "5th July 2024",
    tech: ["Solidity", "Node.js", "Express.js", "AAVE", "MongoDB", "Ethereum", "React.js"],
    description: "Revolutionary fintech application bridging crypto and fiat transactions through UPI integration.",
    achievements: [
      "$100 bounty and CEO recognition at ETHIndia",
      "2.4K views and 21 likes on Devfolio",
      "Unified crypto-fiat transaction platform",
      "Flash loan protocol implementation with AAVE"
    ],
    prize: "$100 + CEO Recognition",
    status: "COMPLETED",
    githubLink: "https://github.com/nishant-Tiwari24/upi-cryptoconnect",
    devfolioLink: "https://devfolio.co/projects/upi-cryptoconnect-ce5c"
  },
  {
    id: 2,
    name: "Hackspiration'2024",
    position: "// Winner",
    project: "Rakshak",
    date: "2024",
    tech: ["Blockchain", "React.js", "Node.js", "Encryption", "Smart Contracts", "Healthcare APIs"],
    description: "Advanced healthcare data security platform with blockchain and encryption for medical file exchange.",
    achievements: [
      "Winner at Hackspiration'2024",
      "602 views and 9 likes engagement",
      "Access revocation and Digilocker-style storage",
      "Dedicated healthbot interface for management"
    ],
    prize: "Winner",
    status: "COMPLETED",
    githubLink: "https://github.com/nishant-Tiwari24/rakshak",
    devfolioLink: "https://devfolio.co/projects/rakshak-ba2a"
  },
  {
    id: 3,
    name: "Healthcare Innovation",
    position: "// Award Winner",
    project: "Briefcase",
    date: "14th April 2024",
    tech: ["Solidity", "React", "Node.js", "Metabase", "Express.js", "Ethereum", "Polygon", "web3j"],
    description: "Web 3.0 secure document exchange platform for healthcare data with blockchain encryption.",
    achievements: [
      "839 views and 12 likes on Devfolio",
      "Decentralized storage eliminating vulnerabilities",
      "Transparent blockchain transaction recording",
      "Multi-network support (Ethereum, Polygon, XDC)"
    ],
    prize: "Award Winner",
    status: "COMPLETED",
    githubLink: "https://github.com/bhowmik1234/briifee",
    devfolioLink: "https://devfolio.co/projects/briefcase-ebad"
  }
];

const Hackathons = () => {
  return (
    <>
      <div id="hackathons" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex mb-[80px] flex-col gap-3 justify-center text-center items-center"
        >
          <div className="flex items-center gap-4 text-[50px] font-mono text-white">
            <FaTerminal className="text-white" />
            <span>./hackathons</span>
          </div>
          <div className="text-white/60 font-mono text-sm">
            {"// Competition achievements and code victories"}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-8 mb-[100px]"
        >
          {hackathonStats.map((stat, index) => {
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
        
        {/* Hackathon Cards */}
        <div className="flex flex-row gap-[50px] flex-wrap justify-center max-w-7xl">
          {hackathonData.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative flex flex-col h-[650px] w-[360px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-white/40 group"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 font-mono text-xs">{hackathon.status}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-grow">
                {/* Project Info */}
                <div className="mb-4">
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Event: "}<span className="text-white">{hackathon.name}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Result: "}<span className="text-green-400">{hackathon.position}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-4">
                    {"// Date: "}<span className="text-white/80">{hackathon.date}</span>
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {hackathon.project}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {hackathon.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Achievements:"}</div>
                  <ul className="space-y-1">
                    {hackathon.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                        <span className="text-green-400 mt-0.5 text-xs">▸</span>
                        <span className="leading-tight line-clamp-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-white/60 font-mono text-xs mb-2">
                    {"// Tech Stack:"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.slice(0, 5).map((technology, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-white font-mono px-3 py-1 border border-white/30 rounded bg-white/5 hover:bg-white/10 transition-colors duration-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto">
                  {/* Prize */}
                  <div className="flex justify-center items-center mb-4 font-mono text-sm">
                    <span className="text-white/60">
                      {"prize: "}<span className="text-yellow-400 font-bold">{hackathon.prize}</span>
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={hackathon.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 text-white text-sm font-mono rounded border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm transition duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      {"git clone"}
                    </a>
                    <a
                      href={hackathon.devfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-white text-sm font-mono rounded border border-white/30 bg-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:border-white/50 group-hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      {"devfolio"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hackathons;
