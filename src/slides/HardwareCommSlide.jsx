import { motion } from "framer-motion";

const busTypes = [
  {
    name: "Address Bus",
    icon: "📍",
    dir: "CPU → Memory/Devices",
    width: "32 or 64 lines",
    desc: "Carries the address the CPU wants to read/write",
    detail: "Width determines max addressable memory (32-bit → 4GB, 64-bit → 16EB)",
  },
  {
    name: "Data Bus",
    icon: "📦",
    dir: "CPU ↔ Memory/Devices",
    width: "8, 16, 32, or 64 lines",
    desc: "Carries the actual data being transferred",
    detail: "Wider bus = more bytes transferred per cycle",
  },
  {
    name: "Control Bus",
    icon: "🎛️",
    dir: "CPU → System",
    width: "Varies",
    desc: "Carries control signals (read, write, interrupt, clock)",
    detail: "Signals: Read, Write, Clock, Reset, Interrupt Request, Bus Request",
  },
];

const protocols = [
  { name: "I²C", speed: "100 kHz – 3.4 MHz", use: "Sensors, displays, slow peripherals", wires: "2 (SDA, SCL)" },
  { name: "SPI", speed: "Up to 80 MHz", use: "SD cards, displays, ADCs", wires: "4 (MOSI, MISO, SCLK, CS)" },
  { name: "UART", speed: "Up to ~10 Mbps", use: "Serial consoles, GPS, Bluetooth", wires: "2 (TX, RX)" },
  { name: "PCIe", speed: "~1 GB/s per lane", use: "GPU, NVMe SSDs, network cards", wires: "Variable lanes (x1, x4, x8, x16)" },
  { name: "USB", speed: "Up to 40 Gbps (USB4)", use: "Keyboards, mice, storage, everything", wires: "4 (D+, D-, VBUS, GND)" },
];

export default function HardwareCommSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">How Hardware Communicates</h2>
      <p className="slide-subtitle">
        Buses, interrupts, and protocols — the nervous system of the computer
      </p>

      <div className="hwcomm-content">
        {/* System Bus Diagram */}
        <motion.div
          className="bus-diagram-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <h3 className="section-label">The System Bus</h3>
          <div className="bus-diagram">
            <div className="bus-cpu-block">CPU</div>
            <div className="bus-bundle">
              <div className="bus-addr">Address Bus</div>
              <div className="bus-data">Data Bus</div>
              <div className="bus-ctrl">Control Bus</div>
            </div>
            <div className="bus-devices">
              <div className="bus-device">RAM</div>
              <div className="bus-device">GPU</div>
              <div className="bus-device">Disk</div>
              <div className="bus-device">USB</div>
            </div>
          </div>
        </motion.div>

        {/* Bus type cards */}
        <div className="bus-cards">
          {busTypes.map((bus, i) => (
            <motion.div
              key={bus.name}
              className="bus-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            >
              <div className="bus-card-header">
                <span className="bus-icon">{bus.icon}</span>
                <div>
                  <strong className="bus-name">{bus.name}</strong>
                  <span className="bus-dir">{bus.dir}</span>
                </div>
                <span className="bus-width">{bus.width}</span>
              </div>
              <p className="bus-desc">{bus.desc}</p>
              <p className="bus-detail">{bus.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Interrupts */}
        <motion.div
          className="interrupt-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <h3 className="section-label">⏰ Interrupts — Don't Poll, Get Notified!</h3>
          <div className="interrupt-flow">
            <div className="interrupt-step">
              <span className="int-icon">🖱️</span>
              <strong>Device needs attention</strong>
              <span className="int-desc">Mouse moved, data arrived, timer expired</span>
            </div>
            <motion.span
              className="int-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <div className="interrupt-step">
              <span className="int-icon">🚨</span>
              <strong>IRQ line triggered</strong>
              <span className="int-desc">Interrupt Request signal sent to CPU</span>
            </div>
            <motion.span
              className="int-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <div className="interrupt-step">
              <span className="int-icon">⏸️</span>
              <strong>CPU pauses & handles it</strong>
              <span className="int-desc">Saves state, runs Interrupt Service Routine (ISR)</span>
            </div>
            <motion.span
              className="int-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <div className="interrupt-step">
              <span className="int-icon">▶️</span>
              <strong>Resume</strong>
              <span className="int-desc">CPU restores state, continues where it left off</span>
            </div>
          </div>
        </motion.div>

        {/* Protocols table */}
        <motion.div
          className="protocols-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        >
          <h3 className="section-label">🔌 Common Communication Protocols</h3>
          <div className="protocol-table">
            <div className="protocol-header">
              <span>Protocol</span>
              <span>Speed</span>
              <span>Wires</span>
              <span>Used For</span>
            </div>
            {protocols.map((p, i) => (
              <motion.div
                key={p.name}
                className="protocol-row"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.07, duration: 0.3 }}
              >
                <span className="proto-name">{p.name}</span>
                <span className="proto-speed">{p.speed}</span>
                <span className="proto-wires">{p.wires}</span>
                <span className="proto-use">{p.use}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        🔌 Every time you press a key, move a mouse, or receive a network
        packet — an interrupt makes it happen instantly
      </motion.p>
    </motion.div>
  );
}
