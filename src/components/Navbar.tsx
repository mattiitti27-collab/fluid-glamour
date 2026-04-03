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
    <nav className="fixed w-full z-50 py-3 bg-background/80 backdrop-blur-2xl border-b border-border/30">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <a href="#" className="text-xl font-black tracking-tighter flex items-start">
          Ripetiamo<span className="text-primary">.</span>
          <sup className="text-[7px] text-muted-foreground/50 mt-0.5 ml-0.5">©</sup>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-10 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors duration-500 relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <a href="#contact-area" className="hidden lg:block bg-foreground text-background px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-500">
            Contattaci
          </a>
          <a href="#contact-area" className="hidden lg:block bg-accent/10 border border-accent/30 text-accent px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-all duration-500">
            <CalendarCheck className="inline-block w-3 h-3 mr-1" />Prenota
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(true)} 
            className="lg:hidden text-foreground p-2 active:scale-90 transition-transform"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - fullscreen luxury */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-[100] lg:hidden"
          >
            <div className="flex justify-between items-center px-5 py-3">
              <span className="text-xl font-black tracking-tighter">
                Ripetiamo<span className="text-primary">.</span>
              </span>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="text-foreground p-2 active:scale-90 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center h-[calc(100%-60px)] gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-black tracking-tight text-foreground/80 active:text-primary transition-colors uppercase"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex gap-3 mt-4 w-full max-w-xs"
              >
                <a 
                  href="#contact-area" 
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 bg-primary text-primary-foreground py-4 rounded-2xl text-center text-xs font-black uppercase tracking-[0.15em]"
                >
                  Contattaci
                </a>
                <a 
                  href="#contact-area" 
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 bg-accent/10 border border-accent/30 text-accent py-4 rounded-2xl text-center text-xs font-black uppercase tracking-[0.15em] flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />Prenota
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
