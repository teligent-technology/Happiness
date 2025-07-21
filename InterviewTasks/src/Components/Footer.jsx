import React from 'react';
import './Footer.css'; // For custom styles

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          <h5 className="mb-2">Happiness Plans</h5>
          <p className="mb-0 small">
            Making your life happier and healthier since 2025.
          </p>
        </div>
        <div>
          <a href="mailto:contact@happinessplans.com" className="footer-link me-3">
            contact@happinessplans.com
          </a>
          <a href="tel:+911234567890" className="footer-link me-3">
            +91 12345 67890
          </a>
          <a href="https://www.facebook.com/happinessplans" target="_blank" rel="noopener noreferrer" className="footer-link me-3">
            Facebook
          </a>
          <a href="https://www.twitter.com/happinessplans" target="_blank" rel="noopener noreferrer" className="footer-link">
            Twitter
          </a>
        </div>
      </div>
      <div className="text-center mt-3 small text-muted">
        &copy; {new Date().getFullYear()} Happiness Plans. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
