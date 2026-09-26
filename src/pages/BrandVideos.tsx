import { motion } from 'motion/react';
import { Video, ArrowRight } from 'lucide-react';
import SmartVideo from '../components/SmartVideo';
import ProcessSection from '../components/ProcessSection';

export default function BrandVideos() {
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
            <Video className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Brand Videos</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Compelling brand stories that connect with your audience on an emotional level. We create cinematic visuals that engage and inspire.
          </p>
        </motion.div>

        {/* Process Section with Horizontal Swiping on Mobile */}
        <ProcessSection
          title="Our Production Process"
          subtitle="Brand Videos"
          steps={[
            { step: "01", title: "Pre-Production", desc: "Concept development, scriptwriting, storyboarding, and planning every detail of the shoot." },
            { step: "02", title: "Production", desc: "Professional filming with cinema-grade cameras, lighting, and audio equipment on set." },
            { step: "03", title: "Post-Production", desc: "Expert video editing, color grading, visual effects, and sound design to bring the story to life." },
            { step: "04", title: "Delivery", desc: "Final renders optimized for web, social media, broadcast, and any other platforms you need." }
          ]}
        />

        {/* Featured Work */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Brand Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/reels/anand resort vibe final.mp4",
              "/reels/resort aug 1 final.mp4",
              "/reels/Resort Ad VPL.mp4",
              "/reels/new 1 reel.mp4",
              "/reels/Wedding Advertisnment_V001.mp4",
              "/product/clickome.co aug.mp4"
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
            Start a Video Project <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
