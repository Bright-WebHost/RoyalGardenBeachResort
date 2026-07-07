import { CalendarHeart, Warehouse, Star, Users, Award, MapPin, ChevronDown, ChevronUp, TreePine, Coffee, Wifi, Car } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

/* ─── inline styles ─────────────────────────────────────── */
const BIO_STYLES = `
  /* ── Animated "Learn More" button ── */
  .learn-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #0B3D2C;
    color: #fff;
    border: 2px solid #0B3D2C;
    padding: 14px 32px;
    border-radius: 50px;
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    letter-spacing: 0.3px;
  }
  .learn-more-btn:hover {
    background: transparent;
    color: #0B3D2C;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(11,61,44,0.2);
  }
  .learn-more-btn .btn-icon {
    transition: transform 0.35s ease;
  }
  .learn-more-btn.open .btn-icon {
    transform: rotate(180deg);
  }

  /* ── Bio section wrapper (collapsible) ── */
  .bio-section-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.75s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.5s ease,
                transform 0.5s ease;
    opacity: 0;
    transform: translateY(-16px);
  }
  .bio-section-wrapper.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Bio section inner ── */
  .bio-section {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #0B3D2C 0%, #0e5038 50%, #0B3D2C 100%);
    border-radius: 24px;
    margin-top: 48px;
    padding: 52px 48px;
    color: #fff;
    box-shadow: 0 32px 80px rgba(11,61,44,0.35), 0 8px 24px rgba(0,0,0,0.12);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  @media (max-width: 767px) {
    .bio-section { grid-template-columns: 1fr; padding: 36px 24px; gap: 32px; }
    .bio-headline { font-size: 24px !important; }
    .bio-stats { grid-template-columns: repeat(2, 1fr) !important; }
  }

  /* Decorative animated circles */
  .bio-deco-circle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }
  .bio-deco-circle-1 {
    width: 220px; height: 220px;
    top: -60px; right: 45%;
    background: rgba(255,181,57,0.06);
    animation: bio-float 6s ease-in-out infinite;
  }
  .bio-deco-circle-2 {
    width: 140px; height: 140px;
    bottom: -40px; left: -40px;
    background: rgba(255,255,255,0.04);
    animation: bio-float 8s ease-in-out infinite reverse;
  }

  @keyframes bio-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50%       { transform: translateY(-18px) scale(1.05); }
  }

  /* Left column */
  .bio-left { display: flex; flex-direction: column; }

  /* Badge */
  .bio-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,181,57,0.18);
    border: 1px solid rgba(255,181,57,0.35);
    color: #FFB539;
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 13px;
    border-radius: 50px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 14px;
  }

  /* Location pill */
  .bio-location {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    padding: 5px 14px;
    border-radius: 50px;
    font-size: 12px;
    color: rgba(255,255,255,0.7);
    width: fit-content;
    margin-bottom: 22px;
  }

  /* Headline */
  .bio-headline {
    font-family: 'Manrope', sans-serif;
    font-size: 30px;
    font-weight: 800;
    color: #fff;
    line-height: 1.25;
    margin: 0 0 14px 0;
  }
  .bio-headline span { color: #FFB539; }

  .bio-sub {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: rgba(255,255,255,0.68);
    margin: 0 0 28px 0;
    line-height: 1.75;
  }

  /* Divider */
  .bio-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #FFB539, transparent);
    border-radius: 2px;
    margin-bottom: 28px;
    animation: bio-grow 1s ease forwards;
  }
  @keyframes bio-grow {
    from { width: 0; }
    to   { width: 60px; }
  }

  /* Stats row */
  .bio-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .bio-stat-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 14px;
    padding: 16px 10px;
    text-align: center;
    backdrop-filter: blur(8px);
    transition: all 0.35s ease;
    animation: bio-card-in 0.6s ease both;
  }
  .bio-stat-card:hover {
    background: rgba(255,181,57,0.12);
    border-color: rgba(255,181,57,0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
  }
  .bio-stat-icon {
    width: 36px; height: 36px;
    background: rgba(255,181,57,0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px;
  }
  .bio-stat-num {
    font-family: 'Manrope', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #FFB539;
    line-height: 1;
    margin-bottom: 3px;
  }
  .bio-stat-label {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    color: rgba(255,255,255,0.6);
    font-weight: 500;
    letter-spacing: 0.2px;
  }

  @keyframes bio-card-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .bio-stat-card:nth-child(1) { animation-delay: 0.05s; }
  .bio-stat-card:nth-child(2) { animation-delay: 0.12s; }
  .bio-stat-card:nth-child(3) { animation-delay: 0.19s; }
  .bio-stat-card:nth-child(4) { animation-delay: 0.26s; }

  /* Right column — image + floating quote */
  .bio-right {
    position: relative;
  }
  .bio-resort-img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    display: block;
    max-height: 340px;
    object-position: center;
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  }
  .bio-floating-quote {
    position: absolute;
    top: -20px;
    left: -20px;
    background: rgba(11,61,44,0.82);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,181,57,0.25);
    border-radius: 16px;
    padding: 18px 20px;
    max-width: 220px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  }
  .bio-floating-quote p {
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 600;
    font-style: italic;
    color: #FFB539;
    line-height: 1.6;
    margin: 0;
  }
  @media (max-width: 575px) {
    .bio-floating-quote { display: none; }
  }
`;

/* ─── Stats data ─────────────────────────────────────────── */
const STATS = [
  { icon: <Star size={20} color="#FFB539" />,   num: '4.9k', label: 'Happy Reviews'   },
  { icon: <Users size={20} color="#FFB539" />,  num: '12k+', label: 'Guests Hosted'   },
  { icon: <Award size={20} color="#FFB539" />,  num: '15+',  label: 'Years of Service' },
  { icon: <CalendarHeart size={20} color="#FFB539" />, num: '800+', label: 'Events Hosted' },
];

