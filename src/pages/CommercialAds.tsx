import { motion } from 'motion/react';
import { MonitorPlay, ArrowRight } from 'lucide-react';
import SmartVideo from '../components/SmartVideo';
import ProcessSection from '../components/ProcessSection';

export default function CommercialAds() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-8">
            <MonitorPlay className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Commercial Ads</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            High-impact commercials designed for TV and digital platforms. We craft visually stunning advertisements that capture attention and drive action.
          </p>
        </motion.div>

        {/* Process Section */}
        <ProcessSection
          title="Our Production Process"
          subtitle="Commercial Ads"
          steps={[
            { step: "01", title: "Strategy & Concept", desc: "High-converting scripts and campaign angles." },
            { step: "02", title: "Casting & Sets", desc: "Sourcing top talent and cinematic locations." },
            { step: "03", title: "Production", desc: "Full crew, cinema cameras, and pro lighting." },
            { step: "04", title: "Post & VFX", desc: "Color grading, sound design, and polish." }
          ]}
        />

        {/* Featured Work */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Commercials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/reels/anand resort vibe final.mp4",
              "/reels/Diamond reeel.mp4",
              "/food/final ice -1.mp4",
              "/reels/resort aug 1 final.mp4",
              "/food/Mocktail.mp4",
              "/reels/new 1 reel.mp4"
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
            Start a Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
