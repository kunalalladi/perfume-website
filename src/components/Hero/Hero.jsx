import React from 'react';
import Slider from "react-slick";
// Import the required CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img2 from "../../assets/images/Perfume_img/pr2.png";
import Img4 from "../../assets/images/Perfume_img/at1.png";
import Button from '../Shared/Button';

const HeroSlider = [
    {
        id: 1,
        img: Img2,
        subtitle: "By Perfume",
        title: "New Product",
        title2: "Perfumes",
        description: "Explore a selection of new and best perfumes that exude elegance and allure. Discover good fragrances crafted to enchant and captivate, perfect for any occasion"
    },
    {
        id: 2,
        img: Img4,
        subtitle: "By Perfume",
        title: "New Product",
        title2: "Perfumes",
        description: "Indulge in new and best perfumes that offer a rich and lasting aroma. Experience good fragrances that evoke tradition and sophistication, ideal for those seeking a unique olfactory journey."
    }
];

const Hero = ({handleOrderPopup}) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Added autoplay
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {HeroSlider.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text content section */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" 
                                            className='text-primary/70 dark:text-bgcolor text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                            {data.subtitle}
                                        </h1>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
                                            className='text-primarylight dark:text-brandlightcyan/80 text-4xl sm:text-5xl lg:text-6xl font-bold overflow-hidden'>
                                            {data.title}
                                        </h1>
                                        <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" 
                                            className='text-7xl uppercase text-primary dark:text-heading sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>
                                            {data.title2}
                                        </h1>
                                        <p data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300"
                                            className='text-primary/80 dark:text-bgcolor text-sm font-semibold'>
                                            {data.description}
                                        </p>
                                        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300">
                                            <Button 
                                                text="Shop By Category"
                                                bgColor="bg-primary"
                                                textColor="text-brandWhite"
                                                handler={handleOrderPopup}
                                            />
                                        </div>
                                    </div>
                                    {/* Img section */}
                                    <div className='order-1 sm:order-2'>
                                        <div data-aos="zoom-out" data-aos-once="true" className='relative z-10'>
                                            <img
                                                src={data.img}
                                                alt={data.title}
                                                className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] cursor-pointer transform 
                                                transition-transform duration-300 hover:scale-105 sm:hover:scale-110 object-contain mx-auto 
                                                drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 ml-40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;