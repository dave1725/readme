"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaTrophy, FaCalendarAlt, FaPercentage, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { SiPython, SiIitdelhi } from "react-icons/si";

const educationStats = [
  {
    icon: FaGraduationCap,
    number: "3",
    label: "education.levels",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  },
  {
    icon: FaPercentage,
    number: "8.53",
    label: "cgpa.current",
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-400/30"
  },
  {
    icon: FaTrophy,
    number: "25%",
    label: "scholarship.merit",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30"
  },
  {
    icon: FaStar,
    number: "88%",
    label: "nptel.score",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  }
];

const educationData = [
  {
    id: 1,
    institution: "SRM University, AP",
    degree: "B.Tech, Computer Science and Engineering",
    duration: "2022 - 2026",
    location: "Amaravati, Andhra Pradesh",
    status: "CURRENT",
    grade: "CGPA: 8.53 / 10.0",
    percentage: "85.3%",
    description: "Pursuing Computer Science Engineering with focus on software development, algorithms, and distributed systems. Active member of technical communities and research labs.",
    keyAchievements: [
      "25% SRMJEEE merit scholarship recipient",
      "Next Tech Lab R&D Member (March 2023 - Present)",
      "Music Club Website Lead & Former Convener",
      "Multiple national hackathon wins",
      "Technical research and development projects"
    ],
    specializations: ["Software Engineering", "Distributed Systems", "Blockchain", "Full Stack Development"],
    type: "undergraduate",
    isActive: true
  },
  {
    id: 2,
    institution: "Pushpalata Vidya Mandir",
    degree: "Class 12 (CBSE)",
    duration: "2021 - 2022",
    location: "India",
    status: "COMPLETED",
    grade: "Percentage: 87%",
    percentage: "87%",
    description: "Completed senior secondary education with focus on Science stream. Built strong foundation in Mathematics, Physics, and Computer Science.",
    keyAchievements: [
      "Consistent academic performance",
      "Strong foundation in STEM subjects",
      "Computer Science specialization",
      "College entrance exam preparation"
    ],
    specializations: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    type: "senior_secondary",
    isActive: false
  },
  {
    id: 3,
    institution: "Pushpalata Vidya Mandir", 
    degree: "Class 10 (CBSE)",
    duration: "2019 - 2020",
    location: "India",
    status: "COMPLETED",
    grade: "Percentage: 86%",
    percentage: "86%",
    description: "Completed secondary education with excellent academic performance across all subjects. Developed interest in technology and programming during this period.",
    keyAchievements: [
      "Strong academic foundation established",
      "Consistent performance across subjects",
      "Early interest in technology developed",
      "Leadership skills through school activities"
    ],
    specializations: ["Mathematics", "Science", "English", "Social Studies"],
    type: "secondary",
    isActive: false
  }
];

const certifications = [
  {
    name: "NPTEL Python Programming",
    issuer: "IIT Madras",
    score: "88%",
    certificate: "Silver Certificate",
    year: "2024",
    type: "NPTEL"
  }
];

const Education = () => {
  return (
    <>
      <div id="education" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex mb-[80px] flex-col gap-3 justify-center text-center items-center"
        >
          <div className="flex items-center gap-4 text-[50px] font-mono text-white">
            <FaGraduationCap className="text-white" />
            <span>./education</span>
          </div>
          <div className="text-white/60 font-mono text-sm">
            {"// Academic journey and continuous learning"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaSchool className="text-blue-400" size={20} />
            <span className="text-blue-400 font-mono text-sm">Building knowledge foundation</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-8 mb-[100px]"
        >
          {educationStats.map((stat, index) => {
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

        {/* Education Cards */}
        <div className="flex flex-row gap-[60px] flex-wrap justify-center max-w-7xl mb-[80px]">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative flex flex-col h-[650px] w-[420px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 group"
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
                    education.isActive 
                      ? 'text-green-400 bg-green-400/10 border border-green-400/20' 
                      : 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
                  }`}>
                    {education.status}
                  </span>
                  {education.isActive && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 flex-grow overflow-hidden">
                {/* Institution Info */}
                <div className="mb-3">
                  <div className="font-mono text-white/60 text-xs mb-1">
                    {"// Institution: "}<span className="text-blue-400">{education.institution}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-1">
                    {"// Degree: "}<span className="text-white">{education.degree}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-1">
                    {"// Duration: "}<span className="text-green-400">{education.duration}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-3">
                    {"// Grade: "}<span className="text-yellow-400">{education.grade}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-3">
                  {education.description}
                </p>

                {/* Key Achievements - Limited to 3 */}
                <div className="mb-3">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Key Achievements:"}</div>
                  <ul className="space-y-1">
                    {education.keyAchievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-white/60 text-xs font-mono flex items-start gap-2">
                        <span className="text-green-400 mt-0.5 text-xs">▸</span>
                        <span className="leading-tight line-clamp-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specializations */}
                <div className="mb-3">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Specializations:"}</div>
                  <div className="flex flex-wrap gap-1">
                    {education.specializations.slice(0, 4).map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Performance Bar */}
                <div className="mb-3">
                  <div className="text-white/80 font-mono text-sm mb-2">{"// Performance:"}</div>
                  <div className="bg-gray-800/50 rounded-full h-2 mb-1">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${parseFloat(education.percentage)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-white/60">score:</span>
                    <span className="text-green-400">{education.percentage}</span>
                  </div>
                </div>

                {/* Grade Display - Compact */}
                <div className="mt-auto p-3 border border-white/20 rounded bg-white/5">
                  <div className="flex justify-between items-center font-mono text-sm">
                    <span className="text-white/60">Grade:</span>
                    <span className="text-green-400 font-bold">{education.percentage}</span>
                  </div>
                  <div className="flex justify-between items-center font-mono text-xs mt-1">
                    <span className="text-white/60">Status:</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${education.isActive ? 'text-green-400 bg-green-400/10' : 'text-blue-400 bg-blue-400/10'}`}>
                      {education.status.toLowerCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2 font-mono">./certifications</h3>
            <p className="text-white/60 font-mono text-sm">{"// Additional learning achievements"}</p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="relative flex flex-col w-[320px] h-[240px] p-5 border border-purple-400/30 bg-purple-500/10 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300 group"
              >
                {/* Terminal header */}
                <div className="absolute top-2 left-3 flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="mt-4 mb-3 flex items-center justify-center">
                  <SiPython size={32} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="text-center flex-grow">
                  <h4 className="text-white font-mono text-lg mb-2 line-clamp-1">{cert.name}</h4>
                  <p className="text-purple-400 font-mono text-sm mb-3">{cert.issuer}</p>
                  
                  {/* Certification Details */}
                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between items-center font-mono text-xs">
                      <span className="text-white/60">Score:</span>
                      <span className="text-green-400 font-bold">{cert.score}</span>
                    </div>
                    <div className="flex justify-between items-center font-mono text-xs">
                      <span className="text-white/60">Type:</span>
                      <span className="text-yellow-400">{cert.certificate}</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800/50 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-400 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${cert.score}` }}
                    ></div>
                  </div>
                  
                  <div className="text-white/60 font-mono text-xs">
                    {"// Verified by "}<span className="text-purple-400">{cert.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Education;
