import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CalendarCheck, ChevronDown, Zap, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState<"form" | "calendly">("form");
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwmTq73CrKn-ZB-qBibz6pW8zASyrNqc3QuzwGGkkrGg6SuZ2TprnMOCRPTg0dWqH-zCg/exec", {
        method: "POST", body: formData,
      });
      setShowModal(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      alert("Errore di rete. Riprova o scrivici su WhatsApp.");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact-area" className="py-14 sm:py-24 px-4 relative z-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="text-center mb-5 sm:mb-8"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black mb-1.5 italic uppercase tracking-tighter">
            Come vuoi <span className="text-primary">procedere?</span>
          </h2>
          <p className="text-muted-foreground/40 text-[8px] sm:text-[10px] font-bold tracking-[0.12em] uppercase">Scegli il percorso</p>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button
            onClick={() => setActiveTab("form")}
            className={`glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border-2 relative overflow-hidden active:scale-[0.98] ${activeTab === "form" ? "border-primary/40" : "border-transparent"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                <Send className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-sm font-black uppercase italic tracking-tight leading-tight">Chiedi Info</h3>
                <p className="text-[8px] text-muted-foreground/40 font-light mt-0.5">Risposta in 15 min</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("calendly")}
            className={`glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border-2 relative overflow-hidden active:scale-[0.98] ${activeTab === "calendly" ? "border-accent/40" : "border-transparent"}`}
          >
            <div className="absolute top-2 right-2 bg-accent/15 border border-accent/20 text-accent text-[6px] font-black uppercase tracking-widest px-1 py-0.5 rounded-full flex items-center gap-0.5">
              <Zap className="w-1.5 h-1.5" />Fast
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
                <CalendarCheck className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] sm:text-sm font-black uppercase italic tracking-tight leading-tight">Prenota</h3>
                <p className="text-[8px] text-muted-foreground/40 font-light mt-0.5">Tutto in 2 min</p>
              </div>
            </div>
          </button>
        </div>

        {/* Form */}
        {activeTab === "form" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] border-t border-primary/10"
          >
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input type="text" name="nome" placeholder="Nome completo" required className="w-full p-3.5 rounded-xl text-[13px] placeholder-muted-foreground/35 font-medium bg-background/40 border border-border/40 focus:border-primary text-foreground outline-none transition-colors duration-200" />
              <input type="tel" name="telefono" placeholder="Cellulare" required className="w-full p-3.5 rounded-xl text-[13px] placeholder-muted-foreground/35 font-medium bg-background/40 border border-border/40 focus:border-primary text-foreground outline-none transition-colors duration-200" />
              <div className="relative">
                <select name="tipo_richiesta" className="w-full p-3.5 rounded-xl text-[13px] bg-background/50 appearance-none cursor-pointer font-medium border border-border/40 focus:border-primary text-foreground outline-none transition-colors duration-200">
                  <option value="">La tua esigenza</option>
                  <option value="Superiori">Scuole Superiori</option>
                  <option value="Universita">Università</option>
                  <option value="TestAmmissione">Test/Concorsi</option>
                  <option value="Corsi">Formazione & Office</option>
                  <option value="Prenotazione">Lezione di prova</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary/50 pointer-events-none" />
              </div>
              <textarea name="messaggio" placeholder="Descrivi brevemente..." className="w-full p-3.5 rounded-xl h-24 sm:h-28 resize-none text-[13px] placeholder-muted-foreground/35 font-medium bg-background/40 border border-border/40 focus:border-primary text-foreground outline-none transition-colors duration-200" />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={submitting}
                className="w-full bg-primary py-3.5 sm:py-4 rounded-xl font-black uppercase tracking-[0.15em] text-primary-foreground text-[11px] flex items-center justify-center gap-2 disabled:opacity-50 active:bg-primary/80 transition-colors duration-200 shadow-[0_0_20px_rgba(157,78,221,0.2)]"
              >
                <Send className="w-3 h-3" />
                {submitting ? "INVIO..." : "Invia Richiesta"}
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Calendly */}
        {activeTab === "calendly" && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-2xl sm:rounded-[2rem] border-t border-accent/10 overflow-hidden"
          >
            <div className="w-full" style={{ minWidth: 280, height: 500 }}>
              <iframe
                src="https://calendly.com/intini-mattia-rl?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=9D4EDD"
                width="100%" height="100%" frameBorder="0" title="Calendly"
              />
            </div>
            <div className="p-3 text-center">
              <a href="https://calendly.com/intini-mattia-rl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.1em] border border-accent/20 text-accent px-4 py-2 rounded-lg active:bg-accent/10 transition-colors">
                <ExternalLink className="w-2.5 h-2.5" /> Apri Calendly
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 px-5" onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="glass-panel p-6 rounded-2xl max-w-xs w-full text-center border-t border-border/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-success/25 animate-glow-breath">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">Inviato!</h3>
            <p className="text-muted-foreground/50 mb-4 text-[13px] font-light">Richiesta inviata con successo.</p>
            <div className="mb-4 bg-foreground/5 p-3 rounded-lg border border-border/20">
              <p className="text-muted-foreground/50 text-[11px]">Ti contatteremo su <strong className="text-success">WhatsApp</strong> a breve.</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowModal(false)}
              className="w-full bg-foreground text-background py-3 rounded-xl font-black uppercase tracking-[0.12em] text-[11px] active:bg-primary active:text-primary-foreground transition-colors"
            >
              Chiudi
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
