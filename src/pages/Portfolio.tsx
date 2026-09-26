import { motion } from 'motion/react';
import { ArrowRight, Camera, Video, Megaphone, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartVideo from '../components/SmartVideo';

const projects = [
  {
    title: "Photography",
    desc: "Commercial, Product, Food, and Wedding Photography",
    img: "/food/Blood Orange Mint Fizz.png",
    link: "/photography",
    icon: Camera
  },
  {
    title: "Videography",
    desc: "Reels, Brand & Cinematic Videography",
    videoSrc: "/reels/Diamond reeel.mp4",
    link: "/videography",
    icon: Video
  },
  {
    title: "Digital Marketing",
    desc: "Content Creation, Social Media & Brand Growth",
    videoSrc: "/reels/anand resort vibe final.mp4",
    link: "/digital-marketing",
    icon: Megaphone
  },
  {
    title: "Designing & Printing",
    desc: "Custom Apparel, Merchandise, Cups & Packaging Design Studio",
    link: "/designing",
    icon: PenTool,
    comingSoon: true
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our diverse range of projects across photography, videography, digital marketing, and designing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={project.link} className="block group relative overflow-hidden rounded-2xl aspect-[4/3] bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-all duration-500">
                {project.videoSrc ? (
                  <div className="w-full h-full relative overflow-hidden opacity-60 group-hover:opacity-40 transition-opacity duration-700">
                    <SmartVideo
                      src={project.videoSrc}
                      aspectRatio="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-charcoal p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <div>
                      <h4 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{project.title}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                )}
                {project.img || project.videoSrc ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-80" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-full bg-brand-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-brand-gold/40 transition-colors">
                          <project.icon className="w-6 h-6 text-brand-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 font-light mb-4 max-w-md">{project.desc}</p>
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold group-hover:text-brand-gold-light transition-colors">
                          Explore Category <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
