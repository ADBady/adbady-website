import { motion } from 'motion/react';
import { getAssetUrl } from '../utils/assets';

const steps = [
  {
    number: "01",
    title: "קבלת חומרי הפרויקט מאת מזמין העבודה",
    image: getAssetUrl("/images/process_image_1_1785777912060.jpg")
  },
  {
    number: "02",
    title: "הכנת תשריט הבית המשותף הדיגיטלי על ידינו, על פי הנחיות לשכת רישום המקרקעין",
    image: getAssetUrl("/images/process_image_2_1785777924577.jpg")
  },
  {
    number: "03",
    title: "בדיקת והתאמת נתוני התשריט ביחס לבנוי בשטח בפועל",
    image: getAssetUrl("/images/process_image_3_1785777937333.jpg")
  },
  {
    number: "04",
    title: "הגשת תשריט הבית המשותף הדיגיטלי לבדיקת \"מערכת רימון\" הממוחשבת, תיקון שגיאות בתשריט במידה וישנן, וקבלת תשריט דיגיטלי מוכן",
    image: getAssetUrl("/images/process_image_4_1785777950781.jpg")
  },
  {
    number: "05",
    title: "שליחת התשריט המוכן הראשוני לבדיקת ולאישור מזמין העבודה",
    image: getAssetUrl("/images/process_image_5_1785777962366.jpg")
  },
  {
    number: "06",
    title: "שליחת התשריט הסופי למזמין העבודה, שמוגש אלקטרונית לעירייה הרלוונטית, לצורך קבלת \"אישור עירייה\" לתשריט הבית המשותף הדיגיטלי (במקרים נדרשים)",
    image: getAssetUrl("/images/process_image_6_1785777974810.jpg")
  },
  {
    number: "07",
    title: "הגשת תשריט הבית המשותף הדיגיטלי יחד עם כל מסמכי רישום הבית המשותף ע\"י עורך הדין הרושם את הבית המשותף באופן מקוון באמצעות הכרטיס החכם",
    image: getAssetUrl("/images/process_image_7_1785777988095.jpg")
  },
  {
    number: "08",
    title: "אישור ורישום הבית המשותף בפנקס הבתים המשותפים (טאבו), עפ\"י כלל מסמכי רישום הבית המשותף",
    image: getAssetUrl("/images/process_image_8_1785778001035.jpg")
  }
];

export default function Process() {
  return (
    <div id="process" className="bg-brand-black pt-12 border-t border-white/5 scroll-mt-[90px]" dir="rtl">
      {/* Header Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-brand-black/75 z-10" />
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2600&auto=format&fit=crop" 
            alt="תהליך העבודה ברישום בית משותף - א. ד. באדי" 
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">תהליך העבודה</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
            <p className="mt-8 text-xl md:text-2xl text-slate-200 font-normal max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              תהליך העבודה החל מהכנת התשריט הדיגיטלי ועד לרישום הבית המשותף בפועל
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-brand-gray-dark/40 p-6 md:p-8 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-all duration-300`}
              >
                <div className="flex-1 space-y-4 relative">
                  <span className="text-7xl md:text-8xl font-sans font-black text-white/5 absolute -top-10 right-0 pointer-events-none">{step.number}</span>
                  <div className="relative">
                    <span className="text-brand-gold font-bold tracking-widest text-sm mb-3 block uppercase font-sans">שלב {step.number}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{step.title}</h2>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-square max-w-md overflow-hidden rounded-sm border border-brand-gold/20 shadow-xl group">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
