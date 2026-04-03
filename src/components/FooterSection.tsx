import { Phone, CalendarCheck, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative z-10 border-t border-border/30 bg-background/95 backdrop-blur-md safe-bottom">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black tracking-tighter mb-4">
              Ripetiamo<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
              Elite Tutoring & Metodo.
            </p>
            <p className="text-xs text-muted-foreground/60 font-light leading-relaxed italic">
              Da studenti per studenti — perché chi ha appena superato quell'esame sa esattamente come aiutarti.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/393345415707" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +39 334 541 5707
                  </a>
                  <p className="text-[10px] text-muted-foreground/50 mt-0.5">WhatsApp (risposta rapida)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CalendarCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="https://calendly.com/intini-mattia-rl" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Prenota su Calendly
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Torino, Italia</span>
              </li>
            </ul>
          </div>

          {/* Dati Legali */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">Dati Legali</h4>
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div>
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-0.5">Titolare</p>
                <p className="text-sm font-medium">Mattia Intini</p>
              </div>
              <div className="border-t border-border/30 pt-3">
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-0.5">Qualifica</p>
                <p className="text-sm font-medium">Libero Professionista</p>
              </div>
              <div className="border-t border-border/30 pt-3">
                <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-0.5">P.IVA</p>
                <p className="text-sm font-mono font-medium tracking-wider">13419790012</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase font-black italic text-muted-foreground/40">
            RIPETIAMO ELITE TUTORING <span className="text-primary animate-pulse mx-2">•</span> © 2026 <span className="text-primary animate-pulse mx-2">•</span> ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
