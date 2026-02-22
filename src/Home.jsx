import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="app-container">
      <div className="animated-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Cathy Cleans</h1>
          <div className="header-right">
            <a href="https://wa.me/256788010587" target="_blank" rel="noopener noreferrer" className="phone-number">
              📱 +256 788010587
            </a>
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Professional Cleaning Services</h2>
          <p className="hero-subtitle">Sparkling clean homes and offices, every time</p>
          <Link to="/contact" className="cta-button">Get a Free Quote</Link>
        </div>
      </section>
      <section id="services" className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Residential Cleaning</h3>
            <p>Complete home cleaning services tailored to your needs</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Commercial Cleaning</h3>
            <p>Professional office and business space cleaning</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Deep Cleaning</h3>
            <p>Thorough cleaning for every corner of your space</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🪟</div>
            <h3>Window Cleaning</h3>
            <p>Crystal clear windows inside and out</p>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Experienced Team</h3>
                <p>Years of professional cleaning expertise</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Eco-Friendly Products</h3>
                <p>Safe for your family and the environment</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h3>100% Satisfaction</h3>
                <p>We guarantee quality results every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">Ready for a cleaner space? Contact us today!</p>
        <Link to="/contact" className="cta-button">Schedule Now</Link>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📧 cathycleans@example.com</p>
            <p>📱 +256 788010587</p>
          </div>
          <div className="footer-section">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="footer-section">
            <h3>Service Areas</h3>
            <p>Kampala & Surrounding Areas</p>
            <p>Professional Cleaning Services</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Cathy Cleans. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
