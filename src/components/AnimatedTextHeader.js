import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      delay: 0.8,
    },
  },
};

const AnimatedTextHeader = ({ text, className = '' }) => {
  return (
    <div>
      <motion.h1
        className={`inline-block w-full text-light font-bold uppercase text-6xl md:text-4xl sm:text-4xl ${className}`}
        variants={quote}
        initial="hidden"
        animate="visible"
        style={{ animationFillMode: 'backwards' }}
      >
        {text.split(' ').map((word, index) => (
          <span key={word + '-' + index} className="inline-block">
            {word}&nbsp;
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedTextHeader;
