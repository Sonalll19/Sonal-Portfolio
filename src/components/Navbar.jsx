import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`header ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="logo">
                {/* Replaced with a placeholder image for demo purposes */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_E2U1MxiROVF_LWzglS3zq6NkVUw4xJWqw&s" alt="logo" />
            </div>
            
            {/* Logic to add 'responsive' class based on state */}
            <div className={`links ${menuOpen ? 'responsive' : ''}`}>
                <ul className="ulist">
                    <li className="navlist">
                        <Link to="/" className="navlink" onClick={() => setMenuOpen(false)}>Sonal</Link>
                    </li>
                    <li className="navlist">
                        <Link to="/about" className="navlink" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li className="navlist">
                        <Link to="/projects" className="navlink" onClick={() => setMenuOpen(false)}>Projects</Link>
                    </li>
                    <li className="navlist">
                        <Link to="/certificate" className="navlink" onClick={() => setMenuOpen(false)}>Certificate</Link>
                    </li>
                    <li className="navlist">
                        <Link to="/contact" className="navlink" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
            
            <div className="navbtn">
                <button className="btn"><Link to="/resume" onClick={() => setMenuOpen(false)}>Download CV</Link> <i className="uil uil-file-alt"></i></button>
            </div>
            
            <div className="menubtn">
                <i className="uil uil-bars" onClick={toggleMenu}></i>
            </div>
        </nav>
    );
};

export default Navbar;