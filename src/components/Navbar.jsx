import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <img src="/images/logo.png" alt="Sulpest Logo" className="navbar-logo" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">A Empresa</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a href="https://wa.me/5554991384396" target="_blank" className="btn-cta">Orçamento Grátis</a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .navbar.scrolled {
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          height: 100px;
          width: auto;
          display: block;
          transition: var(--transition);
        }

        [data-theme='light'] .navbar-logo {
          filter: contrast(1.1) brightness(0.9) drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .navbar.scrolled .navbar-logo {
          height: 70px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          transition: var(--transition);
        }

        [data-theme='light'] .nav-links a {
          color: hsl(220, 45%, 15%);
          font-weight: 700;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .theme-toggle {
          background: var(--glass);
          border: 1px solid var(--glass-border);
          color: var(--text);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .theme-toggle:hover {
          background: var(--glass-border);
          transform: scale(1.1);
        }

        .btn-cta {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white !important;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-weight: 700 !important;
          box-shadow: 0 10px 20px var(--primary-glow);
        }

        .btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px var(--primary-glow);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
