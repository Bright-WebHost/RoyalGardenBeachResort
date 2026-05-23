import React from 'react'
// import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ResortInner from '../Components/Resort/ResortInner'
// import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderThree from '../Components/Header/HeaderThree'
import FooterTwo from '../Components/Footer/FooterTwo'

function Resort() {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                title="Services"
            />
            <ResortInner />
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Resort
