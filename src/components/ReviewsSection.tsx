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
    <section id="recensioni" className="py-24 px-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 text-center italic tracking-tighter uppercase"
        >
          Feedback <span className="text-primary drop-shadow-[0_0_20px_rgba(157,78,221,0.8)]">Elite</span>
        </motion.h2>

        <div className="text-center mb-16">
          <button onClick={() => setShowForm(!showForm)} className="group text-xs font-black uppercase tracking-[0.25em] border border-primary/50 px-10 py-5 rounded-full hover:bg-primary transition-all text-foreground shadow-[0_0_20px_rgba(157,78,221,0.3)] hover:shadow-[0_0_50px_rgba(157,78,221,0.6)]">
            Scrivi una recensione <PenLine className="inline-block w-4 h-4 ml-3 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {showForm && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto mb-16 glass-panel p-10 rounded-[3rem] border-t border-primary/40 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 text-center italic uppercase tracking-wide">La tua esperienza conta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="nome" placeholder="Il tuo nome (o nickname)" required className="w-full p-5 rounded-2xl bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors" />
              <div className="text-center py-6 glass-panel rounded-2xl">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest font-bold">Valutazione</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" onClick={() => setRating(n)} className="transition-transform hover:scale-125">
                      <Star className={`w-8 h-8 ${n <= rating ? "text-warning fill-warning" : "text-muted-foreground"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea name="messaggio_testo" placeholder="Racconta brevemente il tuo traguardo..." required className="w-full p-5 rounded-2xl h-32 resize-none bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors" />
              <button type="submit" className="w-full bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all text-xs hover:shadow-[0_0_30px_rgba(157,78,221,0.6)]">
                Invia Feedback
              </button>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] flex flex-col justify-between hover:border-primary/30 transition-all"
            >
              <div>
                <div className="flex text-warning mb-4 text-xs gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-3.5 h-3.5 ${j < r.stars ? "fill-warning" : ""}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground/80 italic leading-relaxed font-light">"{r.text}"</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  r.color === "primary" ? "bg-primary/20 text-primary" :
                  r.color === "accent" ? "bg-accent/20 text-accent" :
                  r.color === "warning" ? "bg-warning/20 text-warning" :
                  "bg-foreground/10 text-foreground"
                }`}>
                  {r.name[0]}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
