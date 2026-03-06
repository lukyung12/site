import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setDarkMode(theme === 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    const mailtoLink = `mailto:tidyspacesug@gmail.com?subject=Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
    
    setStatus('sent')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <a href="https://wa.me/256788010587" target="_blank" rel="noopener noreferrer" className="phone-number">
        📱 +256 788010587
      </a>
      <button className="theme-toggle-fixed" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
        {darkMode ? '☀️' : '🌙'}
      </button>
      <Link to="/" className="home-link-fixed">Home</Link>
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <img src="/site/logo/logo.jpeg" alt="Tidy Spaces Logo" className="logo-image" />
            <h1 className="logo">TIDY SPACES</h1>
          </Link>
        </div>
      </header>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+256 XXX XXX XXX"
            />
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your cleaning needs..."
            />
          </div>
          <button type="submit" className="submit-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <p className="success-message">
              Your email client will open. Please send the email to complete your inquiry.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