const AMENITIES = [
  'Lush Garden Views',
  'Spacious Event Halls',
  'On-site Catering',
  'Swimming Pool',
  'Free High-Speed WiFi',
  'Ample Parking Space',
  'Luxury Suites',
  'Kids Play Area',
];

/* ─── Component ──────────────────────────────────────────── */
function AboutOne() {
  const [bioOpen, setBioOpen] = useState(false);
  const bioRef = useRef(null);

  /* Dynamically set max-height once the section is visible */
  useEffect(() => {
    if (!bioRef.current) return;
    if (bioOpen) {
      bioRef.current.style.maxHeight = bioRef.current.scrollHeight + 'px';
    } else {
      bioRef.current.style.maxHeight = '0px';
    }
  }, [bioOpen]);

  return (
    <>
      {/* Inject scoped styles */}
      <style>{BIO_STYLES}</style>

      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container shape-mockup-wrap">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="/assets/img/rg/31.webp" alt="About" />
                </div>
                <div className="img2">
                  <img src="/assets/img/rg/32.webp" alt="About" />
                </div>
                <div className="img3">
                  <img src="/assets/img/rg/33.webp" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xl-4 ms-xl-2">
                <div className="title-area mb-20 pe-xl-5 me-xl-5">
                  <span className="sub-title style1 ">Discover Royal Garden</span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    Perfect Space For Every Celebration
                  </h2>
                  <p className="sec-text mb-30">
                    Enjoy peaceful surroundings, modern rooms, and a spacious garden
                     designed for families, friends, and events. Create unforgettable
                      memories together with comfort, happiness, and beautiful nature
                       around you.</p>
                </div>
                <div className="about-item-wrap">
                  <div className="about-item">
                    <div className="about-item_img">
                      <CalendarHeart size={32} color="#ffffffff" strokeWidth={1} />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Event Spaces</h5>
                      <p className="about-item_text">
                        Hosting weddings, parties, and gatherings becomes easy with
                         flexible arrangements and beautiful outdoor settings.
                      </p>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="about-item_img">
                      <Warehouse size={32} color="#ffffff" strokeWidth={1} />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Comfort Stay</h5>
                      <p className="about-item_text">
                        Relax in clean cozy rooms offering privacy, peaceful 
                        views, and modern facilities for every guest.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-35">
                  <button
                    id="learn-more-btn"
                    className={`learn-more-btn${bioOpen ? ' open' : ''}`}
                    onClick={() => setBioOpen(prev => !prev)}
                    aria-expanded={bioOpen}
                    aria-controls="bio-section"
                  >
                    {bioOpen ? 'Show Less' : 'Learn More'}
                    <span className="btn-icon">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bio Section (collapsible) ── */}
          <div
            id="bio-section"
            className={`bio-section-wrapper${bioOpen ? ' visible' : ''}`}
            ref={bioRef}
            aria-hidden={!bioOpen}
          >
            <div className="bio-section">
              {/* decorative circles */}
              <div className="bio-deco-circle bio-deco-circle-1" />
              <div className="bio-deco-circle bio-deco-circle-2" />

              {/* ── Left column ── */}
              <div className="bio-left">
                <span className="bio-badge">
                  <Star size={12} /> Our Story
                </span>

                <div className="bio-location">
                  <MapPin size={13} color="#FFB539" />
                  Thrissur, Kerala, India
                </div>

                <h3 className="bio-headline">
                  Where Nature Meets <span>Luxury</span>
                </h3>
                <p className="bio-sub">
                  Royal Garden Beach Resort was born from a simple dream — to create a place
                  where every moment feels like a celebration. Nestled amid lush greenery,
                  we have been crafting unforgettable experiences for over 15 years.
                </p>
                <div className="bio-divider" />

                {/* Stats */}
                <div className="bio-stats">
                  {STATS.map((s, i) => (
                    <div className="bio-stat-card" key={i}>
                      <div className="bio-stat-icon">{s.icon}</div>
                      <div className="bio-stat-num">{s.num}</div>
                      <div className="bio-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right column — image + floating quote ── */}
              <div className="bio-right">
                <div className="bio-floating-quote">
                  <p>"A garden is a love song, a duet between a human being and Mother Nature."</p>
                </div>
                <img
                  src="/assets/img/rg/63.webp"
                  alt="Royal Garden Beach Resort aerial view"
                  className="bio-resort-img"
                />
              </div>
            </div>
          </div>

          {/* shape mockups */}
          <div
            className="shape-mockup shape1 d-none d-xl-block"
            style={{ top: "12%", left: "-16%" }}
          >
            <img src="/assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            style={{ top: "20%", left: "-16%" }}
          >
            <img src="/assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xl-block"
            style={{ top: "14%", left: "-10%" }}
          >
            <img src="/assets/img/shape/shape_3.png" alt="shape" />
          </div>
          <div
            className="shape-mockup about-shape movingX d-none d-xxl-block"
            style={{ bottom: "0%", right: "-11%" }}
          >
            <img src="/assets/img/normal/about-slide-img.png" alt="shape" />
          </div>
          <div
            className="shape-mockup about-rating d-none d-xxl-block"
            style={{ bottom: "50%", right: "-20%" }}
          >
            <i className="fa-sharp fa-solid fa-star" />
            <span>4.9k</span>
          </div>
          <div
            className="shape-mockup about-emoji d-none d-xxl-block"
            style={{ bottom: "25%", right: "5%" }}
          >
            <img src="/assets/img/icon/emoji.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutOne
