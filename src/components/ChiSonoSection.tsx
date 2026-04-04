import { motion } from "framer-motion";

const ChiSonoSection = () => {
  return (
    <section id="chisono" className="py-14 sm:py-24 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
        className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-[2rem] border-primary/10 relative overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-6 bg-gradient-to-r from-primary to-primary/20" />
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[9px]">La Storia</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-black mb-5 italic uppercase tracking-tight leading-[1.1]">
            Dal Tecnico <br />ad <span className="gradient-text">Ingegneria.</span>
          </h2>
          <div className="text-muted-foreground/55 leading-[1.8] font-light text-[13px] space-y-4">
            <p className="border-l-2 border-primary/25 pl-4">
              "Vengo da un Istituto Tecnico e l'impatto con Ingegneria è stato il momento in cui ho capito cosa volesse dire davvero studiare."
            </p>
            <p>
              Ho dovuto resettare tutto e imparare a ragionare, smettendo di imparare a memoria concetti che non padroneggiavo.
            </p>
            <div className="bg-primary/[0.04] p-4 rounded-xl border border-primary/10">
              <p className="font-semibold text-foreground/75 text-[13px] italic leading-relaxed">
                ❝ È in quella sfida che ho costruito il metodo che uso ancora oggi.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChiSonoSection;
