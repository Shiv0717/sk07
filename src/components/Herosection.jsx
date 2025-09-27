import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-20 md:mt-0 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                👋 Hello, I'm Shiv Kumar
              </motion.span>
              
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                variants={itemVariants}
              >
                <span className="block text-white">Full Stack</span>
                <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                I craft digital experiences that blend innovative design 
                with cutting-edge technology. Specializing in modern web 
                applications that drive results and create impact.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                className="group relative bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  View My Work
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>

              <motion.button
                className="group flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon className="w-5 h-5" />
                Watch Showreel
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
              variants={itemVariants}
            >
              {[
                { number: '10+', label: 'Projects' },
                { number: '6+', label: 'months Exp' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 3D Avatar/Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Avatar Container */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-white/10"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {/* Avatar Image Placeholder */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <div className="absolute inset-2 bg-black rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                  >
                    <span className="text-xl">💡</span>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {['React', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Decoration */}
              <motion.div
                className="absolute -z-10 inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl rounded-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default HeroSection;