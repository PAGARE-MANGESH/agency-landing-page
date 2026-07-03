import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../theme.js';

export default function Card({ icon, title, description, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm transition-shadow flex flex-col items-start ${className}`}
    >
      <div className={theme.classes.cardIconWrapper}>
        {icon}
      </div>
      <h3 className={theme.classes.cardTitle}>{title}</h3>
      <p className={theme.classes.cardDesc}>{description}</p>
    </motion.div>
  );
}
