import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Atom, FileText, TrendingUp, ChevronDown } from "lucide-react";

type RepartoId = "superiori" | "universita" | "test" | "corsi";

const reparti = [
  { id: "superiori" as RepartoId, icon: GraduationCap, title: "Superiori", sub: "Technical & Sci", color: "primary" },
  { id: "universita" as RepartoId, icon: Atom, title: "Università", sub: "STEM & Eng.", color: "accent" },
  { id: "test" as RepartoId, icon: FileText, title: "Test", sub: "TOLC & Public", color: "warning" },
  { id: "corsi" as RepartoId, icon: TrendingUp, title: "Skills", sub: "Excel & Office", color: "success" },
];

const subjects: Record<RepartoId, { name: string; highlighted?: boolean }[]> = {
  superiori: [
    { name: "Matematica" }, { name: "Fisica" }, { name: "Chimica" },
    { name: "Informatica", highlighted: true }, { name: "Meccatronica" },
    { name: "Economia" }, { name: "Elettronica" }, { name: "Altro" },
  ],
  universita: [
    { name: "Analisi 1" }, { name: "Algebra" }, { name: "Fisica 1" },
    { name: "Informatica", highlighted: true }, { name: "Chimica" },
    { name: "Statistica" }, { name: "Altro" },
  ],
  test: [
    { name: "TOLC-I / E" }, { name: "TOLC-MED" }, { name: "Polizia" },
    { name: "Concorsi" }, { name: "Altro" },
  ],
  corsi: [
    { name: "Excel" }, { name: "Office" }, { name: "PowerPoint" }, { name: "Altro" },
  ],
};

const colorStyles: Record<string, { active: string; text: string; bg: string; border: string }> = {
  primary: { active: "border-primary/50", text: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  accent: { active: "border-accent/50", text: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  warning: { active: "border-warning/50", text: "text-warning", bg: "bg-warning/10", border: "border-warning/20" },
  success: { active: "border-success/50", text: "text-success", bg: "bg-success/10", border: "border-success/20" },
};

const RepartiSection = () => {
  const [activeReparto, setActiveReparto] = useState<RepartoId | null>(null);

  const handleSelect = () => {
    const el = document.getElementById("contact-area");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="reparti" className="py-20 sm:py-32 px-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-10 sm:mb-16 text-center italic uppercase tracking-tight"
        >
          Reparti <span className="text-primary drop-shadow-[0_0_20px_rgba(157,78,221,0.4)]">Attivi</span>
        </motion.h2>

        {/* Cards - 2x2 grid mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-14">
          {reparti.map((r, i) => {
            const c = colorStyles[r.color];
            const isActive = activeReparto === r.id;
            return (
              <motion.button
                key={r.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 50, damping: 18 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveReparto(isActive ? null : r.id)}
                className={`glass-panel p-4 sm:p-6 rounded-[1.2rem] sm:rounded-[1.8rem] text-left relative overflow-hidden h-44 sm:h-64 transition-all duration-500 ${isActive ? c.active : "border-transparent"}`}
              >
                {/* Watermark icon */}
                <div className="absolute -bottom-3 -right-3 opacity-[0.05] pointer-events-none">
                  <r.icon className={`w-24 h-24 sm:w-36 sm:h-36 ${c.text}`} />
                </div>
                {/* Top icon */}
                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 opacity-25`}>
                  <r.icon className={`w-10 h-10 sm:w-14 sm:h-14 ${c.text}`} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className={`w-6 h-[2px] ${c.bg} mb-2 rounded`} style={{ backgroundColor: `hsl(var(--${r.color}))` }} />
                  <h3 className="text-sm sm:text-lg font-black uppercase italic leading-tight">{r.title}</h3>
                  <p className="text-[8px] sm:text-[10px] font-bold tracking-[0.15em] text-muted-foreground/50 uppercase mt-1">{r.sub}</p>
                  <div className={`mt-3 ${c.bg} ${c.border} border text-foreground/80 text-[8px] sm:text-[9px] font-black uppercase tracking-widest py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 transition-all`}>
                    <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    {isActive ? "Chiudi" : "Espandi"}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded subjects */}
        <AnimatePresence mode="wait">
          {activeReparto && (
            <motion.div
              key={activeReparto}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mb-12 sm:mb-16"
            >
              <h4 className={`text-center ${colorStyles[reparti.find(r => r.id === activeReparto)!.color].text} font-bold uppercase tracking-[0.2em] mb-5 text-[10px] sm:text-xs`}>
                Modulo {reparti.find(r => r.id === activeReparto)!.title} Attivo
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                {subjects[activeReparto].map((s) => {
                  const c = colorStyles[reparti.find(r => r.id === activeReparto)!.color];
                  return (
                    <motion.button
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSelect}
                      className={`glass-panel py-4 px-3 rounded-xl text-center transition-all duration-300 ${s.highlighted ? `border ${c.active}` : `border-l-2 ${c.active}`} font-bold uppercase tracking-wider text-xs sm:text-sm active:bg-primary/10`}
                    >
                      {s.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RepartiSection;
