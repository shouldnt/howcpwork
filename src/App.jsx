import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import TitleSlide from "./slides/TitleSlide";
import BigPicture from "./slides/BigPicture";
import BinarySlide from "./slides/BinarySlide";
import BinaryDecoderSlide from "./slides/BinaryDecoderSlide";
import Transistors from "./slides/Transistors";
import LogicGates from "./slides/LogicGates";
import ALUSlide from "./slides/ALUSlide";
import MultiplexerSlide from "./slides/MultiplexerSlide";
import CPUSlide from "./slides/CPUSlide";
import OscillatorSlide from "./slides/OscillatorSlide";
import RegistersSlide from "./slides/RegistersSlide";
import MMIOSlide from "./slides/MMIOSlide";
import HardwareCommSlide from "./slides/HardwareCommSlide";
import MemorySlide from "./slides/MemorySlide";
import OSSlide from "./slides/OSSlide";
import SummarySlide from "./slides/SummarySlide";

import "./App.css";

const slides = [
  { id: "title", title: "Intro", component: TitleSlide },
  { id: "big-picture", title: "Big Picture", component: BigPicture },
  { id: "binary", title: "Binary", component: BinarySlide },
  { id: "transistors", title: "Transistors", component: Transistors },
  { id: "logic-gates", title: "Logic Gates", component: LogicGates },
  { id: "cpu", title: "CPU", component: CPUSlide },
  { id: "registers", title: "Registers", component: RegistersSlide },
  { id: "alu", title: "ALU", component: ALUSlide },
  { id: "binary-decoder", title: "Decoder", component: BinaryDecoderSlide },
  { id: "multiplexer", title: "MUX", component: MultiplexerSlide },
  { id: "oscillator", title: "Oscillator", component: OscillatorSlide },
  { id: "mmio", title: "MMIO", component: MMIOSlide },
  { id: "hardware-comm", title: "Hardware Comm", component: HardwareCommSlide },
  { id: "memory", title: "Memory", component: MemorySlide },
  { id: "os", title: "OS", component: OSSlide },
  { id: "summary", title: "Summary", component: SummarySlide },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [collapsed, setCollapsed] = useState(false);

  const goNext = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(slides.length - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, goTo]);

  const SlideComponent = slides[current].component;

  return (
    <div className="deck">
      {/* Sidebar */}
      <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-icon">💻</span>
          <span className="sidebar-brand">How Computers Work</span>
          <button
            className="sidebar-toggle"
            onClick={() => setCollapsed((c) => !c)}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "▶" : "◀"}
          </button>
        </div>
        <div className="sidebar-slides">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={`sidebar-item ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              data-title={slide.title}
            >
              <span className="sidebar-num">{i + 1}</span>
              <span className="sidebar-title">{slide.title}</span>
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <span className="sidebar-shortcut">← → arrows</span>
        </div>
      </nav>

      {/* Main area */}
      <div className="main-area">
        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Slide number */}
        <div className="slide-number">
          {current + 1} / {slides.length}
        </div>

        {/* Slide content */}
        <div className="slide-area">
          <AnimatePresence mode="wait">
            <SlideComponent key={current} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
