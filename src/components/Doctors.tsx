import React from 'react';

const Doctors = () => {
  return (
    <section className="pt-24 pb-16 bg-[#FDFCFB]" id="doctors">
       <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
         <span className="uppercase tracking-widest text-[10px] font-bold text-zinc-500 mb-3 block">The Medical Team</span>
         <h2 className="font-serif text-4xl lg:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">The specialists behind Aura.</h2>
         <p className="text-zinc-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">A senior board-certified team that stays close to every clinical protocol and patient transformation.</p>
       </div>

       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Doctor 1 */}
          <div className="bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group border border-zinc-100/50">
            <div className="w-full aspect-square sm:aspect-[4/3] bg-zinc-100 relative overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" alt="Dr. Farrukh Shahzad" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col bg-white">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold text-zinc-950">Dr. Farrukh Shahzad</h3>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Lead Physician</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                With over 12 years of clinical dermatology experience, Dr. Shahzad leads the clinic's medical vision and patient protocols. He specializes in fractional laser resurfacing and autologous PRP therapy, treating every procedure as a precision science measured by lasting, natural results.
              </p>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group border border-zinc-100/50">
            <div className="w-full aspect-square sm:aspect-[4/3] bg-zinc-100 relative overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Dr. Amna Farrukh" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col bg-white">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold text-zinc-950">Dr. Amna Farrukh</h3>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Laser Specialist</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Dr. Farrukh founded her practice on a simple belief: medical aesthetics should earn its keep. She pairs a dermatologist's eye with clinical precision, specializing in Hydra Facial protocols and medical chemical peels to ensure every treatment is safe, modern, and built to transform.
              </p>
            </div>
          </div>

       </div>
    </section>
  );
};

export default Doctors;
