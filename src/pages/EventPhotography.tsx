import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';
import SmartVideo from '../components/SmartVideo';

export default function EventPhotography() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-8">
            <Camera className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Event Photography & Videography</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Extraordinary coverage for corporate events, private celebrations, and brand launches. We capture the energy, the moments, and the memories of your special occasions.
          </p>
        </motion.div>

        {/* Process Section with Horizontal Swiping on Mobile */}
        <ProcessSection
          title="Our Process"
          subtitle="Event Coverage"
          steps={[
            { step: "01", title: "Briefing", desc: "Reviewing schedule, VIPs, and run of show." },
            { step: "02", title: "Live Coverage", desc: "Capturing keynotes, crowd energy, and candids." },
            { step: "03", title: "Express Highlights", desc: "Same-day selects for immediate PR and social." },
            { step: "04", title: "Full Gallery", desc: "High-resolution curated album delivered." }
          ]}
        />

        {/* Featured Events Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Event Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "/reels/anand%20resort%20vibe%20final.mp4",
              "/reels/resort%20aug%201%20final.mp4",
              "/reels/new%201%20reel.mp4",
              "/reels/reel%20aesthetic%20wed.mp4"
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden group bg-brand-charcoal/30 border border-white/5 flex items-center justify-center p-4 aspect-[9/16] sm:aspect-square md:aspect-video"
              >
                <SmartVideo src={video} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Book Event Coverage <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
