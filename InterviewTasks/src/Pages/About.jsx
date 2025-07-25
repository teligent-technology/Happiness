import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './About.css';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-section py-5">
        <div className="container">
          <h1 className="mb-5 text-center animate-title">
            About <span>Happiness Plans</span>
          </h1>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="img-wrapper animate-image">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Happy people"
                  className="img-fluid rounded shadow-lg"
                />
                <div className="glow"></div>
              </div>
            </div>

            <div className="col-md-6 animate-text">
              <p className="lead">
                At <strong>Happiness Plans</strong>, our mission is to empower individuals to lead
                happier and healthier lives through thoughtful planning and positive actions.
              </p>
              <p>
                Founded in 2025, we combine technology and psychology to offer personalized
                strategies, workshops, and tools designed to boost well-being and personal growth.
              </p>
              <p>
                Our passionate team creates a supportive community where every step towards happiness
                is celebrated and nurtured.
              </p>
              <ul className="list-unstyled mt-4 features-list">
                <li>✔️ Personalized happiness planning</li>
                <li>✔️ Engaging workshops & webinars</li>
                <li>✔️ Advanced wellness tracking tools</li>
                <li>✔️ Community support and engagement</li>
              </ul>
              <button className="btn btn-primary mt-4 animate-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
