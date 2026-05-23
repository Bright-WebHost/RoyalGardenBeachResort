import React from 'react'
// import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import GetInTouch from '../Components/Contact/GetInTouch'
import BookATour from '../Components/Contact/BookATour'
import ContactMap from '../Components/Contact/ContactMap'
// import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
// import HeaderThree from '../Components/Header/HeaderThree'
import HeaderTwo from '../Components/Header/HeaderTwo'
import FooterTwo from '../Components/Footer/FooterTwo'

function Contact() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title='Contact Us'
            />
            <GetInTouch />
            <BookATour />
            <ContactMap />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Contact
