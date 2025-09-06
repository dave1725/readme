"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaMedal, FaUsers, FaTerminal } from "react-icons/fa";

const hackathonStats = [
  {
    icon: FaCode,
    number: "4",
    label: "projects.length",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaMedal,
    number: "4",
    label: "prizes.count()",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30"
  },
  {
    icon: FaTrophy,
    number: "6",
    label: "hackathons.size",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: FaUsers,
    number: "1",
    label: "organized.total",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

const hackathonData = [
  {
    id: 1,
    name: "HackTheCode 2024",
    position: "// 1st Place Winner",
    project: "AI-Powered Study Assistant",
    date: "March 2024",
    tech: ["React", "Python", "OpenAI API", "Flask"],
    description: "Developed an AI assistant that helps students organize study materials and generate personalized quizzes.",
    prize: "$5,000",
    status: "COMPLETED",
    commits: "127"
  },
  {
    id: 2,
    name: "DevFest Hackathon",
    position: "// 2nd Place",
    project: "EcoTrack Mobile App",
    date: "January 2024",
    tech: ["React Native", "Firebase", "Node.js"],
    description: "Created a mobile app to track carbon footprint and suggest eco-friendly alternatives.",
    prize: "$2,500",
    status: "DEPLOYED",
    commits: "89"
  },
  {
    id: 3,
    name: "CodeForGood",
    position: "// Finalist",
    project: "Healthcare Dashboard",
    date: "November 2023",
    tech: ["Next.js", "PostgreSQL", "Chart.js"],
    description: "Built a dashboard for healthcare workers to track patient data and medication schedules.",
    prize: "Recognition",
    status: "MERGED",
    commits: "156"
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
              className="relative flex flex-col h-[520px] w-[360px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-white/40 group"
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
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                  {hackathon.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-white/60 font-mono text-xs mb-2">
                    {"// Tech Stack:"}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((technology, techIndex) => (
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
                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 font-mono text-xs">
                    <span className="text-white/60">
                      {"commits: "}<span className="text-green-400">{hackathon.commits}</span>
                    </span>
                    <span className="text-white/60">
                      {"prize: "}<span className="text-yellow-400">{hackathon.prize}</span>
                    </span>
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-4 py-3 text-white text-sm font-mono rounded border border-white/30 bg-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:border-white/50 group-hover:scale-[1.02]">
                    {"git clone project.repo"}
                  </button>
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
