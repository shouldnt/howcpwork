import { motion } from "framer-motion";

const aluOps = [
  { op: "ADD", desc: "A + B", icon: "➕" },
  { op: "SUB", desc: "A − B", icon: "➖" },
  { op: "INC", desc: "A + 1", icon: "⬆" },
  { op: "DEC", desc: "A − 1", icon: "⬇" },
  { op: "AND", desc: "A & B", icon: "🔀" },
  { op: "OR",  desc: "A | B", icon: "🔄" },
  { op: "XOR", desc: "A ⊕ B", icon: "🔁" },
  { op: "NOT", desc: "~A",    icon: "❌" },
];

const adderTT = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

export default function ALUSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">ALU — The Calculator</h2>
      <p className="slide-subtitle">
        Arithmetic Logic Unit — does all the math and logic
      </p>

      {/* ALU block diagram */}
      <motion.div
        className="alu-block-diagram"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="alu-block-inputs">
          <div className="alu-block-label">Inputs</div>
          <div className="alu-block-value alu-operand">A</div>
          <div className="alu-block-value alu-operand">B</div>
        </div>
        <div className="alu-block-center">
          <div className="alu-block-chip">
            <span className="alu-chip-icon">🧮</span>
            <span className="alu-chip-name">ALU</span>
          </div>
          <div className="alu-block-ctrl">
            <span className="alu-ctrl-bit bit on">Op₂</span>
            <span className="alu-ctrl-bit bit off">Op₁</span>
            <span className="alu-ctrl-bit bit on">Op₀</span>
            <span className="alu-ctrl-label">Opcode</span>
          </div>
        </div>
        <div className="alu-block-outputs">
          <div className="alu-block-label">Outputs</div>
          <div className="alu-block-value alu-result">Result</div>
          <div className="alu-block-value alu-flag">Flags</div>
        </div>
      </motion.div>

      {/* Operations grid */}
      <motion.div
        className="alu-ops-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <h3 className="section-label">ALU Operations</h3>
        <div className="alu-ops-grid">
          {aluOps.map((item, i) => (
            <motion.div
              key={item.op}
              className="alu-op-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
            >
              <span className="alu-op-icon">{item.icon}</span>
              <span className="alu-op-code">{item.op}</span>
              <span className="alu-op-desc">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Full Adder — the building block */}
      <motion.div
        className="alu-adder-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="section-label">How Addition Works — Full Adder</h3>
        <div className="adder-content">
          {/* Adder circuit diagram */}
          <div className="adder-diagram">
            <svg viewBox="0 0 240 120" className="adder-svg">
              {/* A input */}
              <line x1="10" y1="25" x2="50" y2="25" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="50" cy="25" r="4" fill="#60a5fa" />
              <text x="4" y="25" fill="#60a5fa" fontSize="12" fontWeight="700" dy="4">A</text>
              {/* B input */}
              <line x1="10" y1="55" x2="50" y2="55" stroke="#a78bfa" strokeWidth="2" />
              <circle cx="50" cy="55" r="4" fill="#a78bfa" />
              <text x="4" y="55" fill="#a78bfa" fontSize="12" fontWeight="700" dy="4">B</text>
              {/* Cin input */}
              <line x1="10" y1="85" x2="50" y2="85" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="50" cy="85" r="4" fill="#fbbf24" />
              <text x="2" y="85" fill="#fbbf24" fontSize="11" fontWeight="700" dy="4">Cin</text>
              {/* XOR gates */}
              <line x1="58" y1="25" x2="70" y2="25" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="58" y1="55" x2="70" y2="55" stroke="#a78bfa" strokeWidth="1.5" />
              <rect x="70" y="20" width="26" height="40" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="83" y="44" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">=1</text>
              {/* XOR 1 output -> XOR 2 + AND 1 */}
              <line x1="96" y1="30" x2="96" y2="18" stroke="#e2e8f0" strokeWidth="1.5" />
              <line x1="96" y1="18" x2="130" y2="18" stroke="#e2e8f0" strokeWidth="1.5" />
              <line x1="96" y1="40" x2="96" y2="48" stroke="#e2e8f0" strokeWidth="1.5" />
              <line x1="96" y1="48" x2="130" y2="48" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* XOR 2 */}
              <line x1="130" y1="18" x2="135" y2="18" stroke="#e2e8f0" strokeWidth="1.5" />
              <line x1="58" y1="85" x2="135" y2="85" stroke="#fbbf24" strokeWidth="1.5" />
              <rect x="135" y="14" width="26" height="28" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="148" y="32" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">=1</text>
              {/* XOR 2 output -> S */}
              <line x1="161" y1="26" x2="195" y2="26" stroke="#e2e8f0" strokeWidth="2" />
              <circle cx="195" cy="26" r="4" fill="#34d399" />
              <text x="200" y="26" fill="#34d399" fontSize="12" fontWeight="700" dy="4">S</text>
              {/* AND gates */}
              <rect x="130" y="52" width="26" height="24" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="143" y="68" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">&amp;</text>
              <line x1="96" y1="40" x2="96" y2="64" stroke="#e2e8f0" strokeWidth="1.5" />
              <line x1="96" y1="64" x2="130" y2="64" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* Cin -> AND 1 */}
              <line x1="58" y1="85" x2="130" y2="85" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="130" y1="64" x2="135" y2="64" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* AND 1 output -> OR */}
              <line x1="156" y1="64" x2="175" y2="64" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* AND 2 */}
              <rect x="130" y="90" width="26" height="24" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="143" y="106" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">&amp;</text>
              <line x1="58" y1="25" x2="96" y2="25" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="96" y1="25" x2="96" y2="102" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="96" y1="102" x2="130" y2="102" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="58" y1="55" x2="96" y2="55" stroke="#a78bfa" strokeWidth="1.5" />
              <line x1="96" y1="55" x2="96" y2="102" stroke="#a78bfa" strokeWidth="1.5" />
              {/* AND 2 output -> OR */}
              <line x1="156" y1="102" x2="175" y2="102" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* OR gate */}
              <rect x="175" y="58" width="26" height="50" rx="4" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="188" y="87" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontWeight="700">≥1</text>
              {/* OR output -> Cout */}
              <line x1="201" y1="83" x2="220" y2="83" stroke="#e2e8f0" strokeWidth="2" />
              <circle cx="220" cy="83" r="4" fill="#f472b6" />
              <text x="225" y="83" fill="#f472b6" fontSize="12" fontWeight="700" dy="4">Cout</text>
            </svg>
          </div>
          {/* Truth table */}
          <div className="adder-tt">
            <div className="truth-table">
              <div className="truth-row header">
                <span>Ci</span>
                <span>A</span>
                <span>B</span>
                <span>S</span>
                <span>Co</span>
              </div>
              {adderTT.map((row, ri) => (
                <motion.div
                  key={ri}
                  className="truth-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + ri * 0.04, duration: 0.2 }}
                >
                  {row.map((val, ci) => (
                    <span key={ci} className={val === 1 ? "bit on" : "bit off"}>
                      {val}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
            <div className="adder-formula">
              <code>S = A ⊕ B ⊕ Cin</code>
              <code>Cout = (A·B) + (Cin·(A⊕B))</code>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flags section */}
      <motion.div
        className="alu-flags-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <h3 className="section-label">ALU Flags</h3>
        <div className="flags-grid">
          <div className="flag-card">
            <span className="flag-name">Z</span>
            <span className="flag-desc">Zero — result is 0</span>
          </div>
          <div className="flag-card">
            <span className="flag-name">C</span>
            <span className="flag-desc">Carry — overflow out</span>
          </div>
          <div className="flag-card">
            <span className="flag-name">N</span>
            <span className="flag-desc">Negative — result &lt; 0</span>
          </div>
          <div className="flag-card">
            <span className="flag-name">V</span>
            <span className="flag-desc">Overflow — signed overflow</span>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        🧮 An ALU is just logic gates arranged cleverly — adders are built from
        XOR, AND, and OR gates
      </motion.p>
    </motion.div>
  );
}