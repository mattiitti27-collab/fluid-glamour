import { memo } from "react";
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

const ReviewsSection = memo(() => {
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
    <section id="recensioni" className="py-20 sm:py-32 px-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-10 sm:mb-16 text-center italic tracking-tighter uppercase"
        >
          Feedback <span className="text-primary drop-shadow-[0_0_20px_rgba(157,78,221,0.5)]">Elite</span>
        </motion.h2>

        <div className="text-center mb-10 sm:mb-16">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className="group text-[10px] font-black uppercase tracking-[0.2em] border border-primary/30 px-8 py-4 rounded-full active:bg-primary transition-all duration-500 text-foreground shadow-[0_0_20px_rgba(157,78,221,0.1)]"
          >
            Scrivi una recensione <PenLine className="inline-block w-3.5 h-3.5 ml-2" />
          </motion.button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="max-w-md mx-auto mb-12 glass-panel p-8 rounded-[2rem] border-t border-primary/20 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/8 rounded-full blur-[60px] pointer-events-none" />
            <h3 className="text-lg font-bold mb-6 text-center italic uppercase tracking-wide relative z-10">La tua esperienza conta</h3>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <input type="text" name="nome" placeholder="Il tuo nome" required className="w-full p-4 rounded-xl text-sm bg-background/40 border border-border/50 focus:border-primary text-foreground outline-none transition-all" />
              <div className="text-center py-4 glass-panel rounded-xl">
                <p className="text-[9px] text-muted-foreground/50 mb-3 uppercase tracking-widest font-bold">Valutazione</p>
                <div className="flex justify-center gap-2.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" onClick={() => setRating(n)} className="active:scale-125 transition-transform">
                      <Star className={`w-7 h-7 ${n <= rating ? "text-warning fill-warning drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]" : "text-muted-foreground/20"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea name="messaggio_testo" placeholder="Racconta il tuo traguardo..." required className="w-full p-4 rounded-xl h-28 resize-none text-sm bg-background/40 border border-border/50 focus:border-primary text-foreground outline-none transition-all" />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-primary/15 border border-primary/40 text-primary active:bg-primary active:text-primary-foreground py-4 rounded-xl font-black uppercase tracking-[0.15em] transition-all text-xs"
              >
                Invia Feedback
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Reviews - horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 50, damping: 18 }}
              className="glass-panel p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-between min-w-[280px] sm:min-w-0 snap-center flex-shrink-0 sm:flex-shrink"
            >
              <div>
                <div className="flex text-warning mb-3 gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-3 h-3 ${j < r.stars ? "fill-warning" : "text-muted-foreground/15"}`} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground/60 italic leading-[1.7] font-light">"{r.text}"</p>
              </div>
              <div className="mt-5 pt-4 border-t border-border/15 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  r.color === "primary" ? "bg-primary/12 text-primary" :
                  r.color === "accent" ? "bg-accent/12 text-accent" :
                  r.color === "warning" ? "bg-warning/12 text-warning" :
                  "bg-foreground/6 text-foreground/70"
                }`}>
                  {r.name[0]}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground/40">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ReviewsSection.displayName = "ReviewsSection";
export default ReviewsSection;
