import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <>
      {/* Navbar */}
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="/" className="navbar-brand">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="brand-icon"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span className="brand-text">Sentry</span>
            </a>
          </div>
          
          <div className="navbar-right">
            <button className="btn-get-started">Get Started</button>
            <div className="icon-group">
              <button className="icon-btn" aria-label="Search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <div className="icon-separator"></div>
              <button className="icon-btn" aria-label="Menu">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 80% of viewport */}
      <section className="hero">
        <img
          src="/public/India_palantir.png"
          alt="Hero background"
          className="hero-image"
        />
      </section>
      <section className="hero-text" style={{ textAlign: "left", paddingLeft: "7.7%", paddingTop: "2%" }}>
        <h1 style={{ fontFamily: "Alliance No.2", fontSize: "8.5rem", fontWeight: "500", marginBottom: "0.35rem", color: "#fff", lineHeight: "1" }}>Warp Speed</h1>
        <p style={{ fontFamily: "Alliance No.2", fontSize: "3rem", fontWeight: "400", marginBottom: "0.5rem", color: "#B8B8B8", letterSpacing: "-0.02em", lineHeight: "1" }}>The Manufacturing OS for </p>
        <p style={{ fontFamily: "Alliance No.2", fontSize: "3rem", fontWeight: "400", marginBottom: "0.5rem", color: "#B8B8B8", letterSpacing: "-0.02em", lineHeight: "1" }}>Indian Industrialization</p>
      </section>
    </>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
