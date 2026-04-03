import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transition = { type: "spring", stiffness: 40, damping: 20 };

const HeroSection = () => {
  return (
    <header className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 text-center pt-24 pb-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, delay: 0.3 }}
        className="mb-10 px-6 py-2.5 border border-primary/40 rounded-full bg-background/40 backdrop-blur-xl text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.35em] shadow-[0_0_40px_rgba(157,78,221,0.15)]"
      >
        <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block mr-2.5" />
        Tutoring 2.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, delay: 0.5 }}
        className="text-[2.6rem] md:text-[7rem] lg:text-[8rem] font-black mb-8 tracking-[-0.04em] leading-[1.05] drop-shadow-2xl"
      >
        Metodo, non <br />
        <span className="gradient-text">semplici ripetizioni.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, delay: 0.7 }}
        className="text-2xl md:text-5xl lg:text-6xl text-muted-foreground/60 mb-16 transform -rotate-2 font-script"
      >
        "Da studenti per studenti"
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ ...transition, delay: 0.9 }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        href="#reparti"
        className="group relative px-12 py-6 overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(157,78,221,0.2)] transition-shadow duration-700 hover:shadow-[0_0_80px_rgba(157,78,221,0.4)]"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-purple-500 to-accent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="relative z-10 font-black uppercase tracking-[0.2em] text-primary-foreground text-sm md:text-base flex items-center gap-4">
          Esplora il Futuro <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
        </span>
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
