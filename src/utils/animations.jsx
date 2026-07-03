/**
 * GetFound — Shared Animation Variants & Hooks
 * All scroll-triggered animations use framer-motion's whileInView
 * so they fire when the element enters the viewport.
 */
import { motion } from 'framer-motion';
import React from 'react';

/* ─── Viewport config (used in every whileInView call) ─── */
export const VIEWPORT = { once: true, margin: '-80px' };

/* ─── Base variants ─── */
export const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  show:    { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -40 },
  show:    { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeLeft = {          // slides in from left → right
  hidden:  { opacity: 0, x: -56 },
  show:    { opacity: 1, x: 0,   transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight = {         // slides in from right → left
  hidden:  { opacity: 0, x: 56 },
  show:    { opacity: 1, x: 0,   transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  show:    { opacity: 1, scale: 1,   transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Stagger container ─── */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren, delayChildren } },
});

/* ─── Stagger item (child of staggerContainer) ─── */
export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerItemLeft = {
  hidden: { opacity: 0, x: -36 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Timeline line draw variant ─── */
export const drawLine = {
  hidden: { scaleY: 0, originY: 0 },
  show:   { scaleY: 1, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 } },
};

/* ─── Convenience wrapper components ─── */

/** Fade up on scroll — most common */
export function FadeUp({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...fadeUp.show.transition, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Slide in from left */
export function FadeLeft({ children, delay = 0, className = '', ...rest }) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...fadeLeft.show.transition, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Slide in from right */
export function FadeRight({ children, delay = 0, className = '', ...rest }) {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...fadeRight.show.transition, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Scale pop in */
export function ScaleIn({ children, delay = 0, className = '', ...rest }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...scaleIn.show.transition, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Stagger parent — wraps items that should animate in one-by-one */
export function StaggerList({ children, className = '', stagger = 0.1, delay = 0, ...rest }) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Stagger child item — must be inside a StaggerList */
export function StaggerItem({ children, className = '', fromLeft = false, ...rest }) {
  return (
    <motion.div
      variants={fromLeft ? staggerItemLeft : staggerItem}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Fade down from top (for headers, badges) */
export function FadeDown({ children, delay = 0, className = '', ...rest }) {
  return (
    <motion.div
      variants={fadeDown}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ ...fadeDown.show.transition, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
