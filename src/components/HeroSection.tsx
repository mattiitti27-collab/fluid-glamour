import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-6 text-center pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 px-5 py-2 border border-primary/50 rounded-full bg-background/60 backdrop-blur-md text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(157,78,221,0.2)]"
      >
        <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block mr-2" />
        Tutoring 2.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-[2.8rem] md:text-8xl font-black mb-6 tracking-tight leading-[1.1] drop-shadow-2xl"
      >
        Metodo, non <br />
        <span className="gradient-text">semplici ripetizioni.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-3xl md:text-6xl text-muted-foreground mb-12 transform -rotate-2 font-script"
      >
        "Da studenti per studenti"
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        href="#reparti"
        className="group relative px-10 py-5 overflow-hidden rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(157,78,221,0.3)]"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-purple-600 to-accent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 font-black uppercase tracking-[0.15em] text-primary-foreground text-sm md:text-lg flex items-center gap-4">
          Esplora il Futuro <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </span>
      </motion.a>
    </header>
  );
};

export default HeroSection;
