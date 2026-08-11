import { motion } from 'motion/react';
import { getAssetUrl } from '../utils/assets';

const drawings = [
  {
    title: "דוגמה לתשריט דיגיטלי בנוהל אחיד - קומת מרתף, מחסנים וחניות:",
    image: getAssetUrl("/images/drawing1_1785779693140.jpg")
  },
  {
    title: "דוגמה לתשריט דיגיטלי בנוהל אחיד - קומת קרקע - מסחר ומגורים:",
    image: getAssetUrl("/images/drawing2_1785779709439.jpg")
  },
  {
    title: "דוגמה לתשריט דיגיטלי בנוהל אחיד - קומה עליונה נוספת:",
    image: getAssetUrl("/images/drawing3_1785779723467.jpg")
  }
];

export default function Gallery() {
  return (
    <div id="gallery" className="bg-brand-black pt-12 border-t border-white/5 scroll-mt-[90px]" dir="rtl">
      {/* Header Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/75 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2600&auto=format&fit=crop" 
            alt="דוגמאות לתשריטים דיגיטליים - א. ד. באדי" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">דוגמאות לעבודות</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Drawings Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {drawings.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-gray-dark/50 p-6 md:p-10 rounded-sm border border-white/10 shadow-2xl space-y-6"
              >
                <h2 
                  className="text-2xl md:text-3xl font-bold text-brand-gold text-center leading-relaxed"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {item.title}
                </h2>
                
                <div className="flex justify-center">
                  <div className="overflow-hidden rounded-sm border border-brand-gold/30 shadow-xl group inline-block max-w-full">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-auto max-w-full h-auto max-h-[650px] block transition-transform duration-700 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Privacy Note */}
          <div className="mt-20 text-center border-t border-white/10 pt-10">
            <p className="text-slate-300 text-lg md:text-[20px] font-medium italic leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              *בשל צנעת הפרט, איננו מציגים תשריטים מלאים באתר אלא דוגמאות מייצגות לשם המחשת התשריט הדיגיטלי
            </p>
          </div>

          {/* Digital Hologram Feature Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-5xl mx-auto relative rounded-sm overflow-hidden border border-brand-gold/30 shadow-2xl group"
          >
            <img 
              src={getAssetUrl("/images/digital_hologram_blueprint_1785779941645.jpg")} 
              alt="תשריט דיגיטלי מתקדם ומדויק" 
              className="w-full h-[400px] md:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent flex items-end justify-center p-8 md:p-10 text-center">
              <p className="text-brand-gold text-xl md:text-2xl font-bold tracking-wide drop-shadow-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                חדשנות וקדמה טכנולוגית בעריכת תשריטים דיגיטליים לבתים משותפים
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
