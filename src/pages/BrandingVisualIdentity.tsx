import { motion } from 'motion/react';
import { Palette, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BrandingVisualIdentity() {
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
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Branding & Visual Identity</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive branding packages including logos, color palettes, and typography. We build cohesive identities that tell your unique story.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Our Branding Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "Deep dive into your business goals, target audience, and market positioning." },
              { step: "02", title: "Logo & Identity", desc: "Designing a versatile logo system, color palette, and typography guidelines." },
              { step: "03", title: "Brand Application", desc: "Applying the new identity to business cards, letterheads, and digital assets." },
              { step: "04", title: "Brand Guidelines", desc: "Delivering a comprehensive brand book to ensure consistency across all touchpoints." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-brand-charcoal border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-8xl font-display font-bold text-white/5 group-hover:text-brand-gold/5 transition-colors duration-500">
                  {item.step}
                </div>
                <CheckCircle2 className="w-8 h-8 text-brand-gold mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-400 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming Soon Announcement Banner */}
        <div className="mb-20 p-12 rounded-3xl bg-brand-charcoal border border-brand-gold/20 text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-gold">
            Brand Identity Studio Launching Soon
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto font-light leading-relaxed mb-6">
            We are curating custom brand strategy and visual identity design packages. Contact us directly for brand inquiries.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Build Your Brand <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
