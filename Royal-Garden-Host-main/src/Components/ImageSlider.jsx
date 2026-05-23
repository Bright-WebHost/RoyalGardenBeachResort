import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    title: "Alpine Majesty",
    subtitle: "Swiss Alps, Switzerland"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
    title: "Morning Serenity",
    subtitle: "Pacific Northwest, USA"
  },
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80",
    title: "Forest Dreams",
    subtitle: "Black Forest, Germany"
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=80",
    title: "Cascading Wonder",
    subtitle: "Yosemite, California"
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80",
    title: "Lake Reflection",
    subtitle: "Patagonia, Argentina"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 1.1
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ImageSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  const goToSlide = (index) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, paginate]);

  return (
    <>
      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background-color: #0A1F1A;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .background-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.05;
        }
        .pattern-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(196, 169, 98, 0.3) 1px, transparent 0);
          background-size: 40px 40px;
        }
        .image-container {
          position: relative;
          width: 350px;
          height: 400px;
        }
        .slide-wrapper {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          cursor: grab;
        }
        .slide-wrapper:active {
          cursor: grabbing;
        }
        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent, transparent);
        }
        .image-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
        }
        .image-title {
          font-size: 1.25rem;
          font-weight: 300;
          color: white;
          margin-bottom: 0.25rem;
        }
        .image-subtitle {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .corner-decoration-top {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 2rem;
          height: 2rem;
          border-top: 2px solid rgba(196, 169, 98, 0.4);
          border-right: 2px solid rgba(196, 169, 98, 0.4);
          border-top-right-radius: 0.5rem;
        }
        .corner-decoration-bottom {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          width: 2rem;
          height: 2rem;
          border-bottom: 2px solid rgba(196, 169, 98, 0.4);
          border-left: 2px solid rgba(196, 169, 98, 0.4);
          border-bottom-left-radius: 0.5rem;
        }
        .nav-controls {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 30;
          pointer-events: none;
        }
        .nav-button {
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          background-color: rgba(196, 169, 98, 0.2);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(196, 169, 98, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C4A962;
          transition: all 0.3s;
          pointer-events: auto;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        .nav-button:hover {
          background-color: rgba(196, 169, 98, 0.3);
          border-color: rgba(196, 169, 98, 0.5);
        }
        .top-title {
          position: absolute;
          top: 3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          text-align: center;
        }
        .main-title {
          font-size: 2.25rem;
          font-weight: 300;
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .title-divider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .title-divider {
          height: 1px;
          width: 3rem;
          background-color: rgba(196, 169, 98, 0.4);
        }
        .counter-text {
          font-size: 0.75rem;
          color: #C4A962;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .bottom-controls {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .dot-indicators {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dot-button {
          position: relative;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          transition: all 0.3s;
        }
        .dot-active {
          background-color: #C4A962;
        }
        .dot-inactive {
          background-color: rgba(255, 255, 255, 0.3);
        }
        .dot-inactive:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        .active-dot-ring {
          position: absolute;
          inset: -0.375rem;
          border-radius: 9999px;
          border: 1px solid rgba(196, 169, 98, 0.5);
        }
        .divider-vertical {
          width: 1px;
          height: 1rem;
          background-color: rgba(255, 255, 255, 0.2);
        }
        .play-pause-button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
          cursor: pointer;
        }
        .play-pause-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .progress-container {
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%);
          width: 16rem;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          overflow: hidden;
          z-index: 30;
        }
        .progress-bar {
          height: 100%;
          background: linear-gradient(to right, rgba(196, 169, 98, 0.5), #C4A962);
          border-radius: 9999px;
        }
       @media (min-width: 1025px) {
  #slidershide {
    display: none !important;
  }
}
      }
      `}</style>
      <div className="slider-container" id="slidershide">
      {/* Decorative background pattern */}
      <div className="background-pattern">
        <div className="pattern-dots" />
      </div>
      
      {/* Main slider container */}
      <div className="image-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="slide-wrapper"
          >
            <img 
              src={images[imageIndex].url}
              alt={images[imageIndex].title}
              className="slide-image"
              draggable="false"
            />
            
            {/* Image overlay gradient */}
            <div className="image-overlay" />
            
            {/* Image info overlay */}
            <div className="image-info">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="image-title">
                    {images[imageIndex].title}
                  </h3>
                  <p className="image-subtitle">
                    {images[imageIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Corner decorations */}
            <div className="corner-decoration-top" />
            <div className="corner-decoration-bottom" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows - repositioned around the image */}
      <div className="nav-controls">
        <motion.button
          whileHover={{ scale: 1.15, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          className="nav-button"
        >
          <ChevronLeft style={{ width: '1.25rem', height: '1.25rem' }} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="nav-button"
        >
          <ChevronRight style={{ width: '1.25rem', height: '1.25rem' }} />
        </motion.button>
      </div>

      {/* Top title */}
      <div className="top-title">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="main-title">Nature Gallery</h1>
          <div className="title-divider-container">
            <div className="title-divider" />
            <span className="counter-text">
              {String(imageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <div className="title-divider" />
          </div>
        </motion.div>
      </div>

      {/* Bottom controls */}
      <div className="bottom-controls">
        {/* Dot indicators */}
        <div className="dot-indicators">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="dot-button"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`dot ${index === imageIndex ? "dot-active" : "dot-inactive"}`} />
              {index === imageIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="active-dot-ring"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-vertical" />

        {/* Play/Pause button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="play-pause-button"
        >
          {isPlaying ? (
            <Pause style={{ width: '1rem', height: '1rem' }} />
          ) : (
            <Play style={{ width: '1rem', height: '1rem', marginLeft: '2px' }} />
          )}
        </motion.button>
      </div>

      {/* Progress bar - positioned around bottom controls */}
      <div className="progress-container">
        <motion.div
          key={page}
          initial={{ width: "0%" }}
          animate={{ width: isPlaying ? "100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="progress-bar"
        />
      </div>
    </div>
    </>

  );
}