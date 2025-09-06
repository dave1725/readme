"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { GraduationCap, Award, BookOpen, TrendingUp, Star } from 'lucide-react';

// Dynamically import Recharts components to avoid SSR issues
const PieChart = dynamic(() => import('recharts').then((mod) => mod.PieChart), { ssr: false });
const Pie = dynamic(() => import('recharts').then((mod) => mod.Pie), { ssr: false });
const Cell = dynamic(() => import('recharts').then((mod) => mod.Cell), { ssr: false });
const BarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then((mod) => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then((mod) => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then((mod) => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then((mod) => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then((mod) => mod.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then((mod) => mod.Line), { ssr: false });

// Grade distribution data
const gradeData = [
  { name: 'O Grades', value: 8, color: '#10B981' },
  { name: 'A+ Grades', value: 12, color: '#3B82F6' },
  { name: 'A Grades', value: 6, color: '#8B5CF6' },
  { name: 'B+ Grades', value: 2, color: '#F59E0B' },
];

// Subject performance data
const subjectData = [
  { subject: 'Math', score: 98, grade: 'O' },
  { subject: 'Physics', score: 96, grade: 'O' },
  { subject: 'Chemistry', score: 94, grade: 'A+' },
  { subject: 'CS', score: 99, grade: 'O' },
  { subject: 'English', score: 88, grade: 'A+' },
  { subject: 'Biology', score: 92, grade: 'A+' },
];

// Academic progress over years
const progressData = [
  { year: '2018', gpa: 3.2 },
  { year: '2019', gpa: 3.6 },
  { year: '2020', gpa: 3.8 },
  { year: '2021', gpa: 3.9 },
  { year: '2022', gpa: 4.0 },
];

const Education = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div id="education" className="mb-[100px]"></div>

      <div className="min-h-screen w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
              <GraduationCap className="text-blue-400" size={60} />
              My Education
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A comprehensive overview of my academic journey, achievements, and performance analytics
            </p>
          </motion.div>

          {/* Academic Overview Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, title: "Overall GPA", value: "4.0", description: "Cumulative" },
              { icon: Star, title: "Top Performer", value: "Top 5%", description: "Class Rank" },
              { icon: BookOpen, title: "Subjects", value: "28+", description: "Completed" },
              { icon: TrendingUp, title: "Excellence", value: "20+", description: "A+ & O Grades" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <stat.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-lg font-semibold text-white/90">{stat.title}</p>
                <p className="text-sm text-white/60">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Grade Distribution Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="text-yellow-400" size={24} />
                Grade Distribution
              </h3>
              {isClient && (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {gradeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </motion.div>

            {/* Subject Performance Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="text-green-400" size={24} />
                Top Subjects Performance
              </h3>
              {isClient && (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="subject" tick={{ fill: '#ffffff80' }} />
                    <YAxis tick={{ fill: '#ffffff80' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#000000aa', 
                        border: '1px solid #ffffff40',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </motion.div>
          </div>

          {/* Academic Progress Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-purple-400" size={24} />
              Academic Progress Over Time
            </h3>
            {isClient && (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" tick={{ fill: '#ffffff80' }} />
                  <YAxis tick={{ fill: '#ffffff80' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000000aa', 
                      border: '1px solid #ffffff40',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="gpa" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Institution Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pushpalata Vidya Mandir",
                level: "Class 10th CBSE Board",
                year: "2019 - 2020",
                percentage: "95.6%",
                image: "/school.jpg",
                achievements: ["School Topper", "Mathematics Olympiad Winner", "Science Fair Gold Medal"],
                website: "https://pushpalataschools.com/pvm/"
              },
              {
                name: "St. Xavier's College",
                level: "Class 12th Science",
                year: "2020 - 2022",
                percentage: "96.8%",
                image: "/college.jpg",
                achievements: ["District Rank 3", "Physics Olympiad", "Debate Competition Winner"],
                website: "https://stxaviers.edu"
              },
              {
                name: "Indian Institute of Technology",
                level: "B.Tech Computer Science",
                year: "2022 - Present",
                percentage: "9.2 CGPA",
                image: "/university.jpg",
                achievements: ["Dean's List", "Hackathon Winner", "Research Publication"],
                website: "https://iit.ac.in"
              }
            ].map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                {/* Institution Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <GraduationCap size={64} className="text-white/40" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{institution.name}</h3>
                    <p className="text-sm text-white/80">{institution.level}</p>
                  </div>
                </div>

                {/* Institution Details */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-white/60">{institution.year}</span>
                    <span className="text-lg font-bold text-green-400">{institution.percentage}</span>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {institution.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center gap-2">
                          <Star size={14} className="text-yellow-400" />
                          <span className="text-sm text-white/70">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visit Button */}
                  <motion.a
                    href={institution.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Visit Institution
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
