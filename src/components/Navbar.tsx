import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Designing', path: '/designing' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-white">
          Clicko<span className="text-brand-gold">me.co</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.path.startsWith('/#') || link.path === '/#contact' ? (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-300 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-charcoal border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                link.path.startsWith('/#') || link.path === '/#contact' ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-lg font-medium text-gray-300 hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-medium text-gray-300 hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full mt-4"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
