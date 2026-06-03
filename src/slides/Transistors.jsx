import { motion } from "framer-motion";

export default function Transistors() {
  // We'll toggle between ON and OFF states in a loop
  const toggleVariants = {
    on: { rotate: 0 },
    off: { rotate: -30 },
  };

  const gateVariants = {
    on: { backgroundColor: "#4ade80" },
    off: { backgroundColor: "#f87171" },
  };

  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Transistors — The Building Blocks</h2>
      <p className="slide-subtitle">
        Tiny switches that turn electricity on and off
      </p>

      <div className="transistor-demo">
        {/* Animated toggle switch */}
        <motion.div
          className="toggle-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="toggle-label">Transistor as a Toggle Switch</div>

          <div className="toggle-circuit">
            {/* Source side */}
            <div className="circuit-side _has-power">
              <span className="circuit-node source-node">⚡ Source</span>
            </div>
            <img class="transistor" src="/transistor.png" />
            {/* Drain side */}
            <div className="circuit-side">
              <span className="circuit-node drain-node">⬇️ Drain</span>
            </div>

          </div>

          {/* Voltage gate indicator */}
          <motion.div
            className="gate-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="gate-pulse"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(74, 222, 128, 0.6)",
                  "0 0 0 0 rgba(248, 113, 113, 0.6)",
                  "0 0 0 0 rgba(74, 222, 128, 0.6)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
            >
              <motion.span
                className="gate-text"
                animate={{ color: ["#4ade80", "#f87171", "#4ade80"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
              >
                GATE
              </motion.span>
            </motion.div>
          </motion.div>

          {/* State indicator */}
          <div className="state-indicators">
            <motion.div
              className="state-card state-on"
              animate={{
                backgroundColor: ["rgba(74, 222, 128, 0.15)", "rgba(74, 222, 128, 0.05)", "rgba(74, 222, 128, 0.15)"],
                borderColor: ["rgba(74, 222, 128, 0.5)", "rgba(74, 222, 128, 0.15)", "rgba(74, 222, 128, 0.5)"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
            >
              <div className="state-title">🔛 ON (1)</div>
              <div className="state-desc">Gate has voltage → Switch closed → Current flows</div>
            </motion.div>

            <motion.div
              className="state-card state-off"
              animate={{
                backgroundColor: ["rgba(248, 113, 113, 0.05)", "rgba(248, 113, 113, 0.15)", "rgba(248, 113, 113, 0.05)"],
                borderColor: ["rgba(248, 113, 113, 0.15)", "rgba(248, 113, 113, 0.5)", "rgba(248, 113, 113, 0.15)"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
            >
              <div className="state-title">🔴 OFF (0)</div>
              <div className="state-desc">No gate voltage → Switch open → No current</div>
            </motion.div>
          </div>
        </motion.div>


        {/* Key facts */}
        <motion.div
          className="facts-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="fact-card">
            <span className="fact-icon">🔬</span>
            <h3>Microscopic</h3>
            <p>
              Modern chips have billions of transistors. A single transistor is
              smaller than a virus.
            </p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">⚡</span>
            <h3>Voltage Controlled</h3>
            <p>
              Apply voltage to the gate → switch closes → current flows (1).
              Remove voltage → switch opens → no current (0).
            </p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">🧱</span>
            <h3>Foundation</h3>
            <p>
              Transistors combine to create logic gates, which build into
              circuits, then CPUs.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        🔥 A modern CPU has <strong>~20 billion</strong> transistors — each one
        is a tiny toggle switch flipping billions of times per second
      </motion.p>
    </motion.div>
  );
}
