import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🧘‍♂️',
      title: 'Mindfulness Workshops',
      description:
        'Join our expert-led workshops to cultivate mindfulness and reduce stress in daily life.',
      color: '#6a9fb5',
    },
    {
      icon: '📅',
      title: 'Personalized Planning',
      description:
        'Get tailor-made happiness plans designed to fit your unique lifestyle and goals.',
      color: '#c27ba0',
    },
    {
      icon: '📈',
      title: 'Wellness Tracking',
      description:
        'Track your progress with our intuitive wellness tools and stay motivated every day.',
      color: '#90be6d',
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description:
        'Engage with a vibrant community that supports and celebrates your happiness journey.',
      color: '#f8961e',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="services-section">
        <div className="container">
          <h1 className="services-title">Our <span className="highlight">Services</span></h1>
          <div className="row g-4">
            {services.map(({ icon, title, description, color }, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="service-card" tabIndex={0} style={{ borderTopColor: color }}>
                  <div className="service-icon" style={{ backgroundColor: color }}>
                    {icon}
                  </div>
                  <h3 className="service-title">{title}</h3>
                  <p className="service-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Services
