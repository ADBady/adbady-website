import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, Send, Facebook, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mzdnnqyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'שם מלא': formData.name,
          'טלפון': formData.phone,
          'דוא"ל': formData.email,
          'תוכן הפנייה': formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('אירעה שגיאה בשליחת הטופס. אנא נסה שוב או צור קשר בטלפון/וואטסאפ.');
        }
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('אירעה שגיאה בשליחת הטופס. אנא בדוק את חיבור האינטרנט ונסה שוב.');
      setStatus('error');
    }
  };
  return (
    <div id="contact" className="bg-brand-black pt-12 border-t border-white/5 scroll-mt-[90px]" dir="rtl">
      {/* Header Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-brand-black/80 z-10" />
           <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2600&auto=format&fit=crop" 
            alt="רקע יצירת קשר - א. ד. באדי" 
            className="w-full h-full object-cover grayscale opacity-40"
            loading="lazy"
            referrerPolicy="no-referrer"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6">צור קשר</h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Contact Info */}
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">נשמח לשמוע מכם</h2>
                        <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            זקוקים לייעוץ בנוגע לתשריט לצורך רישום בית משותף? מעוניינים בהצעת מחיר לתשריט דיגיטלי? הצוות המקצועי שלנו זמין עבורכם לכל שאלה.
                        </p>
                    </div>

                    <div className="space-y-8" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        {/* Phone */}
                        <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
                            <div className="w-10 h-10 shrink-0 border border-white/10 flex items-center justify-center text-brand-gold bg-brand-gray-dark/60">
                                <Phone size={20} />
                            </div>
                            <span className="text-white font-bold">טלפון נייד ו-WhatsApp:</span>
                            <a href="tel:0503657780" className="text-slate-200 font-medium hover:text-brand-gold transition-colors" dir="ltr">050-365-7780</a>
                        </div>

                        {/* Email */}
                        <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
                            <div className="w-10 h-10 shrink-0 border border-white/10 flex items-center justify-center text-brand-gold bg-brand-gray-dark/60">
                                <Mail size={20} />
                            </div>
                            <span className="text-white font-bold">דוא"ל:</span>
                            <a href="mailto:a0503657780@gmail.com" className="text-slate-200 font-medium hover:text-brand-gold transition-colors break-all">a0503657780@gmail.com</a>
                        </div>

                        {/* Facebook */}
                        <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
                            <div className="w-10 h-10 shrink-0 border border-white/10 flex items-center justify-center text-brand-gold bg-brand-gray-dark/60">
                                <Facebook size={20} />
                            </div>
                            <span className="text-white font-bold">Facebook:</span>
                            <a href="https://www.facebook.com/ADBady/" target="_blank" rel="noopener noreferrer" className="text-slate-200 font-medium hover:text-brand-gold transition-colors break-all">https://www.facebook.com/ADBady/</a>
                        </div>

                        {/* Working Hours */}
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
                                <div className="w-10 h-10 shrink-0 border border-white/10 flex items-center justify-center text-brand-gold bg-brand-gray-dark/60">
                                    <Clock size={20} />
                                </div>
                                <span className="text-white font-bold">שעות פעילות:</span>
                                <span className="text-slate-200 font-medium">ימים א'-ה' בין השעות 08:30-18:30</span>
                            </div>
                            <p className="text-slate-400 text-[17px] font-normal pr-13 leading-relaxed">
                                ניתן להשאיר פנייה באמצעות WhatsApp, דוא"ל או טופס יצירת הקשר בכל עת, ואנו נשוב אליכם בהקדם האפשרי.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-brand-gray-dark p-8 md:p-12 border border-white/5 rounded-sm relative shadow-2xl">
                    {status === 'success' && (
                        <div className="mb-8 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 p-4 rounded-sm flex items-center gap-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-400" />
                            <span className="font-medium text-base">פנייתך התקבלה בהצלחה. אנו ניצור עמך קשר בהקדם האפשרי.</span>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mb-8 bg-red-950/60 border border-red-500/40 text-red-300 p-4 rounded-sm flex items-center gap-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            <AlertCircle className="w-6 h-6 shrink-0 text-red-400" />
                            <span className="font-medium text-base">{errorMessage}</span>
                        </div>
                    )}

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[15px] font-bold text-slate-300 uppercase tracking-wider block">שם מלא:</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-brand-black border border-white/10 px-4 py-4 text-white focus:border-brand-gold outline-none transition-colors rounded-sm" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[15px] font-bold text-slate-300 uppercase tracking-wider block">טלפון:</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-brand-black border border-white/10 px-4 py-4 text-white focus:border-brand-gold outline-none transition-colors rounded-sm" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[15px] font-bold text-slate-300 uppercase tracking-wider block">כתובת דוא"ל:</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-brand-black border border-white/10 px-4 py-4 text-white focus:border-brand-gold outline-none transition-colors rounded-sm" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[15px] font-bold text-slate-300 uppercase tracking-wider block">תוכן הפנייה:</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5} 
                                className="w-full bg-brand-black border border-white/10 px-4 py-4 text-white focus:border-brand-gold outline-none transition-colors rounded-sm resize-none" 
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-5 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <span>שולח פנייה...</span>
                                    <Loader2 size={20} className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    <span>שליחת פנייה</span>
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
      </section>
    </div>
  );
}
