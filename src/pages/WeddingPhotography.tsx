import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';

export default function WeddingPhotography() {
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Wedding Photography</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Timeless and elegant imagery capturing every precious moment of your special day. We tell your unique love story through stunning visuals.
          </p>
        </motion.div>

        {/* Process Section with Horizontal Swiping on Mobile */}
        <ProcessSection
          title="Our Process"
          subtitle="Wedding Coverage"
          steps={[
            { step: "01", title: "Consultation", desc: "Understanding your vision, style preferences, and key moments you want captured." },
            { step: "02", title: "Preparation", desc: "Scouting locations and finalizing the photography timeline for a seamless day." },
            { step: "03", title: "The Big Day", desc: "Unobtrusive yet comprehensive coverage of every tear, smile, and celebration." },
            { step: "04", title: "Delivery", desc: "A beautifully curated gallery and custom albums to preserve your memories forever." }
          ]}
        />

        {/* Featured Photography */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Wedding Coverage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/weddings/DSC_0268.jpg",
              "/weddings/DSC_0333.jpg",
              "/weddings/DSC_1585.jpg",
              "/weddings/DSC_3864.jpg",
              "/weddings/DSC_3875.jpg",
              "/weddings/DSC_7852.jpg",
              "/weddings/DSC_7899.jpg",
              "/weddings/IMG_8416.jpg",
              "/weddings/12.jpg"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img src={img} alt="Featured Wedding Photography" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Book Wedding Photography <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
