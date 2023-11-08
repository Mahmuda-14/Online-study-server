import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import slide1 from '../assets/ban1.jpg';
import slide2 from '../assets/ban2.jpg';
import slide3 from '../assets/ban3.jpg';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="item1" className="carousel-item relative w-full">
                        <img className=' w-full h-[500px] rounded-2xl' src={slide1} alt="" />
                        <div className=" rounded-xl absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,)]">
                            <div className=' text-white space-y-7 pl-12 w-1/2'>
                                <h2 className=' text-6xl font-serif'>Challenge Your Knowledge with Fun Tasks</h2>

                                <div>
                                    <Link to='/register'><button className="btn btn-active btn-secondary mr-5">Get Started</button></Link>
                                    <Link to='/task'><button className="btn btn-outline btn-secondary">View All</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div id="item2" className="carousel-item relative w-full">
                        <img className=' w-full h-[500px]  rounded-2xl' src={slide2} alt="" />
                        <div className=" rounded-xl absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,)]">
                            <div className=' text-white space-y-7 pl-12 w-1/2'>
                                <h2 className=' text-6xl font-serif'>Challenge Your Knowledge with Fun Tasks</h2>

                                <div>
                                    <Link to='/register'><button className="btn btn-active btn-secondary mr-5">Get Started</button></Link>
                                    <Link to='/task'><button className="btn btn-outline btn-secondary">View All</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div id="item3" className="carousel-item relative w-full">
                        <img className=' w-full h-[500px]  rounded-2xl' src={slide3} alt="" />
                        <div className=" rounded-xl absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,)]">
                            <div className=' text-white space-y-7 pl-12 w-1/2'>
                                <h2 className=' text-6xl font-serif'>Challenge Your Knowledge with Fun Tasks</h2>

                                <div>
                                    <Link to='/register'><button className="btn btn-active btn-secondary mr-5">Get Started</button></Link>
                                    <Link to='/task'><button className="btn btn-outline btn-secondary">View All</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>


        </div>
    );
};

export default Banner;
