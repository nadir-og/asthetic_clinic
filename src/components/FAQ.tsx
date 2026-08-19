import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqs } from '@/data/clinicData';
import { waQuestionLink } from '@/lib/whatsapp';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Frequently Asked
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-deep mb-3">
            Questions? <span className="text-gold-gradient">Answered.</span>
          </h2>
          <p className="text-base text-slate-500">
            Everything you need to know before booking your treatment.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`glass-card rounded-2xl overflow-hidden transition-shadow ${
                  isOpen ? 'shadow-glass-hover' : ''
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-slate-deep">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0 ${
                      isOpen ? 'bg-emerald-mid text-white' : 'bg-emerald-mid/10 text-emerald-mid'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp quick banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href={waQuestionLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-shimmer relative flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-4 text-base font-semibold text-white shadow-whatsapp-glow animate-pulse-glow hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="h-5 w-5 fill-white/20" />
            Still have questions? Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
