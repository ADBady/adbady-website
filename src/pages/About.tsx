import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function About() {
  return (
    <div id="about" className="bg-brand-black pt-12 border-t border-white/5" dir="rtl">
      {/* Header Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 b-1 hover:blur-none transition-all duration-1000">
           <div className="absolute inset-0 bg-brand-black/80 z-10" />
           <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="משרדי א. ד. באדי בתים משותפים" 
            className="w-full h-full object-cover grayscale"
            loading="lazy"
            referrerPolicy="no-referrer"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">אודותינו</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="space-y-8 text-slate-200 text-lg md:text-xl leading-relaxed font-normal text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <p>
              אנו, הצוות בחברת א. ד. באדי בתים משותפים בע"מ, עוסקים מזה כ-30 שנה בעריכת תשריטים לצורך רישום בתים משותפים בטאבו, נותנים שירות בכל רחבי הארץ למגוון לקוחות, ומוכרים היטב בזכות הצלחותינו הרבות בתחום
            </p>

            <p>
              חברתנו מספקת שירותי עריכת תשריטים, כמפורט לעיל, לנכסים שונים רבים ברחבי הארץ, במגוון פרויקטים, ביניהם בתי מגורים, קניונים, מרכזים מסחריים וכיוצ"ב
            </p>

            <p>
              חברתנו חרטה על דגלה לשרת את לקוחותינו במסירות, בנאמנות, בהתמדה ובמקצועיות, תוך מתן יחס אישי ומיידי לכל לקוח. משרדינו כולל צוותי עבודה, ביניהם שרטטים, הנדסאי בניין ועוד, שכולם כאחד מתגייסים, כל אחד בתחומו, לצורך מתן שירות מקצועי, מהיר ואדיב לקהל לקוחותינו
            </p>

            <p>
              חברתנו מציעה את שירותיה לחברות בנייה, יזמים, קבוצות רכישה, משרדי עורכי דין וגופים/לקוחות פרטיים
            </p>

            <p>
              אנו מאמינים כי הניסיון והמומחיות הרבים שרכשנו במשך כ-30 שנה בתחום עריכת תשריט בית משותף לצורך רישום בתים משותפים בפנקס הבתים המשותפים, הקנו לחברתנו ערך מוסף ומוניטין מצויין, היכולים לשמש ללקוחותינו משענת יציבה ובטוחה מבחינה מקצועית, בזכות הניסיון הרב שחברתנו מציגה בתחום זה, וכן להעניק ללקוחותינו שירות מהיר ומקצועי אשר יחסוך להם זמן, טרחה וכסף רב
            </p>

            <p>
              אנו מלווים את לקוחותינו מתחילת העבודה ועד לרישום הבית המשותף בפועל
            </p>

            <p className="font-bold text-brand-gold text-xl md:text-2xl pt-2">
              נשמח לעמוד לשירותכם בכל עת
            </p>

            <div className="pt-12 text-center">
                <blockquote className="text-2xl font-sans italic text-slate-400 mb-4 px-8">
                    "ניסיון של 30 שנה הוא לא רק מספר, הוא הידיעה שכל פרט בתשריט שלכם מטופל בידיים המיומנות ביותר."
                </blockquote>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
