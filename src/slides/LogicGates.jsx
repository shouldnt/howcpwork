import { motion } from "framer-motion";

const gates = [
  {
    name: "AND",
    out: "1 only if both are 1",
    table: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    name: "OR",
    out: "1 if at least one is 1",
    table: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
  },
  {
    name: "NOT",
    out: "Flips 0 ↔ 1",
    table: [
      [0, 1],
      [1, 0],
    ],
  },
];

export default function LogicGates() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Logic Gates — Making Decisions</h2>
      <p className="slide-subtitle">
        Transistors combine to form logic gates — the math of bits
      </p>

      <div className="gates-container">
        {gates.map((gate, gi) => (
          <motion.div
            key={gate.name}
            className="gate-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: gi * 0.2, duration: 0.4 }}
          >
            <h3 className="gate-name">{gate.name}</h3>
            <p className="gate-desc">{gate.out}</p>
            <div className="truth-table">
              <div className="truth-row header">
                {gate.table[0].length === 3 ? (
                  <>
                    <span>A</span>
                    <span>B</span>
                    <span>Q</span>
                  </>
                ) : (
                  <>
                    <span>In</span>
                    <span>Out</span>
                  </>
                )}
              </div>
              {gate.table.map((row, ri) => (
                <motion.div
                  key={ri}
                  className="truth-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: gi * 0.2 + ri * 0.08 + 0.2 }}
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
        ))}
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        🧠 These 3 gates (plus NAND, NOR, XOR) are enough to build a complete
        computer
      </motion.p>
    </motion.div>
  );
}
