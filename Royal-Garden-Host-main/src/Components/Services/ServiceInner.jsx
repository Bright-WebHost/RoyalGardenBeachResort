// import React from 'react';
// import ServiceCard from './ServiceCard';
// import posts from '../data/data-service.json';

// function ServiceInner() {
//     return (
//         <section className="position-relative overflow-hidden space" id="destination-sec">
//             <div className="container shape-mockup-wrap">
//                 <div className="row gy-4 gx-4">
//                     {posts.map((data, index) => (
//                         <div key={index} className="col-xl-3 col-lg-4 col-md-6">
//                             <ServiceCard
//                                 serviceID={data.id}
//                                 serviceImage={data.image}
//                                 serviceTitle={data.title}
//                                 serviceItem={data.item}
//                             />
//                         </div>
//                     ))}
//                 </div>

                
//                 <div className="shape-mockup shape1 d-none d-xxl-block" style={{ bottom: "17%", right: "-9%" }}>
//                     <img src="/assets/img/shape/shape_1.png" alt="shape" />
//                 </div>
//                 <div className="shape-mockup shape2 d-none d-xl-block" style={{ bottom: "8%", right: "-8%" }}>
//                     <img src="/assets/img/shape/shape_2.png" alt="shape" />
//                 </div>
//                 <div className="shape-mockup shape3 d-none d-xxl-block" style={{ bottom: "15%", right: "-4%" }}>
//                     <img src="/assets/img/shape/shape_3.png" alt="shape" />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ServiceInner;

