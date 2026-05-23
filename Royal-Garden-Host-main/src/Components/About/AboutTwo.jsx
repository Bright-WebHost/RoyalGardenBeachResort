// import { Armchair, GamepadDirectional, ListMusic } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function AboutTwo() {
//     return (
//         <div
//             className="about-area position-relative overflow-hidden space"
//             id="about-sec"
//         >
//             <div className="container shape-mockup-wrap">
//                 <div className="row">
//                     <div className="col-xl-7">
//                         <div className="img-box3 " id='img-mobile'>
//                             <div className="img1">
//                                 <img src="/assets/img/rg/27.webp" alt="About" />
//                             </div>
//                             <div className="img2">
//                                 <img src="/assets/img/rg/28.webp" alt="About" />
//                             </div>
//                             <div className="img3 movingX">
//                             </div>
//                         </div>
//                     </div>
//                     <style>{`
//                             @media(max-width:768px){
//                             #img-mobile .img1{
//                             margin-right:60px !important;
//                             margin-left:30px !important;
//                             }
//                             .img1 img{
//                             height: 250px;
//                             width: 210px;
//                             }
//                             .img2 img{
//                             height: 250px;
//                             width: 210px;
//                             }
//                             #img-mobile .img2{
//                             margin-left:130px !important;
//                             margin-top:-160px !important;
//                             }
//                             }
//                             `}</style>
//                     <div className="col-xl-5">
//                         <div className="ps-xl-4">
//                             <div className="title-area mb-20 pe-xxl-5 me-xxl-5">
//                                 <span className="sub-title style1 " id='subtext'>Explore Our Clubhouse</span>
//                                 <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
//                                     Fun, Comfort and Entertainment
//                                 </h2>
//                             </div>
//                             <style>{`
//                             @media(max-width:768px){
//                             #subtext{
//                             margin-top:0px !important;
//                             }
//                             }
//                             `}</style>
//                             <p className="sec-text mb-30">
//                                 Our clubhouse offers modern amenities, indoor games, and relaxing spaces.
//                                  Enjoy music, socializing, and leisure activities in a lively yet peaceful environment.
//                             </p>
//                             <div className="about-item-wrap">
//                                 <div className="about-item style2">
//                                     <div className="about-item_img">
//                                         <GamepadDirectional size={32} color="#0B3D2C" strokeWidth={1} />
//                                     </div>
//                                     <div className="about-item_centent">
//                                         <h5 className="box-title">Indoor Games</h5>
//                                         <p className="about-item_text">
//                                             Play pool, table tennis, and board games in our well-equipped clubhouse..
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="about-item style2">
//                                     <div className="about-item_img">
//                                         <ListMusic size={32} color="#0B3D2C" strokeWidth={1} />
//                                     </div>
//                                     <div className="about-item_centent">
//                                         <h5 className="box-title">Relax with Music</h5>
//                                         <p className="about-item_text">
//                                             Enjoy soft music, entertainment nights, and gatherings in comfortable spaces.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="about-item style2">
//                                     <div className="about-item_img">
//                                         <Armchair size={32} color="#0B3D2C" strokeWidth={1} />
//                                     </div>
//                                     <div className="about-item_centent">
//                                         <h5 className="box-title">Private Lounge</h5>
//                                         <p className="about-item_text">
//                                             Spend quality time with friends or family in a cozy lounge.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="mt-35">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="shape-mockup movingX d-none d-xxl-block"
//                     style={{
//                         top: "0%",
//                         left: "-20%",
//                     }}
//                 >
//                     <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
//                 </div>
//                 <div
//                     className="shape-mockup jump d-none d-xxl-block"
//                     style={{
//                         top: "20%",
//                         right: "-15%",
//                     }}
//                 >
//                     <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
//                 </div>
//                 <div
//                     className="shape-mockup spin d-none d-xxl-block"
//                     style={{
//                         bottom: "18%",
//                         left: "-17%",
//                     }}
//                 >
//                     <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
//                 </div>
//                 <div
//                     className="shape-mockup movixgX d-none d-xxl-block"
//                     style={{
//                         bottom: "10%",
//                         right: "-18%",
//                     }}
//                 >
//                     <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
//                 </div>
//             </div>
//             <div
//                 className="shape-mockup movingCar d-none d-xxl-block"
//                 style={{
//                     bottom: "0%",
//                     right: "-2%",
//                 }}
//             >
//                 <img src="/assets/img/shape/car_1.png" alt="shape" />
//             </div>
//             <div
//                 className="shape-mockup d-none d-xxl-block"
//                 style={{
//                     bottom: "0%",
//                     right: "0%",
//                 }}
//             >
//                 <img src="/assets/img/shape/tree_1.png" alt="shape" />
//             </div>
//         </div>

