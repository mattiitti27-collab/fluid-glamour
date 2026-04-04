import { Phone, CalendarCheck, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative z-10 border-t border-border/15 bg-background/95 safe-bottom">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 mb-6 sm:mb-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg font-black tracking-tighter mb-1.5">
              Ripetiamo<span className="text-primary">.</span>
            </h3>
            <p className="text-[10px] text-muted-foreground/40 font-light leading-relaxed italic">
              Da studenti per studenti — chi ha appena superato quell'esame sa esattamente come aiutarti.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-3">Contatti</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-primary flex-shrink-0" />
                <a href="https://wa.me/393345415707" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted-foreground/60 active:text-foreground transition-colors">
                  +39 334 541 5707
                </a>
              </li>
              <li className="flex items-center gap-2">
                <CalendarCheck className="w-3 h-3 text-accent flex-shrink-0" />
                <a href="https://calendly.com/intini-mattia-rl" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted-foreground/60 active:text-foreground transition-colors">
                  Prenota su Calendly
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-muted-foreground/30 flex-shrink-0" />
                <span className="text-[11px] text-muted-foreground/50">Torino, Italia</span>
              </li>
            </ul>
          </div>

          {/* Dati Legali */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mb-3">Dati Legali</h4>
            <div className="glass-panel p-3 rounded-lg space-y-2">
              <div>
                <p className="text-[7px] text-muted-foreground/25 uppercase tracking-widest mb-0.5">Titolare</p>
                <p className="text-[11px] font-medium">Mattia Intini</p>
              </div>
              <div className="border-t border-border/15 pt-1.5">
                <p className="text-[7px] text-muted-foreground/25 uppercase tracking-widest mb-0.5">Qualifica</p>
                <p className="text-[11px] font-medium">Libero Professionista</p>
              </div>
              <div className="border-t border-border/15 pt-1.5">
                <p className="text-[7px] text-muted-foreground/25 uppercase tracking-widest mb-0.5">P.IVA</p>
                <p className="text-[11px] font-mono font-medium tracking-wider">13419790012</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 pt-4 text-center">
          <p className="text-[7px] sm:text-[8px] tracking-[0.3em] uppercase font-black italic text-muted-foreground/20">
            RIPETIAMO ELITE TUTORING <span className="text-primary/30 mx-1">•</span> © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
