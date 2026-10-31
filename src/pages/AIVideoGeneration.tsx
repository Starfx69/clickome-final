import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SmartVideo from '../components/SmartVideo';
import ProcessSection from '../components/ProcessSection';

export default function AIVideoGeneration() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">AI Video Generation</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Cutting-edge AI-generated video content that pushes the boundaries of imagination. Perfect for engaging reels, unique brand storytelling, and viral content.
          </p>
        </motion.div>

        {/* Process Section */}
        <ProcessSection
          title="Our AI Process"
          subtitle="How It Works"
          steps={[
            { step: "01", title: "Concept & Prompts", desc: "Crafting bespoke narrative and visual prompts." },
            { step: "02", title: "AI Generation", desc: "Generating cinematic sequences with cutting-edge AI." },
            { step: "03", title: "Upscaling", desc: "Enhancing 4K clarity and smoothing frame rates." },
            { step: "04", title: "Sound & Polish", desc: "Custom soundtrack, sound FX, and typography." }
          ]}
        />

        {/* Featured Work */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured AI Reels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "/food/Mocktail.mp4",
              "/food/final%20ice%20-1.mp4",
              "/ai/FINAL%20REEL.mp4",
              "/ai/final%20reel1.mp4",
              "/ai/reel%201%20(2).mp4",
              "/ai/women%20watch-1.mp4",
              "/ai/Diamond%20reeel.mp4",
              "/ai/14th%20floor.mp4"
            ].map((videoSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-[9/16] rounded-xl overflow-hidden group relative bg-brand-charcoal border border-white/10"
              >
                <SmartVideo
                  src={videoSrc}
                  aspectRatio="aspect-[9/16]"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start Your AI Project <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
