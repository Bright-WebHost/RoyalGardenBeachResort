import React from 'react';
// import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import "swiper/css";

const BlogTwo = () => {
    // Initialize Swiper after the component is mounted
    React.useEffect(() => {
        new Swiper('#blogSlider1', {
            modules: [Autoplay], // Add Autoplay module
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
            spaceBetween: 20,
            autoplay: {
                delay: 2000, // 2 seconds delay
                disableOnInteraction: false, // Continue autoplay after user interaction
            },
            loop: true, // Enable infinite loop for better UX
        });
    }, []);

    return (
        <section className="overflow-hidden space-top" id="blog-sec">
            <div className="container shape-mockup-wrap">
                <div className="mb-30 text-center text-md-start">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7">
                            <div className="title-area mb-md-0">
                                <span className="sub-title" style={{fontSize:'64px', marginTop:'-50px'}}>Gardens</span>
                                {/* <h2 className="sec-title">News & Articles From Tourm</h2> */}
                            </div>
                        </div>
                        <div className="col-md-auto">
                            {/* <Link to="/blog" className="th-btn style4 th-icon">See More Articles</Link> */}
                        </div>
                    </div>
                </div>

                <div className="slider-area">
                    <div
                        className="swiper th-slider has-shadow"
                        id="blogSlider1"
                        data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
                    >
                        <div className="swiper-wrapper">
                            {[
                                {
                                    date: 'July 05 2024',
                                    time: '6 min read',
                                    image: '/assets/img/rg/99.webp',
                                    title: '10 Reason why you should visit New Jersey',
                                    link: '/gallery',
                                },
                                {
                                    date: 'July 06 2024',
                                    time: '7 min read',
                                    image: '/assets/img/rg/100.webp',
                                    title: 'The best time to visit Japan & enjoy the cherry blossoms',
                                    link: '/gallery',
                                },
                                {
                                    date: 'July 07 2024',
                                    time: '8 min read',
                                    image: '/assets/img/rg/101.webp',
                                    title: 'The 7 amazing destinations for adventure seekers',
                                    link: '/gallery',
                                },
                                {
                                    date: 'July 09 2024',
                                    time: '9 min read',
                                    image: '/assets/img/rg/102.webp',
                                    title: '10 Reason why you should visit New Jersey',
                                    link: '/gallery',
                                },
                                {
                                    date: 'July 10 2024',
                                    time: '10 min read',
                                    image: '/assets/img/rg/103.webp',
                                    title: 'The best time to visit Japan & enjoy the cherry blossoms',
                                    link: '/gallery',
                                },
                                {
                                    date: 'July 12 2024',
                                    time: '11 min read',
                                    image: '/assets/img/rg/104.webp',
                                    title: 'The 7 amazing destinations for adventure seekers',
                                    link: '/gallery',
                                },
                            ].map((post, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="blog-box th-ani">
                                        <div className="blog-img global-img">
                                            <img src={post.image} alt="blog" />
                                        </div>
                                        {/* <div className="blog-box_content">
                                            <div className="blog-meta">
                                                <Link className="author" to="/blog">
                                                    {post.date}
                                                </Link>
                                                <Link to="/blog">{post.time}</Link>
                                            </div>
                                            <h3 className="box-title">
                                                <Link to={post.link}>{post.title}</Link>
                                            </h3>
                                            <Link to={post.link} className="th-btn style4 th-icon">
                                                Read More
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="shape-mockup shape1 d-none d-xxl-block"
                    style={{
                        top: "14%",
                        right: "-13%",
                    }}
                >
                    <img src="/assets/img/shape/shape_1.png" alt="shape" />
                </div>
                <div className="shape-mockup shape2 d-none d-xl-block"
                    style={{
                        top: "25%",
                        right: "-12%",
                    }}
                >
                    <img src="/assets/img/shape/shape_2.png" alt="shape" />
                </div>
                <div className="shape-mockup shape3 d-none d-xxl-block"
                    style={{
                        top: "20%",
                        right: "-18%",
                    }}
                >
                    <img src="/assets/img/shape/shape_3.png" alt="shape" />
                </div>
            </div>
            <style>{`
            @media(max-width:768px){
            .blog-img img{
                height:350px;
            }
            }
            `}</style>
        </section>
    );
};

export default BlogTwo;