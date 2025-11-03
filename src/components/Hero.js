import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-subtitle">BEYOND COMMERCE. A COMMUNITY.</span>
                        <h1 className="hero-title">Crafted by Hand. Shared with Heart.</h1>
                        <p className="hero-description">
                            A marketplace where every product tells a story. We connect you with talented bamboo artisans, empowering their communities with every sale
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">Discover Their Stories</button>
                            <button className="btn-secondary">Read More</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default Hero;