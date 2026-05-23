import { CalendarHeart, Camera, PartyPopper } from 'lucide-react'
// import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3" id='img-mobile1'>
                     <div className="img1 hide-mobile">
                        <img src="/assets/img/rg/35.png" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/rg/36.webp" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/img/rg/37.webp" alt="About" />
                     </div>
                  </div>
               </div>
               <style>{`
                            @media(max-width:768px){
                            #img-mobile1 .img2{
                            margin-right:60px !important;
                            }
                            #img-mobile1 .img3{
                            margin-left:60px !important;
                            margin-top:-100px !important;
                            }
                            }
                            `}</style>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Royal Garden Experience</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           Beautiful Outdoor Space For Every Celebration
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                        Enjoy peaceful open spaces surrounded by greenery, perfect for events,
                         family time, relaxation, and beautiful photos, creating memories 
                         everyone will always cherish.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        {" "}
                        Designed to host unforgettable celebrations, our spacious garden offers
                         a refreshing environment filled with greenery, fresh air, and natural 
                         light. From intimate gatherings to large functions, every moment feels 
                         special here. Families, couples, friends, and corporate teams love the 
                         peaceful atmosphere, ample space, and welcoming surroundings that bring 
                         people together happily every single time.
                     </p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <CalendarHeart color="#0B3D2C" strokeWidth={1} size={32}/>
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Event Ready</h5>
                              <p className="about-item_text">
                                 Perfect Garden setup for weddings, parties, and celebrations with
                                  beautiful decorations.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <PartyPopper color="#0B3D2C" strokeWidth={1} size={32}/>
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Celebrate with Nature</h5>
                              <p className="about-item_text">
                                 Enjoy fresh air, peaceful surroundings, and open green spaces for happiness.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <Camera color="#0B3D2C" strokeWidth={1} size={32}/>
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Perfect Photoshoots</h5>
                              <p className="about-item_text">
                                 Capture beautiful photos with natural light, scenic backgrounds, and 
                                 endless greenery.
                              </p>
                           </div>
                        </div>
                     </div>
                     {/* <div className="mt-35">
                        <Link to="/contact" className="th-btn style3 th-icon">
                           Contact With Us
                        </Link>
                     </div> */}
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
