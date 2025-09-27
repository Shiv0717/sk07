import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '💻', href: 'https://github.com/yourusername', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/yourusername', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: '📸', href: 'https://instagram.com/yourusername', color: 'hover:text-pink-400' },
    { name: 'LeetCode', icon: '⚡', href: 'https://leetcode.com/yourusername', color: 'hover:text-yellow-400' }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Tailwind CSS'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
       

       

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Shiv Kumar. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <HeartIcon className="w-4 h-4 text-red-500 mx-1" />
            </motion.span>
            and lots of coffee
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <motion.a
              href="#"
              className="hover:text-orange-400 transition-colors"
              whileHover={{ y: -1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-orange-400 transition-colors"
              whileHover={{ y: -1 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 z-40"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ↑
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-3 h-3 bg-blue-500 rounded-full opacity-30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </footer>
  );
};

export default Footer;