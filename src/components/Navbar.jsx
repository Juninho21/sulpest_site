import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <img src="/images/logo.png" alt="Sulpest Logo" className="navbar-logo" />
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>A Empresa</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          <a href="https://wa.me/5554991384396" target="_blank" className="btn-cta mobile-only">WhatsApp</a>
        </div>

        <div className="nav-actions">
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

          <a href="https://wa.me/5554991384396" target="_blank" className="btn-cta desktop-only">Orçamento Grátis</a>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
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

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
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

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .desktop-only { display: block; }
        .mobile-only { display: none; }

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
          background: transparent;
          border: none;
          color: var(--text);
          width: 40px;
          height: 40px;
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

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background: var(--text);
          margin: 6px 0;
          transition: var(--transition);
        }

        .hamburger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        @media (max-width: 992px) {
          .mobile-menu-btn { 
            display: block; 
            padding: 12px;
            margin-right: -10px;
          }
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          
          .navbar-logo { height: 70px; }
          .navbar.scrolled .navbar-logo { height: 60px; }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 85%;
            max-width: 320px;
            height: 100dvh; /* Dynamic viewport height para mobile */
            background: var(--bg);
            flex-direction: column;
            justify-content: center;
            padding: 60px 40px;
            transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
            z-index: 1000;
            gap: 1.5rem;
          }

          .nav-links.active { right: 0; }
          
          .nav-links a {
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px solid var(--glass-border);
            font-size: 1.1rem;
          }

          .nav-links a:last-child {
            border-bottom: none;
          }

          .btn-cta.mobile-only { 
            width: 100%; 
            text-align: center;
            margin-top: 1.5rem;
            padding: 1.2rem;
            font-size: 1.1rem;
          }

          /* Overlay para fechar o menu ao clicar fora */
          .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(4px);
            opacity: 0;
            visibility: hidden;
            transition: 0.4s;
            z-index: 999;
          }

          .menu-overlay.active {
            opacity: 1;
            visibility: visible;
          }
        }

        @media (max-width: 480px) {
           .theme-toggle {
             width: 45px;
             height: 45px;
           }
           .nav-actions { gap: 0.5rem; }
           .nav-links { width: 90%; }
        }
      `}</style>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
    </nav>
  );
};

export default Navbar;
