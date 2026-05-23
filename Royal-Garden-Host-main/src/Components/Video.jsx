import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Play, Pause, Volume2, VolumeX, Radius } from "lucide-react";

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    borderRadius: '20px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  video: {
    width: '99%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    margin: '0 auto',
    display: 'block',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    animation: 'slideUp 0.8s ease-out forwards',
    animationDelay: '0.2s',
    opacity: 0,
    animationFillMode: 'forwards'
  },
};


const Video = () => {
  const videoRef = useRef(null);
  const [, setIsPlaying] = useState(true);
  // const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  // const togglePlay = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // const toggleMute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = !isMuted;
  //     setIsMuted(!isMuted);
  //   }
  // };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .video-container-mobile {
            height: auto !important;
            min-height: 80vh;
            padding: 0 !important;
            border-radius: 0 !important;
            align-items: flex-start !important;
          }
          
          .video-mobile {
            width: 97% !important;
            height: auto !important;
            object-fit: contain !important;
            border-radius: 20px !important;
            margin: 0 !important;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .video-container-mobile {
            min-height: 30vh;
          }
        }

        /* Landscape mode */
        @media (max-height: 500px) and (orientation: landscape) {
          .video-container-mobile {
            min-height: 100vh;
          }
          
          .video-mobile {
            height: 90vh !important;
            width: auto !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      
      <div 
        style={styles.container} 
        className="video-container-mobile"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          style={styles.video}
          className="video-mobile"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/Royal Garden V2.mp4"
            type="video/mp4"
          />
        </video>
        
      </div>
    </>
  );
};

export default Video;