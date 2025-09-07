"use client";
import { motion } from "framer-motion";
import { FaPodcast, FaSpotify, FaMicrophone, FaPlay, FaHeadphones, FaStream } from "react-icons/fa";

const podcastStats = [
  {
    icon: FaPodcast,
    number: "3",
    label: "episodes.total",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-400/30"
  },
  {
    icon: FaSpotify,
    number: "1",
    label: "platforms.live",
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-400/30"
  },
  {
    icon: FaStream,
    number: "1",
    label: "series.active",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30"
  },
  {
    icon: FaHeadphones,
    number: "∞",
    label: "listeners.await",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30"
  }
];

const podcastData = [
  {
    id: 1,
    title: "Say Whaat? Episode 1",
    subtitle: "// Pilot Episode",
    description: "The inaugural episode where we dive into tech trends, student life, and what makes us say 'whaat?' in the digital world.",
    date: "2024-03-15",
    duration: "28:45",
    status: "PUBLISHED",
    platform: "Spotify",
    listens: "1.2K",
    episode: "001",
    embedSrc: "https://open.spotify.com/embed/episode/4eV5ecO3iZgE0bReuvOO6W?utm_source=generator&theme=0&t=0",
    spotifyLink: "https://open.spotify.com/episode/4eV5ecO3iZgE0bReuvOO6W?si=Zssh2L7bSt2f2zHVPlOIRQ"
  },
  {
    id: 2,
    title: "Say Whaat? Episode 2",
    subtitle: "// Deep Dive Series",
    description: "Exploring the intersection of technology and creativity, featuring guest insights and surprising revelations.",
    date: "2024-03-22",
    duration: "32:18",
    status: "PUBLISHED",
    platform: "Spotify", 
    listens: "890",
    episode: "002",
    embedSrc: "https://open.spotify.com/embed/episode/6hbgvCjkfQB9qa4FjCD9oy?utm_source=generator&theme=0&t=0",
    spotifyLink: "https://open.spotify.com/episode/6hbgvCjkfQB9qa4FjCD9oy?si=7hsqlCTnTki84yyqRVsYQw"
  },
  {
    id: 3,
    title: "Say Whaat? Episode 3",
    subtitle: "// Future Focus",
    description: "Looking ahead at emerging technologies and their impact on our generation. Spoiler: the future is wild!",
    date: "2024-03-29",
    duration: "35:12",
    status: "PUBLISHED",
    platform: "Spotify",
    listens: "756",
    episode: "003",
    embedSrc: "https://open.spotify.com/embed/episode/10dm4ub79nLmAbLFjbD3jF?utm_source=generator&theme=0&t=0",
    spotifyLink: "https://open.spotify.com/episode/10dm4ub79nLmAbLFjbD3jF?si=W0QAbG9LQGCPegSdizqTEw"
  }
];

const Podcasts = () => {
  return (
    <>
      <div id="podcasts" className="mb-[50px]"></div>
      
      <div className="flex flex-col items-center w-[100vw] min-h-screen py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex mb-[60px] md:mb-[80px] flex-col gap-3 justify-center text-center items-center px-4"
        >
          <div className="flex items-center gap-2 md:gap-4 text-[32px] md:text-[50px] font-mono text-white">
            <FaMicrophone className="text-white" />
            <span>./podcasts</span>
          </div>
          <div className="text-white/60 font-mono text-xs md:text-sm">
            {"// Say Whaat? With SRM AP - Audio adventures in tech"}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaSpotify className="text-green-400" size={16} />
            <span className="text-green-400 font-mono text-xs md:text-sm">Available on Spotify</span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-[60px] md:mb-[100px] px-4 max-w-6xl"
        >
          {podcastStats.map((stat, index) => {
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

        {/* Podcast Episodes */}
        <div className="flex flex-row gap-[50px] flex-wrap justify-center max-w-7xl">
          {podcastData.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative flex flex-col h-auto lg:h-[720px] w-full max-w-[400px] border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-green-400/40 group"
            >
              {/* Audio Player Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-green-500/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2">
                  <FaSpotify className="text-green-400" size={16} />
                  <span className="text-green-400 font-mono text-xs">{episode.status}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-grow">
                {/* Episode Info */}
                <div className="mb-4">
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Episode: "}<span className="text-white">#{episode.episode}</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-2">
                    {"// Series: "}<span className="text-green-400">Say Whaat? With SRM AP</span>
                  </div>
                  <div className="font-mono text-white/60 text-xs mb-4">
                    {"// Released: "}<span className="text-white/80">{episode.date}</span>
                  </div>
                </div>

                {/* Episode Title */}
                <h3 className="text-xl font-bold text-white mb-1 font-mono">
                  {episode.title}
                </h3>
                <p className="text-green-400 font-mono text-sm mb-4">
                  {episode.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {episode.description}
                </p>

                {/* Spotify Embed */}
                <div className="mb-4 rounded-xl overflow-hidden border border-green-400/20">
                  <iframe 
                    data-testid="embed-iframe" 
                    style={{borderRadius: '12px'}} 
                    src={episode.embedSrc}
                    width="100%" 
                    height="200" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                  />
                </div>

                {/* Audio Info */}
                <div className="mb-4 p-3 border border-white/20 rounded bg-white/5">
                  <div className="flex justify-between items-center font-mono text-xs mb-2">
                    <span className="text-white/60">
                      {"duration: "}<span className="text-blue-400">{episode.duration}</span>
                    </span>
                    <span className="text-white/60">
                      {"listens: "}<span className="text-yellow-400">{episode.listens}</span>
                    </span>
                  </div>
                  <div className="text-white/60 font-mono text-xs">
                    {"platform: "}<span className="text-green-400">{episode.platform}</span>
                  </div>
                </div>

                {/* Action Button */}
                <a 
                  href={episode.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 text-white text-sm font-mono rounded border border-green-400/30 bg-green-500/10 backdrop-blur-sm transition duration-300 hover:bg-green-500/20 hover:border-green-400/50 group-hover:scale-[1.02] flex items-center justify-center gap-2 text-center"
                >
                  <FaSpotify size={16} />
                  {"open.spotify()"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Podcasts;
