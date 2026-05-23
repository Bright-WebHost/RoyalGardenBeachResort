import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  MapPin, 
  Heart,
} from "lucide-react";
import StatCard from "../StatCard";

export default function Stat() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const stats = [
    { 
      title: "Years Experience", 
      value: 12, 
      icon: Award, 
    //   trend: "up", 
    //   trendValue: "Since 2012",
      gradient: "indigo"
    },
    { 
      title: "Retention Rate", 
      value: 97, 
      suffix: "%",
      icon: Heart, 
    //   trend: "up", 
    //   trendValue: "5% increase",
      gradient: "emerald"
    },
    { 
      title: "Tours Completed", 
      value: 8000, 
      icon: MapPin, 
    //   trend: "up", 
    //   trendValue: "23.1%",
      gradient: "coral"
    },
    { 
      title: "Happy Travellers", 
      value: 19000, 
      icon: Users, 
    //   trend: "up", 
    //   trendValue: "Growing",
      gradient: "purple"
    },
  ];

  // const activities = [
  //   { icon: CheckCircle, title: "Tour completed", description: "Bali Adventure Tour - 5 star review", time: "2m", color: "emerald" },
  //   { icon: Users, title: "New booking", description: "John D. booked Swiss Alps Tour", time: "15m", color: "indigo" },
  //   { icon: Star, title: "Excellent review", description: "Sarah M. rated Tokyo Tour 5 stars", time: "1h", color: "coral" },
  //   { icon: Plane, title: "Departure today", description: "Paris Romance Tour starts today", time: "2h", color: "purple" },
  //   { icon: MapPin, title: "New destination", description: "Iceland Northern Lights added", time: "3h", color: "indigo" },
  // ];

  // const chartData = [30, 45, 28, 80, 65, 55, 78, 90, 68, 85];

  if (!isMounted) {
    return (
      <div className="stats-page">
        <style>{`
          .stats-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #030712 0%, #064e3b 50%, #111827 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loading-text {
            color: #FCD34D;
            font-size: 1.5rem;
            font-weight: 600;
          }
        `}</style>
        {/* <div className="loading-text">Loading Dashboard...</div> */}
      </div>
    );
  }

  return (
    <>
      <style>{`
        .stats-page {
          min-height: 40vh;
          background: linear-gradient(135deg, #030712 0%, #064e3b 50%, #111827 100%);
        }
        .stats-header {
          padding: 2rem 1rem 1.5rem;
        }
        .stats-container {
          max-width: 80rem;
          margin: 0 auto;
        }
        .header-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .header-title {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #FCD34D 0%, #FDE68A 40%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.025em;
        }
        .header-subtitle {
          color: rgba(167, 243, 208, 0.7);
          margin-top: 0.25rem;
          font-size: 0.875rem;
        }
        // .header-button {
        //   display: inline-flex;
        //   align-items: center;
        //   gap: 0.5rem;
        //   padding: 0.625rem 1.25rem;
        //   background: linear-gradient(90deg, #D97706 0%, #EAB308 100%);
        //   color: #111827;
        //   border-radius: 0.75rem;
        //   font-weight: 700;
        //   font-size: 0.875rem;
        //   box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.25);
        //   transition: box-shadow 0.3s;
        //   border: none;
        //   cursor: pointer;
        // }
        .header-button:hover {
          box-shadow: 0 20px 25px -5px rgba(245, 158, 11, 0.4);
        }
        .header-button svg {
          width: 1rem;
          height: 1rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        .progress-section {
          background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(6, 78, 59, 0.3);
        }
        .progress-title {
          font-weight: 600;
          color: #FCD34D;
          margin-bottom: 1.5rem;
        }
        .progress-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .activity-section {
          background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(6, 78, 59, 0.3);
          overflow: hidden;
        }
        .activity-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(6, 78, 59, 0.3);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .activity-title {
          font-weight: 600;
          color: #FCD34D;
        }
        .view-all-button {
          font-size: 0.875rem;
          color: #6EE7B7;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .view-all-button:hover {
          color: #FCD34D;
          gap: 0.5rem;
        }
        .view-all-button svg {
          width: 1rem;
          height: 1rem;
        }
        .activity-list {
          border-top: 1px solid rgba(6, 95, 70, 0.3);
        }
        .activity-list > div:not(:last-child) {
          border-bottom: 1px solid rgba(6, 95, 70, 0.3);
        }
        .chart-card {
          background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
          border-radius: 1rem;
          padding: 1.25rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(6, 78, 59, 0.3);
          transition: border-color 0.3s;
        }
        .chart-card:hover {
          border-color: rgba(217, 119, 6, 0.3);
        }
        .chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .chart-label {
          font-size: 0.875rem;
          color: rgba(167, 243, 208, 0.7);
        }
        .chart-value {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg,rgba(191, 140, 0, 1) 0%, rgba(255, 217, 112, 1) 50%, rgba(176, 130, 4, 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 0.25rem;
        }
        .chart-icon-wrapper {
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: rgba(6, 78, 59, 0.5);
          border: 1px solid rgba(6, 95, 70, 0.3);
        }
        .chart-icon-wrapper svg {
          width: 1rem;
          height: 1rem;
          color: #F59E0B;
        }
        .main-content {
          padding: 0 1rem 3rem;
        }
        .content-container {
          max-width: 80rem;
          margin: 0 auto;
        }
        .content-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .middle-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .bottom-section {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .stats-header {
            padding: 2rem 1.5rem 1.5rem;
          }
          .stats-grid {
            gap: 1rem;
          }
          .progress-section {
            padding: 1.5rem;
          }
          .activity-header {
            padding: 1.25rem 1.5rem;
          }
          .chart-card {
            padding: 1.5rem;
          }
          .header-title {
            font-size: 1.875rem;
          }
          .header-subtitle {
            font-size: 1rem;
          }
          .header-content {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .main-content {
            padding: 0 1.5rem 3rem;
          }
          .content-grid {
            gap: 2rem;
          }
          .middle-section {
            gap: 1.5rem;
          }
          .bottom-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .stats-header {
            padding: 2rem 2rem 1.5rem;
          }
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          .middle-section {
            grid-template-columns: 1fr 2fr;
          }
          .bottom-section {
            grid-template-columns: repeat(3, 1fr);
          }
          .main-content {
            padding: 2rem 2rem 3rem;
          }
        }
           @media (max-width: 768px) {
           .main-content {
            padding: 2rem 1rem 1.5rem;
          }
           }
      `}</style>
      
      <div className="stats-page">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="stats-container">
            <div className="header-content">
              <div className="title-area">
                                {/* <span className="sub-title text-white">Book Your Stay</span> */}
                                <h2 className="sec-title text-white">Plan with Ease</h2>
                                <p className="text-white" style={{marginBottom:'-40px'}}>
                                    Find the perfect place for celebrations, family trips, or peaceful weekend breaks.
                                     Contact us today to check dates, discuss plans, and make your bookings quickly
                                      without any stress that give you moments filled with joy.
                                </p>
                            </div>
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="header-button"
              >
                <Compass />
                View Reports
              </motion.button> */}
            </div>
          </div>
        </motion.div>
        
        

        <div className="main-content">
          <div className="content-container">
            <div className="content-grid">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <StatCard key={stat.title} {...stat} delay={index * 0.1} />
                ))}
              </div>

              {/* <div className="middle-section">
                <motion.div 
                  className="progress-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="progress-title">This Quarter</h3>
                  <div className="progress-grid">
                    <ProgressRing 
                      percentage={85} 
                      color="indigo" 
                      label="Bookings"
                      sublabel="850 / 1000"
                      size={100}
                      delay={0.5}
                    />
                    <ProgressRing 
                      percentage={97} 
                      color="emerald" 
                      label="Satisfaction"
                      sublabel="4.9 / 5.0"
                      size={100}
                      delay={0.6}
                    />
                    <ProgressRing 
                      percentage={68} 
                      color="coral" 
                      label="Occupancy"
                      sublabel="68% filled"
                      size={100}
                      delay={0.7}
                    />
                    <ProgressRing 
                      percentage={92} 
                      color="purple" 
                      label="Repeat Rate"
                      sublabel="92% return"
                      size={100}
                      delay={0.8}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="activity-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="activity-header">
                    <h3 className="activity-title">Recent Activity</h3>
                    <motion.button 
                      className="view-all-button"
                      whileHover={{ x: 2 }}
                    >
                      View all
                      <ArrowRight />
                    </motion.button>
                  </div>
                  <div className="activity-list">
                    {activities.map((activity, index) => (
                      <ActivityItem key={index} {...activity} index={index} />
                    ))}
                  </div>
                </motion.div>
              </div> */}

              {/* <div className="bottom-section">
                {[
                  { title: "Weekly Bookings", value: "147", color: "indigo", data: [30, 45, 28, 80, 65, 55, 78] },
                  { title: "New Travelers", value: "284", color: "emerald", data: [20, 35, 45, 30, 55, 70, 85] },
                  { title: "Satisfaction", value: "97%", color: "purple", data: [90, 92, 95, 93, 96, 97, 97] },
                ].map((chart, index) => (
                  <motion.div
                    key={chart.title}
                    className="chart-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="chart-header">
                      <div>
                        <p className="chart-label">{chart.title}</p>
                        <p className="chart-value">{chart.value}</p>
                      </div>
                      <div className="chart-icon-wrapper">
                        <Clock />
                      </div>
                    </div>
                    <MiniChart data={chart.data} color={chart.color} delay={0.7 + index * 0.1} />
                  </motion.div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}