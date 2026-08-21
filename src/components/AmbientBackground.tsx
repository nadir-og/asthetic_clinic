import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient canvas */}
      <div className="absolute inset-0 bg-[#FAFAFA]" />

      {/* Top Ambient Aura */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-zinc-200/20 via-zinc-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 absolute inset-0 pointer-events-none" />

      {/* Soft drifting ambient botanical orb */}
      <motion.div
        animate={{
          x: [0, 30, -15, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.03, 0.97, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-zinc-100/10 blur-[120px]"
      />

      {/* Grain overlay (very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
