import React from 'react';

const servicesData = [
    {
        icon: '♻️',
        title: 'Dirty Recycling',
        description: 'Alternative innovation after ethical network environmental professional transparent growth natural data.',
        imgSrc: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400',
        imgAlt: 'Recycling',
    },
    {
        icon: '🌿',
        title: 'Safe Environment',
        description: 'Alternative innovation after ethical network environmental professional transparent growth natural data.',
        imgSrc: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400',
        imgAlt: 'Safe Environment',
    },
    {
        icon: '🌊',
        title: 'Cleaning Ocean',
        description: 'Alternative innovation after ethical network environmental professional transparent growth natural data.',
        imgSrc: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
        imgAlt: 'Ocean Cleaning',
    },
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <span className="section-subtitle">OUR SERVICES</span>
                    <h2 className="section-title">
                        Echofy Provide Environment Best Leading Services
                    </h2>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <img
                                src={service.imgSrc}
                                alt={service.imgAlt}
                                className="service-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;