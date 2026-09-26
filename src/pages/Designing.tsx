import { motion } from 'motion/react';
import { Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Designing() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
            <Palette className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Designing</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Creative solutions including packaging, T-shirt design, signage, and branding. We craft visual identities that leave a lasting impression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {[
            { title: "Packaging Design", desc: "Premium packaging solutions that elevate your product's perceived value.", link: "/packaging-design" },
            { title: "T-Shirt Design", desc: "Custom apparel designs for merchandise, events, and brand promotion.", link: "/t-shirt-design" },
            { title: "Signage Design", desc: "Eye-catching indoor and outdoor signage that commands attention.", link: "/signage-design" },
            { title: "Product Prints", desc: "High-quality print designs for brochures, catalogs, and marketing materials.", link: "/product-prints" },
            { title: "Branding & Visual Identity", desc: "Comprehensive branding packages including logos, color palettes, and typography.", link: "/branding-visual-identity" }
          ].map((service, idx) => {
            const CardContent = (
              <>
                <h3 className="text-2xl font-display font-bold mb-4 text-brand-gold">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </>
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {service.link ? (
                  <Link
                    to={service.link}
                    className="block p-8 rounded-2xl bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-colors h-full"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div className="p-8 rounded-2xl bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-colors h-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Coming Soon Announcement Banner */}
        <div className="mb-20 p-12 rounded-3xl bg-brand-charcoal border border-brand-gold/20 text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/30 rounded-full">
            Coming Soon
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-gold">
            Printing Studio Launching Soon
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto font-light leading-relaxed mb-6">
            We are assembling our state-of-the-art high-resolution print studio. Soon you will be able to get your designs printed with world-class quality.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start Designing <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
