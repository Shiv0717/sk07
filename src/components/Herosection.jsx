import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Code2, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  const projects = [
    "E-Commerce Platform",
    "SaaS Dashboard", 
    "Mobile App",
    "Design System"
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Framer Motion",
    "Tailwind CSS", "Node.js", "Firebase", "GraphQL",
    "Vue.js", "Svelte", "Python", "MongoDB"
  ];

  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Staggered animation for list items
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-black flex justify-center items-center px-6  relative overflow-hidden">
      {/* Animated background elements */}
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
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT CONTENT - 70% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-gradient-to-br from-black to-gray-900 rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl"
          >
            {/* TEXT SECTION */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white">SHIV KUMAR</h2>
                <motion.p 
                  className="flex items-center text-white/60 text-sm gap-2 mt-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-4 h-4" /> MUMBAI, INDIA
                </motion.p>
              </motion.div>

              <motion.div 
                className="flex items-center flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {["FRONTEND DEV", "3+ YEARS", "AVAILABLE"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255,255,255,0.15)" 
                    }}
                    className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                  BUILD
                  <br />
                  <motion.span
                    animate={{ 
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
                  >
                    DIGITAL
                  </motion.span>
                  <br />
                  <span className="text-white">EXPERIENCES</span>
                </h1>
                <motion.p 
                  className="text-white/70 mt-6 text-xl leading-relaxed max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Creating fast, responsive web applications 
                  that drive results and user engagement.
                </motion.p>
              </motion.div>

              
            </div>

            {/* IMAGE SECTION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="flex-shrink-0 relative"
            >
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="relative"
              >
               <img
  src="/logo/logo.jpeg"
  alt="Shiv Kumar"
  className="w-72 h-72 md:w-80 md:h-80 rounded-[32px] object-cover border-2 border-black/10 shadow-2xl mix-blend-multiply opacity-95"
/>

              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - 30% */}
          <div className="lg:w-[30%] w-full space-y-8">
            
            {/* Projects Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-white/10 shadow-2xl"
            >
              <motion.div 
                className="flex items-center gap-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h3 className="text-white font-bold text-lg">Recent Work</h3>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }}
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-white/80 text-sm font-medium group-hover:text-white">
                      {project}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.5, rotate: 90 }}
                      className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills Card with Marquee */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden"
            >
              <motion.div 
                className="flex items-center gap-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Code2 className="w-5 h-5 text-green-400" />
                <h3 className="text-white font-bold text-lg">Tech Stack</h3>
              </motion.div>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, -window.innerWidth * 0.3],
                  }}
                  transition={{
                    x: {
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-3 py-2"
                  style={{ width: "fit-content" }}
                >
                  {/* Double the array for seamless loop */}
                  {[...skills, ...skills].map((skill, index) => (
                    <motion.span
                      key={`${skill}-${index}`}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        backgroundColor: "rgba(59, 130, 246, 0.2)"
                      }}
                      className="px-4 py-3 bg-white/5 rounded-xl text-white/80 text-sm font-medium border border-white/10 whitespace-nowrap cursor-pointer backdrop-blur-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Gradient overlays for smooth edges */}
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

export default Hero;