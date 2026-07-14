import React from 'react';
import { motion } from 'framer-motion';

export const HERO_IMG = 'https://images.hostinger.com/c804a0d5-7ad7-4652-92dc-094c1d57d3a2.png';
export const DATA_IMG = 'https://images.hostinger.com/ab5e43d0-2960-42e0-b05d-7aa5e269c109.png';
export const PORTRAIT_IMG = 'https://images.hostinger.com/33bbcfc7-9e4e-477f-80e7-fe4c488bd72b.png';

export const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs tracking-[0.25em] text-[hsl(var(--accent-gold))]">{n}</span>
      <span className="h-px w-8 bg-[hsl(var(--accent-gold))]/50" />
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-slate-500">{children}</span>
    </div>
  );
}

export function PageHeader({ eyebrow, n, title, intro }) {
  return (
    <section className="bg-[hsl(var(--ink))] text-white pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-[72rem] px-6 lg:px-10">
        <div className="dti-rise flex items-center gap-3 mb-6">
          <span className="font-mono text-xs tracking-[0.25em] text-[hsl(var(--accent-gold))]">{n}</span>
          <span className="h-px w-8 bg-white/30" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-white/60">{eyebrow}</span>
        </div>
        <h1 className="dti-rise font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-4xl" style={{ animationDelay: '0.1s' }}>
          {title}
        </h1>
        {intro && (
          <p className="dti-rise mt-6 max-w-2xl text-lg text-white/70 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
