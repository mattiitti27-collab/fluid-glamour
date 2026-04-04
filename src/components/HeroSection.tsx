import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const spring = { type: "spring", stiffness: 50, damping: 22 };

const HeroSection = () => {
  return (
    <header className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-5 text-center pt-14 pb-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.1 }}
        className="mb-4 px-3.5 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary text-[8px] font-black uppercase tracking-[0.3em]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse inline-block mr-1.5" />
        Tutoring 2.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.25 }}
        className="text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-[-0.04em]"
      >
        Metodo, non <br />
        <span className="gradient-text">semplici ripetizioni.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...spring, delay: 0.45 }}
        className="text-lg sm:text-2xl text-muted-foreground/40 mb-8 font-script"
      >
        "Da studenti per studenti"
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.6 }}
        whileTap={{ scale: 0.96 }}
        href="#reparti"
        className="group relative w-full max-w-[280px] px-8 py-4 overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(157,78,221,0.15)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="relative z-10 font-black uppercase tracking-[0.12em] text-primary-foreground text-[11px] flex items-center justify-center gap-2">
          Esplora i Reparti <ArrowDown className="w-3.5 h-3.5 group-active:translate-y-0.5 transition-transform" />
        </span>
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-muted-foreground/15 flex items-start justify-center pt-1"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-muted-foreground/25" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
