import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";

const cards = [
  { icon: Brain, title: "Logica Applicata", desc: "Eliminiamo lo studio a memoria. Ricostruiamo le formule partendo dal ragionamento puro.", color: "primary" },
  { icon: Cpu, title: "Hub Digitale", desc: "Tablet grafici e lavagne condivise in tempo reale: visualizza i concetti astratti.", color: "accent" },
  { icon: Zap, title: "Mindset", desc: "Strategie per superare l'ansia da prestazione e gestire il Time Management.", color: "foreground" },
];

const MetodoSection = () => {
  return (
    <section id="metodo" className="py-20 sm:py-32 px-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 italic tracking-tight">
            Il Metodo <span className="text-primary drop-shadow-[0_0_25px_rgba(157,78,221,0.4)] uppercase">E-Lite</span>
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground/60 font-light tracking-[0.2em] text-[10px] uppercase">
            Non studiamo di più, studiamo in modo diverso.
          </p>
        </motion.div>

        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-5 sm:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 40, damping: 18, delay: i * 0.1 }}
              className="glass-panel p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] group flex flex-col items-center text-center relative overflow-hidden active:scale-[0.98] transition-transform duration-300"
            >
              {/* Watermark */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
                <card.icon className="w-32 h-32 sm:w-48 sm:h-48" />
              </div>
              {/* Top glow */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] ${
                card.color === "primary" ? "bg-gradient-to-r from-transparent via-primary/40 to-transparent" :
                card.color === "accent" ? "bg-gradient-to-r from-transparent via-accent/40 to-transparent" :
                "bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
              }`} />
              <div className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border transition-all duration-500 ${
                card.color === "primary" ? "bg-primary/10 border-primary/15 shadow-[0_0_20px_rgba(157,78,221,0.1)]" :
                card.color === "accent" ? "bg-accent/10 border-accent/15 shadow-[0_0_20px_rgba(0,243,255,0.1)]" :
                "bg-foreground/5 border-foreground/8"
              }`}>
                <card.icon className={`w-7 h-7 sm:w-9 sm:h-9 ${
                  card.color === "primary" ? "text-primary" :
                  card.color === "accent" ? "text-accent" : "text-foreground/80"
                }`} />
              </div>
              <h3 className="relative z-10 text-base sm:text-xl font-black mb-3 italic uppercase tracking-wider">{card.title}</h3>
              <p className="relative z-10 text-xs sm:text-sm text-muted-foreground/60 leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
