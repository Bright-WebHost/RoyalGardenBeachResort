import React from 'react'
// import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
// import ActivitiesInner from '../Components/Activities/ActivitiesInner'
// import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import HeaderTwo from '../Components/Header/HeaderTwo'
import ServiceInner from '../Components/Services/ServiceInner'
// import PopularDestination from '../Components/Destination/PopularDestination'
import DestinationTwo from '../Components/Destination/DestinationTwo'
import FooterTwo from '../Components/Footer/FooterTwo'
import GalleryThree from '../Components/Gallery/GalleryThree'

function Activities() {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb
                title="Rooms"
            />
            {/* <PopularDestination /> */}
            <DestinationTwo />
            <ServiceInner />
            <GalleryThree />
            {/* <ActivitiesInner /> */}
            <FooterTwo />
            <ScrollToTop />
        </>
    )
}

export default Activities
