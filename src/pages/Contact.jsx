import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page animate-fade-in">
            <div className="page-header contact-header">
                <div className="header-overlay"></div>
                <div className="container header-content">
                    <h1>Contact Us</h1>
                    <p>Get in touch for materials, quotes, or general inquiries.</p>
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span className="separator">/</span> <span>Contact</span>
                    </div>
                </div>
            </div>

            <div className="container contact-container">
                <div className="contact-details card">
                    <h2>Shri Bihari Ji Traders</h2>
                    <p className="contact-desc">Complete Building Material Solution</p>

                    <div className="contact-info-list">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3>Visit Our Shop</h3>
                                <p>Shri Bihari Ji Traders
                                    <br />Near New Anaj Mandi<br />
                                    Rupbas, Bharatpur, Rajasthan - 321404</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p><a href="tel:+919876543210">+91 8058568850</a></p>
                                <p className="contact-subtext">For quick assistance and quotes</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3>Working Hours</h3>
                                <p>Monday - Sunday</p>
                                <p className="contact-time">8:00 AM – 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-visuals card">
                    <div className="contact-map">
                        <h3>Store Location</h3>
                        {/* Embed a generic Google Map layout iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14221.298829388024!2d77.5666556871582!3d26.988276400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973eac831b238b5%3A0x8b24be25a78e9e7d!2sShri%20Bihari%20Ji%20Traders!5e0!3m2!1sen!2sin!4v1772690209094!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Shop Location Map"
                        ></iframe>
                    </div>

                    <div className="contact-greeting">
                        <h3>Your Trusted Construction Material Partner</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
