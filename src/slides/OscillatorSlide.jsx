import { motion } from "framer-motion";

const clockCycles = [
  { step: "FETCH", icon: "📥", desc: "Read instruction from RAM at PC address" },
  { step: "DECODE", icon: "🔍", desc: "Decode instruction in the control unit" },
  { step: "EXECUTE", icon: "⚙️", desc: "ALU performs the operation" },
  { step: "STORE", icon: "💾", desc: "Write result back to register or memory" },
];

export default function OscillatorSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">The Clock — The Computer's Heartbeat</h2>
      <p className="slide-subtitle">
        An oscillator generates a steady rhythm that drives every instruction forward
      </p>

      <div className="osc-content">
        {/* Crystal & Clock signal */}
        <motion.div
          className="osc-top-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {/* Crystal oscillator visual */}
          <div className="crystal-box">
            <div className="crystal-icon">
              <div className="crystal-shape">
                <span className="crystal-label">🔮 Quartz Crystal</span>
              </div>
              <motion.div
                className="crystal-vibrate"
                animate={{ scale: [1, 1.02, 0.98, 1] }}
                transition={{ duration: 0.25, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="crystal-to-clock">
              <motion.span
                className="crystal-arrow"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <span className="crystal-arrow-label">Piezoelectric effect → steady frequency</span>
            </div>
            <div className="clock-chip">
              <span className="clock-chip-label">Clock Generator</span>
              <span className="clock-chip-freq">3.5 GHz</span>
            </div>
          </div>

          {/* Animated clock wave */}
          <div className="clock-wave-container">
            <div className="wave-label">Clock Signal (Square Wave)</div>
            <svg viewBox="0 0 400 80" className="clock-wave-svg">
              {/* The square wave path */}
              <motion.path
                d="M0,60 L50,60 L50,20 L100,20 L100,60 L150,60 L150,20 L200,20 L200,60 L250,60 L250,20 L300,20 L300,60 L350,60 L350,20 L400,20"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              {/* Animated pulse dots on rising edges */}
              {[50, 150, 250, 350].map((x, i) => (
                <motion.circle
                  key={x}
                  cx={x}
                  cy={20}
                  r={6}
                  fill="#4ade80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.2, 1, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.3 + 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Animated sweep line */}
              <motion.rect
                x={0}
                y={0}
                width={3}
                height={80}
                fill="rgba(96, 165, 250, 0.15)"
                animate={{ x: [0, 397, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              {/* Labels: one cycle */}
              <text x="48" y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">Rising Edge</text>
              <text x="148" y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">Rising Edge</text>
              <text x="248" y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">Rising Edge</text>
              <text x="348" y="78" fill="#94a3b8" fontSize="10" textAnchor="middle">Rising Edge</text>
            </svg>
            <div className="wave-meta">
              <span>⬆️ Rising edge = tick</span>
              <span>⏱️ 1 cycle = FETCH + DECODE + EXECUTE + STORE</span>
            </div>
          </div>
        </motion.div>

        {/* How it drives the program forward */}
        <motion.div
          className="osc-cycle-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h3 className="section-label">Each Clock Tick Advances the Program</h3>

          <div className="osc-cycle-steps">
            {clockCycles.map((step, i) => (
              <motion.div
                key={step.step}
                className="osc-cycle-step"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="osc-step-indicator"
                  animate={{
                    backgroundColor: [
                      "rgba(96, 165, 250, 0.1)",
                      "rgba(96, 165, 250, 0.25)",
                      "rgba(96, 165, 250, 0.1)",
                    ],
                    borderColor: [
                      "rgba(96, 165, 250, 0.3)",
                      "rgba(96, 165, 250, 0.6)",
                      "rgba(96, 165, 250, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <span className="osc-step-icon">{step.icon}</span>
                  <span className="osc-step-name">{step.step}</span>
                </motion.div>
                <p className="osc-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* PC advancing animation */}
          <motion.div
            className="pc-advancement"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <div className="pc-label">📍 Program Counter (PC) in Action</div>
            <div className="pc-timeline">
              {["PC = 0x100", "PC = 0x104", "PC = 0x108", "PC = 0x10C"].map((pc, i) => (
                <motion.div
                  key={pc}
                  className="pc-step"
                  animate={{
                    backgroundColor: [
                      i === 0 ? "rgba(74, 222, 128, 0.2)" : "rgba(74, 222, 128, 0.05)",
                      i === 1 ? "rgba(74, 222, 128, 0.2)" : "rgba(74, 222, 128, 0.05)",
                      i === 2 ? "rgba(74, 222, 128, 0.2)" : "rgba(74, 222, 128, 0.05)",
                      i === 3 ? "rgba(74, 222, 128, 0.2)" : "rgba(74, 222, 128, 0.05)",
                    ],
                    borderColor: [
                      i === 0 ? "rgba(74, 222, 128, 0.5)" : "rgba(74, 222, 128, 0.15)",
                      i === 1 ? "rgba(74, 222, 128, 0.5)" : "rgba(74, 222, 128, 0.15)",
                      i === 2 ? "rgba(74, 222, 128, 0.5)" : "rgba(74, 222, 128, 0.15)",
                      i === 3 ? "rgba(74, 222, 128, 0.5)" : "rgba(74, 222, 128, 0.15)",
                    ],
                  }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="pc-addr">{pc}</span>
                  <motion.span
                    className="pc-arrow"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.4, delay: i * 0.4, repeat: Infinity }}
                  >
                    ⬇️
                  </motion.span>
                  <span className="pc-action">Fetch instruction {i + 1}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Frequency insight */}
      <motion.div
        className="insight-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div className="insight-card freq-card">
          <span className="freq-icon">💓</span>
          <div>
            <strong>3.5 GHz = 3.5 billion ticks per second</strong>
            <p>In one second, a modern CPU executes billions of instructions — each driven by a single clock tick.</p>
          </div>
        </div>
        <div className="insight-card">
          <span className="freq-icon">🔄</span>
          <div>
            <strong>No clock = no progress</strong>
            <p>Without the oscillator, the CPU sits frozen — nothing moves. The clock is what makes the program "go".</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
