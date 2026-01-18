import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("home"); // "home" | "about"

  return (
    <div className="desktop-container">
      <div className="glow-left"></div>
      <div className="glow-right"></div>

      <div className="content">
        {view === "home" ? (
          <>
            <h1 className="title">Inkling AI</h1>
            <p className="subtitle">
            </p>

            <div className="btn-row">
              <button className="start-btn" onClick={() => setView("about")}>
                About Me
              </button>

              <button className="secondary-btn" onClick={() => alert("Coming soon")}>
                Learn Now!
              </button>
            </div>
          </>
        ) : (
          <AboutSection onBack={() => setView("home")} />
        )}
      </div>
    </div>
  );
}

function AboutSection({ onBack }) {
  return (
    <div className="about-wrap">
      <div className="about-header">
        <h2 className="about-title">About Inkling AI</h2>
        <p className="about-subtitle">
          A lightweight learning companion that turns topics into quick, focused quizzes—so you can study
          faster, review smarter, and build confidence with repetition.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-card-title">What I’m Building</h3>
          <p className="about-text">
            Inkling AI is designed to generate quiz sets from a topic or prompt, then guide you through
            fast rounds of practice. The goal is simple: reduce study friction and make review feel
            structured and consistent.
          </p>
          <ul className="about-list">
            <li>Generate quizzes from a topic or notes</li>
            <li>Practice in short, repeatable sessions</li>
            <li>Track what you miss and revisit it</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="about-card-title">About Me</h3>
          <p className="about-text">
            I’m Nicole—an entry-level software developer focused on building clean, usable interfaces and
            practical apps. I enjoy shipping small features end-to-end, iterating quickly, and keeping the
            UI simple and readable.
          </p>
          <div className="about-tags">
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">UI/UX</span>
            <span className="tag">APIs</span>
          </div>
        </div>

        <div className="about-card about-card-wide">
          <h3 className="about-card-title">Why Inkling AI</h3>
          <p className="about-text">
            I wanted something that sits between “reading notes” and “full courses”—a fast way to test
            understanding, identify gaps, and repeat the hard parts without spending time setting up study
            material.
          </p>
          <div className="about-actions">
            <button className="secondary-btn" onClick={onBack}>
              Back to Home
            </button>
            <button className="start-btn" onClick={() => alert("Coming soon")}>
              Try a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
