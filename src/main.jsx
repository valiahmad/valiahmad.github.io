import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const featured = [
  {
    id: "video",
    no: "01",
    category: "REAL-TIME VIDEO",
    title: "Camera → FPGA → Display",
    subtitle: "Streaming image-processing pipeline",
    description:
      "A hardware architecture for deterministic, real-time video processing. The case study documents dataflow, buffering, window generation, filtering, backpressure and verification.",
    specs: [
      ["THROUGHPUT", "1 PIXEL / CYCLE"],
      ["INTERFACE", "AXI4-STREAM"],
      ["CORE", "LINE BUFFER + WINDOW"],
      ["TARGET", "1080p60"]
    ],
    stages: ["INPUT", "AXI4-STREAM", "LINE BUFFER", "5×5 WINDOW", "GAUSSIAN", "SOBEL", "OUTPUT"]
  },
  {
    id: "vhdl",
    no: "02",
    category: "RTL LIBRARY",
    title: "VHDL Toolkit",
    subtitle: "Reusable FPGA building blocks",
    description:
      "A practical collection of parameterized RTL modules for repeated FPGA work: FIFO architectures, UART, counters, utilities, interfaces and verification-oriented components.",
    specs: [
      ["LANGUAGE", "VHDL"],
      ["STYLE", "PARAMETERIZED RTL"],
      ["FOCUS", "REUSE"],
      ["VERIFY", "SELF-CHECKING TB"]
    ],
    stages: ["SPEC", "RTL", "ASSERTIONS", "TESTBENCH", "SYNTHESIS", "TIMING", "REUSE"]
  },
  {
    id: "bilinear",
    no: "03",
    category: "IMAGE PROCESSING",
    title: "Bilinear Interpolation IP",
    subtitle: "Fixed-point image upscaling",
    description:
      "A hardware-oriented interpolation engine built around coordinate mapping, weight generation, fixed-point arithmetic, pipelining and deterministic pixel output.",
    specs: [
      ["ARITHMETIC", "FIXED-POINT"],
      ["PIPELINE", "MULTI-STAGE"],
      ["GOAL", "1 PIXEL / CYCLE"],
      ["OUTPUT", "STREAMING"]
    ],
    stages: ["COORDINATE", "WEIGHTS", "FETCH", "MAC", "PIPELINE", "CLIP", "PIXEL"]
  }
];

const principles = [
  ["01", "STREAMING FIRST", "Keep data moving. Design interfaces, buffering and backpressure before optimizing arithmetic."],
  ["02", "MEASURE EVERYTHING", "Latency, throughput, timing, BRAM, DSP and LUT usage are engineering outputs — not afterthoughts."],
  ["03", "VERIFY THE HARDWARE", "Simulation, assertions, corner cases and waveform reasoning are part of the design."],
  ["04", "DOCUMENT THE WHY", "A good portfolio explains engineering decisions, trade-offs and failures — not only final RTL."]
];

function FPGAVisual() {
  return (
    <div className="fpga-visual">
      <div className="visual-grid" />
      <div className="hud hud-top">FPGA / COMPUTE DIE <span>LIVE</span></div>
      <div className="hud hud-bottom">STREAM_READY · 01 PX/CYCLE</div>
      <div className="die">
        <div className="die-face">
          <div className="die-title">FPGA</div>
          <div className="die-sub">RTL / DSP</div>
          <div className="logic-grid">
            {Array.from({ length: 36 }).map((_, i) => <i key={i} />)}
          </div>
          <div className="core-ring"><b>Σ</b></div>
        </div>
        {Array.from({ length: 16 }).map((_, i) => <span key={i} className={`pin pin-${i}`} />)}
      </div>
      <div className="signal s1" /><div className="signal s2" /><div className="signal s3" />
      <div className="node-tag n1">AXI</div><div className="node-tag n2">DSP</div><div className="node-tag n3">RTL</div>
    </div>
  );
}

