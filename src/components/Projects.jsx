import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Star, ChevronRight } from "lucide-react";

const Project = () => {
  const featuredProject = {
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, user authentication, and advanced product filtering.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  };

  const projects = [
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization",
      tech: ["React", "D3.js", "Node.js"],
      status: "Completed"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      tech: ["React Native", "Firebase", "Redux"],
      status: "In Progress"
    },
    {
      title: "Design System",
      description: "Comprehensive component library and design tokens",
      tech: ["Storybook", "Figma", "React"],
      status: "Completed"
    }
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Framer Motion",
    "Tailwind CSS", "Node.js", "Firebase", "GraphQL",
    "Vue.js", "Svelte", "Python", "MongoDB"
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
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LEFT SIDE - 60% - FEATURED PROJECT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-[60%] w-full"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-8 h-full flex flex-col shadow-2xl">
              
              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/60 text-sm">FEATURED PROJECT</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-yellow-400"
                >
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Featured</span>
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden mb-6 flex-1 min-h-[300px]"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {featuredProject.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white/80 text-lg leading-relaxed"
                    >
                      {featuredProject.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Tech Stack & Actions */}
                <div className="space-y-6">
                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-3"
                  >
                    {featuredProject.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm font-medium border border-blue-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      href={featuredProject.liveUrl}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={featuredProject.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 border border-white/20"
                    >
                      <Github className="w-5 h-5" />
                      Source Code
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - 40% - PROJECTS & SKILLS STACK */}
          <div className="lg:w-[40%] w-full space-y-8">
            
            {/* Projects List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
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
                <h3 className="text-white font-bold text-xl">Projects</h3>
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
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }}
                    className="p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h4>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          project.status === "Completed" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                    <p className="text-white/60 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 rounded-lg text-white/50 text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills Marquee */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
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
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-white font-bold text-xl">Tech Stack</h3>
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
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
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

export default Project;