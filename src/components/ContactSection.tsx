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
    <section id="contact-area" className="py-20 sm:py-28 px-5 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 18 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 italic uppercase tracking-tighter">
            Come vuoi <span className="text-primary">procedere?</span>
          </h2>
          <p className="text-muted-foreground/50 text-[9px] sm:text-xs font-bold tracking-[0.15em] uppercase">Scegli il percorso che preferisci</p>
        </motion.div>

        {/* Tabs - stacked on mobile */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
          <button
            onClick={() => setActiveTab("form")}
            className={`glass-panel p-5 sm:p-6 rounded-[1.2rem] sm:rounded-[1.8rem] text-left transition-all duration-500 border-2 group relative overflow-hidden active:scale-[0.98] ${activeTab === "form" ? "border-primary/50" : "border-transparent"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary mb-0.5">Opzione A</p>
                <h3 className="text-sm sm:text-base font-black uppercase italic tracking-tight leading-tight">Chiedi Info</h3>
                <p className="text-[10px] text-muted-foreground/50 font-light mt-0.5 hidden sm:block">Risposta su WhatsApp in <span className="text-foreground/80 font-bold">15 min</span></p>
              </div>
            </div>
            {activeTab === "form" && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />}
          </button>

          <button
            onClick={() => setActiveTab("calendly")}
            className={`glass-panel p-5 sm:p-6 rounded-[1.2rem] sm:rounded-[1.8rem] text-left transition-all duration-500 border-2 group relative overflow-hidden active:scale-[0.98] ${activeTab === "calendly" ? "border-accent/50" : "border-transparent"}`}
          >
            <div className="absolute top-3 right-3 bg-accent/15 border border-accent/25 text-accent text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
              <Zap className="w-2 h-2" />Fast
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
                <CalendarCheck className="w-4 h-4 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-accent mb-0.5">Opzione B</p>
                <h3 className="text-sm sm:text-base font-black uppercase italic tracking-tight leading-tight">Prenota & Paga</h3>
                <p className="text-[10px] text-muted-foreground/50 font-light mt-0.5 hidden sm:block">Tutto in <span className="text-foreground/80 font-bold">2 minuti</span></p>
              </div>
            </div>
            {activeTab === "calendly" && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />}
          </button>
        </div>

        {/* Form Panel */}
        {activeTab === "form" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 sm:p-10 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] relative border-t border-primary/15"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                <Send className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] font-black text-primary">Form Contatto</p>
                <p className="text-[9px] text-muted-foreground/40 font-light">Risposta media: <span className="text-foreground/70 font-bold">15 min</span></p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input type="text" name="nome" placeholder="Nome completo" required className="w-full p-4 rounded-xl text-sm placeholder-muted-foreground/40 font-medium bg-background/40 border border-border/50 focus:border-primary text-foreground outline-none transition-all duration-300" />
              <input type="tel" name="telefono" placeholder="Cellulare" required className="w-full p-4 rounded-xl text-sm placeholder-muted-foreground/40 font-medium bg-background/40 border border-border/50 focus:border-primary text-foreground outline-none transition-all duration-300" />
              <div className="relative">
                <select name="tipo_richiesta" className="w-full p-4 rounded-xl text-sm bg-background/60 appearance-none cursor-pointer font-medium border border-border/50 focus:border-primary text-foreground outline-none transition-all duration-300">
                  <option value="">Seleziona la tua esigenza</option>
                  <option value="Superiori">Scuole Superiori</option>
                  <option value="Universita">Università</option>
                  <option value="TestAmmissione">Test/Concorsi</option>
                  <option value="Corsi">Formazione & Office</option>
                  <option value="Prenotazione">Lezione di prova</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/60 pointer-events-none" />
              </div>
              <textarea name="messaggio" placeholder="Descrivi brevemente..." className="w-full p-4 rounded-xl h-28 sm:h-36 resize-none text-sm placeholder-muted-foreground/40 font-medium bg-background/40 border border-border/50 focus:border-primary text-foreground outline-none transition-all duration-300" />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={submitting}
                className="w-full bg-primary py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-primary-foreground text-xs flex items-center justify-center gap-2 disabled:opacity-50 active:bg-primary/80 transition-all duration-300 shadow-[0_0_30px_rgba(157,78,221,0.3)]"
              >
                <Send className="w-3.5 h-3.5" />
                {submitting ? "INVIO..." : "Invia Richiesta"}
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* Calendly Panel */}
        {activeTab === "calendly" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-[1.5rem] sm:rounded-[2.5rem] relative border-t border-accent/15 overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="flex items-center gap-3 p-6 sm:p-8 pb-0">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center">
                <CalendarCheck className="w-3 h-3 text-accent" />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] font-black text-accent">Calendario Live</p>
                <p className="text-[9px] text-muted-foreground/40 font-light">Scegli data · paga online · conferma istantanea</p>
              </div>
            </div>
            <div className="w-full" style={{ minWidth: 300, height: 600 }}>
              <iframe
                src="https://calendly.com/intini-mattia-rl?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=9D4EDD"
                width="100%" height="100%" frameBorder="0" title="Calendly"
              />
            </div>
            <div className="p-5 pt-0 text-center">
              <a href="https://calendly.com/intini-mattia-rl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] border border-accent/20 text-accent px-5 py-2.5 rounded-xl active:bg-accent/10 transition-all">
                <ExternalLink className="w-3 h-3" /> Apri Calendly
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 px-6" onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="glass-panel p-8 rounded-[2rem] max-w-sm w-full text-center border-t border-border/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-success/30 animate-glow-breath">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-3 tracking-tighter">Inviato!</h3>
            <p className="text-muted-foreground/60 mb-6 text-sm font-light">Richiesta inviata con successo.</p>
            <div className="mb-6 bg-foreground/5 p-4 rounded-xl border border-border/30">
              <p className="text-primary text-[9px] font-bold uppercase tracking-[0.15em] animate-pulse mb-1">Next Step</p>
              <p className="text-muted-foreground/60 text-xs">Ti contatteremo su <strong className="text-success">WhatsApp</strong> a breve.</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowModal(false)}
              className="w-full bg-foreground text-background py-3.5 rounded-xl font-black uppercase tracking-[0.15em] text-xs active:bg-primary active:text-primary-foreground transition-all"
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
