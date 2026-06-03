import { motion } from "framer-motion";

export default function MultiplexerSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Multiplexer — The Selector</h2>
      <p className="slide-subtitle">
        A multiplexer (MUX) selects one of many inputs and forwards it to the
        output
      </p>

      {/* Block diagram */}
      <motion.div
        className="mux-block-diagram"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="mux-inputs">
          <span className="mux-input-label">Data Inputs</span>
          <div className="mux-input-list">
            <span className="mux-input-bit">I₀</span>
            <span className="mux-input-bit">I₁</span>
            <span className="mux-input-bit">I₂</span>
            <span className="mux-input-bit">I₃</span>
          </div>
        </div>
        <div className="mux-chip">
          <span className="mux-chip-icon">🔀</span>
          <span className="mux-chip-name">MUX</span>
          <span className="mux-chip-sub">4→1</span>
          <div className="mux-select-line">
            <span className="mux-sel-bit bit on">S₁</span>
            <span className="mux-sel-bit bit off">S₀</span>
            <span className="mux-sel-label">Select</span>
          </div>
        </div>
        <div className="mux-output">
          <span className="mux-output-label">Output</span>
          <span className="mux-out-bit">Y</span>
        </div>
      </motion.div>

      {/* Truth table */}
      <motion.div
        className="mux-tt-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="section-label">4-to-1 MUX Truth Table</h3>
        <div className="truth-table">
          <div className="truth-row header">
            <span>S₁</span>
            <span>S₀</span>
            <span>Y</span>
          </div>
          {[
            [0, 0, "I₀"],
            [0, 1, "I₁"],
            [1, 0, "I₂"],
            [1, 1, "I₃"],
          ].map((row, ri) => (
            <motion.div
              key={ri}
              className="truth-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + ri * 0.08, duration: 0.3 }}
            >
              {row.map((val, ci) => (
                <span
                  key={ci}
                  className={
                    typeof val === "number"
                      ? val === 1
                        ? "bit on"
                        : "bit off"
                      : "mux-tt-label"
                  }
                >
                  {val}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gate circuit diagram */}
      <motion.div
        className="mux-circuit-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="section-label">Built from AND &amp; OR Gates</h3>
        <div className="mux-circuit-diagram">
          <svg viewBox="0 0 300 130" className="mux-circuit-svg">
            {/* Input labels */}
            <text x="8" y="18" fill="#60a5fa" fontSize="12" fontWeight="700" dy="4">I₀</text>
            <text x="8" y="42" fill="#a78bfa" fontSize="12" fontWeight="700" dy="4">I₁</text>
            <text x="8" y="66" fill="#60a5fa" fontSize="12" fontWeight="700" dy="4">I₂</text>
            <text x="8" y="90" fill="#a78bfa" fontSize="12" fontWeight="700" dy="4">I₃</text>

            {/* AND gate 0 */}
            <rect x="100" y="4" width="36" height="30" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="118" y="24" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">&amp;</text>
            <line x1="30" y1="18" x2="100" y2="18" stroke="#60a5fa" strokeWidth="1.5" />
            {/* NOT S0 + NOT S1 */}
            <circle cx="95" cy="18" r="2.5" fill="none" stroke="#60a5fa" strokeWidth="1" />
            <circle cx="95" cy="18" r="2.5" fill="none" stroke="#60a5fa" strokeWidth="1" />

            {/* AND gate 1 */}
            <rect x="100" y="28" width="36" height="30" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="118" y="48" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">&amp;</text>
            <line x1="30" y1="42" x2="100" y2="42" stroke="#a78bfa" strokeWidth="1.5" />

            {/* AND gate 2 */}
            <rect x="100" y="52" width="36" height="30" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="118" y="72" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">&amp;</text>
            <line x1="30" y1="66" x2="100" y2="66" stroke="#60a5fa" strokeWidth="1.5" />

            {/* AND gate 3 */}
            <rect x="100" y="76" width="36" height="30" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="118" y="96" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">&amp;</text>
            <line x1="30" y1="90" x2="100" y2="90" stroke="#a78bfa" strokeWidth="1.5" />

            {/* Select lines */}
            <line x1="55" y1="18" x2="55" y2="120" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="75" y1="18" x2="75" y2="120" stroke="#f472b6" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="55" y="125" fill="#fbbf24" fontSize="10" textAnchor="middle">S₀</text>
            <text x="75" y="125" fill="#f472b6" fontSize="10" textAnchor="middle">S₁</text>

            {/* AND outputs to OR */}
            <line x1="136" y1="18" x2="175" y2="18" stroke="#e2e8f0" strokeWidth="1.2" />
            <line x1="136" y1="42" x2="175" y2="42" stroke="#e2e8f0" strokeWidth="1.2" />
            <line x1="136" y1="66" x2="175" y2="66" stroke="#e2e8f0" strokeWidth="1.2" />
            <line x1="136" y1="90" x2="175" y2="90" stroke="#e2e8f0" strokeWidth="1.2" />

            {/* OR gate */}
            <rect x="175" y="14" width="36" height="80" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="193" y="58" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">≥1</text>

            {/* OR output */}
            <line x1="211" y1="54" x2="250" y2="54" stroke="#34d399" strokeWidth="2" />
            <circle cx="250" cy="54" r="4" fill="#34d399" />
            <text x="256" y="54" fill="#34d399" fontSize="12" fontWeight="700" dy="4">Y</text>
          </svg>
        </div>
      </motion.div>

      {/* Where it's used */}
      <motion.div
        className="mux-uses-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h3 className="section-label">Where MUXes Are Used</h3>
        <div className="mux-uses-grid">
          <div className="mux-use-card">
            <span className="mux-use-icon">🧮</span>
            <strong>ALU input selection</strong>
            <p>Choose between register A, B, or immediate values</p>
          </div>
          <div className="mux-use-card">
            <span className="mux-use-icon">💾</span>
            <strong>Register file</strong>
            <p>Select which register to read or write</p>
          </div>
          <div className="mux-use-card">
            <span className="mux-use-icon">🔗</span>
            <strong>Bus routing</strong>
            <p>Route data from multiple sources onto a shared bus</p>
          </div>
          <div className="mux-use-card">
            <span className="mux-use-icon">🖥️</span>
            <strong>Memory addressing</strong>
            <p>Select between program counter, stack pointer, or address register</p>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        🔀 A MUX is like a railroad switch — it directs one of many inputs to the
        output based on the select lines
      </motion.p>
    </motion.div>
  );
}