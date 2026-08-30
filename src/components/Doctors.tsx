import React from 'react';
import { motion } from 'framer-motion';

const Doctors = () => {
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  return (
    <section className="pt-24 pb-16 lg:pb-24 bg-[#FDFCFB]" id="doctors">
       <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
         <span className="uppercase tracking-widest text-[10px] font-bold text-zinc-500 mb-3 block">The Medical Team</span>
         <h2 className="font-serif text-4xl lg:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">The specialists behind Aura.</h2>
         <p className="text-zinc-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">A senior board-certified team that stays close to every clinical protocol and patient transformation.</p>
       </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Doctor 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={isTouch ? {} : { y: -6 }}
            transition={{ 
              type: 'spring', 
              stiffness: 120, 
              damping: 18, 
              opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
            }}
            className="bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group border border-zinc-100/50 cursor-pointer"
          >
            <div className="w-full aspect-square sm:aspect-[4/3] bg-zinc-100 relative overflow-hidden shrink-0">
              <img
                src="/images/doctor_farrukh.webp"
                srcSet="/images/doctor_farrukh-mobile.webp 360w, /images/doctor_farrukh.webp 600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="Dr. Farrukh Shahzad"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex flex-col bg-white">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-1 lg:gap-0 mb-4">
                <h3 className="text-xl font-bold text-zinc-950 transition-colors duration-300 group-hover:text-amber-850">Dr. Farrukh Shahzad</h3>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Lead Physician</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                With over 12 years of clinical dermatology experience, Dr. Shahzad leads the clinic's medical vision and patient protocols. He specializes in fractional laser resurfacing and autologous PRP therapy, treating every procedure as a precision science measured by lasting, natural results.
              </p>
            </div>
          </motion.div>

          {/* Doctor 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={isTouch ? {} : { y: -6 }}
            transition={{ 
              type: 'spring', 
              stiffness: 120, 
              damping: 18, 
              opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              delay: 0.1
            }}
            className="bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group border border-zinc-100/50 cursor-pointer"
          >
            <div className="w-full aspect-square sm:aspect-[4/3] bg-zinc-100 relative overflow-hidden shrink-0">
              <img
                src="/images/doctor_amna.webp"
                srcSet="/images/doctor_amna-mobile.webp 360w, /images/doctor_amna.webp 600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="Dr. Amna Farrukh"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex flex-col bg-white">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-1 lg:gap-0 mb-4">
                <h3 className="text-xl font-bold text-zinc-950 transition-colors duration-300 group-hover:text-amber-850">Dr. Amna Farrukh</h3>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Laser Specialist</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Dr. Farrukh founded her practice on a simple belief: medical aesthetics should earn its keep. She pairs a dermatologist's eye with clinical precision, specializing in Hydra Facial protocols and medical chemical peels to ensure every treatment is safe, modern, and built to transform.
              </p>
            </div>
          </motion.div>

        </div>
    </section>
  );
};

export default Doctors;