//     )
// }

// export default AboutTwo
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Music, Sofa, ArrowRight } from 'lucide-react';

function AboutTwo() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const features = [
        {
            icon: Gamepad2,
            title: "Indoor Games",
            description: "Play pool, table tennis, and board games in our well-equipped clubhouse.",
            cardBg: "golden-bg", // Changed to golden
            iconBg: "emerald-teal" // Icon background stays green
        },
        {
            icon: Music,
            title: "Relax with Music",
            description: "Enjoy soft music, entertainment nights, and gatherings in comfortable spaces.",
            cardBg: "light-green-bg", // Changed to light green
            iconBg: "amber-orange" // Icon background stays amber/orange
        },
        {
            icon: Sofa,
            title: "Private Lounge",
            description: "Spend quality time with friends or family in a cozy, elegant lounge.",
            cardBg: "golden-bg", // Changed to golden
            iconBg: "violet-purple" // Icon background stays purple
        }
    ];

    return (
        <>
            <style>{`
                .about-section {
                    position: relative;
                    padding: 6rem 0;
                    overflow: hidden;
                }

                @media (min-width: 1024px) {
                    .about-section {
                        padding: 8rem 0;
                    }
                }

                .bg-decorations {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                }

                .bg-blob-1 {
                    position: absolute;
                    top: -5rem;
                    left: -5rem;
                    width: 24rem;
                    height: 24rem;
                    background: linear-gradient(to bottom right, rgba(167, 243, 208, 0.3), rgba(153, 246, 228, 0.2));
                    border-radius: 9999px;
                    filter: blur(64px);
                }

                .bg-blob-2 {
                    position: absolute;
                    bottom: -8rem;
                    right: -8rem;
                    width: 31.25rem;
                    height: 31.25rem;
                    border-radius: 9999px;
                    filter: blur(64px);
                }

                .bg-radial {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 50rem;
                    height: 50rem;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
                    border-radius: 9999px;
                }

                .container-custom {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 10;
                }

                @media (min-width: 640px) {
                    .container-custom {
                        padding: 0 1.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .container-custom {
                        padding: 0 2rem;
                    }
                }

                .grid-layout {
                    display: grid;
                    gap: 3rem;
                    align-items: center;
                }

                @media (min-width: 1024px) {
                    .grid-layout {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 5rem;
                    }
                }

                .image-section {
                    position: relative;
                    order: 1;
                }

                @media (min-width: 1024px) {
                    .image-section {
                        order: 1;
                    }
                }

                .image-wrapper {
                    position: relative;
                }

                .main-image-container {
                    position: relative;
                    z-index: 20;
                }

                .main-image-inner {
                    position: relative;
                    overflow: hidden;
                    border-radius: 1.5rem;
                    box-shadow: 0 25px 50px -12px rgba(6, 78, 59, 0.1);
                }

                .main-image {
                    width: 100%;
                    height: 25rem;
                    object-fit: cover;
                }

                @media (min-width: 640px) {
                    .main-image {
                        height: 31.25rem;
                    }
                }

                .main-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(6, 78, 59, 0.2), transparent, transparent);
                }

                .secondary-image-container {
                    position: absolute;
                    bottom: -2rem;
                    right: -1rem;
                    z-index: 30;
                    width: 12rem;
                }

                @media (min-width: 640px) {
                    .secondary-image-container {
                        right: -2rem;
                        width: 16rem;
                    }
                }

                .secondary-image-inner {
                    overflow: hidden;
                    border-radius: 1rem;
                    box-shadow: 0 20px 25px -5px rgba(28, 25, 23, 0.15);
                    border: 4px solid white;
                }

                .secondary-image {
                    width: 100%;
                    height: 10rem;
                    object-fit: cover;
                }

                @media (min-width: 640px) {
                    .secondary-image {
                        height: 13rem;
                    }
                }

                .floating-badge {
                    position: absolute;
                    top: -1rem;
                    left: -1rem;
                    z-index: 40;
                }

                @media (min-width: 640px) {
                    .floating-badge {
                        top: 2rem;
                        left: -1.5rem;
                    }
                }

                .badge-inner {
                    background: linear-gradient(to bottom right, #0B3D2C, #0B3D2C);
                    color: white;
                    padding: 0.75rem 1.25rem;
                    border-radius: 1rem;
                    box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.3);
                }

                .badge-subtitle {
                    font-size: 0.75rem;
                    font-weight: 500;
                    opacity: 0.8;
                    margin: 0;
                }

                .badge-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    margin: 0;
                    color: white;
                }

                .decorative-border {
                    position: absolute;
                    z-index: -10;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(3deg);
                    width: 120%;
                    height: 120%;
                    border: 2px dashed #a7f3d080;
                    border-radius: 3rem;
                }

                .content-section {
                    order: 2;
                }

                @media (min-width: 1024px) {
                    .content-section {
                        order: 2;
                    }
                }

                .tag-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    background-color: #d1fae5;
                    color: #047857;
                    font-size: 0.875rem;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                }

                .pulse-dot {
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 9999px;
                    background-color: #10b981;
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .main-heading {
                    font-size: 2.25rem;
                    font-weight: 700;
                    color: #1c1917;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }

                @media (min-width: 640px) {
                    .main-heading {
                        font-size: 3rem;
                    }
                }

                @media (min-width: 1024px) {
                    .main-heading {
                        font-size: 3.75rem;
                    }
                }

                .heading-block {
                    display: block;
                    margin-top: 0.5rem;
                }

                .heading-highlight {
                    position: relative;
                    z-index: 10;
                    background: linear-gradient(to right, #0a7654ff, #0f702cff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .heading-underline {
                    position: absolute;
                    bottom: 0.5rem;
                    left: 0;
                    height: 0.75rem;
                    background-color: rgba(167, 243, 208, 0.5);
                    z-index: -10;
                    border-radius: 0.25rem;
                }

                .description-text {
                    font-size: 1.125rem;
                    color: #57534e;
                    line-height: 1.75;
                    margin-bottom: 2.5rem;
                    max-width: 32rem;
                }

                .features-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .feature-card {
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.25rem;
                    padding: 1.25rem;
                    border-radius: 1rem;
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(231, 229, 228, 0.6);
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                    transition: all 0.3s;
                }

                /* Golden background for 1st and 3rd cards */
                .golden-bg {
                    background:  linear-gradient(90deg,rgba(191, 140, 0, 1) 0%, rgba(255, 217, 112, 1) 50%, rgba(176, 130, 4, 1) 100%);
                    color: #8B4513;
                }

                .golden-bg:hover {
                    border-color: #D4AF37;
                    box-shadow: 0 10px 15px -3px rgba(212, 175, 55, 0.3);
                }

                /* Light green background for 2nd card */
                .light-green-bg {
                    background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
                    color: #0B3D2C;
                }

                .light-green-bg:hover {
                    border-color: #A5D6A7;
                    box-shadow: 0 10px 15px -3px rgba(165, 214, 167, 0.3);
                }

                .feature-card:hover {
                    transform: translateX(8px) scale(1.02);
                }

                .feature-icon {
                    flex-shrink: 0;
                    width: 3.5rem;
                    height: 3.5rem;
                    border-radius: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s;
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.1);
                }

                /* Icon backgrounds - opposite colors */
                .icon-gradient-emerald {
                    background: linear-gradient(to bottom right, #0B3D2C, #0B3D2C);
                }

                .icon-gradient-amber {
                    background: linear-gradient(to bottom right, #0B3D2C, #0B3D2C);
                }

                .icon-gradient-violet {
                    background: linear-gradient(to bottom right, #0B3D2C, #0B3D2C);
                }

                .feature-content {
                    flex: 1;
                }

                .feature-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    transition: color 0.3s;
                }

                /* Title colors based on card background */
                .golden-bg .feature-title {
                    color: #5D4037;
                }

                .light-green-bg .feature-title {
                    color: #0B3D2C;
                }

                .feature-card:hover .feature-title {
                    color: #0B3D2C;
                }

                .feature-description {
                    font-size: 0.875rem;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Description colors based on card background */
                .golden-bg .feature-description {
                    color: #795548;
                }

                .light-green-bg .feature-description {
                    color: #57534e;
                }

                .feature-arrow {
                    align-self: center;
                }

                .cta-button-container {
                    margin-top: 2.5rem;
                }

                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 2rem;
                    background: linear-gradient(to right, #059669, #0d9488);
                    color: white;
                    font-weight: 600;
                    border-radius: 9999px;
                    box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.25);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .cta-button:hover {
                    transform: scale(1.02);
                    box-shadow: 0 20px 25px -5px rgba(5, 150, 105, 0.3);
                }

                .wave-decoration {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 6rem;
                    overflow: hidden;
                }

                .wave-svg {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                }

                @media(max-width:768px) {
                    #sub-title {
                        margin-top: 230px !important;
                    }
                }
            `}</style>

            <section className="about-section">
                <div className="bg-decorations">
                    <motion.div
                        animate={{ 
                            x: [0, 20, 0],
                            y: [0, -10, 0]
                        }}
                        transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="bg-blob-1"
                    />
                    <motion.div
                        animate={{ 
                            x: [0, -15, 0],
                            y: [0, 15, 0]
                        }}
                        transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="bg-blob-2"
                    />
                    <div className="bg-radial" />
                </div>

                <div className="container-custom">
                    <div className="grid-layout">
                        
                        {/* Image Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                            className="image-section"
                        >
                            <div className="image-wrapper">
                                <motion.div
                                    variants={imageVariants}
                                    className="main-image-container"
                                >
                                    <div className="main-image-inner">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            src="/assets/img/rg/106.webp"
                                            alt="Luxury clubhouse interior"
                                            className="main-image"
                                        />
                                        <div className="main-image-overlay" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={imageVariants}
                                    className="secondary-image-container"
                                >
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="secondary-image-inner"
                                    >
                                        <img
                                            src="/assets/img/rg/107.webp"
                                            alt="Modern lounge area"
                                            className="secondary-image"
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                                    className="floating-badge"
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="badge-inner"
                                    >
                                        <p className="badge-title">Clubhouse</p>
                                    </motion.div>
                                </motion.div>

                                <div className="decorative-border" />
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                            className="content-section"
                        >
                            <motion.div variants={itemVariants}>
                                <span className="sub-title" id='sub-titles-n'>
                                    <span className="sub-title" id='sub-title'/>
                                    Explore Our Clubhouse
                                </span>
                            </motion.div>
                            <style>{`
                            @media(max-width:768px){
                            #sub-titles-n{
                            margin-top: -200px;
                            }}
                            `}</style>

                            <motion.h2 variants={itemVariants} className="sec-title">
                                Fun, Comfort
                                <span className="heading-block">
                                    and{' '}
                                    <span style={{ position: 'relative' }}>
                                        <span className="heading-highlight">
                                            Entertainment
                                        </span>
                                        <motion.span
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.8, duration: 0.6 }}
                                            className="heading-underline"
                                        />
                                    </span>
                                </span>
                            </motion.h2>

                            <motion.p variants={itemVariants} className="description-text">
                                Our clubhouse offers modern amenities, indoor games, and relaxing spaces. 
                                Enjoy music, socializing, and leisure activities in a lively yet peaceful environment.
                            </motion.p>

                            {/* Feature Cards */}
                            <motion.div variants={containerVariants} className="features-container">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ x: 8, scale: 1.02 }}
                                        className={`feature-card ${feature.cardBg}`}
                                    >
                                        <div className={`feature-icon icon-gradient-${feature.iconBg.split('-')[0]}`}>
                                            <feature.icon style={{ width: '1.5rem', height: '1.5rem', color: 'white', strokeWidth: 1.5 }} />
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="feature-title">
                                                {feature.title}
                                            </h4>
                                            <p className="feature-description">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                            className="feature-arrow"
                                        >
                                            <ArrowRight style={{ width: '1.25rem', height: '1.25rem', opacity: 0 }} className="arrow-icon" />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* <div className="wave-decoration">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="wave-svg"
                    >
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
                            fill="url(#gradient)"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}
            </section>
        </>
    );
}

export default AboutTwo;