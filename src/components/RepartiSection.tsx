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
    { name: "Economia" }, { name: "Elettronica" }, { name: "Altro - Superiori" },
  ],
  universita: [
    { name: "Analisi 1" }, { name: "Algebra" }, { name: "Fisica 1" },
    { name: "Informatica Uni", highlighted: true }, { name: "Chimica Gen./Org." },
    { name: "Statistica" }, { name: "Altro - Università" },
  ],
  test: [
    { name: "TOLC-I / E" }, { name: "TOLC-MED" }, { name: "Polizia" },
    { name: "Concorsi Pubblici" }, { name: "Altro Test" },
  ],
  corsi: [
    { name: "Excel" }, { name: "Office" }, { name: "PowerPoint" }, { name: "Altro Corso" },
  ],
};

const colorMap: Record<string, { border: string; bg: string; text: string; hoverBg: string }> = {
  primary: { border: "border-primary", bg: "bg-primary/10", text: "text-primary", hoverBg: "hover:bg-primary/20" },
  accent: { border: "border-accent", bg: "bg-accent/10", text: "text-accent", hoverBg: "hover:bg-accent/20" },
  warning: { border: "border-warning", bg: "bg-warning/10", text: "text-warning", hoverBg: "hover:bg-warning/20" },
  success: { border: "border-success", bg: "bg-success/10", text: "text-success", hoverBg: "hover:bg-success/20" },
};

const RepartiSection = () => {
  const [activeReparto, setActiveReparto] = useState<RepartoId | null>(null);

  const handleSelect = (subjectName: string) => {
    const contactSection = document.getElementById("contact-area");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="reparti" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 text-center italic uppercase tracking-tight"
        >
          Reparti <span className="text-primary drop-shadow-[0_0_20px_rgba(157,78,221,0.5)]">Attivi</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {reparti.map((r, i) => {
            const c = colorMap[r.color];
            return (
              <motion.button
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveReparto(activeReparto === r.id ? null : r.id)}
                className={`glass-panel p-5 md:p-8 rounded-[2rem] text-left relative overflow-hidden h-72 transition-all group hover:${c.border} ${activeReparto === r.id ? c.border : ""}`}
              >
                <div className={`absolute top-4 right-4 opacity-30 group-hover:opacity-50 transition-all group-hover:scale-110`}>
                  <r.icon className={`w-16 h-16 md:w-20 md:h-20 ${c.text}`} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className={`w-8 h-1 ${c.bg} mb-3 rounded`} style={{ backgroundColor: `hsl(var(--${r.color}))` }} />
                  <h3 className={`text-lg md:text-2xl font-black uppercase italic group-hover:${c.text} transition-colors`}>
                    {r.title}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mt-2">{r.sub}</p>
                  <div className={`mt-4 ${c.bg} border ${c.border}/50 text-foreground text-[9px] font-black uppercase tracking-widest py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all`}>
                    <ChevronDown className={`w-3 h-3 transition-transform ${activeReparto === r.id ? "rotate-180" : "animate-bounce"}`} />
                    {activeReparto === r.id ? "Chiudi" : "Espandi"}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeReparto && (
            <motion.div
              key={activeReparto}
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-20 scroll-mt-32 overflow-hidden"
            >
              <h4 className={`text-center ${colorMap[reparti.find(r => r.id === activeReparto)!.color].text} font-bold uppercase tracking-[0.3em] mb-8 text-sm`}>
                Modulo {reparti.find(r => r.id === activeReparto)!.title} Attivo
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {subjects[activeReparto].map((s) => {
                  const c = colorMap[reparti.find(r => r.id === activeReparto)!.color];
                  return (
                    <button
                      key={s.name}
                      onClick={() => handleSelect(s.name)}
                      className={`glass-panel p-5 rounded-xl text-center cursor-pointer ${c.hoverBg} transition-all ${s.highlighted ? `border-2 ${c.border} shadow-[0_0_15px_rgba(157,78,221,0.3)]` : `border-l-4 ${c.border}`} font-bold uppercase tracking-wider text-sm md:text-base`}
                    >
                      {s.name.replace(" Uni", "").replace(" - Superiori", "").replace(" - Università", "").replace("Altro Corso", "Altro").replace("Altro Test", "Altro")}
                    </button>
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
