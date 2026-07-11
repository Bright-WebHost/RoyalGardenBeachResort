import { CalendarHeart, Warehouse, Star, Users, Award, MapPin, ChevronDown, ChevronUp, ShoppingBag, Trophy } from 'lucide-react'
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

  /* ── Bio section outer card ── */
  .bio-section {
    position: relative;
    background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e9 100%);
    border-radius: 16px;
    padding: 48px;
    border-left: 5px solid #0B3D2C;
    box-shadow: 0 8px 32px rgba(11, 61, 44, 0.1);
    margin-top: 48px;
    // padding: 48px 44px;
    box-shadow: 0 8px 40px rgba(11,61,44,0.10);
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
    // border: 1px solid rgba(11,61,44,0.08);
  }
  /* ════════════════════════════════════════
     RESPONSIVE BREAKPOINTS
  ════════════════════════════════════════ */

  /* ── Tablet landscape / small desktop (≤ 900px) ── */
  @media (max-width: 900px) {
    .bio-section {
      grid-template-columns: 1fr;
      padding: 36px 28px;
      gap: 28px;
      margin-top: 36px;
      border-radius: 16px;
    }
    /* Stat cards switch to a horizontal 3-column row */
    .bio-right {
      flex-direction: row;
      gap: 12px;
    }
    .bio-stat-card {
      flex: 1;
      padding: 18px 12px 14px;
    }
    .bio-stat-num   { font-size: 24px; }
    .bio-stat-label { font-size: 14px; margin-bottom: 6px; }
    .bio-stat-desc  { font-size: 11px; }
  }

  /* ── Tablet portrait (≤ 768px) ── */
  @media (max-width: 768px) {
    .bio-section {
      padding: 28px 20px;
      gap: 24px;
      margin-top: 28px;
    }
    .bio-headline  { font-size: 22px; }
    .bio-body-para { font-size: 13px; }
    .bio-features-grid { gap: 14px 20px; }
    .bio-feature-title { font-size: 13px; }
    .bio-feature-desc  { font-size: 12px; }
    .bio-stat-num   { font-size: 22px; }
    .bio-stat-label { font-size: 13px; }
    .bio-stat-desc  { font-size: 11px; }
  }

  /* ── Large phone (≤ 575px) ── */
  @media (max-width: 575px) {
    .bio-section {
      padding: 24px 16px;
      gap: 20px;
      margin-top: 24px;
      border-radius: 14px;
    }
    .bio-our-story { font-size: 11px; letter-spacing: 1px; }
    .bio-headline  { font-size: 20px; margin-bottom: 14px; }
    .bio-body-para { font-size: 12.5px; margin-bottom: 10px; }
    .bio-features-grid {
      grid-template-columns: 1fr 1fr;
      gap: 12px 14px;
      margin-top: 16px;
    }
    .bio-feature-title { font-size: 12.5px; }
    .bio-feature-desc  { font-size: 11.5px; padding-left: 22px; }
    .bio-right { gap: 8px; }
    .bio-stat-card  { padding: 14px 8px 12px; border-radius: 10px; }
    .bio-stat-num   { font-size: 20px; }
    .bio-stat-label { font-size: 12px; margin-bottom: 4px; }
    .bio-stat-desc  { font-size: 10px; }
    /* Button full width */
    .learn-more-btn {
      width: 100%;
      justify-content: center;
      padding: 13px 20px;
      font-size: 14px;
    }
  }

  /* ── Small phone (≤ 400px) ── */
  @media (max-width: 400px) {
    .bio-section { padding: 18px 12px; border-radius: 12px; }
    .bio-headline  { font-size: 18px; }
    .bio-body-para { font-size: 12px; line-height: 1.7; }
    /* Features collapse to 1 column on very small screens */
    .bio-features-grid { grid-template-columns: 1fr; gap: 10px; }
    .bio-feature-desc  { padding-left: 22px; }
    .bio-stat-card  { padding: 12px 6px 10px; border-radius: 9px; }
    .bio-stat-num   { font-size: 18px; }
    .bio-stat-label { font-size: 11px; }
    /* Hide description text at very small sizes */
    .bio-stat-desc  { display: none; }
  }

  /* ── Left column ── */
  .bio-left { display: flex; flex-direction: column; }

  /* OUR STORY subtitle */
  .bio-our-story {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #b5862a;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .bio-our-story::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: #b5862a;
    border-radius: 2px;
  }

  /* Main headline */
  .bio-headline {
    font-family: 'Manrope', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.3;
    margin: 0 0 20px 0;
  }

  /* Body paragraphs */
  .bio-body-para {
    font-family: 'Inter', sans-serif;
    font-size: 13.5px;
    color: #4a4a4a;
    line-height: 1.78;
    margin: 0 0 14px 0;
  }
  .bio-body-para strong {
    font-weight: 700;
    color: #1a1a1a;
  }

  /* ── Features 2x2 grid ── */
  .bio-features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 32px;
    margin-top: 22px;
  }
  @media (max-width: 575px) {
    .bio-features-grid { grid-template-columns: 1fr; }
  }

  .bio-feature-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .bio-feature-title-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 2px;
  }
  .bio-feature-icon {
    color: #0B3D2C;
    flex-shrink: 0;
  }
  .bio-feature-title {
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
  }
  .bio-feature-desc {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    padding-left: 26px;
  }

  /* ── Right column — stacked stat cards ── */
  .bio-right {
    display: flex;
    flex-direction: column;
    gap: 54px;
  }

  .bio-stat-card {
    background: #0B3D2C;
    border-radius: 14px;
    padding: 22px 22px 18px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: bio-card-in 0.5s ease both;
  }
  .bio-stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px rgba(11,61,44,0.35);
  }
  .bio-stat-num {
    font-family: 'Manrope', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #FFB539;
    line-height: 1.1;
    margin-bottom: 4px;
  }
  .bio-stat-label {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 8px;
  }
  .bio-stat-desc {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    line-height: 1.4;
  }

  @keyframes bio-card-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .bio-stat-card:nth-child(1) { animation-delay: 0.05s; }
  .bio-stat-card:nth-child(2) { animation-delay: 0.15s; }
  .bio-stat-card:nth-child(3) { animation-delay: 0.25s; }
