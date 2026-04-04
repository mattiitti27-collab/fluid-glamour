import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#metodo", label: "Metodo" },
    { href: "#chisono", label: "Chi Sono" },
    { href: "#reparti", label: "Reparti" },
    { href: "#contact-area", label: "Contatti" },
  ];

  return (
    <nav className="fixed w-full z-50 py-2.5 bg-background/80 backdrop-blur-2xl border-b border-border/20">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-lg font-black tracking-tighter flex items-start">
          Ripetiamo<span className="text-primary">.</span>
          <sup className="text-[6px] text-muted-foreground/40 mt-0.5 ml-0.5">©</sup>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-8 text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors duration-300 relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a href="#contact-area" className="hidden lg:block bg-foreground text-background px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.12em] hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            Contattaci
          </a>
          <a href="#contact-area" className="hidden lg:block bg-accent/10 border border-accent/25 text-accent px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.12em] hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
            <CalendarCheck className="inline-block w-2.5 h-2.5 mr-1" />Prenota
          </a>
          
          <button 
            onClick={() => setMenuOpen(true)} 
            className="lg:hidden text-foreground p-1.5 active:scale-90 transition-transform"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-[100] lg:hidden"
          >
            <div className="flex justify-between items-center px-4 py-2.5">
              <span className="text-lg font-black tracking-tighter">
                Ripetiamo<span className="text-primary">.</span>
              </span>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="text-foreground p-1.5 active:scale-90 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center h-[calc(100%-50px)] gap-5 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.3 }}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-black tracking-tight text-foreground/80 active:text-primary transition-colors uppercase"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex gap-2 mt-3 w-full max-w-xs"
              >
                <a 
                  href="#contact-area" 
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-xl text-center text-[10px] font-black uppercase tracking-[0.12em]"
                >
                  Contattaci
                </a>
                <a 
                  href="#contact-area" 
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 bg-accent/10 border border-accent/25 text-accent py-3.5 rounded-xl text-center text-[10px] font-black uppercase tracking-[0.12em] flex items-center justify-center gap-1.5"
                >
                  <CalendarCheck className="w-3 h-3" />Prenota
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
