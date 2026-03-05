import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/assets/sbjt-logo.png" alt="Shri Bihari Ji Traders Logo" className="logo-img" />
                </Link>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsOpen(false)}>Home</Link>
                    
                    <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
