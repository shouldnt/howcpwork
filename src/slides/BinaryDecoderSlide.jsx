import { motion } from "framer-motion";

const decoder2to4 = [
  { a: 0, b: 0, out: "Y0 = 1" },
  { a: 0, b: 1, out: "Y1 = 1" },
  { a: 1, b: 0, out: "Y2 = 1" },
  { a: 1, b: 1, out: "Y3 = 1" },
];

export default function BinaryDecoderSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Binary Decoder — Selecting the Right Path</h2>
      <p className="slide-subtitle">
        A decoder converts a binary number into a single active output line
      </p>

      {/* 2-to-4 Decoder diagram */}
      <motion.div
        className="decoder-diagram"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="decoder-chip">
          <div className="decoder-inputs">
            <span className="decoder-input-label">Inputs</span>
            <span className="decoder-input">
              <span className="bit on">A</span>
              <span className="bit off">B</span>
            </span>
          </div>
          <div className="decoder-body">
            <span className="decoder-icon">🔀</span>
            <strong>2→4</strong>
            <span className="decoder-sub">Decoder</span>
          </div>
          <div className="decoder-outputs">
            <span className="decoder-output-label">Outputs</span>
            <div className="decoder-output-lines">
              <span className="decoder-line active">Y0</span>
              <span className="decoder-line">Y1</span>
              <span className="decoder-line">Y2</span>
              <span className="decoder-line">Y3</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Truth table */}
      <motion.div
        className="decoder-table"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="section-label">2-to-4 Decoder Truth Table</h3>
        <div className="truth-table">
          <div className="truth-row header">
            <span>A</span>
            <span>B</span>
            <span>Y0</span>
            <span>Y1</span>
            <span>Y2</span>
            <span>Y3</span>
          </div>
          {[
            [0, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [1, 0, 0, 0, 1, 0],
            [1, 1, 0, 0, 0, 1],
          ].map((row, ri) => (
            <motion.div
              key={ri}
              className="truth-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + ri * 0.1, duration: 0.3 }}
            >
              {row.map((val, ci) => (
                <span
                  key={ci}
                  className={val === 1 ? "bit on" : "bit off"}
                >
                  {val}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How it works explanation */}
      <motion.div
        className="decoder-details"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="decoder-explain-cards">
          <div className="decoder-explain-card">
            <span className="explain-icon">🧠</span>
            <strong>How it works</strong>
            <p>
              A decoder uses AND gates to match each binary input
              pattern. When inputs match, the corresponding output goes HIGH (1).
            </p>
          </div>
          <div className="decoder-explain-card">
            <span className="explain-icon">📐</span>
            <strong>General formula</strong>
            <p>
              An <strong>N-to-2<sup>N</sup></strong> decoder has N inputs and
              2<sup>N</sup> outputs. Exactly one output is 1 at any time.
            </p>
          </div>
          <div className="decoder-explain-card">
            <span className="explain-icon">💾</span>
            <strong>Where it's used</strong>
            <p>
              Memory address decoding, instruction decoding in CPUs,
               multiplexers, and 7-segment displays.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Memory address decoding example */}
      <motion.div
        className="decoder-example"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h3 className="section-label">Example — Memory Address Decoding</h3>
        <div className="mem-example">
          <div className="mem-example-row">
            <span className="mem-example-addr">Address 0x00</span>
            <span className="mem-example-arrow">→</span>
            <span className="mem-example-chip">Chip 0 selected</span>
          </div>
          <div className="mem-example-row">
            <span className="mem-example-addr">Address 0x01</span>
            <span className="mem-example-arrow">→</span>
            <span className="mem-example-chip">Chip 1 selected</span>
          </div>
          <div className="mem-example-row">
            <span className="mem-example-addr">Address 0x10</span>
            <span className="mem-example-arrow">→</span>
            <span className="mem-example-chip">Chip 2 selected</span>
          </div>
          <div className="mem-example-row">
            <span className="mem-example-addr">Address 0x11</span>
            <span className="mem-example-arrow">→</span>
            <span className="mem-example-chip">Chip 3 selected</span>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        🔑 A 32-bit address needs a <strong>32-to-2³² decoder</strong> — that's
        4 billion possible output lines
      </motion.p>
    </motion.div>
  );
}