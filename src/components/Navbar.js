import React, { useState } from 'react';

// --- 1. ACCEPT 'onContactClick' PROP ---
const Navbar = ({ onGetQuoteClick, onContactClick }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    // This handler is now only for internal smooth-scroll links
    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsActive(false); // Close menu on link click
    };

    // --- 2. REMOVE 'Contact' FROM THIS ARRAY ---
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '/my-document.pdf', label: 'View PDF' },
        // { href: '#contact', label: 'Contact' }, <-- REMOVED FROM HERE
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img
                        src="https://iili.io/Kxs4Eqx.png"
                        alt="Echofy Logo"
                        className="sustainable-image"
                    />
                </div>
                <ul className={isActive ? 'nav-menu active' : 'nav-menu'}>
                    {navLinks.map((link) => {
                        const isInternalLink = link.href.startsWith('#');

                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    onClick={isInternalLink ? (e) => handleLinkClick(e, link.href) : null}
                                    target={isInternalLink ? '_self' : '_blank'}
                                    rel={isInternalLink ? null : 'noopener noreferrer'}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                    
                    {/* --- 3. ADD 'Contact' LINK MANUALLY WITH NEW ONCLICK --- */}
                    <li>
                        <a 
                          href="#" 
                          className="nav-link" 
                          onClick={(e) => {
                            e.preventDefault(); // Stop link from jumping
                            onContactClick();     // Call the function from App.js
                            setIsActive(false);   // Close mobile menu if open
                          }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <button 
                  className="cta-button" 
                  onClick={onGetQuoteClick} 
                  type="button"
                >
                  Get A Quote
                </button>
                <div className={isActive ? 'hamburger active' : 'hamburger'} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;