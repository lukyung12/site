import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ImageSlider from './components/ImageSlider';

function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setDarkMode(theme === 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  
 const sliderImages = [
    '/site/images/ceiling.jpeg',
    '/site/images/pavers.jpeg',      // ⬅️ rename from "pavers 1.jpeg" to avoid spaces
    '/site/images/House.jpg', // ⬅️ rename from "house 2.jpeg" to avoid spaces  
    '/site/images/rug.jpg',
    '/site/images/cleaners.jpeg',
  ];


  return (
    <div className="app-container">
      <div className="animated-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <button className="theme-toggle-fixed" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
        {darkMode ? '☀️' : '🌙'}
      </button>
      <nav className="nav-fixed">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <Link to="/contact">Contact</Link>
      </nav>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src="/site/logo/logo.jpeg" alt="Tidy Spaces Logo" className="logo-image" />
            <h1 className="logo">TIDY SPACES</h1>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Professional Cleaning Services</h2>
            <p className="hero-subtitle">Tidy Spaces (U) Ltd is a full-service cleaning company committed to delivering top notch cleaning solutions to both residential and commercial clients. We offer a wide range of services customized to meet the unique needs of our clients with plans for regional expansion </p>
            <Link to="/contact" className="cta-button">Get a Free Quote</Link>
          </div>
  <div className="hero-images">
            <ImageSlider images={sliderImages} interval={4000} transitionMs={700} />
          </div>
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
            <p>Professional office, retail, warehouse and business space cleaning</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Domestic Deep Cleaning and regular maintenance</h3>
            <p>Thorough cleaning for every corner of your space</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🪟</div>
            <h3>Window and rooftop cleaning</h3>
            <p>Crystal clear windows and rooftile cleaning inside and out</p>
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
                <p>Quality is the heart of what we do with years of professional cleaning expertise </p>
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
            <p>📧 tidyspacesug@gmail.com</p>
            <p className="phone-bold">📱 <a href="https://wa.me/256788010587" target="_blank" rel="noopener noreferrer">+256 788010587</a></p>
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
          <p>© 2026 Tidy Spaces. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
