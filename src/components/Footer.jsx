import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="/images/logo.png" alt="Sulpest Logo" className="footer-logo" />
                        <p>Inovação e segurança no controle de pragas.</p>
                    </div>

                    <style jsx>{`
                        .footer-logo {
                            height: 100px;
                            max-width: 100%;
                            width: auto;
                            display: block;
                            margin-bottom: 20px;
                            object-fit: contain;
                            transition: var(--transition);
                        }
                        [data-theme='light'] .footer-logo {
                            background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7));
                            padding: 10px 20px;
                            border-radius: 15px;
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                        }
                        @media (max-width: 480px) {
                            .footer-logo {
                                height: 80px;
                                padding: 8px 15px;
                            }
                        }
                    `}</style>

                    <div className="footer-links">
                        <h4>Navegação</h4>
                        <a href="#home">Home</a>
                        <a href="#about">A Sulpest</a>
                        <a href="#services">Serviços</a>
                        <a href="#contact">Contato</a>
                    </div>

                    <div className="footer-social">
                        <h4>Siga-nos</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon">Instagram</a>
                            <a href="#" className="social-icon">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sulpest Tecnologia Anti-Pragas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
