import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function GalleryTwo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the selected image
    const openModal = (imageSrc, event) => {
        event.preventDefault(); // Prevent default link behavior
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div
            className="gallery-area2 bg-top-center space"
            style={{
                // backgroundImage: "url('/assets/img/bg/5.png')",
                backgroundRepeat: "no-repeat",
            }}
            data-bg-src=""
        >
           
            
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div className="title-area text-center text-lg-start mb-20 pe-xl-5 me-xl-5">
                            <span className="sub-title" style={{marginTop:'-100px'}}>Welcome to Royal Garden</span>
                            <style>{`
                            @media(max-width:768px){
                            .sub-title{
                            margin-top:-200px !important;
                            }
                            }
                            `}</style>
                            <h2 className="sec-title">
                                Beautifully Crafted for Memories
                            </h2>
                        </div>
                        <p className="sec-text style2 text-title mb-50">
                            Enjoy peaceful green views, comfortable rooms, and friendly service. Celebrate life’s special
                             moments or simply relax with family inside a calm, refreshing natural environment every day.
                        </p>
                    </div>
                    <div className="col-auto">
                        <div className="sec-btn">
                            <Link to="/gallery" className="th-btn style3 th-icon hide-mobile">
                                Enter Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container th-container2 shape-mockup-wrap hide-mobile">
                <div className="row gy-24 gx-24 justify-content-center">
                    <div className="col-lg-3 gallery-box_wrapp">
                        <div className="gallery-box">
                            <div className="gallery-img global-img" id='img-main'>
                                <Link
                                    to="/assets/img/rg/12.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/rg/12.webp', e)}
                                >
                                    <div className="icon-btn">
                                        {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                    </div>
                                    <img
                                        src="/assets/img/rg/12.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/rg/12.webp', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 gallery-box_wrapp ">
                        <div className="gallery-box hide-mobile">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/13.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/rg/13.webp', e)}
                                >
                                    <div className="icon-btn">
                                        {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                    </div>
                                    <img
                                        src="/assets/img/rg/13.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/rg/13.webp', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box " id='image'>
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/15.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/rg/15.webp', e)}
                                >
                                    <div className="icon-btn">
                                        {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                    </div>
                                    <img
                                        src="/assets/img/rg/15.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/rg/15.webp', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                       
                        <style>{`
                        @media(max-width:1024px){
    .hide-system{
    display: none !important;
    }
                        }
                       @media (max-width: 768px) {   /* apply only on mobile & small screens */
  #image {
    margin-top: -100px;
    width: 90%;
    margin-left: -5px;
  }

  #image img {
    border: 3px solid white;
  }
    #img-main{
    margin-left:50px;
    margin-top: -70px;
    }
    .sub-title{
    margin-top: -199px !important;
    }
}
  /* Default: hide on desktop */
.hide-desktop {
  display: none;
}

/* Show only on mobile */
@media (max-width: 767px) {
  .hide-desktop {
    display: block;
  }
}
  /* About area 1 start -------------------------*/
.img-box1 {
  position: relative;
  margin-bottom: 20px;
  /* Large devices */
}

@media (max-width: 1199px) {
  .img-box1 {
    margin-bottom: 20px;
  }
}

.img-box1 .img1 {
  position: relative;
  overflow: hidden;
  /* Medium Large devices */
}

@media (max-width: 1299px) {
  .img-box1 .img1 {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .img-box1 .img1 {
    max-width: 46%;
  }
}

.img-box1 .img1 img {
  border-radius: 24px 0px 54px 0px;
  margin-left: 20px;
}

.img-box1 .img2 {
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  /* Medium Large devices */
  /* Large devices */
  /* Medium devices */
  /* Small devices */
}

@media (max-width: 1399px) {
  .img-box1 .img2 {
    max-width: 280px;
  }
}

@media (max-width: 1299px) {
  .img-box1 .img2 {
    max-width: 220px;
  }
}

@media (max-width: 1199px) {
  .img-box1 .img2 {
    right: 40%;
  }
}

@media (max-width: 991px) {
  .img-box1 .img2 {
    right: 20%;
  }
}

@media (max-width: 767px) {
  .img-box1 .img2 {
    right: 6%;
  }
}

@media (max-width: 480px) {
  .img-box1 .img2 {
    left: 50%;
  }
}

.img-box1 .img2 img {
  border-radius: 0px 156px 156px 0px;
}

.img-box1 .img3 {
  position: absolute;
  bottom: -20px;
  right: 0;
  overflow: hidden;
  /* Medium Large devices */
  /* Large devices */
  /* Medium devices */
  /* Small devices */
}

@media (max-width: 1399px) {
  .img-box1 .img3 {
    max-width: 280px;
  }
}

@media (max-width: 1299px) {
  .img-box1 .img3 {
    max-width: 220px;
  }
}

@media (max-width: 1199px) {
  .img-box1 .img3 {
    right: 40%;
  }
}

@media (max-width: 991px) {
  .img-box1 .img3 {
    right: 20%;
  }
}

@media (max-width: 767px) {
  .img-box1 .img3 {
    right: 6%;
    bottom:-10px;
  }
}

@media (max-width: 480px) {
  .img-box1 .img3 {
    left: 50%;
  }
}

.img-box1 .img3 img {
  border-radius: 0px 156px 0px 136px;
}
  
                        `}</style>
                    </div>
                    <div className="col-lg-3 gallery-box_wrapp hide-mobile">
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/14.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/gallery/gallery_2_4.jpg', e)}
                                >
                                    <div className="icon-btn">
                                        {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                    </div>
                                    <img
                                        src="/assets/img/rg/14.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/gallery/gallery_2_4.jpg', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box hide-mobile">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/16.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/gallery/gallery_2_5.jpg', e)}
                                >
                                    <div className="icon-btn">
                                        {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                    </div>
                                    <img
                                        src="/assets/img/rg/16.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/gallery/gallery_2_5.jpg', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 gallery-box_wrapp hide-mobile">
                        <div className="gallery-box">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/17.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/gallery/gallery_2_6.jpg', e)}
                                >
                                    <div className="icon-btn">
                                        {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                    </div>
                                    <img
                                        src="/assets/img/rg/17.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/gallery/gallery_2_6.jpg', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{
                        bottom: "35%",
                        right: "-4%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
                </div>
                <div
                    className="shape-mockup movingX d-none d-xl-block"
                    style={{
                        bottom: "8%",
                        left: "-10%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
                </div>
            </div>
             <div className="row hide-desktop">
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
</div>

            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryTwo
