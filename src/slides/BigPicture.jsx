import { motion } from "framer-motion";

const steps = [
  { label: "Input", icon: "⌨️", desc: "Keyboard, mouse,\nmicrophone" },
  { label: "Processing", icon: "⚙️", desc: "CPU & RAM\ncrunch data" },
  { label: "Output", icon: "🖥️", desc: "Screen, speaker,\nprinter" },
];

export default function BigPicture() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">The Big Picture</h2>
      <p className="slide-subtitle">Every computer follows this simple cycle</p>

      <div className="flow-diagram">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flow-step"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.25, duration: 0.5 }}
          >
            <span className="flow-icon">{step.icon}</span>
            <h3>{step.label}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
        {/* Arrows between steps */}
        <motion.span
          className="flow-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          →
        </motion.span>
        <motion.span
          className="flow-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.3 }}
        >
          →
        </motion.span>
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        🤔 Everything a computer does is just Input → Process → Output
      </motion.p>
    </motion.div>
  );
}
