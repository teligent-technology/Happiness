// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-center text-md-start">
        <h1 className="hero-title mb-3 animate-title">
          Welcome to <span className="highlight">Happiness Plans</span>
        </h1>
        <p className="hero-subtitle mb-4 animate-subtitle">
          Your journey towards a happier and healthier life starts here.
        </p>
        <a href="#services" className="btn btn-primary btn-lg hero-btn animate-btn" tabIndex={0}>
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
