import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-display font-bold tracking-tight text-white mb-6 block">
            Clicko<span className="text-brand-gold">me.co</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Crafting visual experiences that elevate brands. High-end photography, videography, digital marketing, and design services.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/clickome.co?igsh=OXUwem5tN2l5dTd6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-white/10 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-white/10 transition-all">
              <Facebook size={20} />
            </a>
            <a href="mailto:clickome.co@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:bg-white/10 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><Link to="/photography" className="text-gray-400 hover:text-brand-gold transition-colors">Photography</Link></li>
            <li><Link to="/videography" className="text-gray-400 hover:text-brand-gold transition-colors">Videography</Link></li>
            <li><Link to="/digital-marketing" className="text-gray-400 hover:text-brand-gold transition-colors">Digital Marketing</Link></li>
            <li><Link to="/designing" className="text-gray-400 hover:text-brand-gold transition-colors">Designing & Printing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-400 hover:text-brand-gold transition-colors">About Us</Link></li>
            <li><a href="/#portfolio" className="text-gray-400 hover:text-brand-gold transition-colors">Portfolio</a></li>
            <li><a href="/#contact" className="text-gray-400 hover:text-brand-gold transition-colors">Contact</a></li>
            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Clickome.co. All rights reserved.</p>
        <p className="mt-4 md:mt-0">
          Designed by <a href="https://bzorel-nine.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">Bzorel</a>
        </p>
      </div>
    </footer>
  );
}
