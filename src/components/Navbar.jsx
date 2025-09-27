import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      y: -2,
      color: "#f97316",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const navItems = ['Home', 'About', 'Projects',];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Left Side - Animated Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                <span className="text-black font-bold text-xl">SK</span>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-orange-400 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            <div className="text-left">
              <motion.h1 
                className=" text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Shiv Kumar
              </motion.h1>
              <motion.p 
                className="text-orange-400 text-xs font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden lg:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.div key={item} variants={itemVariants}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white px-4 py-2 text-sm font-medium group"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-600/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 90 }
              }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden mt-4"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {navItems.map((item, index) => (
                    <motion.div key={item} variants={itemVariants}>
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        className="flex items-center text-gray-300 hover:text-white p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className="w-2 h-2 bg-orange-500 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="font-medium">{item}</span>
                        <motion.div
                          className="ml-auto text-orange-400 opacity-0 group-hover:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  ))}
                  
                  <motion.div variants={itemVariants} className="pt-4">
                    <motion.button
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-orange-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Me
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;