import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Environmental sustainability"
              className="sustainable-image"
            />
            <div className="award-badge">
              <span className="award-icon">🏆</span>
              <span className="award-text">AWARD WINNING</span>
            </div>
          </div>
          <div className="about-text">
            <span className="section-subtitle">ABOUT ECHOFY</span>
            <h2 className="section-title">
              Environmental Sustainable Forever Green Future
            </h2>

            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <div className="feature-content">
                <h3>Economic Benefits</h3>
                <p>
                  Alternative innovation after ethical network environmental
                  professional transparent growth natural data.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <div className="feature-content">
                <h3>Safe Environment</h3>
                <p>
                  Alternative innovation after ethical network environmental
                  professional transparent growth natural data.
                </p>
              </div>
            </div>

            <button className="btn-primary">More About</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
