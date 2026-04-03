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
        method: "POST",
        body: formData,
      });
      setShowModal(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      alert("Errore di rete. Riprova o scrivici su WhatsApp.");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact-area" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 italic uppercase tracking-tighter">
            Come vuoi <span className="text-primary">procedere?</span>
          </h2>
          <p className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">Scegli il percorso che preferisci</p>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <button
            onClick={() => setActiveTab("form")}
            className={`glass-panel p-7 rounded-[2rem] text-left transition-all duration-300 border-2 group relative overflow-hidden ${activeTab === "form" ? "border-primary/60" : "border-border hover:border-primary/40"}`}
          >
            <div className="relative z-10 flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(157,78,221,0.3)] group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-primary mb-1">Opzione A</p>
                <h3 className="text-lg font-black uppercase italic tracking-tight mb-1.5">Chiedi Informazioni</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">Compila il form, ti ricontatto su WhatsApp entro <span className="text-foreground font-bold">15 minuti</span>.</p>
              </div>
            </div>
            {activeTab === "form" && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />}
          </button>

          <button
            onClick={() => setActiveTab("calendly")}
            className={`glass-panel p-7 rounded-[2rem] text-left transition-all duration-300 border-2 group relative overflow-hidden ${activeTab === "calendly" ? "border-accent/60" : "border-border hover:border-accent/40"}`}
          >
            <div className="absolute top-4 right-4 bg-accent/20 border border-accent/40 text-accent text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" />Instant
            </div>
            <div className="relative z-10 flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,243,255,0.15)] group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-accent mb-1">Opzione B</p>
                <h3 className="text-lg font-black uppercase italic tracking-tight mb-1.5">Prenota & Paga</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">Scegli giorno, ora e paga subito online. <span className="text-foreground font-bold">Tutto in 2 minuti.</span></p>
              </div>
            </div>
            {activeTab === "calendly" && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />}
          </button>
        </div>

        {/* Form Panel */}
        {activeTab === "form" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-14 rounded-[3rem] relative shadow-[0_20px_100px_rgba(0,0,0,1)] border-t border-primary/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_hsl(270,70%,55%)]" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Send className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-primary">Form Contatto</p>
                <p className="text-[10px] text-muted-foreground font-light">Risposta media: <span className="text-foreground font-bold">15 min</span> su WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="nome" placeholder="Nome completo" required className="w-full p-5 rounded-2xl placeholder-muted-foreground font-medium bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors" />
                <input type="tel" name="telefono" placeholder="Cellulare" required className="w-full p-5 rounded-2xl placeholder-muted-foreground font-medium bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors" />
              </div>
              <div className="relative group">
                <select name="tipo_richiesta" className="w-full p-5 rounded-2xl bg-background/80 appearance-none cursor-pointer font-medium border border-border focus:border-primary text-foreground outline-none transition-colors">
                  <option value="">Seleziona la tua esigenza</option>
                  <option value="Superiori">Richiesta info - Scuole Superiori</option>
                  <option value="Universita">Richiesta info - Università</option>
                  <option value="TestAmmissione">Preparazione Test/Concorsi</option>
                  <option value="Corsi">Corsi di Formazione & Office</option>
                  <option value="Prenotazione">Prenota una lezione di prova</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none group-hover:scale-125 transition-transform" />
              </div>
              <textarea name="messaggio" placeholder="Descrivi brevemente l'argomento..." className="w-full p-5 rounded-2xl h-40 resize-none placeholder-muted-foreground font-medium bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors" />
              <button type="submit" disabled={submitting} className="w-full bg-primary py-6 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all shadow-[0_0_40px_rgba(157,78,221,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)] text-primary-foreground text-sm flex items-center justify-center gap-3 disabled:opacity-50">
                <Send className="w-4 h-4" />
                {submitting ? "INVIO..." : "Invia Richiesta"}
              </button>
            </form>
          </motion.div>
        )}

        {/* Calendly Panel */}
        {activeTab === "calendly" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-[3rem] relative shadow-[0_20px_100px_rgba(0,0,0,1)] border-t border-accent/20 overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_20px_hsl(186,100%,50%)]" />
            <div className="flex items-center gap-3 p-8 pb-0">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <CalendarCheck className="w-3 h-3 text-accent" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-accent">Calendario Live</p>
                <p className="text-[10px] text-muted-foreground font-light">Scegli data e ora · paga subito online · confermato istantaneamente</p>
              </div>
            </div>
            <div className="w-full" style={{ minWidth: 320, height: 700 }}>
              <iframe
                src="https://calendly.com/intini-mattia-rl?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=9D4EDD"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly"
              />
            </div>
            <div className="p-6 pt-0 text-center">
              <p className="text-muted-foreground/50 text-[10px] uppercase tracking-widest mb-3">Problemi con il calendario?</p>
              <a href="https://calendly.com/intini-mattia-rl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] border border-accent/30 text-accent px-6 py-3 rounded-xl hover:bg-accent/10 transition-all">
                <ExternalLink className="w-3 h-3" /> Apri Calendly
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90" onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] max-w-sm md:max-w-md w-full mx-4 text-center border-t border-border/20 shadow-[0_0_100px_rgba(157,78,221,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-success/50 shadow-[0_0_40px_rgba(0,255,163,0.3)] animate-glow-breath">
              <span className="text-5xl">✓</span>
            </div>
            <h3 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">Inviato!</h3>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-light">Richiesta inviata con successo.</p>
            <div className="mb-8 bg-foreground/5 p-4 rounded-xl border border-border">
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse mb-2">Next Step</p>
              <p className="text-muted-foreground text-xs">Ti contatteremo su <strong className="text-success">WhatsApp</strong> a breve.</p>
            </div>
            <button onClick={() => setShowModal(false)} className="w-full bg-foreground text-background py-4 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all shadow-lg transform hover:-translate-y-1">
              Chiudi
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
