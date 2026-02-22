import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="animated-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;