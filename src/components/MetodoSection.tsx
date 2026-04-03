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

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 40, damping: 18, delay: i * 0.2 },
  }),
};

const MetodoSection = () => {
  return (
    <section id="metodo" className="py-32 md:py-40 px-5 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 italic tracking-tight">
            Il Metodo <span className="text-primary drop-shadow-[0_0_30px_rgba(157,78,221,0.5)] uppercase">E-Lite</span>
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-5" />
          <p className="text-muted-foreground/70 font-light tracking-[0.25em] text-xs uppercase">
            Non studiamo di più, studiamo in modo diverso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              className="glass-panel p-12 rounded-[2rem] group flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-primary/20 relative overflow-hidden"
            >
              {/* Background watermark icon */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                <card.icon className="w-44 h-44 md:w-52 md:h-52" />
              </div>
              {/* Subtle glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                card.color === "primary" ? "bg-gradient-to-b from-primary/5 to-transparent" :
                card.color === "accent" ? "bg-gradient-to-b from-accent/5 to-transparent" :
                "bg-gradient-to-b from-foreground/3 to-transparent"
              }`} />
              <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 border group-hover:scale-110 transition-all duration-500 ${
                card.color === "primary" ? "bg-primary/10 border-primary/20 shadow-[0_0_25px_rgba(157,78,221,0.15)] group-hover:shadow-[0_0_40px_rgba(157,78,221,0.3)]" :
                card.color === "accent" ? "bg-accent/10 border-accent/20 shadow-[0_0_25px_rgba(0,243,255,0.15)] group-hover:shadow-[0_0_40px_rgba(0,243,255,0.3)]" :
                "bg-foreground/5 border-foreground/10 shadow-[0_0_25px_rgba(255,255,255,0.08)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              }`}>
                <card.icon className={`w-9 h-9 ${
                  card.color === "primary" ? "text-primary" :
                  card.color === "accent" ? "text-accent" : "text-foreground"
                }`} />
              </div>
              <h3 className="relative z-10 text-xl font-black mb-5 italic uppercase tracking-wider">{card.title}</h3>
              <p className="relative z-10 text-sm text-muted-foreground/70 leading-relaxed font-light max-w-[280px]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
