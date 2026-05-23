import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <>
      <style>{`
        #hero-section-new {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(to bottom right, #061A11, #0A2E1F, #0D3D2A);
          overflow: hidden;
          display: flex;
          align-items: center;
          margin-top: -70px;
        }

        .animated-grid-new {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.2;
        }

        .animated-grid-inner-new {
          height: 100%;
          width: 100%;
          background-image: radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0);
          background-size: 50px 50px;
        }

        .floating-orb-1 {
          position: absolute;
          top: 80px;
          left: 10%;
          width: 384px;
          height: 384px;
          border-radius: 9999px;
          background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.1));
          filter: blur(64px);
        }

        .floating-orb-2 {
          position: absolute;
          bottom: 128px;
          right: 15%;
          width: 500px;
          height: 500px;
          border-radius: 9999px;
          background: linear-gradient(to top left, rgba(52, 211, 153, 0.15), rgba(94, 234, 212, 0.1));
          filter: blur(64px);
        }

        .floating-orb-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 256px;
          height: 256px;
          border-radius: 9999px;
          background: rgba(5, 150, 105, 0.1);
          filter: blur(48px);
        }

        .geometric-dot {
          position: absolute;
          top: 15%;
          right: 20%;
          width: 24px;
          height: 24px;
          background: #34D399;
          border-radius: 9999px;
          box-shadow: 0 0 20px rgba(52, 211, 153, 0.5);
        }

        .geometric-square {
          position: absolute;
          bottom: 30%;
          left: 15%;
          width: 32px;
          height: 32px;
          border: 2px solid rgba(52, 211, 153, 0.7);
          transform: rotate(45deg);
        }

        .geometric-circle {
          position: absolute;
          top: 40%;
          right: 10%;
          width: 96px;
          height: 96px;
          border: 2px solid rgba(16, 185, 129, 0.4);
          border-radius: 9999px;
        }

        .geometric-dot-small-1 {
          position: absolute;
          top: 25%;
          left: 25%;
          width: 16px;
          height: 16px;
          background: linear-gradient(to bottom right, #34D399, #2DD4BF);
          border-radius: 9999px;
        }

        .geometric-rect {
          position: absolute;
          bottom: 40%;
          right: 30%;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(52, 211, 153, 0.5);
          border-radius: 8px;
        }

        .light-beams {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.1;
        }

        .light-beam-1 {
          position: absolute;
          top: 0;
          left: 25%;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #34D399, transparent);
          transform: rotate(-12deg);
        }

        .light-beam-2 {
          position: absolute;
          top: 0;
          right: 33.333%;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #6EE7B7, transparent);
          transform: rotate(12deg);
        }

        .light-beam-3 {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #2DD4BF, transparent);
          transform: rotate(-6deg);
        }

        #container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 48px;
          position: relative;
          z-index: 10;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .grid-layout {
            grid-template-columns: 1fr 1fr;
          }
        }

        .content-left {
          /* No additional styles needed for motion.div wrapper */
        }

        .badge {
          display: inline-flex;
          align-items: left;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          margin-bottom: 32px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #34D399;
          border-radius: 9999px;
        }

        .badge-text {
          color: #34D399;
          font-size: 24px;
        //   letter-spacing: 0.3em;
        //   text-transform: uppercase;
          font-weight: 500;
        }

        .hero-title-new {
          font-size: 52px;
          font-weight: 200;
          color: white;
          line-height: 1.1;
          margin-bottom: 32px;
          font-family:"Manrope", sans-serif;
        }

        @media (min-width: 768px) {
          .hero-title-new {
            font-size: 66px;
          }
        }

        .title-highlight {
          display: block;
          font-weight: 600;
          background: linear-gradient(to right, #34D399, #2DD4BF, #10B981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-top: 8px;
          font-family:"Manrope", sans-serif;
        }

        .title-light {
          display: block;
          font-weight: 300;
          margin-top: 8px;
        }

        .hero-description {
          font-size: 20px;
          color: rgba(209, 250, 229, 0.8);
          max-width: 576px;
          line-height: 1.75;
          margin-bottom: 40px;
        }

        .stats-container {
          display: flex;
          gap: 32px;
        }

        .stat-item {
          position: relative;
        }

        .stat-number {
          font-size: 30px;
          font-weight: 700;
          color: #34D399;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(209, 250, 229, 0.6);
        }

        .stat-line {
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          background: rgba(52, 211, 153, 0.5);
        }

        .image-composition {
          position: relative;
          height: 600px;
        }

        .main-hero-image {
          position: absolute;
          top: 0;
          right: 0;
          width: 75%;
          height: 70%;
          z-index: 20;
          clip-path: polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%);
        }

        .main-hero-image-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(6, 78, 59, 0.5);
        }

        .main-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .main-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(5, 150, 105, 0.3), transparent, rgba(19, 78, 74, 0.4));
        }

        .scan-line {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(52, 211, 153, 0.2), transparent);
          height: 128px;
        }

        .circular-image {
          position: absolute;
          bottom: 10%;
          left: 0;
          width: 224px;
          height: 224px;
          z-index: 30;
          border-radius: 9999px;
          overflow: hidden;
          border: 4px solid #0A2E1F;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .circular-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circular-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 46, 31, 0.6), transparent);
        }

        .rotating-ring {
          position: absolute;
          inset: 0;
          border: 4px solid transparent;
          border-top-color: #34D399;
          border-right-color: #34D399;
          border-radius: 9999px;
        }

        .hexagon-image {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 160px;
          height: 160px;
          z-index: 25;
        }

        .hexagon-inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .hexagon-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hexagon-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.4), transparent);
        }

        .floating-diamond {
          position: absolute;
          top: 50%;
          right: 15%;
          width: 96px;
          height: 96px;
          z-index: 15;
        }

        .diamond-inner {
          width: 100%;
          height: 100%;
          background: rgba(52, 211, 153, 0.2);
          backdrop-filter: blur(4px);
          border: 2px solid rgba(52, 211, 153, 0.4);
          transform: rotate(45deg);
        }

        .glowing-orb-1 {
          position: absolute;
          bottom: 35%;
          right: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(to bottom right, #34D399, #14B8A6);
          border-radius: 9999px;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.5);
          z-index: 15;
        }

        .glowing-orb-2 {
          position: absolute;
          top: 5%;
          left: 20%;
          width: 48px;
          height: 48px;
          background: linear-gradient(to bottom right, #2DD4BF, #10B981);
          border-radius: 9999px;
          box-shadow: 0 10px 25px rgba(45, 212, 191, 0.5);
          z-index: 25;
        }

        .gradient-shape-1 {
          position: absolute;
          top: -32px;
          right: -32px;
          width: 160px;
          height: 160px;
          background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.3), transparent);
          border-radius: 9999px;
          filter: blur(48px);
          z-index: 10;
        }

        .gradient-shape-2 {
          position: absolute;
          bottom: -32px;
          left: -32px;
          width: 192px;
          height: 192px;
          background: linear-gradient(to top right, rgba(20, 184, 166, 0.2), transparent);
          border-radius: 9999px;
          filter: blur(64px);
          z-index: 10;
        }

        .animated-frame {
          position: absolute;
          inset: 0;
          border: 2px solid rgba(52, 211, 153, 0.2);
          z-index: 40;
          pointer-events: none;
          clip-path: polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%);
        }

        .bottom-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        .wave-svg {
          width: 100%;
          height: auto;
          fill: #F5F5F0;
        }

        @media (max-width: 768px) {
          #container {
            padding: 48px 24px;
          }
          
          .hero-title-new {
            font-size: 48px;
          }
          
          .stats-container {
            flex-wrap: wrap;
            gap: 24px;
          }

          .image-composition {
            height: 400px;
          }

          .circular-image {
            width: 150px;
            height: 150px;
          }

          .hexagon-image {
            width: 100px;
            height: 100px;
          }
             #hero-section-new {
          margin-top: -194px;
        }
          .hero-description{
          font-size: 14px;
          }
        }
      `}</style>
      <section className="hero-section-new" id='hero-section-new'>
      {/* Animated Background Grid */}
      <div className="animated-grid-new">
        <motion.div 
          className="animated-grid-new-inner-new-new"
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Dynamic Floating Orbs */}
      <motion.div
        className="floating-orb-1"
        animate={{ 
          x: [0, 50, -30, 0], 
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 90, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-orb-2"
        animate={{ 
          x: [0, -60, 40, 0], 
          y: [0, 50, -30, 0],
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, -90, -180, -360]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-orb-3"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Animated Geometric Elements */}
      <motion.div 
        className="geometric-dot"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="geometric-square"
        animate={{ 
          rotate: [45, 225, 45],
          borderColor: ['rgba(52, 211, 153, 0.7)', 'rgba(16, 185, 129, 0.7)', 'rgba(52, 211, 153, 0.7)']
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="geometric-circle"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="geometric-dot-small-1"
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div 
        className="geometric-rect"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Diagonal Light Beams */}
      <div className="light-beams">
        <motion.div 
          className="light-beam-1"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="light-beam-2"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="light-beam-3"
          animate={{ opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="container" id='container'>
        <div className="grid-layout">
          {/* Left Content */}
          <motion.div
            className="content-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="badge"
            >
              <motion.span 
                className="badge-dot"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="badge-text">Welcome to Royal Garden</span>
            </motion.div> */}
            <span className="badge-text" style={{color:'white', fontFamily:'"Montez", cursive'}}>Welcome to Royal Garden</span>
            <motion.h1 
              className="hero-title-new" 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span 
                style={{ display: 'inline-block' }}
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(52, 211, 153, 0)',
                    '0 0 20px rgba(52, 211, 153, 0.3)',
                    '0 0 20px rgba(52, 211, 153, 0)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                
                Beautifully 
              </motion.span>
              <span className="title-highlight">
                Crafted For
              </span>
              <span className="title-light">Memories</span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Enjoy peaceful green views, comfortable rooms, and friendly service. Celebrate life’s special
                             moments or simply relax with family inside a calm, refreshing natural environment every day.
            </motion.p>

            {/* Animated Stats */}
            {/* <motion.div 
              className="stats-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { number: "250+", label: "Projects" },
                { number: "98%", label: "Satisfaction" },
                { number: "15+", label: "Awards" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <motion.div 
                    className="stat-line"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Image Composition - Ultra Unique */}
          <motion.div 
            className="image-composition"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Hero Image with Clip Path */}
            <motion.div 
              className="main-hero-image"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="main-hero-image-inner"
                animate={{ 
                  boxShadow: [
                    '0 25px 50px -12px rgba(6, 78, 59, 0.5)',
                    '0 25px 50px -12px rgba(16, 185, 129, 0.3)',
                    '0 25px 50px -12px rgba(6, 78, 59, 0.5)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img 
                  src="assets/img/rg/112.webp"
                  alt="Modern office"
                />
                <motion.div 
                  className="main-image-overlay"
                  animate={{ opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Animated Scan Line */}
                <motion.div 
                  className="scan-line"
                  animate={{ 
                    top: ['-128px', '100%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Circular Secondary Image */}
            <motion.div 
              className="circular-image"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <img 
                src="assets/img/rg/110.webp"
                alt="Team collaboration"
              />
              <motion.div 
                className="circular-overlay"
              />
              {/* Rotating Ring */}
              <motion.div 
                className="rotating-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Hexagon Image */}
            <motion.div 
              className="hexagon-image"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="hexagon-inner">
                <img 
                  src="assets/img/rg/110.webp"
                  alt="Innovation"
                />
                <motion.div 
                  className="hexagon-overlay"
                />
              </div>
            </motion.div>

            {/* Floating Diamond Shape */}
            <motion.div 
              className="floating-diamond"
              animate={{ 
                rotate: [45, 90, 45],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="diamond-inner" />
            </motion.div>

            {/* Glowing Orbs */}
            <motion.div 
              className="glowing-orb-1"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="glowing-orb-2"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />

            {/* Decorative Gradient Shapes */}
            <div className="gradient-shape-1" />
            <div className="gradient-shape-2" />
            
            {/* Animated Frame */}
            <motion.div 
              className="animated-frame"
              animate={{ 
                borderColor: [
                  'rgba(52, 211, 153, 0.2)',
                  'rgba(52, 211, 153, 0.4)',
                  'rgba(52, 211, 153, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="bottom-wave">
        <motion.svg 
          viewBox="0 0 1440 120" 
          className="wave-svg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            animate={{ 
              d: [
                "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </section>
    </>
  );
}