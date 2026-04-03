import { useState } from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[55] flex flex-col items-end gap-3 safe-bottom">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="https://wa.me/393345415707"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
              href="mailto:intini.mattia.rl@gmail.com"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(157,78,221,0.5)] hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5 text-primary-foreground" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 ${open ? "bg-muted rotate-45" : "bg-[#25D366]"}`}
      >
        {open ? <X className="w-6 h-6 text-foreground" /> : <MessageCircle className="w-7 h-7 text-white" />}
      </motion.button>
    </div>
  );
};

export default FloatingButton;
