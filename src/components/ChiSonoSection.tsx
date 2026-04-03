import { motion } from "framer-motion";

const ChiSonoSection = () => {
  return (
    <section id="chisono" className="py-32 md:py-40 px-5 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 35, damping: 18 }}
        className="max-w-5xl mx-auto glass-panel p-12 md:p-20 rounded-[3rem] border-primary/15 relative overflow-hidden group hover:border-primary/25 transition-all duration-700 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
      >
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-1000" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-primary/30" />
            <span className="text-primary font-bold uppercase tracking-[0.25em] text-[11px]">La Storia</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-6xl lg:text-7xl font-black mb-10 italic uppercase tracking-tight leading-[1.05]"
          >
            Dal Tecnico <br />ad <span className="gradient-text">Ingegneria.</span>
          </motion.h2>
          <div className="text-muted-foreground/70 leading-[1.8] font-light text-sm md:text-lg space-y-8">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="border-l-2 border-primary/40 pl-6"
            >
              "Vengo da un Istituto Tecnico e l'impatto con Ingegneria è stato il momento in cui ho capito cosa volesse dire davvero studiare."
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Ho dovuto resettare tutto e imparare a ragionare, smettendo di imparare a memoria concetti che non padroneggiavo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="bg-primary/[0.06] p-6 rounded-2xl border border-primary/15"
            >
              <p className="font-semibold text-foreground/90 text-sm md:text-base italic leading-relaxed">
                ❝ È in quella sfida che ho costruito il metodo che uso ancora oggi.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChiSonoSection;
