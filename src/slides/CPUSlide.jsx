import { motion } from "framer-motion";

const stages = [
  { name: "Fetch", desc: "Get instruction from RAM", emoji: "📥" },
  { name: "Decode", desc: "Translate it into signals", emoji: "🔍" },
  { name: "Execute", desc: "ALU does math / logic", emoji: "⚡" },
  { name: "Store", desc: "Write result back", emoji: "💾" },
];

const aluOps = ["➕ ADD", "➖ SUB", "✖️ MUL", "➗ DIV", "🔀 AND", "🔄 OR", "❌ NOT"];

export default function CPUSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">The CPU — The Brain</h2>
      <p className="slide-subtitle">Central Processing Unit</p>

      <div className="cpu-content">
        {/* Fetch-Decode-Execute cycle */}
        <motion.div
          className="cpu-cycle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="section-label">The Instruction Cycle</h3>
          <div className="cycle-steps">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.name}
                className="cycle-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
              >
                <span className="step-emoji">{stage.emoji}</span>
                <strong>{stage.name}</strong>
                <span className="step-desc">{stage.desc}</span>
              </motion.div>
            ))}
          </div>
          {/* Loop arrow */}
          <motion.div
            className="cycle-loop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            ↻ Repeated billions of times per second
          </motion.div>
        </motion.div>

        {/* ALU section */}
        <motion.div
          className="alu-section"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="section-label">ALU — Arithmetic Logic Unit</h3>
          <div className="alu-grid">
            {aluOps.slice(0, 7).map((op, i) => (
              <motion.span
                key={op}
                className="alu-op"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.07, duration: 0.3 }}
              >
                {op}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        ⚡ A 4 GHz CPU executes ~4 <strong>billion</strong> cycles per second
      </motion.p>
    </motion.div>
  );
}
