import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Logica Applicata",
    desc: "Eliminiamo lo studio a memoria. Ricostruiamo le formule partendo dal ragionamento puro.",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Hub Digitale",
    desc: "Tablet grafici e lavagne condivise in tempo reale: visualizza i concetti astratti.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Mindset",
    desc: "Strategie per superare l'ansia da prestazione e gestire il Time Management.",
    color: "foreground",
  },
];

const MetodoSection = () => {
  return (
    <section id="metodo" className="py-24 px-5 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic tracking-tight">
            Il Metodo <span className="text-primary drop-shadow-[0_0_20px_rgba(157,78,221,0.6)] uppercase">E-Lite</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground font-light tracking-widest text-xs uppercase">
            Non studiamo di più, studiamo in modo diverso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel p-10 rounded-[2rem] group flex flex-col items-center text-center hover:border-primary/30 transition-all relative overflow-hidden"
            >
              {/* Background watermark icon */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                <card.icon className="w-40 h-40 md:w-48 md:h-48" />
              </div>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border group-hover:scale-110 transition-transform ${
                card.color === "primary" ? "bg-primary/10 border-primary/20 shadow-[0_0_20px_rgba(157,78,221,0.2)]" :
                card.color === "accent" ? "bg-accent/10 border-accent/20 shadow-[0_0_20px_rgba(0,243,255,0.2)]" :
                "bg-foreground/5 border-foreground/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              }`}>
                <card.icon className={`w-9 h-9 ${
                  card.color === "primary" ? "text-primary" :
                  card.color === "accent" ? "text-accent" : "text-foreground"
                }`} />
              </div>
              <h3 className="text-xl font-black mb-4 italic uppercase tracking-wider">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
