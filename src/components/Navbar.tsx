import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assets';

const navLinks = [
  { name: 'עמוד הבית', id: 'home', path: '/' },
  { name: 'אודותינו', id: 'about', path: '/about' },
  { name: 'השירותים שלנו', id: 'services', path: '/services' },
  { name: 'תהליך העבודה', id: 'process', path: '/process' },
  { name: 'דוגמאות', id: 'gallery', path: '/gallery' },
  { name: 'צור קשר', id: 'contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string, path: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial scroll if hash or path matches
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedLink = navLinks.find(link => link.path === currentPath);
    if (matchedLink && matchedLink.id !== 'home') {
      setTimeout(() => {
        const el = document.getElementById(matchedLink.id);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-brand-black/90 backdrop-blur-lg border-b border-white/5 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home', '/')} 
              className="flex items-center gap-3.5 group text-right focus:outline-none"
            >
              <img 
                src={getAssetUrl('/logo.png')} 
                alt="א. ד. באדי - לוגו" 
                className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col items-start">
                <span className="text-[26px] font-sans font-extrabold text-white tracking-tight leading-none">א. ד. באדי</span>
                <span className="text-[14px] font-sans font-bold text-white tracking-[0.18em] mt-1.5 opacity-90 uppercase">בתים משותפים בע"מ</span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id, link.path)}
                  className={`text-sm lg:text-base font-medium tracking-wide transition-all hover:text-brand-gold relative group py-2 px-1 ${
                    isActive ? 'text-white font-bold' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 right-0 left-0 h-0.5 bg-brand-gold transform transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="פתח תפריט"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-black/95 border-b border-white/5 backdrop-blur-xl"
          >
            <div className="px-4 pt-2 pb-10 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id, link.path)}
                    className={`block w-full text-right px-3 py-4 text-lg font-medium border-b border-white/5 ${
                      isActive
                        ? 'text-brand-gold font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-6">
                <a
                  href="tel:0503657780"
                  className="w-full bg-brand-gold text-brand-black px-5 py-4 rounded-lg text-center text-base font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform"
                >
                  <Phone size={20} />
                  <span>050-3657780</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
