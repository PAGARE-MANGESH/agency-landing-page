import React from 'react';
import { theme } from '../../theme.js';

export default function SectionLabel({ text }) {
  return (
    <span className={theme.classes.sectionSubheading}>
      {text}
    </span>
  );
}
