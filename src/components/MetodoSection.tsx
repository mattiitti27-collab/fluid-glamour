import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";

const cards = [
  { icon: Brain, title: "Logica Applicata", desc: "Ricostruiamo le formule partendo dal ragionamento puro.", color: "primary" },
  { icon: Cpu, title: "Hub Digitale", desc: "Tablet grafici e lavagne condivise in tempo reale.", color: "accent" },
  { icon: Zap, title: "Mindset", desc: "Strategie anti-ansia e gestione del tempo.", color: "foreground" },
];

const MetodoSection = () => {
  return (
    <section id="metodo" className="py-14 sm:py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-center mb-8 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 italic tracking-tight">
            Il Metodo <span className="text-primary uppercase">E-Lite</span>
          </h2>
          <div className="h-[1.5px] w-10 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-2" />
          <p className="text-muted-foreground/50 font-light tracking-[0.15em] text-[9px] uppercase">
            Non studiamo di più, studiamo diverso.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: i * 0.08 }}
              className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-[1.5rem] flex items-start gap-4 sm:flex-col sm:items-center sm:text-center relative overflow-hidden active:scale-[0.98] transition-transform duration-200"
            >
              {/* Watermark */}
              <div className="absolute -bottom-3 -right-3 opacity-[0.03] pointer-events-none">
                <card.icon className="w-20 h-20 sm:w-32 sm:h-32" />
              </div>
              <div className={`relative z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                card.color === "primary" ? "bg-primary/10 border-primary/15" :
                card.color === "accent" ? "bg-accent/10 border-accent/15" :
                "bg-foreground/5 border-foreground/8"
              }`}>
                <card.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  card.color === "primary" ? "text-primary" :
                  card.color === "accent" ? "text-accent" : "text-foreground/70"
                }`} />
              </div>
              <div className="relative z-10 min-w-0">
                <h3 className="text-sm sm:text-base font-black mb-1 italic uppercase tracking-wide">{card.title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground/55 leading-relaxed font-light">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
