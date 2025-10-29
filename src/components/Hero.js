import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-subtitle">NATURAL ENVIRONMENT</span>
                        <h1 className="hero-title">Be Safe Controls Environment</h1>
                        <p className="hero-description">
                            Professionally optimize interdependent intellectual capital
                            without excellent best practices. Progressively fabricate
                            client-centric innovation.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">Let's Go</button>
                            <button className="btn-secondary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="hero-ticker">
                    <div className="ticker-content">
                        <span>Ocean-Recycling</span>
                        <span>Environmental</span>
                        <span>Renewable-Energy</span>
                        <span>Ocean-Recycling</span>
                        <span>Environmental</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;