function Architecture({ stages }) {
  return (
    <div className="architecture">
      {stages.map((stage, i) => (
        <React.Fragment key={stage}>
          <div className="arch-node">
            <small>0{i + 1}</small>
            <strong>{stage}</strong>
          </div>
          {i < stages.length - 1 && <div className="arch-arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function CaseStudy({ item, open, onToggle }) {
  return (
    <article className={`case ${open ? "open" : ""}`}>
      <button className="case-head" onClick={onToggle}>
        <span className="case-no">{item.no}</span>
        <span>
          <small>{item.category}</small>
          <strong>{item.title}</strong>
          <em>{item.subtitle}</em>
        </span>
        <span className="case-toggle">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="case-body">
          <div className="case-copy">
            <p>{item.description}</p>
            <div className="specs">
              {item.specs.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}
            </div>
          </div>
          <div>
            <div className="mini-label">SYSTEM ARCHITECTURE</div>
            <Architecture stages={item.stages} />
            <div className="case-links">
              <a href="https://github.com/aliahmad-rahmani" target="_blank" rel="noreferrer">SOURCE ↗</a>
              <a href="#contact">CASE STUDY ↘</a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState("video");
  const [menu, setMenu] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app">
      <header className="topbar">
        <a className="logo" href="#top">ALI<span>_</span>AHMAD</a>
        <button className="mobile-menu" onClick={() => setMenu(!menu)}>MENU</button>
        <nav className={menu ? "show" : ""}>
          <a href="#work" onClick={() => setMenu(false)}>WORK</a>
          <a href="#systems" onClick={() => setMenu(false)}>SYSTEMS</a>
          <a href="#research" onClick={() => setMenu(false)}>RESEARCH</a>
          <a href="#about" onClick={() => setMenu(false)}>ABOUT</a>
        </nav>
        <div className="top-actions">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "LIGHT" : "DARK"}</button>
          <a href="https://github.com/aliahmad-rahmani" target="_blank" rel="noreferrer">GITHUB ↗</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-left">
            <div className="status"><i /> AVAILABLE FOR ENGINEERING OPPORTUNITIES</div>
            <p className="kicker">FPGA · DSP · REAL-TIME VIDEO · COMPUTER VISION</p>
            <h1>Design the<br /><span>data path.</span></h1>
            <p className="hero-text">
              I build hardware systems that turn algorithms into deterministic, verifiable
              pipelines — with a focus on FPGA, RTL, DSP and real-time image processing.
            </p>
            <div className="hero-buttons">
              <a className="solid" href="#work">VIEW ENGINEERING WORK</a>
              <a href="#about">ABOUT ME ↓</a>
            </div>
            <div className="hero-meta">
              <div><b>01</b><span>RTL / VHDL</span></div>
              <div><b>02</b><span>DSP / FIXED-POINT</span></div>
              <div><b>03</b><span>VIDEO PIPELINES</span></div>
            </div>
          </div>
          <FPGAVisual />
          <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="ticker">
          <div>FPGA ENGINEERING</div><i>◆</i><div>STREAMING ARCHITECTURE</div><i>◆</i>
          <div>DSP</div><i>◆</i><div>COMPUTER VISION</div><i>◆</i><div>VHDL</div><i>◆</i>
          <div>VERIFICATION</div>
        </section>

        <section id="work" className="section work">
          <div className="section-intro">
            <div className="section-id">01 / WORK</div>
            <div>
              <h2>Engineering,<br /><span>explained.</span></h2>
              <p>Each project is structured around the questions a senior engineer or hiring manager actually asks: What problem? What architecture? What trade-off? How was it verified?</p>
            </div>
          </div>
          <div className="cases">
            {featured.map(item => (
              <CaseStudy key={item.id} item={item} open={open === item.id} onToggle={() => setOpen(open === item.id ? "" : item.id)} />
            ))}
          </div>
        </section>

        <section id="systems" className="systems">
          <div className="section">
            <div className="section-intro">
              <div className="section-id">02 / SYSTEMS</div>
              <div>
                <h2>From pixel<br /><span>to pipeline.</span></h2>
                <p>A representative real-time video architecture. The point is not the diagram alone — it is the reasoning behind every buffer, interface and processing stage.</p>
              </div>
            </div>
            <div className="big-pipeline">
              {["INPUT", "MIPI / SOURCE", "AXI4-STREAM", "LINE BUFFERS", "WINDOW GEN", "GAUSSIAN", "SOBEL", "DISPLAY"].map((x, i) => (
                <div className="big-stage" key={x}>
                  <small>0{i + 1}</small><strong>{x}</strong>
                  {i < 7 && <span>→</span>}
                </div>
              ))}
            </div>
            <div className="system-stats">
              <div><small>DATAFLOW</small><b>STREAMING</b><span>Backpressure aware</span></div>
              <div><small>THROUGHPUT</small><b>1 PX / CYCLE</b><span>Pipeline-oriented</span></div>
              <div><small>MEMORY</small><b>BRAM / FIFO</b><span>Explicit buffering</span></div>
              <div><small>VALIDATION</small><b>RTL + TB</b><span>Simulation first</span></div>
            </div>
          </div>
        </section>

        <section className="principles section">
          <div className="section-intro">
            <div className="section-id">03 / METHOD</div>
            <div><h2>How I<br /><span>engineer.</span></h2></div>
          </div>
          <div className="principle-layout">
            <div className="principle-list">
              {principles.map((p, i) => (
                <button key={p[0]} className={activePrinciple === i ? "active" : ""} onClick={() => setActivePrinciple(i)}>
                  <span>{p[0]}</span><b>{p[1]}</b><i>↗</i>
                </button>
              ))}
            </div>
            <div className="principle-display">
              <small>{principles[activePrinciple][0]} / ENGINEERING PRINCIPLE</small>
              <h3>{principles[activePrinciple][1]}</h3>
              <p>{principles[activePrinciple][2]}</p>
              <div className="terminal-line"><span>$</span> build → verify → measure → document<span className="cursor">_</span></div>
            </div>
          </div>
        </section>

        <section id="research" className="research section">
          <div className="section-intro">
            <div className="section-id">04 / RESEARCH</div>
            <div>
              <h2>Algorithms<br /><span>meet hardware.</span></h2>
              <p>My research and computer-vision work inform the algorithmic side; FPGA engineering asks how those algorithms behave under memory, latency and throughput constraints.</p>
            </div>
          </div>
          <div className="research-cards">
            <article><small>COMPUTER VISION</small><h3>Medical image segmentation</h3><p>U-Net and image-processing research, with an emphasis on understanding the algorithm before considering acceleration.</p><a href="https://github.com/aliahmad-rahmani" target="_blank" rel="noreferrer">EXPLORE WORK ↗</a></article>
            <article><small>DSP / FPGA</small><h3>Algorithm → architecture</h3><p>Fixed-point arithmetic, pipelining, memory movement, parallelism and reusable RTL form the bridge from software concepts to hardware.</p><a href="#work">VIEW SYSTEMS ↗</a></article>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section about-inner">
            <div className="about-text">
              <div className="section-id">05 / ABOUT</div>
              <h2>Ali Ahmad<br /><span>Rahmani.</span></h2>
              <p>FPGA / DSP / Computer Vision Engineer building a portfolio around real engineering artifacts: architecture, RTL, verification, performance and documentation.</p>
              <div className="socials">
                <a href="https://github.com/aliahmad-rahmani" target="_blank" rel="noreferrer">GITHUB ↗</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
              </div>
            </div>
            <div className="console">
              <div className="console-top"><span>●</span><span>●</span><span>●</span><b>engineer@portfolio:~</b></div>
              <pre>{`$ whoami
ali-ahmad-rahmani

$ specialization
FPGA / RTL / DSP / VIDEO

$ design_loop
spec → architecture → RTL
      → verify → synthesize
      → measure → document

$ state
SYSTEM_READY_`}</pre>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-label">06 / CONTACT</div>
          <h2>Let's build<br /><span>something real.</span></h2>
          <p>For FPGA engineering, DSP, video processing or hardware-acceleration opportunities.</p>
          <div className="contact-links">
            <a href="https://github.com/aliahmad-rahmani" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          </div>
        </section>
      </main>

      <footer><span>© {year} ALI AHMAD RAHMANI</span><span>BUILT WITH AN RTL MINDSET · V2.0</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);