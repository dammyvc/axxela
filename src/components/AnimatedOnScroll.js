// components/AnimatedOnScroll.js
import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../components/hooks/useIntersectionObserver';

const AnimatedOnScroll = ({ children, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
