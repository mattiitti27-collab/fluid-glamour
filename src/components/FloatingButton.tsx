import { useState } from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[55] flex flex-col items-end gap-2.5 safe-bottom">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="https://wa.me/393345415707"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)] active:scale-90 transition-transform"
            >
              <MessageCircle className="w-4.5 h-4.5 text-white" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
              href="mailto:intini.mattia.rl@gmail.com"
              className="w-11 h-11 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(157,78,221,0.4)] active:scale-90 transition-transform"
            >
              <Mail className="w-4.5 h-4.5 text-primary-foreground" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className={`w-13 h-13 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all duration-300 ${open ? "bg-muted w-11 h-11" : "bg-[#25D366] w-13 h-13"}`}
        style={{ width: open ? 44 : 52, height: open ? 44 : 52 }}
      >
        {open ? <X className="w-5 h-5 text-foreground" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </motion.button>
    </div>
  );
};

export default FloatingButton;
