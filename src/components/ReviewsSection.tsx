import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Star, PenLine } from "lucide-react";

const reviews = [
  { text: "Mi ha aiutato un sacco con analisi 1, prima ero completamente perso. Spiega in modo semplice e senza farti sentire stupido.", name: "Luca R.", stars: 5, color: "primary" },
  { text: "Fisica spiegata finalmente come si deve. Ho iniziato a capire davvero e non solo a imparare formule a caso.", name: "Giulia M.", stars: 5, color: "accent" },
  { text: "Bravo in matematica, soprattutto per le superiori. A volte va veloce ma se chiedi ti rispiega.", name: "Marco T.", stars: 4, color: "foreground" },
  { text: "Mio figlio aveva grosse difficoltà in chimica e matematica, dopo qualche lezione si è sbloccato e ora va molto meglio.", name: "Sara B. (Mamma)", stars: 5, color: "warning" },
  { text: "Analisi 1 tosta ma spiegata bene. Non regala niente ma ti fa ragionare.", name: "Andrea F.", stars: 5, color: "primary" },
  { text: "Ripetizioni serie, niente tempo perso. Se non studi te lo dice ma ti aiuta davvero.", name: "Francesco L.", stars: 5, color: "foreground" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 40, damping: 18, delay: i * 0.12 },
  }),
};

const ReviewsSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("tipo_richiesta", "RECENSIONE_SITO");
    formData.set("messaggio", `${rating} Stelle`);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwmTq73CrKn-ZB-qBibz6pW8zASyrNqc3QuzwGGkkrGg6SuZ2TprnMOCRPTg0dWqH-zCg/exec", {
        method: "POST",
        body: formData,
      });
      setShowForm(false);
    } catch {
      alert("Errore di rete.");
    }
  };

  return (
    <section id="recensioni" className="py-32 md:py-40 px-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-20 text-center italic tracking-tighter uppercase"
        >
          Feedback <span className="text-primary drop-shadow-[0_0_30px_rgba(157,78,221,0.6)]">Elite</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowForm(!showForm)}
            className="group text-xs font-black uppercase tracking-[0.25em] border border-primary/40 px-12 py-5 rounded-full hover:bg-primary transition-all duration-500 text-foreground shadow-[0_0_30px_rgba(157,78,221,0.15)] hover:shadow-[0_0_60px_rgba(157,78,221,0.4)]"
          >
            Scrivi una recensione <PenLine className="inline-block w-4 h-4 ml-3 group-hover:rotate-12 transition-transform duration-500" />
          </motion.button>
        </motion.div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="max-w-xl mx-auto mb-20 glass-panel p-12 rounded-[3rem] border-t border-primary/30 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold mb-10 text-center italic uppercase tracking-wide relative z-10">La tua esperienza conta</h3>
            <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
              <input type="text" name="nome" placeholder="Il tuo nome (o nickname)" required className="w-full p-5 rounded-2xl bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-all duration-300" />
              <div className="text-center py-7 glass-panel rounded-2xl">
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-bold">Valutazione</p>
                <div className="flex justify-center gap-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <motion.button key={n} type="button" onClick={() => setRating(n)} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className="transition-colors duration-300">
                      <Star className={`w-8 h-8 ${n <= rating ? "text-warning fill-warning drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" : "text-muted-foreground/30"}`} />
                    </motion.button>
                  ))}
                </div>
              </div>
              <textarea name="messaggio_testo" placeholder="Racconta brevemente il tuo traguardo..." required className="w-full p-5 rounded-2xl h-36 resize-none bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-all duration-300" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary/15 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-500 text-xs hover:shadow-[0_0_40px_rgba(157,78,221,0.4)]"
              >
                Invia Feedback
              </motion.button>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: "easeOut" } }}
              className="glass-panel p-10 rounded-[2rem] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-primary/20"
            >
              <div>
                <div className="flex text-warning mb-5 gap-1.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-3.5 h-3.5 ${j < r.stars ? "fill-warning drop-shadow-[0_0_4px_rgba(255,215,0,0.4)]" : "text-muted-foreground/20"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground/70 italic leading-[1.8] font-light">"{r.text}"</p>
              </div>
              <div className="mt-8 pt-6 border-t border-border/20 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  r.color === "primary" ? "bg-primary/15 text-primary" :
                  r.color === "accent" ? "bg-accent/15 text-accent" :
                  r.color === "warning" ? "bg-warning/15 text-warning" :
                  "bg-foreground/8 text-foreground/80"
                }`}>
                  {r.name[0]}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
