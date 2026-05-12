import { motion } from "framer-motion";

const mmioExamples = [
  { addr: "0x4000_0000", device: "GPIO Port A", dir: "Read/Write", desc: "Read pin states or set pin outputs" },
  { addr: "0x4000_1000", device: "UART (Serial)", dir: "Read/Write", desc: "Send/receive serial data" },
  { addr: "0x4000_2000", device: "Timer", dir: "Read/Write", desc: "Read current count, set interval" },
  { addr: "0x4000_3000", device: "I²C Controller", dir: "Read/Write", desc: "Communicate with sensors" },
  { addr: "0x4000_4000", device: "SPI Controller", dir: "Read/Write", desc: "Talk to displays, SD cards" },
  { addr: "0x4000_5000", device: "Watchdog Timer", dir: "Write-only", desc: "Reset system if hung" },
];

export default function MMIOSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Memory-Mapped I/O (MMIO)</h2>
      <p className="slide-subtitle">
        How the CPU talks to hardware peripherals
      </p>

      <div className="mmio-content">
        {/* Concept explanation */}
        <motion.div
          className="mmio-concept"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="mmio-analogy">
            <div className="analogy-header">📮 The Mailbox Analogy</div>
            <p>
              Each hardware device has a "mailbox" at a specific memory address.
              The CPU reads/writes to that address like any other memory location
              — but behind the scenes, it's talking to a device.
            </p>
          </div>

          <div className="mmio-diagram">
            <motion.div
              className="mmio-cpu"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <span className="mmio-label">CPU</span>
              <span className="mmio-sub">Reads/Writes memory addresses</span>
            </motion.div>
            <motion.div
              className="mmio-bus"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <div className="bus-line" />
              <span className="bus-label">Address &amp; Data Bus</span>
              <div className="bus-arrow">↔</div>
            </motion.div>
            <motion.div
              className="mmio-memory-map"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <span className="mmio-label">Memory Address Space</span>
              <div className="mmio-map-blocks">
                <div className="mmio-map-block dram">DRAM (System RAM)</div>
                <div className="mmio-map-block gpio">GPIO</div>
                <div className="mmio-map-block uart">UART</div>
                <div className="mmio-map-block timer">Timer</div>
                <div className="mmio-map-block i2c">I²C</div>
                <div className="mmio-map-block spi">SPI</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Example MMIO table */}
        <motion.div
          className="mmio-table-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <h3 className="section-label">Example MMIO Map</h3>
          <div className="mmio-table">
            <div className="mmio-table-header">
              <span>Address</span>
              <span>Device</span>
              <span>Direction</span>
              <span>Description</span>
            </div>
            {mmioExamples.map((entry, i) => (
              <motion.div
                key={entry.addr}
                className="mmio-table-row"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.3 }}
              >
                <span className="mmio-addr">{entry.addr}</span>
                <span className="mmio-device">{entry.device}</span>
                <span className="mmio-dir">{entry.dir}</span>
                <span className="mmio-desc">{entry.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        🧠 MMIO treats hardware registers just like memory addresses — no
        special I/O instructions needed!
      </motion.p>
    </motion.div>
  );
}
