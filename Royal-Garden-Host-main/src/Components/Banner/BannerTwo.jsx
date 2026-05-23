import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, A11y, EffectFade, Autoplay, Navigation, Thumbs } from 'swiper/modules'; // Correctly import necessary modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
function BannerTwo() {
  const swiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null); // Reference for the thumbs swiper
  useEffect(() => {
    // Function to add animation classes
    const animationProperties = () => {
      document.querySelectorAll('[data-ani]').forEach((element) => {
        const animationName = element.getAttribute('data-ani');
        element.classList.add(animationName);
      });
      document.querySelectorAll('[data-ani-delay]').forEach((element) => {
        const delayTime = element.getAttribute('data-ani-delay');
        element.style.animationDelay = delayTime;
      });
    };
    animationProperties();
  }, []);
  // Event handler for custom navigation arrows
  // const handleSliderNavigation = (direction) => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     const swiper = swiperRef.current.swiper;
  //     if (direction === 'prev') {
  //       swiper.slidePrev();
  //     } else {
  //       swiper.slideNext();
  //     }
  //   }
  // };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  // const destinationRef = useRef(null);
  // const handleScroll = (e) => {
  //   e.preventDefault();
  //   document.getElementById("destination-sec")?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className="hero-2" id="hero">
      <div className="hero2-overlay" style={{ backgroundImage: 'url(/assets/img/bg/line-pattern.png)', background:'linear-gradient(90deg,rgba(191, 140, 0, 1) 0%, rgba(255, 217, 112, 1) 50%, rgba(176, 130, 4, 1) 100%)', borderRadius:'0 0 24px 24px'}} />
      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Navigation, Thumbs, EffectFade, Autoplay]} // Added necessary modules
        className="swiper hero-slider-2"
        id="heroSlide2"
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiperRef.current }} // Using thumbsSwiperRef to link thumbs swiper
        effect="fade"
        pagination={{
          el: '.slider-pagination',
          type: 'progressbar',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        watchSlidesProgress={true}
        ref={swiperRef} // Attach ref to the main swiper
      >
        <SwiperSlide>
          <div className="hero-inner">
            <div className="th-hero-bg" style={{
        backgroundImage: `url(${isMobile ? '/assets/img/rgn/1.png' : '/assets/img/rg/10.webp'})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
          backgroundSize: isMobile ? "cover" : "cover", // Mobile image fits fully
    backgroundPosition: "center",
    height: isMobile ? "530px" : "100%",  // mobile height vs desktop height
    // borderRadius:isMobile?"5px 0 0 5px":"20px",
    width: "100%",
   
    // margin:'30px'
      }} />
            <div className="container">
              <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s" >
                  Rooms <span className="hero-text">Feel Good Staying With Us</span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
  {isMobile
    ? "Comfortable rooms with privacy, soft beds, and a homelike stay."
    : "Perfect for families, couples, and travelers, our rooms offer privacy, comfort, soft beds, and service that feels like home."
  }
</p>
<style>{`
@media(max-width:768px){
.hero-title{
font-size: 44px !important;
font-family:"Montez", cursive;
margin-top: 290px !important;
}
.hero-desc{
font-size:14px !important;
}
.th-hero-bg{
border-radius:none;
}

}
`}</style>

                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  {/* <Link to="/tour" className="th-btn white-btn th-icon">Explore Now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


       

        
        <SwiperSlide >
          <div className="hero-inner">
            <div className="th-hero-bg" style={{
        backgroundImage: `url(${isMobile ? '/assets/img/rgn/81.png' : '/assets/img/rg/8.webp'})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
          backgroundSize: isMobile ? "cover" : "cover", // Mobile image fits fully
    backgroundPosition: "center",
    height: isMobile ? "530px" : "100%",  // mobile height vs desktop height
    // borderRadius:isMobile?"5px 0 0 5px":"20px",
    width: "100%",
      }} />
            <div className="container">
              <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                  Garden <span className="hero-text">A Peaceful Garden for Everyone</span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
  {isMobile
    ? "Green spaces for celebrations, family time & weekend relaxation."
    : "Enjoy open green spaces perfect for celebrations, family time, and relaxing weekends filled with fresh air and sunshine today."
  }
</p>

                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  {/* <Link to="/destination" className="th-btn white-btn th-icon">Explore Now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="hero-inner">
            <div className="th-hero-bg" style={{
        backgroundImage: `url(${isMobile ? '/assets/img/rg/83.webp' : '/assets/img/rg/34.webp'})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
          backgroundSize: isMobile ? "cover" : "cover", // Mobile image fits fully
    backgroundPosition: "center",
    height: isMobile ? "530px" : "100%",  // mobile height vs desktop height
    // borderRadius:isMobile?"5px 0 0 5px":"20px",
    width: "100%",
      }} />
            <div className="container">
              <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                  Rooms <span className="hero-text">Comfortable Rooms For Relaxing</span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
  {isMobile
    ? "Clean, cozy rooms for restful sleep and fresh, happy mornings."
    : "Stay in clean, cozy rooms designed to give sleep, fresh mornings, and everything needed for a calm happy stay."
  }
</p>

                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  {/* <Link to="/destination" className="th-btn white-btn th-icon">Explore Now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="hero-inner">
            <div className="th-hero-bg" style={{
        backgroundImage: `url(${isMobile ? '/assets/img/rgn/2.png' : '/assets/img/rg/65.webp'})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
          backgroundSize: isMobile ? "cover" : "cover", // Mobile image fits fully
    backgroundPosition: "center",
    height: isMobile ? "530px" : "100%",  // mobile height vs desktop height
    // borderRadius:isMobile?"5px 0 0 5px":"20px",
    width: "100%",
      }} />
            <div className="container">
              <div className="hero-style2">
                <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">
                  Garden <span className="hero-text">Celebrate Special Days Outdoors </span>
                </h1>
                <p className="hero-desc" data-ani="slideinup" data-ani-delay="0.5s">
  {isMobile
    ? "Perfect for weddings, parties, photoshoots & peaceful evening walks."
    : "Our garden is a great place for weddings, parties, photoshoots, or peaceful evening walks that everyone will love always."
  }
</p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.6s">
                  {/* <Link to="/tour" className="th-btn white-btn th-icon">Explore Now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      {/* Custom Navigation */}
      {/* <div className="th-swiper-custom">
        <div className="slider-pagination" />
        <div className="hero-icon">
          <button data-slider-prev="#heroSlide2" className="hero-arrow slider-prev" onClick={() => handleSliderNavigation('prev')}>
            <img src="/assets/img/icon/hero-arrow-left.svg" alt="" />
          </button>
          <button data-slider-next="#heroSlide2" className="hero-arrow slider-next" onClick={() => handleSliderNavigation('next')}>
            <img src="/assets/img/icon/hero-arrow-right.svg" alt="" />
          </button>
        </div>
      </div> */}
      {/* Thumbs Swiper */}
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        className="heroThumbs style2"
        id="heroSlide3"
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.slider-next',
          prevEl: '.slider-prev',
        }}
        loop={true}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        centeredSlidesBounds={true}
        ref={thumbsSwiperRef} // Attach ref to the thumbs swiper
      >
        <SwiperSlide>
          <div className="hero-inner">
            <div className="hero-card">
              <div className="hero-img">
                <img src="/assets/img/rg/8.webp" alt="" />
              </div>
              <div className="hero-card_content">
                <h3 className="box-title">Garden</h3>
                <h4 className="hero-card_price"><span className="currency">Enjoy open green spaces perfect for celebrations</span></h4>
                {/* <span className="d-block"><i className="fa-light fa-clock" />7 Days</span> */}
                <Link to="/garden" className="th-btn style2">Book Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-inner">
            <div className="hero-card">
              <div className="hero-img">
                <img src="/assets/img/rg/10.webp" alt="" />
              </div>
              <div className="hero-card_content">
                <h3 className="box-title">Rooms</h3>
                <h4 className="hero-card_price"><span className="currency">Comfortable Rooms Made For Relaxing</span></h4>
                {/* <span className="d-block"><i className="fa-light fa-clock" />6 Days</span> */}
                <Link to="/rooms" className="th-btn style2">Book Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="hero-inner">
            <div className="hero-card">
              <div className="hero-img">
                <img src="/assets/img/hero/hero_bg_2_3.jpg" alt="" />
              </div>
              <div className="hero-card_content">
                <h3 className="box-title">Mountain Tour</h3>
                <h4 className="hero-card_price"><span className="currency">$850.00</span>/Person</h4>
                <span className="d-block"><i className="fa-light fa-clock" />7 Days</span>
                <Link to="/destination/1" className="th-btn style2">Book Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        {/* Add more SwiperSlides here as needed */}
      </Swiper>
      {/* <div className="scroll-down">
        <Link to="/#destination-sec" onClick={handleScroll} className="scroll-wrap">
          <span>
            <img src="/assets/img/icon/down-arrow.svg" alt="" />
          </span>
          Scroll Down
        </Link>
      </div> */}
      
    </div>
  );
}
export default BannerTwo;