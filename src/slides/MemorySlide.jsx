import { motion } from "framer-motion";

const memTypes = [
  {
    name: "RAM",
    full: "Random Access Memory",
    icon: "🧠",
    speed: "Fast",
    size: "GB",
    persistent: false,
    analogy: "Your desk — working on things right now",
    color: "#60a5fa",
  },
  {
    name: "SSD / HDD",
    full: "Storage",
    icon: "💾",
    speed: "Slow",
    size: "TB",
    persistent: true,
    analogy: "Your filing cabinet — stores everything long-term",
    color: "#f59e0b",
  },
  {
    name: "Cache",
    full: "CPU Cache (L1, L2, L3)",
    icon: "⚡",
    speed: "Lightning",
    size: "MB",
    persistent: false,
    analogy: "Your immediate reach — tools you use every second",
    color: "#a78bfa",
  },
];

export default function MemorySlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Memory & Storage</h2>
      <p className="slide-subtitle">
        The hierarchy of keeping data around
      </p>

      <div className="memory-pyramid">
        {/* Visual hierarchy */}
        <motion.div
          className="mem-tier top"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <span className="tier-name">CPU Registers</span>
          <span className="tier-size">~100s of Bytes</span>
          <span className="tier-speed">⚡ 1 cycle</span>
        </motion.div>
        <motion.div
          className="mem-tier upper"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="tier-name">Cache (L1–L3)</span>
          <span className="tier-size">~MB</span>
          <span className="tier-speed">⚡ 3–50 cycles</span>
        </motion.div>
        <motion.div
          className="mem-tier middle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <span className="tier-name">RAM</span>
          <span className="tier-size">~GB</span>
          <span className="tier-speed">⏱️ ~100 cycles</span>
        </motion.div>
        <motion.div
          className="mem-tier bottom"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <span className="tier-name">SSD / Hard Drive</span>
          <span className="tier-size">~TB</span>
          <span className="tier-speed">🐢 ~10M cycles</span>
        </motion.div>
      </div>

      <div className="memory-cards">
        {memTypes.map((mem, i) => (
          <motion.div
            key={mem.name}
            className="mem-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
            style={{ borderLeftColor: mem.color }}
          >
            <div className="mem-card-header">
              <span className="mem-icon">{mem.icon}</span>
              <div>
                <strong>{mem.name}</strong>
                <span className="mem-full">{mem.full}</span>
              </div>
            </div>
            <p className="mem-analogy">{mem.analogy}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        💡 The closer memory is to the CPU, the faster — but the smaller and
        more expensive
      </motion.p>
    </motion.div>
  );
}
