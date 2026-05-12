import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import TitleSlide from "./slides/TitleSlide";
import BigPicture from "./slides/BigPicture";
import BinarySlide from "./slides/BinarySlide";
import Transistors from "./slides/Transistors";
import LogicGates from "./slides/LogicGates";
import CPUSlide from "./slides/CPUSlide";
import RegistersSlide from "./slides/RegistersSlide";
import MMIOSlide from "./slides/MMIOSlide";
import HardwareCommSlide from "./slides/HardwareCommSlide";
import MemorySlide from "./slides/MemorySlide";
import OSSlide from "./slides/OSSlide";
import SummarySlide from "./slides/SummarySlide";

import "./App.css";

const slides = [
  { id: "title", component: TitleSlide },
  { id: "big-picture", component: BigPicture },
  { id: "binary", component: BinarySlide },
  { id: "transistors", component: Transistors },
  { id: "logic-gates", component: LogicGates },
  { id: "cpu", component: CPUSlide },
  { id: "registers", component: RegistersSlide },
  { id: "mmio", component: MMIOSlide },
  { id: "hardware-comm", component: HardwareCommSlide },
  { id: "memory", component: MemorySlide },
  { id: "os", component: OSSlide },
  { id: "summary", component: SummarySlide },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

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

      {/* Navigation buttons */}
      <div className="nav-buttons">
        <button
          className="nav-btn"
          onClick={goPrev}
          disabled={current === 0}
          title="Previous (←)"
        >
          ← Prev
        </button>
        <div className="nav-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              title={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="nav-btn"
          onClick={goNext}
          disabled={current === slides.length - 1}
          title="Next (→)"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default App;
