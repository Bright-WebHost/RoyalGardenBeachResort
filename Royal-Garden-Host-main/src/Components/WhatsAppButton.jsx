import { useState } from 'react';
// import { MessageCircle } from "lucide-react";

const WhatsAppButton = ({ phoneNumber = "+919632526302", message = "Hello!" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '6rem',
    right: '1.85rem',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '9999px',
    backgroundColor: '#25D366',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isHovered 
      ? '0 6px 20px rgba(37, 211, 102, 0.6)' 
      : '0 4px 12px rgba(37, 211, 102, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    textDecoration: 'none',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <i class="fa-brands fa-whatsapp" style={{fontSize:'32px'}} ></i>
    </a>
  );
};

export default WhatsAppButton;