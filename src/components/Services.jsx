import React from 'react';

const services = [
    {
        title: "Desinsetização",
        desc: "Controle eficaz de insetos rasteiros e voadores com métodos seguros.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v2M7.5 4.5l1.5 1.5M16.5 4.5l-1.5 1.5M4 12h2M18 12h2M7.5 19.5l1.5-1.5M16.5 19.5l-1.5-1.5M12 20v2M12 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z" />
                <path d="m14 14-2.5-2.5" />
            </svg>
        ),
        image: "/images/desinsetizacao_upload.jpg"
    },
    {
        title: "Desratização",
        desc: "Gestão inteligente e eliminação de focos de roedores em qualquer ambiente.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 5a2 2 0 1 1 4 0c0 .5-.2 1.3-.5 1.9l-1 1.6C12 9 11 9 10 8.5l-1-1.6c-.3-.6-.5-1.4-.5-1.9a2 2 0 1 1 1.5 0z" />
                <path d="M18 11h-5v5m-1 1H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                <path d="M20 11v2a4 4 0 0 1-4 4h-2" />
            </svg>
        ),
        image: "/images/desratizacao_upload.jpg"
    },
    {
        title: "Controle Integrado",
        desc: "Monitoramento contínuo e preventivo para indústrias e comércios.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10M18 20V4M6 20v-4" />
                <path d="M3 20h18" />
            </svg>
        ),
        image: "/images/controle_integrado_upload.jpg"
    },
    {
        title: "Sanitização",
        desc: "Eliminação de microrganismos prejudiciais à saúde do seu ambiente.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        image: "/images/sanitizacao_upload.jpg"
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title reveal">
                    <h2>Nossas Soluções</h2>
                    <p>Serviços especializados com tecnologia avançada para garantir a segurança do seu patrimônio.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-img">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
