import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { EyeIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
        id: 1,
        title: "Gunti Universe E-Commerce Frontend",
        description: "Frontend interface for the Gunti Universe e-commerce platform, built with React and fully integrated with their REST API.",
        fullDescription: "Developed a modern, responsive e-commerce frontend for Gunti Universe using React and Tailwind CSS. Integrated RESTful APIs to dynamically fetch products, handle user authentication, manage shopping carts, and process orders. Implemented efficient state management, user-friendly navigation, category filtering, and interactive UI components. Focused on performance, scalability, and real-time data handling from the backend.",
        image: "🛍️",
        technologies: ["React", "Tailwind CSS", "Axios", "Gunti Universe API", "React Router", "JWT", "Context API"],
        liveLink: "https://guntiuniverse.com/",  // or your hosted frontend URL
        githubLink: "#",  // replace with your repo URL if available
        category: "Frontend Development",
        features: [
          "Dynamic Product Listings via API",
          "Cart & Checkout Functionality",
          "JWT-Based Authentication",
          "Responsive & Mobile-Friendly Design",
          "Category Filtering & Search",
          "Secure API Integration",
          "Clean & Intuitive UI"
        ]
      },      
      {
        id: 2,
        title: "Shree MediShine Health Care Website",
        description: "Frontend healthcare website with API integration, appointment booking, and responsive UI for a medical services provider.",
        fullDescription: "Developed the frontend of Shree MediShine Health Care’s website, focused on delivering a clean, user-friendly UI for patients and visitors. Integrated RESTful APIs to power dynamic content, appointment booking, service listings, and contact forms. The site is fully responsive, optimized for performance, and built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
        image: "💊",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Axios", "API Integration"],
        liveLink: "https://www.medishinehealth.com/",
        githubLink: "#", // replace with your repo URL if public
        category: "Frontend + API Integration",
        features: [
          "Clean and Responsive UI",
          "Dynamic Content via APIs",
          "Appointment Booking Integration",
          "Service Listings",
          "Contact Form with Validation",
          "Smooth Scroll & Animations"
        ]
      },
      
      {
        id: 3,
        title: "Private Job Search Platform",
        description: "Frontend development and API integration for a modern job search platform focused on privacy and performance.",
        fullDescription: "Built the frontend for Private Job Search, a platform that helps users search and apply for jobs securely and efficiently. Implemented clean, responsive UI components using React and Tailwind CSS. Integrated APIs for job listings, user authentication, filtering, and application submission. Focused on accessibility, performance, and a seamless user experience across devices.",
        image: "💼",
        technologies: ["React", "Tailwind CSS", "Axios", "Framer Motion", "REST API"],
        liveLink: "https://privatejobsearch.com/",
        githubLink: "#",  // Replace with your repo if available
        category: "Frontend + API Integration",
        features: [
          "Job Listing & Search",
          "Secure API Integration",
          "Responsive & Mobile-Optimized UI",
          "Filtering & Category-Based Search",
          "User Authentication (if applicable)",
          "Clean UX & Smooth Animations"
        ]
      },      
      {
        id: 4,
        title: "ProptKart Real Estate Platform",
        description: "Frontend development and API integration for a real estate platform with property listings, search filters, and user posting capabilities.",
        fullDescription: "Developed the user-facing frontend for ProptKart, a modern real estate platform enabling users to browse, search, and post properties for sale or rent. Integrated REST APIs for dynamic property data, advanced filtering, property detail pages, and user dashboards. Built using React with Tailwind CSS, the application offers a clean, responsive UI with smooth UX and optimized performance.",
        image: "🏠",
        technologies: ["React", "Tailwind CSS", "Axios", "Framer Motion", "REST API"],
        liveLink: "https://www.proptkart.com/type",
        githubLink: "#",  // Replace with your GitHub repo if available
        category: "Frontend + API Integration",
        features: [
          "Dynamic Property Listings",
          "User Property Posting",
          "Advanced Search & Filtering",
          "Property Detail Pages",
          "Responsive Design",
          "Dashboard Integration"
        ]
      }
      
  ];

  const ProjectCard = ({ project, isActive }) => {
    return (
      <motion.div
        className={`relative bg-gray-800/50 backdrop-blur-lg border-2 rounded-3xl overflow-hidden transition-all duration-500 ${
          isActive 
            ? 'border-orange-500 scale-105 shadow-2xl shadow-orange-500/20' 
            : 'border-white/10 scale-95 opacity-70'
        }`}
        whileHover={{ scale: 1.02 }}
        layout
      >
        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-sm text-orange-300 font-medium backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Project Icon/Image */}
        <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <motion.span 
            className="text-8xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.image}
          </motion.span>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            layoutId={`title-${project.id}`}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
  <motion.a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <EyeIcon className="w-5 h-5" />
    View Website
  </motion.a>
</div>

        </div>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        )}
      </motion.div>
    );
  };

  const ProjectModal = ({ project, onClose }) => {
    return (
      <AnimatePresence>
        {project && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="relative bg-gray-900 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>

              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Left Side - Project Visual */}
                <div className="relative">
                  <div className="relative h-80 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center">
                    <span className="text-9xl">{project.image}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 mt-6">
                    <motion.a
                      href={project.liveLink}
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      Source Code
                    </motion.a>
                  </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Here are some of my recent projects that showcase my skills in full-stack development
          </motion.p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 1.5,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="py-10"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <ProjectCard project={project} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center gap-2 mt-8" />
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #f97316;
          opacity: 1;
          transform: scale(1.2);
        }
        
        .swiper-slide {
          transition: transform 0.3s ease;
            margin-top: 20px;
            margin-bottom: 20px;
        }
      `}</style>
    </section>
  );
};

export default Projects;