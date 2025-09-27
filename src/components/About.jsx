import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  TrophyIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stats = [
    {
      icon: CodeBracketIcon,
      number: "31+",
      label: "Projects",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: PuzzlePieceIcon,
      number: "750+",
      label: "Coding Problems",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrophyIcon,
      number: "5★",
      label: "HackerRank",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: AcademicCapIcon,
      number: "8.83",
      label: "CGPA",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const skills = {
    languages: ["JavaScript", "C", "C++"],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux / Context API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    databases: [
      "MongoDB",
      "Firebase (Authentication, Firestore, Cloud Functions, Hosting)",
    ],
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className=" mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Passionate{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-gray-400 text-lg ">
              Crafting digital experiences with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - About Text */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I’m a passionate and results-driven Full Stack Developer
                    with a strong foundation in the{" "}
                    <span className="text-orange-400 font-medium">
                      MERN stack
                    </span>
                    . I thrive on turning ideas into dynamic, user-focused web
                    applications — from designing intuitive frontends to
                    building robust backends that scale effortlessly.
                  </p>

                  <p className="mt-4">
                    My core expertise lies in{" "}
                    <span className="text-orange-400 font-medium">
                      React.js, Next.js, Node.js, and Express.js
                    </span>
                    , backed by experience in cloud-based integration using{" "}
                    <span className="text-orange-400 font-medium">
                      Firebase
                    </span>{" "}
                    and{" "}
                    <span className="text-orange-400 font-medium">MongoDB</span>
                    . I’m constantly exploring modern development practices to
                    deliver clean, maintainable, and performance-optimized code.
                  </p>
                </div>

                {/* Education */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Education
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h5 className="text-white font-medium">
                          B.Tech. (CSE) - 8.83 CGPA
                        </h5>
                        <p className="text-gray-400">KL University</p>
                        <p className="text-gray-500 text-sm">
                          July 2020 – 2024
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
  <h4 className="text-lg font-semibold text-white mb-4">
    Experience
  </h4>
  <div className="space-y-4">
    <div className="flex items-start gap-4">
      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
      <div>
        <h5 className="text-white font-medium">
          Frontend Developer – 6 Months
        </h5>
        <p className="text-gray-400">Ayodhya Webosoft</p>
        <p className="text-gray-500 text-sm">
          Mar 2025 – Sep 2025
        </p>
      </div>
    </div>
  </div>
</div>

              </div>
            </motion.div>

            {/* Right Content - Skills & Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}

              {/* Skills */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technical Skills
                </h4>
                <div className="space-y-6">
                  {/* Languages */}
                  <div>
                    <h5 className="text-orange-400 font-medium mb-3">
                      Languages
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((lang) => (
                        <motion.span
                          key={lang}
                          className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm text-orange-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {lang}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div>
                    <h5 className="text-orange-400 font-medium mb-3">
                      Frameworks & Libraries
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((framework) => (
                        <motion.span
                          key={framework}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {framework}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Databases */}
                  <div>
                    <h5 className="text-orange-400 font-medium mb-3">
                      Databases & Cloud
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((db) => (
                        <motion.span
                          key={db}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {db}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <motion.div
                className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Made 31 Personal Projects in Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Achieved 5★ rating at HackerRank
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Solved Over 750 Coding Questions
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="https://drive.google.com/uc?export=download&id=1ybCEpBGWbRkb-cK1gn2C7tQgOaeb5Raq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
