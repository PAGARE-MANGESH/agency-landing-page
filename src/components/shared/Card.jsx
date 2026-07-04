import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../theme.js';

export default function Card({ icon, title, description, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02, boxShadow: '0 25px 45px -12px rgba(0, 85, 223, 0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`p-8 bg-[#F4F7FC] border border-slate-200/50 hover:border-[#0055DF]/35 rounded-3xl shadow-sm transition-all duration-300 flex flex-col items-start ${className}`}
    >
      <div className={theme.classes.cardIconWrapper}>
        {icon}
      </div>
      <h3 className={theme.classes.cardTitle}>{title}</h3>
      <p className={theme.classes.cardDesc}>{description}</p>
    </motion.div>
  );
}
