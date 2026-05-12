import { motion } from "framer-motion";

const regTypes = [
  {
    name: "Program Counter (PC)",
    icon: "📍",
    desc: "Address of the next instruction to execute",
    detail: "CPU reads this, fetches from RAM, then increments it",
  },
  {
    name: "Instruction Register (IR)",
    icon: "📋",
    desc: "Holds the current instruction being decoded",
    detail: "Decode unit reads from IR to figure out what to do",
  },
  {
    name: "General Purpose Registers",
    icon: "🧮",
    desc: "Temporary storage for calculations (R0–R31)",
    detail: "Fastest memory in the system — 1 cycle access",
    extra: "x86: RAX, RBX, RCX, RDX  |  ARM: R0–R15",
  },
  {
    name: "Stack Pointer (SP)",
    icon: "📚",
    desc: "Points to the top of the call stack",
    detail: "Used for function calls, local variables, returns",
  },
  {
    name: "Status / Flags Register",
    icon: "🚩",
    desc: "Tracks CPU state (zero, carry, overflow, etc.)",
    detail: "Updated by ALU after every operation",
  },
];

export default function RegistersSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">CPU Registers</h2>
      <p className="slide-subtitle">
        The CPU's ultra-fast, on-chip memory — accessible in 1 clock cycle
      </p>

      <div className="register-chip">
        {/* Visual chip diagram */}
        <motion.div
          className="chip-diagram"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="chip-body">
            <div className="chip-label">CPU Core</div>
            <div className="register-bank">
              <div className="reg-bank-label">Register File</div>
              <div className="reg-grid">
                {["R0", "R1", "R2", "R3", "…", "Rn"].map((r, i) => (
                  <motion.span
                    key={r}
                    className="reg-cell"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.2 }}
                  >
                    {r}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="chip-pins">
              {[1, 2, 3, 4, 5, 6].map((p) => (
                <div key={p} className="chip-pin" />
              ))}
            </div>
          </div>
          <div className="chip-speed-badge">
            ⚡ ~1 cycle | ~100s of Bytes | On-CPU
          </div>
        </motion.div>

        {/* Register cards */}
        <div className="register-list">
          {regTypes.map((reg, i) => (
            <motion.div
              key={reg.name}
              className="register-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
            >
              <div className="reg-card-header">
                <span className="reg-icon">{reg.icon}</span>
                <div>
                  <strong className="reg-name">{reg.name}</strong>
                  <p className="reg-desc">{reg.desc}</p>
                </div>
              </div>
              <p className="reg-detail">{reg.detail}</p>
              {reg.extra && <p className="reg-extra">{reg.extra}</p>}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        💡 Registers are the <strong>fastest memory</strong> in the entire
        computer — but there are only a few dozen of them
      </motion.p>
    </motion.div>
  );
}
