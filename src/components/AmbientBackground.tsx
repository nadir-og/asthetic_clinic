export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-stone-50" />

      {/* Emerald orb — top left */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-3xl animate-float-slow" />

      {/* Champagne orb — top right */}
      <div className="absolute top-20 -right-32 h-[450px] w-[450px] rounded-full bg-champagne/20 blur-3xl animate-float-medium" />

      {/* Emerald orb — mid left */}
      <div className="absolute top-[40%] -left-20 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-3xl animate-float-fast" />

      {/* Gold orb — bottom right */}
      <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl animate-float-slow" />

      {/* Champagne orb — bottom left */}
      <div className="absolute bottom-20 left-1/4 h-[350px] w-[350px] rounded-full bg-champagne-light/15 blur-3xl animate-float-medium" />

      {/* Micro-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='rgba(0,0,0,0.03)' stroke-width='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
