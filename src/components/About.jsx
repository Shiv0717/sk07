import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Award, Star, ChevronRight, BookOpen } from "lucide-react";

const Edu = () => {
  const featuredEducation = {
    degree: "B.Tech. (Computer Science & Engineering)",
    institution: "KL University",
    grade: "8.83 CGPA",
    period: "July 2020 – 2024",
    description: "Specialized in web technologies, software engineering, and modern development practices. Completed multiple projects in full-stack development and participated in coding competitions.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    achievements: ["Web Technologies", "Software Engineering", "Full-Stack Projects"],
    featured: true
  };

  const education = [
    {
      degree: "Higher Secondary",
      institution: "Board of Intermediate Education",
      grade: "8.44 CGPA",
      period: "2020",
      status: "Completed"
    },
    {
      degree: "Secondary Education", 
      institution: "Board of Higher Secondary",
      grade: "57%",
      period: "2018",
      status: "Completed"
    }
  ];

  const skills = [
    "Software Engineering", "Web Development", "Data Structures", "Algorithms",
    "Database Management", "OOP Concepts", "System Design", "Cloud Computing",
    "Machine Learning", "Mobile Development", "UI/UX Design", "DevOps"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-black flex justify-center items-center px-6 pt-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
          
          {/* RIGHT SIDE - 60% - FEATURED EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-[60%] w-full"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-6 h-full flex flex-col shadow-2xl">
              
              {/* Education Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/60 text-sm">FEATURED DEGREE</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-yellow-400"
                >
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Highest Degree</span>
                </motion.div>
              </motion.div>

              {/* Education Content */}
              <div className="flex-1 flex flex-col">
                {/* Education Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden mb-6 flex-1 min-h-[300px]"
                >
                 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {featuredEducation.degree}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white/80 text-lg leading-relaxed"
                    >
                      {featuredEducation.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Details & Actions */}
                <div className="space-y-6">
                  {/* Institution & Grade */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl font-semibold text-blue-400"
                      >
                        {featuredEducation.institution}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-white/60"
                      >
                        {featuredEducation.period}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 }}
                      className="text-right"
                    >
                      <div className="text-4xl font-black text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {featuredEducation.grade}
                      </div>
                      <div className="text-white/60 text-sm">CGPA</div>
                    </motion.div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="flex flex-wrap gap-3"
                  >
                    {featuredEducation.achievements.map((achievement, index) => (
                      <motion.span
                        key={achievement}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-green-500/20 text-green-300 rounded-xl text-sm font-medium border border-green-500/30 backdrop-blur-sm"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex gap-4"
                  >
                    
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LEFT SIDE - 40% - EDUCATION LIST & SKILLS */}
          <div className="lg:w-[40%] w-full space-y-8">
            
            {/* Education List */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-white/10 shadow-2xl"
            >
              <motion.div 
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-white font-bold text-xl">Education</h3>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-white/60 hover:text-white text-sm flex items-center gap-1 transition-colors"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }}
                    className="p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <GraduationCap className="w-4 h-4 text-blue-400" />
                        </div>
                        <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                          {edu.degree}
                        </h4>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 rounded-lg text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30"
                      >
                        {edu.status}
                      </motion.span>
                    </div>
                    <p className="text-white/60 text-sm mb-2 leading-relaxed">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {edu.grade}
                      </span>
                      <span className="text-white/40 text-sm">{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills Marquee */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden"
            >
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <h3 className="text-white font-bold text-xl">Academic Skills</h3>
              </motion.div>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    x: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-4 py-2"
                >
                  {[...skills, ...skills, ...skills].map((skill, index) => (
                    <motion.div
                      key={`${skill}-${index}`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                      }}
                      className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl text-white/80 text-sm font-medium border border-white/10 whitespace-nowrap cursor-pointer backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    >
                      <Award className="w-3 h-3 text-purple-400" />
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
                <div className="absolute right-0 top-0 w-10 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edu;