import React from 'react'
import { Link } from 'react-router-dom'

function FooterTwo() {
    return (
        <footer className="footer-wrapper bg-title footer-layout2">
            <div className="widget-area">
                <div className="container">
                    <div className="newsletter-area hide-mobile">
                        <div className="newsletter-top">
                            <div className="row gy-4 align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="newsletter-title text-white text-capitalize mb-0">
                                        get updated the latest newsletter
                                    </h2>
                                </div>
                                <div className="col-lg-7">
                                    <form className="newsletter-form style2">
                                        <input
                                            className="form-control "
                                            type="email"
                                            placeholder="Enter Email"
                                            required=""
                                        />
                                        <button type="submit" className="th-btn style1">
                                            Message Now <img src="/assets/img/icon/plane2.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo" style={{marginLeft:'-20px' }}>
                                        <Link to="/">
                                            <img src="/assets/img/rg/logo.png" alt="Tourm" />
                                        </Link>
                                        <style>{`@media(max-width:768px){
                                        .about-logo{
                                        margin-top:-60px !important;
                                        }
                                        .about-logo img{
                                        height:60px;
                                        }
                                        }`}</style>
                                    </div>
                                    <p className="about-text">
                                        We welcome you to relax, celebrate, and enjoy unforgettable moments together.
                                    </p>
                                    <div className="th-social">
                                        <Link to="https://www.facebook.com/share/18V9GeiVPn/?mibextid=wwXIfr" target='blank'>
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        {/* <Link to="https://www.twitter.com/" target='blank'>
                                            <i className="fab fa-twitter" />
                                        </Link> */}
                                        {/* <Link to="https://www.linkedin.com/" target='blank'>
                                            <i className="fab fa-linkedin-in" />
                                        </Link> */}
                                        <Link to="https://wa.me/919036023696" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <Link to="https://wa.me/919741983696" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp" />
                                        </Link>
                                        <Link to="https://www.instagram.com/royalgardenbeachresortofficial?igsh=MXN4bTU3bzRndWhnag==" target='blank'>
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto hide-mobile">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/garden">Garden</Link>
                                        </li>
                                        <li>
                                            <Link to="/rooms">Rooms</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Get In Touch</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <a href="tel:+919036023696" className="info-box_link">
                                                    +91 9036023696
                                                </a>
                                            </p>
                                            <p>
                                                <a href="tel:+919741983696" className="info-box_link">
                                                    +91 9741983696
                                                </a>
                                            </p>
                                            <p>
                                                <a href="tel:+919632053696" className="info-box_link">
                                                    +91 9632053696
                                                </a>
                                            </p>
                                            {/* <p>
                                                <Link to="/tel:+09876543210" className="info-box_link">
                                                    +09 876 543 210
                                                </Link>
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/envelope.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                {/* <Link
                                                    to="/mailto:mailinfo00@tourm.com"
                                                    className="info-box_link"
                                                >
                                                    mailinfo00@tourm.com
                                                </Link> */}
                                            </p>
                                            <p>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=royalgardenresortofficial@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="info-box_link"
  >
    royalgardenresortofficial@gmail.com
  </a>
</p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src="/assets/img/icon/location-dot.svg" alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>Royal Garden beach resort, Ullal </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto hide-mobile">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram Post</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/rg/72.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/royalgarden_ullal/?hl=en"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/rg/67.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/royalgarden_ullal/?hl=en"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/rg/68.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/royalgarden_ullal/?hl=en"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/rg/69.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/royalgarden_ullal/?hl=en"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/rg/70.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/royalgarden_ullal/?hl=en"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                    <div className="gallery-thumb">
                                        <img
                                            src="/assets/img/rg/71.webp"
                                            alt="Gallery"
                                        />
                                        <Link
                                            target="_blank"
                                            to="https://www.instagram.com/royalgarden_ullal/?hl=en"
                                            className="gallery-btn"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                                Copyright 2025. Designed By <Link to="https://brightmedia.tech/" target='blank'>Bright Media</Link>
                            </p>
                        </div>
                        {/* <div className="col-md-6 text-end d-none d-md-block">
                            <div className="footer-card">
                                <span className="title">We Accept</span>
                                <img src="/assets/img/shape/cards.png" alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div
                className="shape-mockup movingX d-none d-xxl-block"
                style={{
                    top: "24%",
                    left: "5%",
                }}
            >
                <img src="/assets/img/shape/shape_8.png" alt="shape" />
            </div>
        </footer>

    )
}

export default FooterTwo
