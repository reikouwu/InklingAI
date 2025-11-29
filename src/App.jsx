import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="desktop-container">
      <div className="glow-left"></div>
      <div className="glow-right"></div>

      <div className="content">
        <h1 className="title">Inkling AI</h1>
        <p className="subtitle">
          Smart, AI-Powered Quiz Generation for Learning Anything in Seconds.
        </p>

        <button className="start-btn">Start Learning</button>
      </div>
    </div>
  );
}

export default App;
