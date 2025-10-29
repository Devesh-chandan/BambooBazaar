import React from 'react';

const statsData = [
    { label: 'Recycling', progress: 95 },
    { label: 'Ocean Cleanup', progress: 80 },
];

const Future = () => {
    return (
        <section className="future">
            <div className="container">
                <div className="future-content">
                    <div className="future-text">
                        <span className="section-subtitle">OUR MISSION</span>
                        <h2 className="section-title">
                            Getting A Greener Future Safe Environment
                        </h2>
                        <p>
                            Completely synergize resource taxing relationships via premier
                            niche markets. Professionally cultivate one-to-one customer
                            service with robust ideas.
                        </p>
                        <div className="stats">
                            {statsData.map((stat, index) => (
                                <div className="stat-item" key={index}>
                                    <span className="stat-label">{stat.label}</span>
                                    <div className="stat-bar">
                                        <div
                                            className="stat-progress"
                                            style={{ width: `${stat.progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="stat-value">{stat.progress}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="future-image">
                        <img
                            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Green Future"
                            className="future-img"
                        />
                        <div className="planet-badge">
                            <span className="planet-text">SAVE PLANET</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Future;