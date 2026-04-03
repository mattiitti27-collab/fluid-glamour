import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const HiringSection = () => {
  return (
    <section id="hiring" className="py-32 relative overflow-hidden z-10">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black italic uppercase mb-16 tracking-tighter drop-shadow-2xl"
        >
          Entra nel <span className="text-primary">Team.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-30 grayscale pointer-events-none">
          {[
            { title: "Requisito 1", desc: "Media Eccellente (>8 o >27)" },
            { title: "Requisito 2", desc: "Abilità comunicative Elite" },
            { title: "Requisito 3", desc: "Padronanza Digital" },
          ].map((r) => (
            <div key={r.title} className="glass-panel p-8 rounded-[2rem]">
              <h4 className="font-bold text-primary mb-3 italic tracking-widest uppercase text-sm">{r.title}</h4>
              <p className="text-lg font-bold">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          
          {/* Tapes */}
          <div className="absolute w-[150%] h-[70px] bg-warning flex items-center justify-center font-black text-background text-lg md:text-2xl tracking-[0.1em] uppercase border-y-4 border-background rotate-[10deg] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            CLASSIFIED // DO NOT CROSS // CLASSIFIED // DO NOT CROSS // CLASSIFIED
          </div>
          <div className="absolute w-[150%] h-[70px] bg-warning flex items-center justify-center font-black text-background text-lg md:text-2xl tracking-[0.1em] uppercase border-y-4 border-background -rotate-[10deg] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            RESTRICTED AREA // ELITE ONLY // RESTRICTED AREA // ELITE ONLY
          </div>

          <div className="absolute z-30 flex flex-col items-center justify-center">
            <Lock className="w-20 h-20 text-destructive drop-shadow-[0_0_50px_rgba(255,0,0,0.8)] mb-4" />
            <div className="text-foreground font-black text-2xl md:text-4xl uppercase tracking-widest border-4 border-foreground px-8 py-2 bg-background animate-pulse">
              STATUS: CHIUSO
            </div>
          </div>
        </div>

        <p className="mt-12 text-muted-foreground text-xs tracking-[0.3em] uppercase relative z-30">
          Candidature momentaneamente chiuse
        </p>
      </div>
    </section>
  );
};

export default HiringSection;
