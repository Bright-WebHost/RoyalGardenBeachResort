import React from 'react'
import { Link } from 'react-router-dom'

function GetInTouch() {
    return (
        <div className="space">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Get In Touch</span>
                    <h2 className="sec-title">Our Contact Information</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid style2">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/location-dot2.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Our Address</h6>
                                <p className="about-contact-details-text">
                                    Royal Garden beach resort, Ullal
                                </p>
                                {/* <p className="about-contact-details-text">Road, New York, Canada</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/call.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Phone Number</h6>
                                <p className="about-contact-details-text">
                                    {/* <Link to="tel:01234567890">+01 234 567 890</Link> */}
                                </p>
                                <p className="about-contact-details-text">
                                    <Link to="tel:+91 9036023696">+91 9036023696</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src="/assets/img/icon/mail.svg" alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Email Address</h6>
                                <p className="about-contact-details-text">
                                    {/* <Link to="mailto:mailinfo00@tourm.com">mailinfo00@tourm.com</Link> */}
                                </p>
                                <p className="about-contact-details-text">
                                    <Link to="mailto:royalgardenresortofficial@gmail.com">royalgardenresortofficial@gmail.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
            .about-contact-grid {
    background: #0B3D2C; /* Yellow background */
    
    color: #fff; /* Text to white */
}

/* icon styling */
.about-contact-grid .about-contact-icon {
    background: #BB8E12; /* WHITE ICON BG */
   
}

.about-contact-grid .about-contact-icon img {
    filter: brightness(0) invert(1); /* Makes icon white */
    width: 30px;
}

/* Text Colors */
.about-contact-grid .about-contact-details .box-title,
.about-contact-details-text,
.about-contact-details-text a {
    color: #fff !important;
}

/* ------------ HOVER EFFECT ------------ */
.about-contact-grid:hover {
    background: #fff; /* reverse bg */
    color: #0B3D2C;   /* text yellow on hover */
    transform: translateY(-4px);
}

/* text + icon color reversal */
.about-contact-grid:hover .about-contact-icon {
    background: #0B3D2C; /* yellow icon bg */
}

.about-contact-grid:hover .about-contact-icon img,
.about-contact-grid:hover .about-contact-details .box-title,
.about-contact-grid:hover .about-contact-details-text,
.about-contact-grid:hover .about-contact-details-text a {
    color: #0B3D2C !important;
    filter: brightness(1) invert(0); /* reverse icon to yellow */
}

            

            
            `}</style>
        </div>

    )
}

export default GetInTouch
