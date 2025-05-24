// Enhanced SkillBadge.jsx
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function SkillBadge({ skill, delay = 0 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay, duration: 0.3 }}
      whileHover={{ 
        scale: 1.1,
        rotate: isHovered ? [0, -5, 5, 0] : 0,
        transition: { duration: 0.5 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="inline-block px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full text-cyan-400 text-sm font-medium shadow-lg border border-cyan-400/20"
    >
      {skill}
    </motion.div>
  );
}