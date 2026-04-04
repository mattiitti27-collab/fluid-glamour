import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Star, PenLine } from "lucide-react";

const reviews = [
  { text: "Mi ha aiutato un sacco con analisi 1, prima ero completamente perso.", name: "Luca R.", stars: 5, color: "primary" },
  { text: "Fisica spiegata finalmente come si deve. Ho iniziato a capire davvero.", name: "Giulia M.", stars: 5, color: "accent" },
  { text: "Bravo in matematica, soprattutto per le superiori.", name: "Marco T.", stars: 4, color: "foreground" },
  { text: "Mio figlio si è sbloccato in chimica e matematica dopo qualche lezione.", name: "Sara B.", stars: 5, color: "warning" },
  { text: "Analisi 1 tosta ma spiegata bene. Ti fa ragionare.", name: "Andrea F.", stars: 5, color: "primary" },
  { text: "Ripetizioni serie, niente tempo perso. Ti aiuta davvero.", name: "Francesco L.", stars: 5, color: "foreground" },
];

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
        method: "POST", body: formData,
      });
      setShowForm(false);
    } catch {
      alert("Errore di rete.");
    }
  };

  return (
    <section id="recensioni" className="py-14 sm:py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 italic tracking-tighter uppercase">
            Feedback <span className="text-primary">Elite</span>
          </h2>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="text-[9px] font-black uppercase tracking-[0.2em] border border-primary/30 px-6 py-2.5 rounded-full active:bg-primary/10 transition-colors text-foreground/80"
          >
            Scrivi una recensione <PenLine className="inline-block w-3 h-3 ml-1.5" />
          </motion.button>
        </motion.div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="max-w-md mx-auto mb-8 glass-panel p-5 sm:p-8 rounded-2xl border-t border-primary/20"
          >
            <h3 className="text-base font-bold mb-5 text-center italic uppercase tracking-wide">La tua esperienza</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="nome" placeholder="Il tuo nome" required className="w-full p-3.5 rounded-xl bg-background/40 border border-border/40 focus:border-primary text-foreground outline-none text-[13px] transition-colors" />
              <div className="text-center py-4 glass-panel rounded-xl">
                <p className="text-[8px] text-muted-foreground/50 mb-2 uppercase tracking-widest font-bold">Valutazione</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" onClick={() => setRating(n)} className="transition-colors">
                      <Star className={`w-6 h-6 ${n <= rating ? "text-warning fill-warning" : "text-muted-foreground/25"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea name="messaggio_testo" placeholder="Il tuo feedback..." required className="w-full p-3.5 rounded-xl h-24 resize-none bg-background/40 border border-border/40 focus:border-primary text-foreground outline-none text-[13px] transition-colors" />
              <motion.button whileTap={{ scale: 0.97 }} type="submit" className="w-full bg-primary/15 border border-primary/40 text-primary active:bg-primary active:text-primary-foreground py-3.5 rounded-xl font-black uppercase tracking-[0.15em] transition-colors text-[11px]">
                Invia Feedback
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Reviews - 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: i * 0.06 }}
              className="glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex text-warning mb-2 gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-2.5 h-2.5 ${j < r.stars ? "fill-warning" : "text-muted-foreground/15"}`} />
                  ))}
                </div>
                <p className="text-[11px] sm:text-[13px] text-muted-foreground/60 italic leading-[1.6] font-light">"{r.text}"</p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/15 flex items-center gap-2">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[9px] font-bold ${
                  r.color === "primary" ? "bg-primary/15 text-primary" :
                  r.color === "accent" ? "bg-accent/15 text-accent" :
                  r.color === "warning" ? "bg-warning/15 text-warning" :
                  "bg-foreground/8 text-foreground/70"
                }`}>
                  {r.name[0]}
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground/50">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
