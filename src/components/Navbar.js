import React, { useState } from 'react';

const Navbar = () => {
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

    // Updated navLinks array with the new PDF link
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '/my-document.pdf', label: 'View PDF' }, // Example PDF link
        { href: '#contact', label: 'Contact' },
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
                                    // Only use the custom click handler for internal links
                                    onClick={isInternalLink ? (e) => handleLinkClick(e, link.href) : null}
                                    // Open external links (like our PDF) in a new tab for better UX
                                    target={isInternalLink ? '_self' : '_blank'}
                                    // Important for security when using target="_blank"
                                    rel={isInternalLink ? null : 'noopener noreferrer'}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <button className="cta-button">Get A Quote</button>
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