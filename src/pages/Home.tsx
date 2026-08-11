import { motion } from 'motion/react';
import { ShieldCheck, Building2, Ruler } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import About from './About';
import Services from './Services';
import Process from './Process';
import Gallery from './Gallery';
import Contact from './Contact';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  const navigate = useNavigate();

  const scrollToSection = (id: string, path: string) => {
    navigate(path);
    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    performScroll();
    requestAnimationFrame(() => performScroll());
    setTimeout(performScroll, 150);
    setTimeout(performScroll, 350);
  };

  return (
    <div className="font-sans text-slate-100 selection:bg-brand-gold selection:text-brand-black" dir="rtl">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black pt-12">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2600&auto=format&fit=crop" 
            alt="אדריכלות ומבני מגורים - א. ד. באדי בתים משותפים" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110 lg:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-brand-gold text-[18px] font-bold tracking-[0.3em] uppercase mb-8 border-b border-brand-gold/30 pb-2">
              ניסיון ודיוק של 30 שנה
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-[88px] font-sans font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
              א. ד. באדי בתים משותפים בע"מ
            </h1>
            <h2 className="text-xl md:text-3xl font-sans font-bold text-brand-gold mb-6 leading-snug max-w-4xl mx-auto">
              עריכת תשריטים דיגיטליים לצורך רישום בתים משותפים בטאבו בנוהל אחיד
            </h2>
            <p className="max-w-3xl mx-auto text-[24px] text-slate-300 mb-12 leading-relaxed font-light">
              המצוינות שלנו מתחילה בדיוק של התשריט.
              <br />
              ליווי מקצועי, יסודי ואמין לכל אורך תהליך רישום הבית המשותף בטאבו.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollToSection('contact', '/contact')}
                className="w-full sm:w-auto px-10 py-5 bg-white text-brand-black hover:bg-brand-gold hover:text-brand-black transition-all duration-300 rounded-sm font-bold text-lg tracking-wide uppercase cursor-pointer"
              >
                צור קשר לייעוץ
              </button>
              <button 
                onClick={() => scrollToSection('services', '/services')}
                className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white hover:bg-white hover:text-brand-black transition-all duration-300 rounded-sm font-bold text-lg tracking-wide uppercase cursor-pointer"
              >
                השירותים שלנו
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-gold/50 cursor-pointer"
          onClick={() => scrollToSection('about', '/about')}
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold to-transparent" />
        </motion.div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-brand-gray-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-[42px] font-sans font-extrabold text-white mb-8 leading-tight text-center">
                עריכת תשריטים דיגיטליים לצורך רישום בתים משותפים בטאבו
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-brand-gray flex items-center justify-center border border-white/5">
                    <ShieldCheck className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 underline decoration-brand-gold/30 underline-offset-8">נוהל אחיד</h3>
                    <p className="text-[18px] text-slate-400 leading-relaxed">אנו עורכים תשריטים דיגיטליים על פי הנוהל האחיד של לשכת רישום המקרקעין ועובדים על פי ההנחיות העדכניות ביותר.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-brand-gray flex items-center justify-center border border-white/5">
                    <Building2 className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 underline decoration-brand-gold/30 underline-offset-8">דיוק דיגיטלי</h3>
                    <p className="text-[18px] text-slate-400 leading-relaxed">טכנולוגיית עריכת תשריטים דיגיטליים המתקדמת ביותר להשגת דיוק מקסימלי ורישום בית משותף בצורה המהירה והנוחה ביותר.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-brand-gray flex items-center justify-center border border-white/5">
                    <Ruler className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 underline decoration-brand-gold/30 underline-offset-8">מומחיות רבת שנים</h3>
                    <p className="text-[18px] text-slate-400 leading-relaxed">מעל 30 שנות ניסיון במאות פרויקטים מורכבים של רישום בתים משותפים.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="relative aspect-square md:aspect-video rounded-sm overflow-hidden border border-white/10 group"
            >
              <img 
                src={getAssetUrl('/surveyors.jpg')} 
                alt="עבודת מדידה ועריכת תשריט בשטח של בניין בנוי" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-brand-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div {...fadeIn}>
                <h2 
                  className="text-[36px] font-bold text-white mb-6 leading-relaxed"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  "מאחורי כל רישום בית משותף מוצלח עומד תשריט מדויק"
                </h2>
                <p className="text-[22px] text-slate-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  באמצעות טכנולוגיה מתקדמת ועריכה מקצועית אנו יוצרים תשריטים דיגיטליים ברמת דיוק גבוהה, המאפשרים תהליך רישום יעיל, מסודר ושקט נפשי למזמין העבודה לאורך כל הדרך.
                </p>
                <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-6" />
                <p className="text-brand-gold font-bold tracking-widest uppercase text-[18px]">א. ד. באדי בתים משותפים בע"מ</p>
            </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
