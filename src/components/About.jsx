import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image reveal">
                        <div className="glass-card image-container">
                            <img src="/images/about_upload.jpg" alt="Sulpest Tecnologia" />
                        </div>
                    </div>
                    <div className="about-info reveal">
                        <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                            <h2>A Sulpest</h2>
                        </div>
                        <p>A Sulpest Tecnologia Anti-Pragas nasceu com a missão de proteger ambientes com excelência, comprometida com a saúde e o bem-estar de nossos clientes. Utilizamos as técnicas mais modernas do mercado para garantir ambientes livres de insetos e roedores.</p>

                        <div className="values-grid">
                            <div className="value-item">
                                <div className="icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h3>Missão</h3>
                                <p>Proteger ambientes com excelência e compromisso.</p>
                            </div>
                            <div className="value-item">
                                <div className="icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h3>Visão</h3>
                                <p>Ser referência em controle de pragas moderno.</p>
                            </div>
                            <div className="value-item">
                                <div className="icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 3h12l4 6-10 12L2 9z" />
                                        <path d="M11 3 8 9l4 12 4-12-3-6" />
                                        <path d="M2 9h20" />
                                    </svg>
                                </div>
                                <h3>Valores</h3>
                                <p>Ética, segurança e inovação constante.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
