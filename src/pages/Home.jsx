import { useEffect, useRef } from 'react';
import {
    Building2,
    Droplets,
    Paintbrush,
    ShieldCheck,
    ThumbsUp,
    Users,
    MapPin,
    ChevronRight,
    HardHat,
    Wrench,
    Hammer
} from 'lucide-react';
import './Home.css';

const Home = () => {
    const observerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !observerRefs.current.includes(el)) {
            observerRefs.current.push(el);
        }
    };

    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="spiritual-greeting animate-fade-in">
                        <span>॥ श्री बिहारी जी महाराज की जय ॥</span>
                    </div>
                    <div className="trust-strip animate-fade-in">
                        <span className="trust-label">Authorized Dealer of Trusted Brands</span>
                        <div className="trust-brands">
                            <span>Bangur Cement</span> &bull; <span>Asian Paints</span> &bull; <span>Birla Opus Paint</span> &bull; <span>JK Cement</span> &bull; <span>Sparsh</span> &bull; <span>Kasta</span> &bull; <span>Victus Tanks</span>
                        </div>
                    </div>
                    <h1 className="animate-fade-in">Your Trusted Building Material Supplier</h1>

                    <div className="hero-buttons animate-fade-in">
                        <a href="https://maps.app.goo.gl/SEf22ahk9f2xHj2h7" target="_blank" rel="noopener noreferrer" className="btn hero-btn-secondary">Visit Our Store</a>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section className="section about-section scroll-fade-in" ref={addToRefs}>
                <div className="container about-container">
                    <div className="about-image-wrapper">
                        <img src="/assets/sbjt-hero2.png" alt="Building Materials and Construction Supplies" className="about-image" />
                    </div>
                    <div className="about-content">
                        <h2 className="section-title text-left">Your Trusted Partner in Construction Materials</h2>
                        <p className="about-description">
                            Shri Bihari Ji Traders provides complete building materials from foundation to finishing.
                        </p>

                        <ul className="about-highlight-list">
                            <li><ChevronRight size={18} className="list-icon" /> Cement, Bajri, Gitti, and Steel (Sariya)</li>
                            <li><ChevronRight size={18} className="list-icon" /> Sanitary items and plumbing fittings</li>
                            <li><ChevronRight size={18} className="list-icon" /> Pipes, washbasins, and water tanks</li>
                            <li><ChevronRight size={18} className="list-icon" /> Distemper, wall paints, and painting supplies</li>
                        </ul>

                        <div className="about-badges">
                            <div className="about-badge">
                                <Building2 size={20} className="badge-icon" />
                                <span>Complete Construction Materials</span>
                            </div>
                            <div className="about-badge">
                                <ShieldCheck size={20} className="badge-icon" />
                                <span>Authorized Brand Dealer</span>
                            </div>
                            <div className="about-badge">
                                <Users size={20} className="badge-icon" />
                                <span>Trusted by Builders & Contractors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="section solutions-section scroll-fade-in" ref={addToRefs}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Everything You Need to Build Your Dream Home</h2>
                        <p className="section-subtitle">Complete materials from foundation to finishing, all available in one place.</p>
                    </div>

                    <div className="grid grid-cols-3 solutions-grid">
                        <div className="modern-solution-card">
                            <div className="modern-card-image-wrapper">
                                <img src="/assets/sbjt-hero3.webp" alt="Construction Materials" className="modern-card-image" />
                            </div>
                            <div className="modern-card-content">
                                <h3>Construction Materials</h3>
                                <ul className="modern-card-list">
                                    <li>Cement (Bangur, JK)</li>
                                    <li>Bajri & Gitti</li>
                                    <li>Steel (Sariya)</li>
                                    <li>Concrete blocks</li>
                                </ul>
                            </div>
                        </div>

                        <div className="modern-solution-card">
                            <div className="modern-card-image-wrapper">
                                <img src="/assets/sbjt-hero4.webp" alt="Sanitary & Water Fittings" className="modern-card-image" />
                            </div>
                            <div className="modern-card-content">
                                <h3>Sanitary & Water Fittings</h3>
                                <ul className="modern-card-list">
                                    <li>Pipes & fittings (Kasta)</li>
                                    <li>Washbasins & taps</li>
                                    <li>Plumbing accessories</li>
                                    <li>Water tanks (Victus)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="modern-solution-card">
                            <div className="modern-card-image-wrapper">
                                <img src="/assets/sbjt-hero5.webp" alt="Paint & Finishing" className="modern-card-image" />
                            </div>
                            <div className="modern-card-content">
                                <h3>Paint & Finishing</h3>
                                <ul className="modern-card-list">
                                    <li>Wall paints (Asian Paints, Opus)</li>
                                    <li>Distemper & rubber paint</li>
                                    <li>Brushes & rollers</li>
                                    <li>Painting tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Authorized Brands Section */}
            <section className="section brands-section">
                <div className="container">
                    <h2 className="section-title">Our Trusted Brand Partnerships</h2>
                    <div className="brands-grid">
                        <div className="brand-card">
                            <img src="/assets/bangur.png" alt="Bangur Cement" className="brand-logo" />
                            <h3>Bangur Cement</h3>
                        </div>
                        <div className="brand-card">
                            <img src="/assets/asian.png" alt="Asian Paints" className="brand-logo" />
                            <h3>Asian Paints</h3>
                        </div>
                        <div className="brand-card">
                            <img src="/assets/Kasta Pipes _ Kriti Industries.png" alt="Kasta Pipes" className="brand-logo" />
                            <h3>Kasta</h3>
                        </div>
                        <div className="brand-card">
                            <img src="/assets/Vectus.png" alt="Victus Water Tank" className="brand-logo" />
                            <h3>Victus</h3>
                        </div>
                        <div className="brand-card">
                            <img src="/assets/JK Cement - Brand Logo.png" alt="JK Cement" className="brand-logo" />
                            <h3>JK Cement</h3>
                        </div>
                        <div className="brand-card">
                            <img src="/assets/opus.png" alt="Birla Opus Paint" className="brand-logo" />
                            <h3>Birla Opus Paint</h3>
                        </div>
                        <div className="brand-card">
                            <img src="/assets/pearls.png" alt="Precision" className="brand-logo" />
                            <h3>Sparsh Pearl</h3>
                        </div>
                    </div>
                </div>
            </section >

            {/* Gallery Section */}
            < section className="section gallery-section" >
                <div className="container">
                    <h2 className="section-title">Our Product Gallery</h2>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src="/assets/sbjt-gallery1.jpg" alt="Cement Storage" />
                        </div>
                        <div className="gallery-item">
                            <img src="/assets/sbjt-gallery2.jpg" alt="Sanitary Fittings" />
                        </div>
                        <div className="gallery-item">
                            <img src="/assets/sbjt-gallery3.jpg" alt="Paint Section" />
                        </div>
                        <div className="gallery-item">
                            <img src="/assets/sbjt-hero6.webp" alt="Hardware Stock" />
                        </div>
                        <div className="gallery-item">
                            <img src="/assets/sbjt-gallery4.jpg" alt="Construction Materials" />
                        </div>
                        <div className="gallery-item">
                            <img src="/assets/sbjt-gallery5.jpg" alt="Store Interior" />
                        </div>
                    </div>
                </div>
            </section >

            {/* Trust & Certification Section */}
            < section className="section trust-section" >
                <div className="container trust-container">
                    <div className="trust-content">
                        <h2 className="section-title text-left">Authorized Dealer & Trusted Supplier</h2>
                        <p>
                            We are recognized and authorized dealers for India's leading building material manufacturing companies. Our direct partnerships ensure you get 100% genuine products at competitive prices.
                        </p>
                        <ul className="trust-list">
                            <li><ShieldCheck size={20} className="text-accent" /> Verified Supplier</li>
                            <li><ThumbsUp size={20} className="text-accent" /> Quality Assured Quality</li>
                            <li><Users size={20} className="text-accent" /> Expert Consultations</li>
                        </ul>
                    </div>
                    <div className="trust-image-wrapper">
                        <img src="/assets/cert.png" alt="Authorized Dealership Certificate" className="trust-image" />
                    </div>
                </div>
            </section >

            {/* Why Choose Us Section */}
            < section className="section features-section" >
                <div className="container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="grid grid-cols-4">
                        <div className="feature-card">
                            <ShieldCheck size={36} className="feature-icon" />
                            <h4>Genuine Products</h4>
                            <p>100% authentic branded materials.</p>
                        </div>
                        <div className="feature-card">
                            <Building2 size={36} className="feature-icon" />
                            <h4>Complete Solution</h4>
                            <p>Everything you need under one roof.</p>
                        </div>
                        <div className="feature-card">
                            <MapPin size={36} className="feature-icon" />
                            <h4>Trusted Local</h4>
                            <p>Reliable neighborhood supplier.</p>
                        </div>
                        <div className="feature-card">
                            <ThumbsUp size={36} className="feature-icon" />
                            <h4>All-in-One Place</h4>
                            <p>From foundation to finishing items.</p>
                        </div>
                    </div>
                </div>
            </section >

            

            {/* Location Section */}
            < section className="section location-section" >
                <div className="container location-container">
                    <div className="location-content">
                        <h2 className="section-title text-left">Visit Our Store</h2>
                        <div className="location-info">
                            <MapPin size={24} className="text-accent" />
                            <p>Shri Bihari Ji Traders<br />Near New Anaj Mandi<br />Rupbas, Bharatpur, Rajasthan - 321404</p>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/SEf22ahk9f2xHj2h7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Get Directions
                        </a>
                    </div>
                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14221.298829388024!2d77.5666556871582!3d26.988276400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973eac831b238b5%3A0x8b24be25a78e9e7d!2sShri%20Bihari%20Ji%20Traders!5e0!3m2!1sen!2sin!4v1772690209094!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Shop Location Map"
                        ></iframe>
                    </div>
                </div>
            </section >

            {/* Final CTA Section */}
            < section className="section cta-section" >
                <div className="container cta-container">
                    <h2>Building Your Dream Home?</h2>
                    <p>Get All Construction Materials in One Place with Premium Quality and Trust.</p>
                    <div className="cta-buttons">
                        <a href="tel:+918058568850" className="btn btn-primary">Call Now</a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Shri+Bihari+Ji+Traders+Rupbas" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Store</a>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
