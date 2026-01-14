import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text reveal">
                    <span className="badge">Tecnologia Anti-Pragas</span>
                    <h1>Protegendo seu ambiente com <span>excelência</span></h1>
                    <p>Especialistas em controle de pragas com tecnologia de ponta e compromisso com sua saúde e bem-estar.</p>
                    <div className="hero-btns">
                        <a href="https://wa.me/5554991384396" target="_blank" className="btn primary">Solicitar Orçamento</a>
                        <a href="#services" className="btn outline">Conhecer Serviços</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
