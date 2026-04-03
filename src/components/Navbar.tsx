import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#metodo", label: "Metodo" },
    { href: "#chisono", label: "Chi Sono" },
    { href: "#reparti", label: "Reparti" },
    { href: "#contact-area", label: "Contatti" },
  ];

  return (
    <nav className="fixed w-full z-50 py-4 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter flex items-start">
          Ripetiamo<span className="text-primary">.</span>
          <sup className="text-[9px] text-muted-foreground mt-1 ml-0.5">©</sup>
        </a>

        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact-area" className="hidden md:block bg-foreground text-background px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(157,78,221,0.5)] transform hover:-translate-y-0.5">
            Contattaci
          </a>
          <a href="#contact-area" className="hidden md:block bg-accent/10 border border-accent/40 text-accent px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all shadow-[0_0_15px_rgba(0,243,255,0.15)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transform hover:-translate-y-0.5">
            <CalendarCheck className="inline-block w-3 h-3 mr-1.5" />Prenota
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground text-2xl p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-foreground text-4xl p-4 hover:rotate-90 transition-all duration-500">
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col gap-8 text-center w-full px-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-2xl font-black tracking-[0.2em] text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300 uppercase">
              {link.label}
            </a>
          ))}
          <a href="#contact-area" onClick={() => setMenuOpen(false)} className="text-2xl font-black tracking-[0.2em] text-accent/60 hover:text-accent hover:scale-110 transition-all duration-300 flex items-center justify-center gap-3 uppercase">
            <CalendarCheck className="w-5 h-5" />Prenota
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
