import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles } from 'lucide-react';

export default function IntroLoader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('clickome_intro_seen');
    }
    return false;
  });

  useEffect(() => {
    if (!loading) return;
    sessionStorage.setItem('clickome_intro_seen', 'true');
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLoading(false)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black text-white cursor-pointer"
        >
          {/* Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Logo / Icon Animated */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-brand-charcoal border border-brand-gold/30 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <Camera className="w-16 h-16 text-brand-gold" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full border border-dashed border-brand-gold/40 pointer-events-none"
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-3"
            >
              Clicko<span className="text-brand-gold">me.co</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-xs md:text-sm text-gray-400 font-light tracking-widest uppercase mb-8 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Crafting Visual Experiences
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            </motion.p>

            {/* Progress Bar */}
            <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light shadow-[0_0_15px_rgba(212,175,55,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
