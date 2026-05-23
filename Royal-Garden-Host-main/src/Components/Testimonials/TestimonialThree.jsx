import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

function TestimonialThree() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="testi-area3 bg-bottom-center overflow-hidden space-bottom" id="testi-sec"
            style={{ backgroundImage: "url(/assets/img/bg/3.webp)", backgroundRepeat:"no-repeat" ,marginBottom:'50px'}}>
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title" id='subtext2' style={{marginTop: '100px'}}>Testimonials</span>
                    <h2 className="sec-title">What Guests Say</h2>
                </div>
                <style>{`
                            @media(max-width:768px){
                            #subtext2{
                            margin-top:60px !important;
                            }
                            .testi-area3{
                            margin-bottom: -100px !important;
                            }
                            }
                            `}</style>
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        {/* Main Swiper */}
                        <Swiper
                            modules={[Pagination, Thumbs]}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}  // Pagination is now explicitly enabled
                            thumbs={{ swiper: thumbsSwiper }} // Link the main Swiper to thumbs swiper
                            className="th-slider testiSlide3 z-index-3"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testi-grid">
                                        <div className="testi-grid_author">
                                            <img src={testimonial.image} alt="Avatar" />
                                        </div>
                                        <div className="testi-grid_content">
                                            <p className="testi-grid_text">{testimonial.text}</p>
                                            <h6 className="testi-grid_name box-title">{testimonial.name}</h6>
                                            {/* <span className="testi-grid_desig">{testimonial.designation}</span> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Thumbs Swiper */}
            <Swiper
                modules={[Thumbs]}
                slidesPerView={6}
                spaceBetween={7}
                loop={true}
                onSwiper={setThumbsSwiper} // Set thumbsSwiper when this Swiper is initialized
                className="th-slider testi-grid-thumb shape-mockup-wrap"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="box-img">
                            <img src={testimonial.image} alt="Thumbnail" />
                        </div>
                    </SwiperSlide>

                ))}
                <div className="shape-mockup movingX d-none d-xl-block"
                    style={{
                        top: "0%",
                        left: "5%",
                    }}
                >
                    <img className="gmovingX" src="/assets/img/shape/shape_7.png" alt="shape" />
                </div>
                <div className="shape-mockup spin d-none d-xl-block"
                    style={{
                        bottom: "25%",
                        right: "5%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2_5.png" alt="shape" />
                </div>
                <div className="shape-mockup jump d-none d-xl-block"
                    style={{
                        bottom: "30%",
                        left: "5%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
                </div>
            </Swiper>
        </section>
    );
}

const testimonials = [
    {
        image: "/assets/img/rg/38.webp",
        text: "“We loved our stay at Royal Garden. Peaceful vibe, clean comfortable rooms, beautiful views, tasty food, and friendly service made our family trip amazing and memorable.”",
        name: "Pushpa",
        designation: "Traveller",
    },
    {
        image: "/assets/img/rg/39.webp",
        text: "“Very spacious, green, and beautifully maintained resort for our family reunion. Great rooms, helpful management, fun activities, and stunning beachside location. Truly memorable experience. We will definitely return.”",
        name: " Mohammed Salman",
        designation: "Traveller",
    },
    {
        image: "/assets/img/rg/40.webp",
        text: "“Beautiful luxury beach resort offering big pool, indoor games, campfire music, gym, spa, and raindance. Spacious clean rooms, cooperative staff, wonderful stay. Definitely visiting again always.”",
        name: "James Anto ",
        designation: "Traveller",
    },
    {
        image: "/assets/img/rg/41.webp",
        text: "It is nice place for long marriage,anniversary,reception....etc and good full children to play and the assistant manager sukhen is very friendly with us.",
        name: "Fazil",
        designation: "Traveller",
    },
    {
        image: "/assets/img/rg/42.webp",
        text: "Just love the space and the amount is worth... Trust me on this I am an event planner you can do amazing things here.",
        name: "Deral Dalmeida",
        designation: "Traveller",
    },
    {
        image: "/assets/img/rg/43.webp",
        text: "“Huge beautiful property located just outside the city, offering peaceful surroundings and plenty of space. Perfect venue for big family gatherings, weddings, celebrations, and memorable functions with everyone together happily.”",
        name: "Ashwith Ullal",
        designation: "Traveller",
    },
];

export default TestimonialThree;
