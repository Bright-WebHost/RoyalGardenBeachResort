import React, { useState } from 'react'
import Modal from './Modal';
import { Link } from 'react-router-dom';

function GalleryThree() {
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
        <div className="overflow-hidden space-bottom">
            <div className="container">
                <div className="title-area text-center"><br/>
                    {/* <span className="sub-title"></span> */}
                    <h2 className="sec-title">Rooms</h2>
                </div>
                <div className="row gy-24 gx-24 justify-content-center">
                    <div className="col-lg-3 hide-mobile">
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/86.webp"
                                    className="popup-image"
                                >
                                    {/* <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div> */}
                                    <img
                                        src="/assets/img/rg/86.webp"
                                        alt="gallery"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/87.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/rg/87.webp', e)}
                                >
                                    {/* <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div> */}
                                    <img
                                        src="/assets/img/rg/87.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/rg/87.webp', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/89.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/rg/89.webp', e)}
                                >
                                    {/* <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div> */}
                                    <img
                                        src="/assets/img/rg/89.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/rg/89.webp', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="gallery-box style2">
                            <div className="gallery-img global-img">
                                <Link
                                    to="/assets/img/rg/88.webp"
                                    className="popup-image"
                                    onClick={(e) => openModal('/assets/img/rg/88.webp', e)}
                                >
                                    {/* <div className="icon-btn">
                                        <i className="fal fa-magnifying-glass-plus" />
                                    </div> */}
                                    <img
                                        src="/assets/img/rg/88.webp"
                                        alt="gallery"
                                        onClick={(e) => openModal('/assets/img/rg/88.webp', e)}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="gallery-box-wrapp">
                            <div className="gallery-box style2">
                                <div className="gallery-img global-img">
                                    <Link
                                        to="/assets/img/rg/90.webp"
                                        className="popup-image"
                                        onClick={(e) => openModal('/assets/img/rg/90.webp', e)}
                                    >
                                        {/* <div className="icon-btn">
                                            <i className="fal fa-magnifying-glass-plus" />
                                        </div> */}
                                        <img
                                            src="/assets/img/rg/90.webp"
                                            alt="gallery"
                                            onClick={(e) => openModal('/assets/img/rg/90.webp', e)}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="gallery-box style2">
                                <div className="gallery-img global-img">
                                    <Link
                                        to="/assets/img/rg/91.webp"
                                        className="popup-image"
                                        onClick={(e) => openModal('/assets/img/rg/91.webp', e)}
                                    >
                                        {/* <div className="icon-btn">
                                            <i className="fal fa-magnifying-glass-plus" />
                                        </div> */}
                                        <img
                                            src="/assets/img/rg/91.webp"
                                            alt="gallery"
                                            onClick={(e) => openModal('/assets/img/rg/91.webp', e)}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} />
        </div>

    )
}

export default GalleryThree
