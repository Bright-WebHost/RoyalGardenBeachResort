import React, { useState } from 'react';

const CATEGORIES = ['All', 'Property', 'Venue', 'Rooms'];

const galleryData = {
  Property: [
    { id: 1, src: '/assets/img/custom/property-1.jpg', alt: 'Royal Garden Aerial View', caption: 'Aerial View — Lush greenery & pool' },
    { id: 2, src: '/assets/img/custom/property-2.jpg', alt: 'Royal Garden Sunset View', caption: 'Sunset View — Pool & facade' },
    { id: 3, src: '/assets/img/custom/property-3.jpg', alt: 'Royal Garden Night View', caption: 'Night Illumination — Grand entrance' },
    // Fallback to existing webp images for more property shots
    { id: 4, src: '/assets/img/rg/51.webp', alt: 'Resort Property', caption: 'Resort Grounds' },
    { id: 5, src: '/assets/img/rg/52.webp', alt: 'Resort Property', caption: 'Resort Exterior' },
    { id: 6, src: '/assets/img/rg/53.webp', alt: 'Resort Property', caption: 'Garden Area' },
    { id: 7, src: '/assets/img/rg/54.webp', alt: 'Resort Property', caption: 'Swimming Pool' },
    { id: 8, src: '/assets/img/rg/55.webp', alt: 'Resort Property', caption: 'Poolside' },
  ],
  Venue: [
    { id: 9, src: '/assets/img/custom/venue-1.png', alt: 'Outdoor Dinner Setup', caption: 'Outdoor Banquet — String lights & tables' },
    { id: 10, src: '/assets/img/custom/venue-2.png', alt: 'Ceremony Setup', caption: 'Wedding Ceremony — Red carpet aisle' },
    { id: 11, src: '/assets/img/custom/venue-3.png', alt: 'Floral Stage Decor', caption: 'Floral Stage — Tropical garden backdrop' },
    { id: 12, src: '/assets/img/rg/56.webp', alt: 'Venue', caption: 'Event Space' },
    { id: 13, src: '/assets/img/rg/57.webp', alt: 'Venue', caption: 'Celebration Setup' },
    { id: 14, src: '/assets/img/rg/58.webp', alt: 'Venue', caption: 'Garden Party' },
  ],
  Rooms: [
    { id: 15, src: '/assets/img/custom/suite-premium.png', alt: 'Royal Premium Suite', caption: 'Royal Premium Suite — Orchid theme' },
    { id: 16, src: '/assets/img/custom/suite-rose.png', alt: 'Royal Premium Suite Rose', caption: 'Royal Premium Suite (Rose) — Jacuzzi & luxury' },
    { id: 17, src: '/assets/img/rg/59.webp', alt: 'Room', caption: 'Deluxe Room' },
    { id: 18, src: '/assets/img/rg/60.webp', alt: 'Room', caption: 'Premium Room' },
    { id: 19, src: '/assets/img/rg/61.webp', alt: 'Room', caption: 'Cottage' },
    { id: 20, src: '/assets/img/rg/62.webp', alt: 'Room', caption: 'Suite Interior' },
  ],
};

const allImages = [
  ...galleryData.Property,
  ...galleryData.Venue,
  ...galleryData.Rooms,
];

function GalleryInner() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxCaption, setLightboxCaption] = useState('');

  const displayedImages =
    activeCategory === 'All' ? allImages : galleryData[activeCategory] || [];

  const openLightbox = (src, caption) => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <div className="overflow-hidden space" id="gallery-sec">
      <style>{`
        .gallery-filter-btn {
          border: 2px solid #0B3D2C;
          background: transparent;
          color: #0B3D2C;
          padding: 8px 24px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 4px;
          font-size: 14px;
        }
        .gallery-filter-btn.active,
        .gallery-filter-btn:hover {
          background: #0B3D2C;
          color: white;
        }
        .gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          cursor: pointer;
          aspect-ratio: 4/3;
          background: #111;
        }
        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .gallery-card:hover img {
          transform: scale(1.08);
        }
        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11,61,44,0.85) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }
        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }
        .gallery-card-caption {
          color: white;
          font-size: 14px;
          font-weight: 500;
        }
        .gallery-card-zoom {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: #0B3D2C;
          font-size: 16px;
        }
        .gallery-card:hover .gallery-card-zoom {
          opacity: 1;
        }
        .gallery-section-label {
          font-size: 22px;
          font-weight: 700;
          color: #0B3D2C;
          border-bottom: 3px solid #D4A935;
          padding-bottom: 8px;
          margin-bottom: 24px;
          display: inline-block;
        }
        .gallery-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 20px;
        }
        .gallery-lightbox img {
          max-width: 90vw;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 0 60px rgba(0,0,0,0.8);
        }
        .gallery-lightbox-caption {
          color: #D4A935;
          margin-top: 16px;
          font-size: 16px;
          font-weight: 500;
        }
        .gallery-lightbox-close {
          position: absolute;
          top: 20px;
          right: 24px;
          background: none;
          border: none;
          color: white;
          font-size: 36px;
          cursor: pointer;
          line-height: 1;
        }
        .gallery-count-badge {
          background: #D4A935;
          color: white;
          border-radius: 50px;
          font-size: 12px;
          padding: 2px 10px;
          margin-left: 8px;
          font-weight: 600;
        }
        @media(max-width:768px){
          .gallery-filter-btn { padding: 6px 16px; font-size: 13px; }
        }
      `}</style>

      <div className="container">
        {/* Title */}
        <div className="row justify-content-center mb-40">
          <div className="col-lg-8 text-center">
            <span className="sub-title">Our Visual Journey</span>
            <h2 className="sec-title mb-20">Explore Our Gallery</h2>
            <p className="sec-text">Browse through our beautiful property, stunning venue setups, and luxurious rooms.</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-40">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {cat !== 'All' && (
                <span className="gallery-count-badge">
                  {galleryData[cat]?.length || 0}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Categorized sections when 'All' is selected */}
        {activeCategory === 'All' ? (
          <>
            {['Property', 'Venue', 'Rooms'].map(section => (
              <div key={section} className="mb-60">
                <div className="d-flex align-items-center mb-30 gap-3">
                  <span className="gallery-section-label">{section === 'Rooms' ? 'Rooms & Suites' : `${section} Photos`}</span>
                </div>
                <div className="row g-3">
                  {galleryData[section].map(img => (
                    <div className="col-6 col-md-4 col-lg-3" key={img.id}>
                      <div className="gallery-card" onClick={() => openLightbox(img.src, img.caption)}>
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <div className="gallery-card-overlay">
                          <span className="gallery-card-caption">{img.caption}</span>
                        </div>
                        <div className="gallery-card-zoom">
                          <i className="fa fa-search-plus" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="row g-3">
            {displayedImages.map(img => (
              <div className="col-6 col-md-4 col-lg-3" key={img.id}>
                <div className="gallery-card" onClick={() => openLightbox(img.src, img.caption)}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-caption">{img.caption}</span>
                  </div>
                  <div className="gallery-card-zoom">
                    <i className="fa fa-search-plus" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox-close" onClick={closeLightbox}>×</button>
          <img src={lightboxSrc} alt="Gallery" onClick={e => e.stopPropagation()} />
          {lightboxCaption && <p className="gallery-lightbox-caption">{lightboxCaption}</p>}
        </div>
      )}
    </div>
  );
}

export default GalleryInner;
