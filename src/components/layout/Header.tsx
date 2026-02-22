import { Link } from 'react-router-dom';

interface HeaderProps {
  variant?: 'default' | 'contact';
}

function Header({ variant = 'default' }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Cathy Cleans</Link>
        <div className="header-right">
          <a 
            href="https://wa.me/256788010587" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="phone-number"
          >
            📱 +256 788010587
          </a>
          {variant === 'default' && (
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <Link to="/contact">Contact</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;