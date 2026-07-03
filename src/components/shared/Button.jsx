import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../theme.js';

export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }) {
  const baseClass = variant === 'primary' ? theme.classes.primaryCta : theme.classes.secondaryCta;
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}
