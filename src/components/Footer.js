import React from 'react';

// --- YOUR CUSTOM CONTACT INFO ---
const contactInfo = {
  phone: "+91 72769 64566",
  name: "Dattatray Mane Khopi",
  coordinates: "18.31635, 73.84421"
};
// ---------------------------------

// Google Maps embed URL
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15144.443012190142!2d73.84420756908023!3d18.316352946525818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDE4JzU4LjkiTiA3M8KwNTAnMzkuMiJF!5e0!3m2!1sen!2sin!4v1678888888888";

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-main-content">
                    
                    {/* Column 1: About (CLASSNAME IS NOW "footer-about") */}
                    <div className="footer-column footer-about">
                        <div className="footer-logo">
                            <span className="logo-text">BambooBazaar</span>
                        </div>
                        <p className="footer-text">
                            Creating a sustainable future for generations to come.
                            Join us in making the world greener.
                        </p>
                    </div>

                    {/* Column 2: Working Contact Info */}
                    <div className="footer-column contact">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <span>📞</span>
                                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                            </li>
                            <li>
                                <span>📍</span>
                                <p>{contactInfo.coordinates}</p>
                            </li>
                            <li>
                                <span>👤</span>
                                <p>{contactInfo.name}</p>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Location Map */}
                    <div className="footer-column location">
                        <h3 className="footer-heading">Our Location</h3>
                        <div className="map-container">
                            <iframe 
                                src={mapEmbedUrl}
                                width="100%" 
                                height="200" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Location"
                            ></iframe>
                        </div>
                    </div>

                </div>
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} BambooBazaar. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;