import React from "react";
// import { motion } from "framer-motion";
import {  Maximize, BedDouble, Wind, Wifi, ConciergeBell, Droplets, Home, Paintbrush } from "lucide-react";
// import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ServiceInner() {
  // const values = [
  //   {
  //     icon: Heart,
  //     title: "Passion-Driven",
  //     description: "Every project we undertake is fueled by genuine enthusiasm and dedication to excellence."
  //   },
  //   {
  //     icon: Target,
  //     title: "Purpose-Led",
  //     description: "We believe in meaningful work that creates lasting impact for our clients and community."
  //   },
  //   {
  //     icon: Users,
  //     title: "People-First",
  //     description: "Our success is built on relationships, collaboration, and putting humans at the center."
  //   },
  //   {
  //     icon: Sparkles,
  //     title: "Innovation-Focused",
  //     description: "We constantly push boundaries to deliver creative solutions that stand out."
  //   }
  // ];

  // const highlights = [
  //   "Award-winning creative team",
  //   "10+ years of industry experience",
  //   "500+ successful projects delivered",
  //   "Global clientele across 30 countries"
  // ];

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      {/* <section className="about-hero-section">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern workspace"
          />
          <div className="about-hero-overlay" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="about-hero-content"
        >
          <div className="about-hero-inner">
            <div>
              <motion.span 
                variants={fadeInUp}
                className="about-hero-subtitle"
              >
                Our Story
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="about-hero-title"
              >
                Crafting
                <span>Digital Excellence</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="about-hero-description"
              >
                We're a collective of dreamers, designers, and doers committed to 
                transforming ideas into extraordinary digital experiences.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="about-hero-bottom-gradient" />
      </section> */}

      {/* Mission Section */}
      {/* <section className="mission-section">
        <div className="mission-container">
          <div className="mission-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mission-left"
            >
              <span className="mission-subtitle">
                Who We Are
              </span>
              <h2 className="mission-title">
                Building tomorrow's
                <span>vision today</span>
              </h2>
              <div className="mission-text-container">
                <p className="mission-text">
                  Founded with a simple belief — that great design has the power to 
                  transform businesses and touch lives. Over the years, we've grown 
                  from a small studio into a full-service creative agency.
                </p>
                <p className="mission-text">
                  Our approach combines strategic thinking with creative excellence, 
                  ensuring every project we deliver not only looks stunning but 
                  achieves real business results.
                </p>
              </div>
              
              <div className="mission-highlights">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mission-highlight-item"
                  >
                    <CheckCircle2 className="mission-highlight-icon" />
                    <span className="mission-highlight-text">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mission-right"
            >
              <div className="mission-image-container">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our team collaboration"
                  className="mission-image"
                />
              </div>
              <div className="mission-accent-card">
                <p>12+</p>
                <p>Years of crafting exceptional digital experiences</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      {/* <section className="values-section">
        <div className="values-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="values-header"
          >
            <span className="values-subtitle">
              Our Values
            </span>
            <h2 className="values-title">
              Principles that
              <span> guide us</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="values-grid"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="value-card"
              >
                <div className="value-icon-container">
                  <value.icon className="value-icon" />
                </div>
                <h3 className="value-card-title">
                  {value.title}
                </h3>
                <p className="value-card-description">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Amenities Section */}
      <section className="amenities-section">
        <div className="amenities-bg">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Luxury interior"
          />
          <div className="amenities-overlay" />
        </div>

        <div className="amenities-container">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="amenities-header"
          >
            <span className="sub-title" style={{color:'white'}}>What We Offer</span>
                    <h2 className="sec-title">Amenities</h2>
            
          </div>

          <div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="amenities-grid"
          >
            {[
              { icon: Maximize, title: "Spacious Rooms", desc: "Generous living spaces" },
              { icon: BedDouble, title: "Comfortable Beds", desc: "Premium quality mattresses" },
              { icon: Wind, title: "Air Conditioning", desc: "Climate controlled rooms" },
              { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet access" },
              { icon: ConciergeBell, title: "Room Service", desc: "24/7 in-room dining" },
              { icon: Droplets, title: "Hot Water", desc: "Instant hot water supply" },
              { icon: Home, title: "Private Balcony", desc: "Scenic outdoor views" },
              { icon: Paintbrush, title: "Modern Interiors", desc: "Contemporary design" }
            ].map((amenity, index) => (
              <div
                key={index}
                variants={fadeInUp}
                className="amenity-card"
              >
                <div className="amenity-icon-container">
                  <amenity.icon className="amenity-icon" />
                </div>
                <h3 className="amenity-title">
                  {amenity.title}
                </h3>
                <p className="amenity-description">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner */}
      {/* <section className="image-banner">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Creative workspace"
        />
        <div className="image-banner-overlay" />
        <div className="image-banner-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="image-banner-text">
              "Great design is not just what it looks like — 
              <span> it's how it works."</span>
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="cta-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">
              Ready to create
              <span>something extraordinary?</span>
            </h2>
            <p className="cta-description">
              Let's collaborate and bring your vision to life. We're excited to hear 
              about your project and explore how we can help.
            </p>
            <Button 
              size="lg"
              className="cta-button"
            >
              Get in Touch
              <ArrowRight className="cta-button-icon" />
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* <div className="footer-accent" /> */}
<style>{`/* Amenities Section */
.amenities-section {
  position: relative;
  padding-top: 96px;
  padding-bottom: 96px;
  overflow: hidden;
}

.amenities-bg {
  position: absolute;
  inset: 0;
}

.amenities-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.amenities-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(13, 40, 24, 0.9), rgba(26, 74, 58, 0.85), rgba(13, 40, 24, 0.9));
}

.amenities-container {
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

.amenities-header {
  text-align: center;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
}

.amenities-subtitle {
  color: #c9a962;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.875rem;
}

.amenities-title {
  font-size: 2.25rem;
  font-weight: 300;
  color: white;
  margin-top: 16px;
  line-height: 1.2;
}

.amenities-title span {
  font-weight: 600;
}

.amenities-description {
  color: rgba(255, 255, 255, 0.7);
  margin-top: 24px;
  font-size: 1.125rem;
}

.amenities-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
}
  
@media (max-width: 767px) {
  .amenities-grid {
  grid-template-columns: 1fr 1fr ;
  gap: 20px;
}
  .amenity-description {
  display:none;
  }
}


.amenity-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 24px;
  text-align: center;
  height: 100%;
  transition: all 0.5s ease;
}

.amenity-card:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.amenity-icon-container {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  border-radius: 9999px;
  background-color: rgba(212, 175, 55, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.amenity-card:hover .amenity-icon-container {
  transform: scale(1.1);
}

.amenity-icon {
  width: 28px;
  height: 28px;
  color: #d4af37;
}

.amenity-title {
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 8px;
}

.amenity-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

/* Image Banner */
.image-banner {
  position: relative;
  height: 50vh;
  min-height: 400px;
  overflow: hidden;
}

.image-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-banner-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(30, 58, 95, 0.6);
}

.image-banner-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding-left: 24px;
  padding-right: 24px;
}

.image-banner-text {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.75;
  max-width: 56rem;
}

.image-banner-text span {
  font-weight: 600;
}

.sec-title{
color:#CF9A08;
}
`}</style>
    </div>
  );
}