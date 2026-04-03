import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-border/50 p-5 z-[60] flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_-10px_60px_rgba(0,0,0,0.8)] safe-bottom"
        >
          <div className="flex items-center gap-4">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-xs md:text-sm text-muted-foreground font-light max-w-2xl">
              Utilizziamo i cookie per migliorare la tua esperienza e ottimizzare il servizio. Continuando a navigare sul sito, accetti il nostro utilizzo dei cookie.
            </p>
          </div>
          <button onClick={accept} className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all shadow-[0_0_25px_rgba(157,78,221,0.6)]">
            Accetto
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
