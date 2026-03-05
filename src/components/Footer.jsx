import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Shri Bihari Ji Traders</h3>
                    <p className="footer-desc">
                        Complete Building Material Solution – From Foundation to Finishing. Your trusted partner for building your dream home.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <div className="footer-info">
                        <div className="info-item">
                            <MapPin size={18} className="flex-shrink-0" style={{ minWidth: '18px' }} />
                            <span>Near New Anaj Mandi, Rupbas, Bharatpur, Rajasthan - 321404</span>
                        </div>
                        <div className="info-item">
                            <Phone size={18} />
                            <span><a href="tel:+918058568850">+91 8058568850</a></span>
                        </div>
                        <div className="info-item">
                            <Clock size={18} />
                            <span>Open Daily: 8:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shri Bihari Ji Traders. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
