import React from "react";
import "./Home.css";
import { FaRocket, FaExclamationTriangle, FaTools, FaRegLightbulb } from "react-icons/fa"; // Importing icons

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Feature Toggle System</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/page1">Python-Flagon</a></li>
            <li><a href="/page2">Java-Togglz</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <h2>Feature Toggle Management Made Simple</h2>
        <p>Empower your development process with real-time feature control.</p>
      </div>

      {/* Visual Overview of Feature Toggles */}
      <div className="feature-overview">
        <div className="feature-card">
          <FaRocket size={50} />
          <h3>What are Feature Toggles?</h3>
          <p>Enable/Disable features without redeploying code.</p>
        </div>
        <div className="feature-card">
          <FaExclamationTriangle size={50} />
          <h3>Benefits</h3>
          <p>Safe rollouts, A/B testing, and targeted feature releases.</p>
        </div>
        <div className="feature-card">
          <FaTools size={50} />
          <h3>Implementation</h3>
          <p>Use Flagon, Unleash, or similar libraries to manage flags.</p>
        </div>
        <div className="feature-card">
          <FaRegLightbulb size={50} />
          <h3>Best Practices</h3>
          <p>Clean up unused toggles to avoid technical debt.</p>
        </div>
      </div>

      
      
    </div>
  );
}

export default Home;
