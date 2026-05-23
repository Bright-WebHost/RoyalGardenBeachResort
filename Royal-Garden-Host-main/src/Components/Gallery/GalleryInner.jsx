import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function GalleryInner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (imageSrc, event) => {
        event.preventDefault();
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Gallery images data
    const galleryImages = Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        src: `/assets/img/rg/${51 + i}.webp`,
        alt: `gallery image ${51 + i}`
    }));

    return (
        <div className="overflow-hidden space" id="gallery-sec">
            <style>{`
                /* Consistent card sizing with Bootstrap */
                .gallery-box {
                    height: 340px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .gallery-box:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                }
                
                .gallery-img {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                
                .gallery-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                
                .gallery-box:hover .gallery-img img {
                    transform: scale(1.05);
                }
                
                .gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    // background: rgba(0, 0, 0, 0.3);
                    opacity: 0;
                    // transition: opacity 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .gallery-box:hover .gallery-overlay {
                    // opacity: 1;
                }
                
                .icon-btn {
                    // background: rgba(255, 255, 255, 0.9);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #333;
                    font-size: 20px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    transform: scale(0.8);
                    opacity: 0;
                }
                
                .gallery-box:hover .icon-btn {
                    transform: scale(1);
                    // opacity: 1;
                }
                
                .icon-btn:hover {
                    background: white;
                    color: #000;
                    transform: scale(1.1) !important;
                }
                
                /* Responsive adjustments */
                @media (max-width: 1200px) {
                    .gallery-box {
                        height: 280px;
                    }
                }
                
                @media (max-width: 992px) {
                    .gallery-box {
                        height: 250px;
                    }
                }
                
                @media (max-width: 768px) {
                    .gallery-box {
                        height: 350px !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .gallery-box {
                        height: 180px;
                    }
                    
                    .icon-btn {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }
                }
            `}</style>
            
            <div className="container-fluid">
                <div className="title-area mb-30 text-center">
                    <span className="sub-title">Explore Us</span>
                    <h2 className="sec-title">A Truly Exceptional Experience</h2>
                </div>
                
                <div className="row gy-4">
                    {galleryImages.map((image) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={image.id}>
                            <div className="gallery-box style5">
                                <div className="gallery-img">
                                    <img src={image.src} alt={image.alt} />
                                    <div className="gallery-overlay">
                                        <Link
                                            to={image.src}
                                            className="icon-btn popup-image"
                                            onClick={(e) => openModal(image.src, e)}
                                        >
                                            {/* <i className="fal fa-magnifying-glass-plus" /> */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>
    );
}

export default GalleryInner;