import React from 'react';
import './Footer.css'; // For custom styles

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-4">
        <div className="footer-brand mb-3 mb-md-0">
          <h5 className="mb-2">Happiness Plans</h5>
          <p className="mb-0 small">
            Making your life happier and healthier since 2025.
          </p>
        </div>
        <div className="footer-links d-flex flex-wrap justify-content-center justify-content-md-start gap-3 gap-md-4">
          <a href="mailto:contact@happinessplans.com" className="footer-link">
            contact@happinessplans.com
          </a>
          <a href="tel:+911234567890" className="footer-link">
            +91 12345 67890
          </a>
          <a
            href="https://www.facebook.com/happinessplans"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/happinessplans"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="footer-copyright text-center small text-muted py-3">
        &copy; {new Date().getFullYear()} Happiness Plans. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