`;

/* ─── Stats data ─────────────────────────────────────────── */
const STATS = [
  { num: '500+', label: 'Events Hosted',   desc: 'Weddings, parties & corporate events' },
  { num: '4.9★', label: 'Guest Rating',    desc: 'Consistently loved by our guests'     },
  { num: '20+',  label: 'Premium Rooms',   desc: 'Suites, cottages & guest rooms'        },
];

const FEATURES = [
  {
    icon: <MapPin size={26} />,
    title: 'Prime Location',
    desc: 'Located in Ullal, just minutes from the beach and city conveniences of Mangalore.',
  },
  {
    icon: <Trophy size={26} />,
    title: 'Award-Winning Hospitality',
    desc: 'Consistently rated among the top beach resorts in Coastal Karnataka.',
  },
  {
    icon: <Users size={26} />,
    title: 'Perfect for Groups',
    desc: 'Spacious venues and rooms ideal for families, weddings, and corporate events.',
  },
  {
    icon: <ShoppingBag size={26} />,
    title: 'Premium Amenities',
    desc: 'Swimming pool, luxurious suites, open garden, and world-class event facilities.',
  },
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
              {/* ── Left column ── */}
              <div className="bio-left">
                <div className="sub-title style1">Our Story</div>

                <h3 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  Royal Garden Beach Resort &mdash; Where Memories Are Made
                </h3>

                <p className="about-item_text">
                  Nestled in the serene coastal town of <strong>Ullal, Karnataka</strong>, Royal Garden Beach Resort is a
                  premier destination for those seeking a perfect blend of luxury, nature, and heartfelt
                  hospitality. Set against a backdrop of lush tropical greenery and gentle ocean breezes, our
                  resort offers an escape from the everyday.
                </p><br/>
                <p className="about-item_text">
                  Founded with a vision to create a sanctuary where families, couples, and friends can celebrate
                  life&apos;s most cherished moments, Royal Garden has grown into one of the coast&apos;s most beloved
                  resort destinations. Our sprawling property features elegantly appointed rooms, premium
                  suites, and a stunning open-air garden venue that has hosted countless weddings, receptions,
                  corporate gatherings, and intimate celebrations.
                </p><br/>
                <p className="about-item_text">
                  Our dedicated team believes that every guest deserves an experience that goes beyond
                  expectations &mdash; from the warm welcome at arrival to the fond farewell at departure. Whether
                  you are here for a peaceful weekend retreat, a destination wedding, or a family holiday, we
                  ensure every detail is crafted with care.
                </p>

                {/* 2×2 feature grid */}
                <div className="bio-features-grid">
                  {FEATURES.map((f, i) => (
                    <div className="bio-feature-item" key={i}>
                      <div className="bio-feature-title-row">
                        <span className="bio-feature-icon" >{f.icon}</span>
                        <span className="bio-feature-title">{f.title}</span>
                      </div>
                      <p className="bio-feature-desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right column — stacked stat cards ── */}
              <div className="bio-right">
                {STATS.map((s, i) => (
                  <div className="bio-stat-card" key={i}>
                    <div className="bio-stat-num">{s.num}</div>
                    <div className="bio-stat-label">{s.label}</div>
                    <div className="about-item_text">{s.desc}</div>
                  </div>
                ))}
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
