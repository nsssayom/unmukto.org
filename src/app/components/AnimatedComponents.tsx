'use client';

import { motion } from 'framer-motion';

export const AnimatedTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h1
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
  >
    {children}
  </motion.h1>
);

export const AnimatedText = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
    className="text-lg md:text-xl text-[rgb(var(--text-secondary))] max-w-[650px] leading-relaxed"
  >
    {children}
  </motion.p>
);

export const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    viewport={{ once: true, margin: '-50px' }}
    className="bg-[rgb(var(--surface))] rounded-2xl elevation-2 transition-material hover:elevation-3"
  >
    {children}
  </motion.div>
);

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    viewport={{ once: true, margin: '-100px' }}
  >
    {children}
  </motion.div>
); 