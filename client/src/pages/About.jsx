import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center mb-8"
      >
        <a href="/" className="mr-4 text-cyan-400 hover:text-cyan-300">
          <ArrowLeftIcon className="h-5 w-5" />
        </a>
        <h2 className="text-3xl font-bold">About Me</h2>
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-cyan-400">My Journey</h3>
        <p className="text-gray-300 mb-4">
          I'm a passionate full-stack developer with expertise in modern JavaScript technologies. 
          My journey began 5 years ago when I built my first website, and I've been hooked ever since.
        </p>
        <p className="text-gray-300 mb-4">
          I specialize in creating responsive, accessible, and performant web applications using React, 
          Node.js, and other modern web technologies.
        </p>
        <p className="text-gray-300">
          When I'm not coding, you can find me contributing to open-source projects, learning new technologies, 
          or sharing knowledge with the developer community.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gray-800/50 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-cyan-400">Education & Experience</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-200">Bachelor's in Computer Science</h4>
            <p className="text-gray-400 text-sm">University Name, 2018-2022</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-200">Full Stack Developer at Company</h4>
            <p className="text-gray-400 text-sm">2022-Present</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}