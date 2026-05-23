import React from 'react';

export default function RunningText() {
// const isMobile = window.innerWidth <= 768;

  const messages = [
    "Host Events",
    "Family Gatherings",
    "Peaceful Stays",
    "Weekend Getaways",
    "Stay & Celebrate",
  ];

  const styles = {
    container: {
      minHeight: '20vh',
      // backgroundColor: '#ecfdf5',
      overflow: 'hidden',
      position: 'relative',
      marginTop:'-32px',
      marginBottom:'-22px'
    },
    decorativeBorder: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      // backgroundColor: '#047857'
    },
    header: {
      position: 'relative',
      zIndex: 10,
      paddingTop: '48px',
      paddingBottom: '24px',
      textAlign: 'center'
    },
    welcomeContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '12px'
    },
    welcomeText: {
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: '#047857',
      fontWeight: '500'
    },
    mainTitle: {
      fontSize: '48px',
      fontWeight: '400',
      color: '#1f2937',
      letterSpacing: '0.025em',
      marginBottom: '12px'
    },
    name: {
      color: '#047857'
    },
    ampersand: {
      margin: '0 12px',
      color: '#9ca3af'
    },
    dateContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      color: '#4b5563'
    },
    line: {
      width: '48px',
      height: '1px',
      backgroundColor: '#0B3D2C'
    },
    dateText: {
      fontSize: '16px',
      fontWeight: '300'
    },
    runningTextSection: {
      position: 'relative',
      zIndex: 10,
      paddingTop: '32px',
      paddingBottom: '32px'
    },
    marqueePrimary: {
      overflow: 'hidden',
      padding: '20px 0',
      backgroundColor: '#0B3D2C',
      color: 'white',
    },
    marqueeSecondary: {
      overflow: 'hidden',
      padding: '16px 0',
      background: 'linear-gradient(90deg,rgba(191, 140, 0, 1) 0%, rgba(255, 217, 112, 1) 50%, rgba(176, 130, 4, 1) 100%)',
      color: '#0B3D2C',
      // borderTop: '1px solid #a7f3d0',
      // borderBottom: '1px solid #a7f3d0'
    },
    marqueeTertiary: {
      overflow: 'hidden',
      padding: '24px 0',
      backgroundColor: '#d1fae5'
    },
    marqueeFourth: {
      overflow: 'hidden',
      padding: '12px 0',
      backgroundColor: 'white'
    },
    marqueeFifth: {
      overflow: 'hidden',
      padding: '16px 0',
      backgroundColor: 'rgba(4, 120, 87, 0.1)'
    },
    marqueeContent: {
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center'
    },
    messageItem: {
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 12px'
    },
    messageText: {
      fontSize: '30px',
      fontWeight: '600'
    },
    messageSeparator: {
      margin: '0 32px',
      fontSize: '24px',
      opacity: 0.6
    },
    secondaryItem: {
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 24px'
    },
    secondaryText: {
      fontSize: '18px',
      letterSpacing: '0.15em',
      color: '#047857',
      fontWeight: '500',
      textTransform: 'uppercase'
    },
    tertiaryItem: {
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 40px'
    },
    tertiaryText: {
      fontSize: '48px',
      fontWeight: '700',
      color: 'rgba(4, 120, 87, 0.7)'
    },
    fourthItem: {
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 16px'
    },
    fourthText: {
      fontSize: '14px',
      letterSpacing: '0.2em',
      color: '#6b7280',
      fontWeight: '500',
      textTransform: 'uppercase'
    },
    bottomSection: {
      position: 'relative',
      zIndex: 10,
      paddingTop: '48px',
      paddingBottom: '48px',
      textAlign: 'center'
    },
    thankYouBox: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px 32px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid rgba(4, 120, 87, 0.2)',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    },
    thankYouText: {
      fontSize: '20px',
      color: '#374151',
      fontWeight: '500'
    }
  };

  // Media queries for responsive design
  const mediaQueries = `
    @media (min-width: 768px) {
      .main-title { font-size: 72px; }
      .message-text { font-size: 36px; }
      .tertiary-text { font-size: 60px; }
      .thank-you-text { font-size: 24px; }
    }
  `;

  return (
    <div style={styles.container}>
      {/* Decorative Top Border */}
      <div style={styles.decorativeBorder} />
      {/* Running Text Sections */}
      <div style={styles.runningTextSection}>
        
        {/* Primary Marquee - Large */}
        <div style={styles.marqueePrimary} className='marque-primary'>
          <div style={styles.marqueeContent} className="animate-marquee">
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {messages.map((msg, i) => (
                  <span key={`${setIndex}-${i}`} style={styles.messageItem}>
                    <span style={styles.messageText} className="message-text">
                      {msg}
                    </span>
                    <span style={styles.messageSeparator}>✦</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Secondary Marquee - Reverse Direction */}
        <div style={styles.marqueeSecondary} className='marque-secondary'>
          <div style={styles.marqueeContent} className="animate-marquee-reverse">
            {[...Array(6)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <span style={styles.secondaryItem}>
                  <span style={{ fontSize: '20px', color: '#047857' }}>✨</span>
                  <span style={{ ...styles.messageText, margin: '0 16px' }}>
                    Host Events
                  </span>
                  <span style={{ fontSize: '20px', color: '#047857' }}>✨</span>
                  <span style={{ ...styles.messageText, margin: '0 16px' }}>
                    Family Gatherings
                  </span>
                  <span style={{ fontSize: '20px', color: '#047857' }}>✨</span>
                  <span style={{ ...styles.messageText, margin: '0 16px' }}>
                    Peaceful Stays
                  </span>
                  <span style={{ fontSize: '20px', color: '#047857' }}>✨</span>
                  <span style={{ ...styles.messageText, margin: '0 16px' }}>
                    Stay & Celebrate
                  </span>
                  <span style={{ fontSize: '20px', color: '#047857' }}>✨</span>
                  <span style={{ ...styles.messageText, margin: '0 16px' }}>
                    Weekend Getaways
                  </span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
       {/* Decorative Bottom Border */}
      {/* <div style={styles.decorativeBorder} /> */}

      {/* Custom Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 10s linear infinite;
        }
        
        .animate-marquee-slow {
          animation: marquee 10s linear infinite;
        }

        @media (max-width: 768px) {
  .animate-marquee-reverse span {
    font-size: 18px !important;
    font-weight: 200 !important;
  }

  .marque-secondary{
    padding: 6px 0 !important;
  }
  .animate-marquee span {
    font-size: 18px !important;
    font-weight: 200 !important;
  }

  .marque-primary{
    padding: 6px 0 !important;
  }

}

        ${mediaQueries}
      `}</style>
    </div>
  );
}
