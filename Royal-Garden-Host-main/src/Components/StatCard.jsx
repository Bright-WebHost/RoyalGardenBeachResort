import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Default fallback icon component
const DefaultIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
  </svg>
);

export default function StatCard({ 
  title, 
  value, 
  suffix = "", 
  prefix = "",
  icon: Icon = DefaultIcon, // Provide default value
  trend, 
  trendValue,
  gradient = "indigo",
  delay = 0 
}) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const duration = 5000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);

  const gradients = {
    indigo: { from: '#047857', to: '#064e3b' },
    emerald: { from: '#EAB308', to: '#bf8c00ff' },
    coral: { from: '#059669', to: '#0f766e' },
    purple: { from: '#bf8c00ff', to: '#EAB308' },
  };

  const currentGradient = gradients[gradient] || gradients.indigo;

  return (
    <>
      <style>{`
        .stat-card {
          position: relative;
          overflow: hidden;
        }
        .stat-card-inner {
          background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(6, 78, 59, 0.3);
          transition: all 0.3s;
        }
        .stat-card-inner:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border-color: rgba(217, 119, 6, 0.3);
        }
        .gradient-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 8rem;
          height: 8rem;
          opacity: 0.2;
          border-radius: 9999px;
          transform: translate(4rem, -4rem);
        }
        .overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%);
          border-radius: 1rem;
        }
        .icon-wrapper {
          padding: 0.75rem;
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        }
        .icon-wrapper svg {
          width: 1.25rem;
          height: 1.25rem;
          color: white;
        }
        .trend-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.625rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .trend-up {
          background: rgba(245, 158, 11, 0.2);
          color: #FCD34D;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .trend-down {
          background: rgba(127, 29, 29, 0.3);
          color: #FCA5A5;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .value-container {
          position: relative;
          z-index: 10;
        }
        .stat-value {
          font-size: 1.875rem;
          font-weight: 700;
          background: linear-gradient(90deg,rgba(191, 140, 0, 1) 0%, rgba(255, 217, 112, 1) 50%, rgba(176, 130, 4, 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.025em;
        }
        .stat-title {
          font-size: 0.875rem;
          color: rgba(167, 243, 208, 0.8);
          font-weight: 500;
          margin-top: 0.25rem;
        }
        .bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0.25rem;
        }
        @media (min-width: 640px) {
          .stat-card-inner {
            padding: 1.5rem;
          }
          .stat-value {
            font-size: 2.25rem;
          }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay,
          type: "spring",
          stiffness: 100 
        }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="stat-card"
      >
        <div className="stat-card-inner">
          <div 
            className="gradient-accent"
            style={{
              background: `linear-gradient(135deg, ${currentGradient.from} 0%, ${currentGradient.to} 100%)`
            }}
          />
          <div className="overlay-gradient" />
          
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <motion.div 
              className="icon-wrapper"
              style={{
                background: `linear-gradient(135deg, ${currentGradient.from} 0%, ${currentGradient.to} 100%)`
              }}
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
            >
              {/* Safe rendering of icon */}
              {typeof Icon === 'function' ? <Icon /> : <DefaultIcon />}
            </motion.div>
            
            {trend && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.3 }}
                className={`trend-badge ${trend === "up" ? "trend-up" : "trend-down"}`}
              >
                <span>{trend === "up" ? "↑" : "↓"}</span>
                <span>{trendValue}</span>
              </motion.div>
            )}
          </div>
          
          <div className="value-container">
            <motion.h3 
              className="stat-value"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.2 }}
            >
              {prefix}{displayValue.toLocaleString()}{suffix}
            </motion.h3>
            <p className="stat-title">{title}</p>
          </div>
          
          <motion.div 
            className="bottom-bar"
            style={{
              background: `linear-gradient(90deg, ${currentGradient.from} 0%, ${currentGradient.to} 100%)`
            }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: delay + 0.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </>
  );
}