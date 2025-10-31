import React from "react";
import { motion } from "framer-motion";
import { Building, Calendar, MapPin, Code, Users, Zap, Award, ArrowUpRight, Star, Rocket } from "lucide-react";

const Exp = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Kishna Software Solution",
      period: "Sep 2023 – Present",
      duration: "1+ years",
      location: "Remote",
      type: "Full-time",
      description: "Leading frontend development for multiple client projects with modern technologies and best practices.",
      achievements: [
        "Built 10+ responsive web applications using React.js",
        "Improved application performance by 40% through optimization",
        "Led UI/UX implementation for 5+ enterprise projects",
        "Mentored 2 junior developers in frontend best practices"
      ],
      tech: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Git"],
      projects: 12,
      status: "current",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      highlight: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Ayodhya Webosoft",
      period: "Apr 2023 – Sep 2023",
      duration: "6 months",
      location: "Remote",
      type: "Full-time",
      description: "Developed and maintained client websites and web applications with focus on user experience.",
      achievements: [
        "Developed 8+ client websites with modern design principles",
        "Reduced page load time by 30% through optimization",
        "Implemented responsive designs for all devices",
        "Collaborated with design teams for pixel-perfect UIs"
      ],
      tech: ["JavaScript", "React", "CSS3", "Bootstrap", "REST APIs"],
      projects: 8,
      status: "completed",
      icon: <Code className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      highlight: false
    }
  ];

  const skillsCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      icon: <Code className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-500"
    },
   
  ];

  const stats = [
    { number: "1.5+", label: "Years Experience", sublabel: "Frontend Development" },
    { number: "20+", label: "Projects", sublabel: "Successfully Delivered" },
    { number: "98%", label: "Client Satisfaction", sublabel: "Across Projects" },
    { number: "2", label: "Companies", sublabel: "Work Experience" }
  ];

  return (
    <section className="min-h-screen bg-black flex justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.05, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section - Asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8"
        >
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
            >
              <Building className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Professional Journey</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Digital
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              Transforming ideas into interactive, high-performance web applications 
              through modern frontend technologies and user-centric design.
            </p>
          </div>

          {/* Stats - Asymmetric Placement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/3 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-4 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-400 text-sm font-semibold">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content - Asymmetric Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Current Experience (Wider) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {experiences.filter(exp => exp.highlight).map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ y: -5 }}
                className="group relative mb-8"
              >
                <div className={`absolute inset-0  rounded-3xl blur-xl group-hover:${exp.color}/20 transition-all duration-500`}></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Header with Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${exp.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30"
                    >
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Current Role</span>
                    </motion.div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                      <span className="text-blue-400">• {exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                      >
                        <Award className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-white/5 text-white rounded-xl text-sm font-medium border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Previous Experience & Skills (Narrower) */}
          <div className="space-y-8">
            {/* Previous Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-purple-400" />
                Previous Role
              </h3>
              
              {experiences.filter(exp => !exp.highlight).map((exp) => (
                <motion.div
                  key={exp.id}
                  whileHover={{ x: 5 }}
                  className="group cursor-pointer"
                >
                  <div className="p-4 rounded-xl border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300">
                    <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-blue-400 text-sm mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exp.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 text-white/70 rounded-lg text-xs border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                      {category.icon}
                    </div>
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 text-white/80 rounded-lg text-sm border border-white/5 hover:border-white/10 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
       
      
      </div>
    </section>
  );
};

export default Exp;