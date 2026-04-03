import { motion } from "framer-motion";

const ChiSonoSection = () => {
  return (
    <section id="chisono" className="py-20 sm:py-32 px-5 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 35, damping: 18 }}
        className="max-w-5xl mx-auto glass-panel p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] border-primary/10 relative overflow-hidden"
      >
        <div className="absolute -top-16 -right-16 w-60 h-60 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-gradient-to-r from-primary to-primary/20" />
            <span className="text-primary font-bold uppercase tracking-[0.25em] text-[10px]">La Storia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tight leading-[1.1]">
            Dal Tecnico <br />ad <span className="gradient-text">Ingegneria.</span>
          </h2>
          <div className="text-muted-foreground/60 leading-[1.9] font-light text-sm space-y-6">
            <p className="border-l-2 border-primary/30 pl-5">
              "Vengo da un Istituto Tecnico e l'impatto con Ingegneria è stato il momento in cui ho capito cosa volesse dire davvero studiare."
            </p>
            <p>
              Ho dovuto resettare tutto e imparare a ragionare, smettendo di imparare a memoria concetti che non padroneggiavo.
            </p>
            <div className="bg-primary/[0.05] p-5 rounded-xl border border-primary/10">
              <p className="font-semibold text-foreground/80 text-sm italic leading-relaxed">
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
