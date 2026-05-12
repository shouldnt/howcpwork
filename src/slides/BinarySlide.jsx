import { motion } from "framer-motion";

const binaryRows = [
  { decimal: "0", binary: "0000" },
  { decimal: "1", binary: "0001" },
  { decimal: "2", binary: "0010" },
  { decimal: "3", binary: "0011" },
  { decimal: "4", binary: "0100" },
  { decimal: "5", binary: "0101" },
  { decimal: "6", binary: "0110" },
  { decimal: "7", binary: "0111" },
  { decimal: "8", binary: "1000" },
  { decimal: "9", binary: "1001" },
  { decimal: "A", binary: "1010" },
  { decimal: "B", binary: "1011" },
  { decimal: "C", binary: "1100" },
  { decimal: "D", binary: "1101" },
  { decimal: "E", binary: "1110" },
  { decimal: "F", binary: "1111" },
];

export default function BinarySlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Binary — The Language of Computers</h2>
      <p className="slide-subtitle">
        Everything is built from just <strong>0</strong> and{" "}
        <strong>1</strong>
      </p>

      <div className="binary-explanation">
        <motion.div
          className="binary-bit-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="bit on">1</span>
          <span className="plus">→</span>
          <span className="meaning">ON / True / High voltage (~5V)</span>
        </motion.div>
        <motion.div
          className="binary-bit-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <span className="bit off">0</span>
          <span className="plus">→</span>
          <span className="meaning">OFF / False / Low voltage (~0V)</span>
        </motion.div>
      </div>

      <motion.div
        className="binary-table"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="binary-table-header">
          <span>Hex</span>
          <span>Binary</span>
        </div>
        <div className="binary-table-body">
          {binaryRows.slice(0, 8).map((row) => (
            <div key={row.decimal} className="binary-table-row">
              <span className="hex">{row.decimal}</span>
              <span className="bits">
                {row.binary.split("").map((b, i) => (
                  <span key={i} className={b === "1" ? "bit on" : "bit off"}>
                    {b}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
        <div className="binary-table-body">
          {binaryRows.slice(8).map((row) => (
            <div key={row.decimal} className="binary-table-row">
              <span className="hex">{row.decimal}</span>
              <span className="bits">
                {row.binary.split("").map((b, i) => (
                  <span key={i} className={b === "1" ? "bit on" : "bit off"}>
                    {b}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        💡 A single 0 or 1 is a <strong>bit</strong>. 8 bits = 1{" "}
        <strong>byte</strong>. Your name, photos, music — all just bits.
      </motion.p>
    </motion.div>
  );
}
