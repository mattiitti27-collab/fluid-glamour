const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* Cyber grid - subtle */}
      <div
        className="absolute inset-0 opacity-[0.04] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(157,78,221,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(157,78,221,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridDrift 30s linear infinite",
        }}
      />

      {/* Radial glow - primary top-left */}
      <div
        className="absolute -top-[30%] -left-[20%] w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(157,78,221,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "ambientFloat 25s ease-in-out infinite alternate",
        }}
      />

      {/* Radial glow - accent bottom-right */}
      <div
        className="absolute -bottom-[30%] -right-[20%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0,243,255,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "ambientFloat 30s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* Secondary glow - center */}
      <div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(157,78,221,0.3) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "ambientPulse 20s ease-in-out infinite",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating math symbols - desktop only */}
      <div className="hidden md:block">
        {["π", "Σ", "∫", "∞", "√", "∂", "Δ", "λ"].map((sym, i) => (
          <span
            key={i}
            className="absolute text-primary/[0.08] font-serif font-bold select-none"
            style={{
              left: `${10 + i * 12}%`,
              fontSize: `${14 + (i % 3) * 6}px`,
              animation: `symbolFloat ${18 + i * 3}s linear infinite`,
              animationDelay: `${i * 2.5}s`,
            }}
          >
            {sym}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes gridDrift {
          0% { background-position: 0 0; }
          100% { background-position: 0 60px; }
        }
        @keyframes ambientFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 30px); }
        }
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.04; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.1; transform: translate(-50%, 0) scale(1.15); }
        }
        @keyframes symbolFloat {
          0% { transform: translateY(110vh); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AmbientBackground;
