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
  primary: { active: "border-primary/40", text: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  accent: { active: "border-accent/40", text: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  warning: { active: "border-warning/40", text: "text-warning", bg: "bg-warning/10", border: "border-warning/20" },
  success: { active: "border-success/40", text: "text-success", bg: "bg-success/10", border: "border-success/20" },
};

const RepartiSection = () => {
  const [activeReparto, setActiveReparto] = useState<RepartoId | null>(null);

  const handleSelect = () => {
    const el = document.getElementById("contact-area");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="reparti" className="py-14 sm:py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 sm:mb-10 text-center italic uppercase tracking-tight"
        >
          Reparti <span className="text-primary">Attivi</span>
        </motion.h2>

        {/* Cards grid - 2x2 */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4 mb-5 sm:mb-8">
          {reparti.map((r, i) => {
            const c = colorStyles[r.color];
            const isActive = activeReparto === r.id;
            return (
              <motion.button
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 60, damping: 20 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveReparto(isActive ? null : r.id)}
                className={`glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left relative overflow-hidden h-32 sm:h-44 transition-all duration-300 ${isActive ? c.active : "border-transparent"}`}
              >
                {/* Watermark */}
                <div className="absolute -bottom-2 -right-2 opacity-[0.05] pointer-events-none">
                  <r.icon className={`w-16 h-16 sm:w-24 sm:h-24 ${c.text}`} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <r.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${c.text} opacity-40`} />
                  <div>
                    <h3 className="text-[13px] sm:text-base font-black uppercase italic leading-tight">{r.title}</h3>
                    <p className="text-[7px] sm:text-[9px] font-bold tracking-[0.1em] text-muted-foreground/40 uppercase mt-0.5">{r.sub}</p>
                    <div className={`mt-2 ${c.bg} ${c.border} border text-foreground/70 text-[7px] sm:text-[8px] font-black uppercase tracking-widest py-1 px-1.5 rounded-md flex items-center justify-center gap-0.5`}>
                      <ChevronDown className={`w-2 h-2 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                      {isActive ? "Chiudi" : "Espandi"}
                    </div>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mb-6 sm:mb-10"
            >
              <h4 className={`text-center ${colorStyles[reparti.find(r => r.id === activeReparto)!.color].text} font-bold uppercase tracking-[0.15em] mb-3 text-[9px] sm:text-[10px]`}>
                {reparti.find(r => r.id === activeReparto)!.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {subjects[activeReparto].map((s) => {
                  const c = colorStyles[reparti.find(r => r.id === activeReparto)!.color];
                  return (
                    <motion.button
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSelect}
                      className={`glass-panel py-3 px-2.5 rounded-lg text-center transition-all duration-200 ${s.highlighted ? `border ${c.active}` : `border-l-2 ${c.active}`} font-bold uppercase tracking-wider text-[11px] sm:text-xs active:bg-primary/10`}
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
