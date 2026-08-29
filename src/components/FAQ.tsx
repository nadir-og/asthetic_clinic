import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqs } from '@/data/clinicData';
import { waQuestionLink } from '@/lib/whatsapp';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

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
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4 mx-auto">
            <HelpCircle className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Frequently Asked
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            Questions? Answered.
          </h2>
          <p className="text-sm lg:text-base text-zinc-500 max-w-xl mx-auto text-center">
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? 'border-zinc-300 shadow-md' : 'border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-zinc-900 font-medium text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0 border transition-colors duration-200 ${
                      isOpen
                        ? 'bg-zinc-950 text-white border-zinc-950'
                        : 'bg-zinc-100 text-zinc-800 border-zinc-200'
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
                      <p className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
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
            className="relative overflow-hidden bg-zinc-950 text-white border border-zinc-950 font-medium px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
          >
            <span className="absolute inset-0 bg-white rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2.5 text-white group-hover:text-zinc-950 transition-colors duration-500">
              <MessageCircle className="h-5 w-5 fill-current opacity-80" />
              <span>Still have questions? Chat on WhatsApp</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
