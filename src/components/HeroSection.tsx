import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const spring = { type: "spring", stiffness: 35, damping: 18 };

const HeroSection = () => {
  return (
    <header className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center pt-16 pb-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...spring, delay: 0.2 }}
        className="mb-6 px-4 py-1.5 border border-primary/30 rounded-full bg-background/30 backdrop-blur-xl text-primary text-[9px] font-black uppercase tracking-[0.3em]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse inline-block mr-2" />
        Tutoring 2.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...spring, delay: 0.4 }}
        className="text-[2.2rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 tracking-[-0.03em] drop-shadow-2xl"
      >
        Metodo, non <br />
        <span className="gradient-text">semplici ripetizioni.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...spring, delay: 0.6 }}
        className="text-xl sm:text-3xl md:text-5xl text-muted-foreground/50 mb-10 transform -rotate-1 font-script"
      >
        "Da studenti per studenti"
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...spring, delay: 0.8 }}
        whileTap={{ scale: 0.96 }}
        href="#reparti"
        className="group relative w-full max-w-xs sm:w-auto px-10 py-5 overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(157,78,221,0.2)] active:shadow-[0_0_20px_rgba(157,78,221,0.3)]"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-purple-500 to-accent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="relative z-10 font-black uppercase tracking-[0.15em] text-primary-foreground text-sm flex items-center justify-center gap-3">
          Esplora il Futuro <ArrowRight className="w-4 h-4 group-active:translate-x-1 transition-transform" />
        </span>
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-muted-foreground/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
