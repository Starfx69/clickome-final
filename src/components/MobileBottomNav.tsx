import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, Video, Megaphone, PhoneCall } from 'lucide-react';

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Photo', path: '/photography', icon: Camera },
    { name: 'Video', path: '/videography', icon: Video },
    { name: 'Marketing', path: '/digital-marketing', icon: Megaphone },
    { name: 'Contact', path: '/#contact', icon: PhoneCall, isAnchor: true },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-auto">
      <nav className="mx-auto max-w-md bg-brand-charcoal/95 backdrop-blur-xl border border-brand-gold/30 rounded-full px-3 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = !item.isAnchor && location.pathname === item.path;
          const Icon = item.icon;

          const content = (
            <div className="flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-full transition-all">
              <Icon
                className={`w-5 h-5 transition-transform duration-300 ${
                  isActive ? 'text-brand-gold scale-110' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-[10px] font-medium tracking-tight ${
                  isActive ? 'text-brand-gold font-bold' : 'text-gray-400'
                }`}
              >
                {item.name}
              </span>
            </div>
          );

          if (item.isAnchor) {
            return (
              <a key={item.name} href={item.path} className="touch-manipulation">
                {content}
              </a>
            );
          }

          return (
            <Link key={item.name} to={item.path} className="touch-manipulation">
              {content}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
