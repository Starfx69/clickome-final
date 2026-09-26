import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessSection({
  title = "Our Process",
  subtitle,
  steps,
  className = "mb-20 md:mb-32",
}: ProcessSectionProps) {
  return (
    <div className={className}>
      <div className="text-center mb-8 md:mb-12">
        {subtitle && (
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase mb-3">
            {subtitle}
          </h2>
        )}
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{title}</h2>
        <p className="text-xs text-gray-400 mt-2 md:hidden flex items-center justify-center gap-1">
          Swipe sideways to view steps <ChevronRight className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
        </p>
      </div>

      {/* Horizontal Mobile Progress Flow Track (Matches user's diagram: (1) --- (2) --- (3) --- (4)) */}
      <div className="flex md:hidden items-center justify-between max-w-xs mx-auto mb-8 px-4">
        {steps.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold text-brand-gold flex items-center justify-center text-xs font-bold font-display shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                {item.step}
              </div>
              <span className="text-[10px] text-gray-400 font-medium truncate max-w-[60px] text-center">
                {item.title.split(' ')[0]}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gradient-to-r from-brand-gold/80 to-brand-gold/20 mx-1.5 -mt-4 rounded-full" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Sideways Swipeable Reel on Mobile / Grid on Desktop */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6 md:mx-0 md:px-0">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="snap-center w-[85vw] sm:w-[320px] md:w-auto flex-shrink-0 p-6 md:p-8 rounded-2xl bg-brand-charcoal border border-white/5 relative overflow-hidden group shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-7xl md:text-8xl font-display font-bold text-white/5 group-hover:text-brand-gold/5 transition-colors duration-500 pointer-events-none">
              {item.step}
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-gold relative z-10" />
                <span className="md:hidden text-xs font-bold font-display px-2.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  Step {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 text-white group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 font-light">
                {item.desc}
              </p>
            </div>

            {/* Step progress bar bottom indicator on card */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
              <span>Phase {idx + 1} of {steps.length}</span>
              <span className="text-brand-gold font-medium">Clickome.co</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
