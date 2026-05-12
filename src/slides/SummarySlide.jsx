import { motion } from "framer-motion";

const timeline = [
  { emoji: "🏖️", label: "Sand" },
  { emoji: "🔬", label: "Silicon" },
  { emoji: "🕹️", label: "Transistors" },
  { emoji: "🚪", label: "Logic Gates" },
  { emoji: "🧠", label: "CPU" },
  { emoji: "💾", label: "Memory" },
  { emoji: "🖥️", label: "Computer!" },
];

export default function SummarySlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Putting It All Together</h2>
      <p className="slide-subtitle">
        From sand to software — the full journey
      </p>

      <div className="timeline">
        {timeline.map((step, i) => (
          <motion.div
            key={step.label}
            className="timeline-step"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <div className="timeline-dot" />
            <span className="timeline-emoji">{step.emoji}</span>
            <span className="timeline-label">{step.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="summary-cards"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="summary-card">
          <h3>Key Takeaways</h3>
          <ul>
            {[
              "Computers are just fast switches (transistors)",
              "Everything is binary — 0s and 1s",
              "Logic gates combine to do math and make decisions",
              "The CPU fetches, decodes, and executes instructions",
              "Memory hierarchy balances speed vs size vs cost",
              "The OS manages everything so apps don't fight",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
      >
        🎉 And now you know how computers work!
      </motion.p>
    </motion.div>
  );
}
