import { Phone, Mail, Facebook } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNav = (id: string, path: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    navigate(path);
  };

  return (
    <footer className="bg-brand-black text-slate-400 pt-10 pb-12 font-sans border-t border-white/5" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2">
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                handleNav('home', '/');
              }} 
              className="flex items-center gap-4 mb-10 group"
            >
              <img 
                src={getAssetUrl('/logo.png')} 
                alt="לוגו א. ד. באדי בתים משותפים בע&quot;מ" 
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105" 
                loading="lazy"
              />
              <div className="flex flex-col items-start">
                <span className="text-2xl md:text-3xl font-sans font-extrabold text-white leading-none">א. ד. באדי</span>
                <span className="text-xs text-white/90 font-sans font-bold tracking-[0.2em] mt-2 uppercase">בתים משותפים בע"מ</span>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-slate-400 max-w-md font-normal" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              המשרד המוביל בישראל לעריכת תשריטים דיגיטליים לצורך רישום בתים משותפים בטאבו. עם 30 שנות ניסיון של דיוק, מקצועיות ושירות מעל הכל.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-[15px] mb-8 pb-3 border-b border-brand-gold/30 inline-block">קישורים</h3>
            <ul className="space-y-4 text-base font-normal">
              <li><Link to="/about" onClick={(e) => { e.preventDefault(); handleNav('about', '/about'); }} className="hover:text-brand-gold transition-colors">אודותינו</Link></li>
              <li><Link to="/services" onClick={(e) => { e.preventDefault(); handleNav('services', '/services'); }} className="hover:text-brand-gold transition-colors">השירותים שלנו</Link></li>
              <li><Link to="/process" onClick={(e) => { e.preventDefault(); handleNav('process', '/process'); }} className="hover:text-brand-gold transition-colors">תהליך העבודה</Link></li>
              <li><Link to="/gallery" onClick={(e) => { e.preventDefault(); handleNav('gallery', '/gallery'); }} className="hover:text-brand-gold transition-colors">דוגמאות לעבודות</Link></li>
              <li><Link to="/contact" onClick={(e) => { e.preventDefault(); handleNav('contact', '/contact'); }} className="hover:text-brand-gold transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-sm md:text-[15px] mb-8 pb-3 border-b border-brand-gold/30 inline-block">יצירת קשר</h3>
            <ul className="space-y-6 text-base font-normal">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={14} />
                </div>
                <a href="tel:0503657780" className="hover:text-white transition-colors text-base" dir="ltr">050-365-7780</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={14} />
                </div>
                <a href="mailto:a0503657780@gmail.com" className="hover:text-white transition-colors text-sm md:text-[15px] truncate">a0503657780@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Facebook size={14} />
                </div>
                <a href="https://www.facebook.com/ADBady/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm md:text-[15px] truncate">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex justify-center items-center">
          <p className="text-[16px] text-slate-400 font-bold tracking-widest uppercase text-center">
            © {currentYear} א. ד. באדי בתים משותפים בע"מ. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
