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
                                <div className="icon">🛡️</div>
                                <h3>Missão</h3>
                                <p>Proteger ambientes com excelência e compromisso.</p>
                            </div>
                            <div className="value-item">
                                <div className="icon">👁️</div>
                                <h3>Visão</h3>
                                <p>Ser referência em controle de pragas moderno.</p>
                            </div>
                            <div className="value-item">
                                <div className="icon">🤝</div>
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
