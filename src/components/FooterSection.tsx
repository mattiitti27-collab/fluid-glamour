import { Phone, CalendarCheck, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative z-10 border-t border-border/20 bg-background/95 safe-bottom">
      <div className="max-w-7xl mx-auto px-5 py-12 sm:py-20">
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-3 sm:gap-12 mb-10 sm:mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black tracking-tighter mb-3">
              Ripetiamo<span className="text-primary">.</span>
            </h3>
            <p className="text-xs text-muted-foreground/60 font-light leading-relaxed mb-2">
              Elite Tutoring & Metodo.
            </p>
            <p className="text-[10px] text-muted-foreground/40 font-light leading-relaxed italic">
              Da studenti per studenti — perché chi ha appena superato quell'esame sa esattamente come aiutarti.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/393345415707" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground/70 active:text-foreground transition-colors">
                    +39 334 541 5707
                  </a>
                  <p className="text-[9px] text-muted-foreground/30 mt-0.5">WhatsApp (risposta rapida)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CalendarCheck className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                <a href="https://calendly.com/intini-mattia-rl" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground/70 active:text-foreground transition-colors">
                  Prenota su Calendly
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-muted-foreground/60">Torino, Italia</span>
              </li>
            </ul>
          </div>

          {/* Dati Legali */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">Dati Legali</h4>
            <div className="glass-panel p-5 rounded-xl space-y-3">
              <div>
                <p className="text-[8px] text-muted-foreground/30 uppercase tracking-widest mb-0.5">Titolare</p>
                <p className="text-xs font-medium">Mattia Intini</p>
              </div>
              <div className="border-t border-border/20 pt-2.5">
                <p className="text-[8px] text-muted-foreground/30 uppercase tracking-widest mb-0.5">Qualifica</p>
                <p className="text-xs font-medium">Libero Professionista</p>
              </div>
              <div className="border-t border-border/20 pt-2.5">
                <p className="text-[8px] text-muted-foreground/30 uppercase tracking-widest mb-0.5">P.IVA</p>
                <p className="text-xs font-mono font-medium tracking-wider">13419790012</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/10 pt-6 text-center">
          <p className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.5em] uppercase font-black italic text-muted-foreground/25">
            RIPETIAMO ELITE TUTORING <span className="text-primary/40 mx-1.5">•</span> © 2026 <span className="text-primary/40 mx-1.5">•</span> ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
