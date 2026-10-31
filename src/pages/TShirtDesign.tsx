import { motion } from 'motion/react';
import { Palette, ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';

export default function TShirtDesign() {
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
            <Palette className="w-10 h-10 text-brand-gold" />
          </div>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/30 rounded-full">
            Coming Soon
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">T-Shirt Design</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Custom apparel designs for merchandise, events, and brand promotion. We create wearable art that people love to show off.
          </p>
        </motion.div>

        {/* Process Section */}
        <ProcessSection
          title="Our Design Process"
          subtitle="T-Shirt & Apparel"
          steps={[
            { step: "01", title: "Concept & Vibe", desc: "Aesthetic vision and streetwear trends." },
            { step: "02", title: "Artwork & Type", desc: "Custom illustrations and typography." },
            { step: "03", title: "3D Mockups", desc: "Realistic apparel previews on models." },
            { step: "04", title: "Print Files", desc: "Color-separated vector files for press." }
          ]}
        />

        {/* Coming Soon Announcement Banner */}
        <div className="mb-20 p-12 rounded-3xl bg-brand-charcoal border border-brand-gold/20 text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-gold">
            Apparel & T-Shirt Studio Launching Soon
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto font-light leading-relaxed mb-6">
            Our specialized apparel print & embroidery design service is coming soon. Get in touch for early consultations.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start Your Apparel Project <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
