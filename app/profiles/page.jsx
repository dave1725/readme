"use client";
import { motion } from "framer-motion";
import { FaUser, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const profileData = [
  {
    id: 1,
    platform: "GitHub",
    username: "@dave1725",
    description: "Check out my open source projects and contributions",
    icon: FaGithub,
    link: "https://github.com/dave1725",
    stats: "50+ Repositories"
  },
  {
    id: 2,
    platform: "LinkedIn",
    username: "Dave Meshak J",
    description: "Connect with me for professional networking",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/davemeshak",
    stats: "500+ Connections"
  },
  {
    id: 3,
    platform: "Twitter",
    username: "@davemeshak",
    description: "Follow me for tech insights and updates",
    icon: FaTwitter,
    link: "https://twitter.com/davemeshak",
    stats: "1K+ Followers"
  }
];

const Profiles = () => {
  return (
    <>
      <div id="profiles" className="mb-[100px]"></div>
      
      <div className="flex w-[100vw] h-[100vh] justify-center">
        <div className="flex flex-col">
          <p className="flex mb-[100px] flex-row gap-5 justify-center text-center items-center text-[50px] font-mono">
            My Profiles <FaUser />
          </p>
          
          <div className="flex flex-row gap-[100px]">
            {profileData.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center h-[400px] w-[300px] border border-white/80 rounded-[40px] p-4 transition duration-300 hover:-translate-y-3"
                >
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full border border-white/100">
                    <IconComponent size={40}/>
                  </div>
                  
                  <div className="text-center mt-6">
                    <h2 className="text-xl font-semibold text-white mb-2">{profile.platform}</h2>
                    <p className="text-sm text-white/80 mb-1">{profile.username}</p>
                    <p className="text-xs text-white/70 mb-3 px-2">{profile.description}</p>
                    <p className="text-sm text-white/60 mb-4">{profile.stats}</p>
                  </div>
                  
                  <a 
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-6 py-2 text-white text-sm font-medium rounded-full border-2 border-white/40 backdrop-blur-md transition duration-300 ease-in-out hover:scale-110"
                  >
                    Visit Profile
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
