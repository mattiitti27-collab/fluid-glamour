import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const HiringSection = () => {
  return (
    <section id="hiring" className="py-20 sm:py-28 relative overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase mb-10 sm:mb-16 tracking-tighter"
        >
          Entra nel <span className="text-primary">Team.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-25 grayscale pointer-events-none">
          {[
            { title: "Requisito 1", desc: "Media Eccellente (>8 o >27)" },
            { title: "Requisito 2", desc: "Abilità comunicative Elite" },
            { title: "Requisito 3", desc: "Padronanza Digital" },
          ].map((r) => (
            <div key={r.title} className="glass-panel p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem]">
              <h4 className="font-bold text-primary mb-2 italic tracking-widest uppercase text-[10px] sm:text-xs">{r.title}</h4>
              <p className="text-sm sm:text-base font-bold">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-background/80" />
          
          <div className="absolute w-[150%] h-12 sm:h-[60px] bg-warning flex items-center justify-center font-black text-background text-xs sm:text-lg tracking-[0.08em] uppercase border-y-2 sm:border-y-4 border-background rotate-[10deg]">
            CLASSIFIED // DO NOT CROSS // CLASSIFIED // DO NOT CROSS
          </div>
          <div className="absolute w-[150%] h-12 sm:h-[60px] bg-warning flex items-center justify-center font-black text-background text-xs sm:text-lg tracking-[0.08em] uppercase border-y-2 sm:border-y-4 border-background -rotate-[10deg]">
            RESTRICTED AREA // ELITE ONLY // RESTRICTED AREA
          </div>

          <div className="absolute z-30 flex flex-col items-center">
            <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-destructive drop-shadow-[0_0_30px_rgba(255,0,0,0.6)] mb-3" />
            <div className="text-foreground font-black text-lg sm:text-3xl uppercase tracking-widest border-2 sm:border-4 border-foreground px-5 sm:px-8 py-1.5 bg-background animate-pulse">
              CHIUSO
            </div>
          </div>
        </div>

        <p className="mt-8 sm:mt-12 text-muted-foreground/50 text-[9px] sm:text-xs tracking-[0.2em] uppercase relative z-30">
          Candidature momentaneamente chiuse
        </p>
      </div>
    </section>
  );
};

export default HiringSection;
