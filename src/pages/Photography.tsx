import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Photography() {
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
            <Camera className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Photography</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Professional photography for products, brands, commercial shoots, and events. We capture moments that tell your brand's unique story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {[
            { title: "Product Photography", desc: "High-end product shots that highlight details and drive sales.", link: "/product-photography" },
            { title: "Commercial Photography", desc: "Striking visuals for advertising and marketing campaigns.", link: "/commercial-photography" },
            { title: "Event Photography", desc: "Capturing the essence and energy of your corporate or private events.", link: "/event-photography", comingSoon: true },
            { title: "Wedding Photography", desc: "Timeless and elegant imagery capturing every precious moment of your special day.", link: "/wedding-photography" }
          ].map((service, idx) => {
            const CardContent = (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-brand-gold">{service.title}</h3>
                  {service.comingSoon && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
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

        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Photography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/product/2 (1).png",
              "/product/2 (2).png",
              "/weddings/DSC_0268.jpg",
              "/weddings/DSC_3864.jpg",
              "/food/Blood Orange Mint Fizz.png",
              "/food/Chocolate Fudge.png"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img src={img} alt="Photography work" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Book a Shoot <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
