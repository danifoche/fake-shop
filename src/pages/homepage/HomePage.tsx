import React from "react";
import { useQuery } from "@tanstack/react-query";

// Components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProductCarousel from "../../components/ProductCarousel";

// Css
import './HomePage.css';

// Router
import { Link } from "react-router-dom";

// Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { getCarouselProducts } from "../../api/getCarouselProducts";
import { Pagination, EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {
    const carouselQuery = useQuery(['carouselQuery'], getCarouselProducts);

    return (
        <>
            <NavBar />
            <div className="mt-12 h-screen min-h-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Welcome!</h1>
                    <p className="py-6">This is my fake shop, <br /> take a look at the products!</p>
                    <Swiper
                        modules={[ Pagination, EffectCards, Autoplay ]}
                        pagination={{ clickable: true }}
                        grabCursor={true} 
                        centeredSlides={true}
                        effect={"cards"}
                        roundLengths={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        cardsEffect={{
                            slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="mt-5 mb-5"  
                    >
                        {
                            carouselQuery.isLoading 
                            ? 
                            <progress className="progress w-56"></progress>
                            : 
                            carouselQuery.data.map((product: any) => (
                                <SwiperSlide 
                                    key={product.id}
                                    className="mb-16"
                                >
                                    <ProductCarousel product={product} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Link to="/products">
                        <button className="btn">
                            Show All
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;