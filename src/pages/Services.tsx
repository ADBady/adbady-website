import { motion } from 'motion/react';
import { getAssetUrl } from '../utils/assets';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const servicePoints = [
  {
    title: 'אחידות בדרישות לשכות המקרקעין:',
    desc: 'בניגוד למתכונת הישנה, בה לכל לשכת רישום מקרקעין היו דרישות עריכת תשריטים משלה, מה שיצר חוסר אחידות קשה והחזרת תשריטים לתיקון פעמים רבות, בשל חוסר האחידות בין לשכות המקרקעין, במתכונת "נוהל אחיד" החדשה, כללי עריכת התשריט הדיגיטלי הינם אחידים ושווים בין כל לשכות רישום המקרקעין ברחבי הארץ, מה שממילא מונע החזרת התשריט לתיקון שוב ושוב.'
  },
  {
    title: 'חיסכון כספי רב ללקוח:',
    desc: 'חיסכון רב בהוצאות נלוות כגון: הדפסת פלוטים צבעוניים במכוני "העתקות אור", שליחת התשריטים פיזית ממקום למקום ע"י שליחויות ו/או בדואר וכיוצ"ב. התשריט הינו דיגיטלי מא\' ועד ת\', כולל הגשתו לרשויות, מה שחוסך את כל סחבת ההדפסות היקרה והמיותרת ו/או הוצאות נלוות אחרות.'
  },
  {
    title: 'בדיקה מהירה ואישור מהיר של התשריט:',
    desc: 'במקום שפקידי הטאבו יצטרכו לבדוק את התשריט ידנית ולסמן הערות ותיקונים ולהחזיר את התיק לתיקון, התשריט הדיגיטלי בנוהל אחיד נבדק דיגיטלית ע"י מערכת ממוחשבת. במידה וישנן שגיאות, המערכת שולחת אלינו בזמן אמת "פלט שגיאות" לתיקון, כבר בזמן העבודה על התשריט, עד שהתשריט עובר בדיקה מלאה ותקינה של כל הדירות, ההצמדות ונתוני התשריט, מה שמונע עיכובים מיותרים עקב דחיית התשריט או החזרתו לתיקון ע"י הטאבו. התשריט, שעבר בדיקה ממוחשבת מלאה, ממילא סופי ומוכן לרישום מהיר ויעיל.'
  },
  {
    title: 'מתן עדיפות ובדיקה מהירה של התשריט ע"י לשכות המקרקעין:',
    desc: 'תיק רישום בית משותף שמוגש עם תשריט דיגיטלי, מקבל עדיפות ראשונה בטיפולו ע"י פקידי הטאבו, כך שבמקום, פוטנציאלית, לחכות חודשים רבים עד שבכלל יגיעו אל התיק, הבית המשותף נרשם במהירות ותוך מתן עדיפות ראשונה בשל היותו במתכונת הדיגיטלית. כלומר- חיסכון זמן רב ועיכובים מיותרים של חודשים רבים.'
  },
  {
    title: 'עבודה דיגיטלית באופן מקוון מהתחלה ועד הסוף:',
    desc: 'במקום להתעסק עם כל כך הרבה ניירת פיזית ובלאגן, תיק הבית המשותף, הכולל את התשריט הדיגיטלי, מוגש ללשכת רישום המקרקעין באופן מקוון באמצעות כרטיס חכם, ע"י עורך הדין הרושם את הבית המשותף. רישום מהיר, טכנולוגי, יעיל, מקוון ונוח.'
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-brand-black pt-12 border-t border-white/5" dir="rtl">
      {/* Header Section */}
      <section className="relative py-28 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-black/75 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2600&auto=format&fit=crop" 
            alt="שירותי עריכת תשריטים ורישום בתים משותפים - א. ד. באדי" 
            className="w-full h-full object-cover grayscale"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">השירותים שלנו</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeIn} 
            className="text-center space-y-12"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {/* Introductory Text */}
            <p className="text-slate-200 text-[22px] leading-relaxed font-normal bg-brand-gray-dark/60 p-8 rounded-sm border border-white/5 text-center">
              חברתנו מתמחה בעריכת תשריטים דיגיטליים לצורך רישום בתים משותפים בטאבו, עפ"י הנוהל האחיד החדש לעריכת תשריטים של לשכות רישום המקרקעין, והגשתם הדיגיטלית מתבצעת באופן מקוון באמצעות המערכת החדשה הנקראת "מערכת רימון". לתשריטים הדיגיטליים במתכונת הנוהל האחיד ישנם יתרונות רבים וגדולים, כמפורט להלן:
            </p>

            {/* Service Points */}
            <div className="space-y-8 pt-4">
              {servicePoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-brand-gray-dark/40 p-8 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-all duration-300 text-center flex flex-col items-center"
                >
                  {/* Title without circle span */}
                  <div className="flex items-center justify-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-gold text-center">
                      {point.title}
                    </h2>
                  </div>
                  <p className="text-slate-300 text-[20px] leading-relaxed font-normal max-w-3xl">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition Image Section to Work Process */}
      <section className="py-16 bg-brand-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeIn} 
            className="relative rounded-sm overflow-hidden border border-brand-gold/20 shadow-2xl group"
          >
            <img 
              src={getAssetUrl('/images/team_meeting_blueprint_1785776595921.jpg')} 
              alt="צוות החברה יחד בחדר ישיבות עובדים על תשריט" 
              className="w-full h-[380px] md:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent flex items-end justify-center p-8 md:p-10 text-center">
              <p className="text-brand-gold text-lg md:text-2xl font-bold tracking-wide drop-shadow-md">
                עבודת צוות מקצועית, יסודית ומסורה בכל שלבי עריכת התשריט
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

