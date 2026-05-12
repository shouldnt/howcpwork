# How Slides Work

## Architecture

Each slide is a React component in `src/slides/`. The deck controller in `App.jsx` renders the current slide inside a Framer Motion `AnimatePresence` wrapper.

### Slide Component Structure

Every slide follows this pattern:

```jsx
import { motion } from "framer-motion";

export default function MySlide() {
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0, x: 200 }}       // enter from right
      animate={{ opacity: 1, x: 0 }}          // settle in place
      exit={{ opacity: 0, x: -200 }}          // exit to left
      transition={{ duration: 0.4 }}
    >
      <h2 className="slide-title">Title</h2>
      <p className="slide-subtitle">Subtitle</p>
      {/* slide content here */}

      <motion.p className="insight">
        💡 Key takeaway at the bottom
      </motion.p>
    </motion.div>
  );
}
```

- `initial` / `animate` / `exit` — controls slide entrance and exit animation
- Children can use **staggered entrance animations** by setting increasing `transition.delay` values
- The `className="slide"` container is styled in `App.css` (centered, max-width, padding)

### Deck Controller

`App.jsx` manages:

1. **Slide state** — `current` index, `direction` (for animation)
2. **Navigation** — keyboard listeners (arrows, space, home/end) + clickable dot buttons
3. **Progress bar** — fills based on current slide / total slides
4. **AnimatePresence** — uses `mode="wait"` so slides animate out before the next one enters

### CSS Architecture

All styles live in `src/App.css` under labelled sections:

```
/* =============================
   Slide name
   ============================= */
```

The theme is dark with CSS custom properties:

```css
--bg: #0f1117;          /* page background */
--bg-card: #1a1d2e;     /* card/tile backgrounds */
--border: #2a2e3e;      /* borders and dividers */
--text: #e2e8f0;        /* primary text */
--text-muted: #94a3b8;  /* secondary text */
--accent: #60a5fa;      /* blue accent */
--accent2: #a78bfa;     /* purple accent */
--accent3: #34d399;     /* green accent */
```

## Animation Techniques

| Technique | Where | How |
|-----------|-------|-----|
| Slide transitions | All slides | `AnimatePresence` slide-in/slide-out |
| Staggered children | Transistors, Registers | Incremental `transition.delay` per element |
| Looping animation | Transistors toggle | `animate` with `repeat: Infinity`, `times` array |
| Pulse / glow | Transistors gate | Animated `boxShadow` and `backgroundColor` |
| Counter fill | Binary slide | Animate `width` from 0 to target |
| Fade + scale | Various | `opacity` + `scale` for entrance effects |
| Path drawing | Big Picture | SVG `pathLength` animation |

## Animations Explained by Slide

### TitleSlide
- Title fades up with `y: 40 → 0`
- Subtitle fades in after delay
- Navigation hint pulses with opacity

### BigPicture
- Flow diagram arrows animate as SVG path drawing
- Input / Process / Output cards fade in staggered
- Icons scale up on entrance

### BinarySlide
- Binary digit placeholders count up visually
- Byte value bar fills with animated width
- Hex table rows fade in left-to-right

### Transistors
- **Toggle lever** rotates between ON (0°) and OFF (-30°) in a 3-second loop
- **State indicators** pulse green/red in sync — `ON (1)` and `OFF (0)`
- **Gate indicator** pulses with glowing boxShadow
- Current flow (⚡) appears/disappears with the ON/OFF cycle
- Fact cards fade in staggered

### LogicGates
- AND, OR, NOT gate diagrams appear with SVG-style boxes
- Truth table rows fade in sequentially
- Input/output bits animate color changes

### CPUSlide
- Fetch / Decode / Execute / Store flow diagram
- ALU operation examples with animated highlighting
- Clock cycle counter increments

### RegistersSlide
- **Chip diagram** with register file grid (R0–Rn) scales in
- Each register card slides in staggered from left
- PC, IR, GP, SP, Flags — with descriptions and real examples (x86, ARM)

### MMIOSlide
- **Mailbox analogy** explains the concept
- CPU ↔ Bus ↔ Memory Map diagram fades in
- Example MMIO table with real addresses (GPIO, UART, Timer, I²C, SPI)
- Rows fade in staggered

### HardwareCommSlide
- **System bus diagram** — Address / Data / Control buses connecting CPU to devices
- **Bus cards** (Address, Data, Control) with direction and width
- **Interrupt flow** — animated steps with ⚡ arrows showing ISR handling
- **Protocols table** — I²C, SPI, UART, PCIe, USB with speeds and wire counts

### MemorySlide
- Pyramid hierarchy from registers → cache → RAM → storage
- Each level fades in from bottom to top
- Size/speed labels per tier

### OSSlide
- Layer diagram (User → OS → Hardware)
- Process, memory, file system responsibility cards

### SummarySlide
- Horizontal timeline from sand → transistors → gates → CPU → OS → software
- Key takeaways list with staggered entrance
- Closing message

## Adding a New Slide

1. Create `src/slides/YourSlide.jsx` following the component pattern above
2. Import it in `src/App.jsx`
3. Add it to the `slides` array (order determines position)
4. Add styles in `src/App.css` under a labelled section
5. That's it — navigation, progress bar, and dots update automatically
