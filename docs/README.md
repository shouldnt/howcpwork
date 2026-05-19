# How Computers Work — Slide Presentation

An interactive, animated slide deck explaining how computers work — from transistors to operating systems.

Built with **React + Vite + Framer Motion**.

## Quick Start

```bash
cd how-computers-work-slides
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. Use arrow keys or click to navigate.

## Tech Stack

| Layer | What |
|-------|------|
| **React** | UI framework — each slide is a component |
| **Vite** | Build tool — fast dev server & production builds |
| **Framer Motion** | Slide transitions, entrance animations, looping effects |

## What It Covers

The deck traces the full journey from the physical layer up to software:

1. **Binary** — bits, bytes, how data is represented
2. **Transistors** — the toggle switches that make it all possible
3. **Logic Gates** — AND, OR, NOT — building circuits from switches
4. **CPU** — Fetch-Decode-Execute cycle & the ALU
5. **Oscillator (Clock)** — the heartbeat that drives every instruction forward
6. **Registers** — ultra-fast on-chip memory (PC, IR, GP, SP, Flags)
7. **MMIO** — how the CPU talks to hardware peripherals
8. **Hardware Communication** — buses, interrupts, protocols (I²C, SPI, PCIe, USB)
9. **Memory Hierarchy** — registers → cache → RAM → storage
10. **Operating System** — process/memory/file management layers

## Project Structure

```
src/
├── App.jsx          ← Deck controller (navigation, progress bar)
├── App.css          ← All slide styles (dark theme)
├── main.jsx         ← Entry point
└── slides/          ← One component per slide
    ├── TitleSlide.jsx
    ├── BigPicture.jsx
    ├── BinarySlide.jsx
    ├── Transistors.jsx
    ├── LogicGates.jsx
    ├── CPUSlide.jsx
    ├── OscillatorSlide.jsx
    ├── RegistersSlide.jsx
    ├── MMIOSlide.jsx
    ├── HardwareCommSlide.jsx
    ├── MemorySlide.jsx
    ├── OSSlide.jsx
    └── SummarySlide.jsx
```

## Navigation

| Key | Action |
|-----|--------|
| `→` / `Space` / `↓` | Next slide |
| `←` / `↑` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| Click dots | Jump to slide |

## Build for Production

```bash
npm run build    # outputs to dist/
```

---

For a detailed explanation of how slides work internally, see [SLIDES.md](./SLIDES.md).  
For development task tracking, see [TASKS.md](./TASKS.md).
