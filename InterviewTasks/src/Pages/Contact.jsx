import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Contact.css';
import { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all the fields.');
      return;
    }

    setStatus('Sending...');

    // Simulate async submission
    setTimeout(() => {
      setStatus('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };
  return (
    <>
    <Navbar/>
    <div>
        <section className="contact-section py-5">
      <div className="container">
        <h1 className="contact-title text-center mb-5 animate-title">
          Get in <span className="highlight">Touch</span>
        </h1>
        <form
          className="contact-form mx-auto animate-form"
          onSubmit={handleSubmit}
          noValidate
          style={{ maxWidth: '600px' }}
        >
          <div className="form-group mb-4">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control animated-input"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control animated-input"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control animated-input"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-submit animate-button">
            Send Message
          </button>

          {status && <p className="status-message mt-3">{status}</p>}
        </form>
      </div>
    </section>
    </div>
    <Footer/>
  </>
  )
}

export default Contact