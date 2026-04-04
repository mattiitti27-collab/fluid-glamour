import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const HiringSection = () => {
  return (
    <section id="hiring" className="py-14 sm:py-20 relative overflow-hidden z-10">
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black italic uppercase mb-6 sm:mb-10 tracking-tighter"
        >
          Entra nel <span className="text-primary">Team.</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 opacity-20 grayscale pointer-events-none">
          {[
            { title: "01", desc: "Media >8 / >27" },
            { title: "02", desc: "Comunicazione Elite" },
            { title: "03", desc: "Digital Fluency" },
          ].map((r) => (
            <div key={r.title} className="glass-panel p-3 sm:p-5 rounded-xl sm:rounded-2xl">
              <h4 className="font-bold text-primary italic tracking-widest uppercase text-[8px] sm:text-[10px] mb-1">{r.title}</h4>
              <p className="text-[10px] sm:text-sm font-bold">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute w-[150%] h-8 sm:h-12 bg-warning flex items-center justify-center font-black text-background text-[9px] sm:text-sm tracking-[0.06em] uppercase border-y-2 border-background rotate-[10deg]">
            CLASSIFIED // DO NOT CROSS // CLASSIFIED
          </div>
          <div className="absolute w-[150%] h-8 sm:h-12 bg-warning flex items-center justify-center font-black text-background text-[9px] sm:text-sm tracking-[0.06em] uppercase border-y-2 border-background -rotate-[10deg]">
            RESTRICTED AREA // ELITE ONLY
          </div>
          <div className="absolute z-30 flex flex-col items-center">
            <Lock className="w-8 h-8 sm:w-12 sm:h-12 text-destructive drop-shadow-[0_0_20px_rgba(255,0,0,0.5)] mb-2" />
            <div className="text-foreground font-black text-sm sm:text-xl uppercase tracking-widest border-2 border-foreground px-4 py-1 bg-background animate-pulse">
              CHIUSO
            </div>
          </div>
        </div>

        <p className="mt-6 sm:mt-8 text-muted-foreground/40 text-[8px] sm:text-[10px] tracking-[0.15em] uppercase relative z-30">
          Candidature momentaneamente chiuse
        </p>
      </div>
    </section>
  );
};

export default HiringSection;
