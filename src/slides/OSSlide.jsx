import { motion } from "framer-motion";

const layers = [
  { name: "Applications", items: ["Browser", "VS Code", "Spotify"], color: "#60a5fa" },
  { name: "Operating System", items: ["Windows / macOS / Linux"], color: "#a78bfa" },
  { name: "Drivers", items: ["Graphics", "Network", "File System"], color: "#f59e0b" },
  { name: "Hardware", items: ["CPU", "RAM", "GPU", "Disk"], color: "#34d399" },
];

export default function OSSlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">The Operating System</h2>
      <p className="slide-subtitle">
        The conductor of the hardware orchestra
      </p>

      <div className="os-stack">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            className="os-layer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
            style={{ backgroundColor: layer.color + "20", borderColor: layer.color }}
          >
            <div className="os-layer-name" style={{ color: layer.color }}>
              {layer.name}
            </div>
            <div className="os-layer-items">
              {layer.items.map((item) => (
                <span key={item} className="os-item">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="os-roles"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <h3 className="section-label">What the OS does:</h3>
        <div className="roles-grid">
          {[
            ["🧑‍💼", "Process Management", "Decides which app gets the CPU"],
            ["📦", "Memory Management", "Allocates RAM to programs"],
            ["📁", "File System", "Organizes data on disk"],
            ["🔌", "Device Drivers", "Talks to hardware"],
            ["🔒", "Security", "Protects programs from each other"],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={title}
              className="role-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1, duration: 0.3 }}
            >
              <span className="role-icon">{icon}</span>
              <strong>{title}</strong>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p
        className="insight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        🖥️ The OS is just software — but it's the first thing that runs when
        you power on
      </motion.p>
    </motion.div>
  );
}
