import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';

export default function ProductPhotography() {
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Product Photography</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            High-end product shots that highlight details, elevate your brand, and drive sales. We make your products look their absolute best.
          </p>
        </motion.div>

        {/* Process Section */}
        <ProcessSection
          title="Our Process"
          subtitle="Product Shoots"
          steps={[
            { step: "01", title: "Consultation", desc: "We discuss your brand identity, target audience, and the specific look and feel you want for your products." },
            { step: "02", title: "Styling & Setup", desc: "Our team carefully selects props, backgrounds, and lighting to create the perfect environment for your items." },
            { step: "03", title: "The Shoot", desc: "Using high-end equipment, we capture multiple angles and details to showcase your product's best features." },
            { step: "04", title: "Retouching", desc: "Expert editing and color correction ensure your images are flawless and ready for your website or marketing." }
          ]}
        />

        {/* Featured Photography */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Product Photography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/product/Diamond Set Studio Shot 1.png",
              "/product/Chain Diamonds Close-up.png",
              "/product/Pendant Close-up.png",
              "/product/Earring Back Detail.png",
              "/product/BIG TUMBLER (1).png",
              "/product/3D MODEL PIECE (1).png",
              "/product/3D MODEL PIECE (15).png",
              "/product/Cap (22).png",
              "/product/mug (15).png"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img src={img} alt="Featured Product" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Book a Product Shoot <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
