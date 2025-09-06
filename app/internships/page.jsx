"use client";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const internshipData = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Frontend Developer Intern",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    description: "Developed responsive web applications using React and Tailwind CSS",
    skills: ["React", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Intern",
    duration: "Jan 2024 - Mar 2024",
    location: "Bangalore, India",
    description: "Built REST APIs and integrated with frontend applications",
    skills: ["Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    company: "Digital Agency",
    position: "Web Developer Intern",
    duration: "Aug 2023 - Dec 2023",
    location: "Mumbai, India",
    description: "Created interactive websites and optimized for performance",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

const Internships = () => {
  return (
    <>
      <div id="internships" className="mb-[100px]"></div>
      
      <div className="flex w-[100vw] h-[100vh] justify-center">
        <div className="flex flex-col">
          <p className="flex mb-[100px] flex-row gap-5 justify-center text-center items-center text-[50px] font-mono">
            My Internships <FaBriefcase />
          </p>
          
          <div className="flex flex-row gap-[100px]">
            {internshipData.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center h-[400px] w-[300px] border border-white/80 rounded-[40px] p-4 transition duration-300 hover:-translate-y-3"
              >
                <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full border border-white/100">
                  <FaBriefcase size={40}/>
                </div>
                
                <div className="text-center mt-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{internship.company}</h2>
                  <p className="text-sm text-white/80 mb-1">{internship.position}</p>
                  <p className="text-sm text-white/60 mb-2">{internship.duration}</p>
                  <p className="text-xs text-white/60 mb-3">{internship.location}</p>
                  <p className="text-xs text-white/70 mb-4 px-2">{internship.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {internship.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs text-white/60 px-2 py-1 border border-white/40 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="mt-auto px-6 py-2 text-white text-sm font-medium rounded-full border-2 border-white/40 backdrop-blur-md transition duration-300 ease-in-out hover:scale-110">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Internships;
