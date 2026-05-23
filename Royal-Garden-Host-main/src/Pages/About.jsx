import React from 'react'
// import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
// import AboutFour from '../Components/About/AboutFour'
// import OfferTwo from '../Components/Offer/OfferTwo'
// import ElementSection from '../Components/Elements/ElementSection'
// import TourGuideTwo from '../Components/Guide/TourGuideTwo'
// import TestimonialOne from '../Components/Testimonials/TestimonialOne'
// import BrandOne from '../Components/Brand/BrandOne'
// import GalleryFive from '../Components/Gallery/GalleryFive'
// import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
// import TourGuide from '../Components/Guide/TourGuide'
// import TourGuideThree from '../Components/Guide/TourGuideThree'
// import HeaderThree from '../Components/Header/HeaderThree'
import AboutOne from '../Components/About/AboutOne'
import HeaderTwo from '../Components/Header/HeaderTwo'
import FooterTwo from '../Components/Footer/FooterTwo'

function About() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="About Us"
            />
            {/* <AboutFour /> */}
            <AboutOne />
            {/* <BrandOne/> */}
            {/* <TourGuide /> */}
            {/* <OfferTwo /> */}
            {/* <ElementSection /> */}
            {/* <TourGuideTwo /> */}
            {/* <TestimonialOne /> */}
            {/* <BrandOne/> */}
            {/* <GalleryFive /> */}
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default About
