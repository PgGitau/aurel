// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "./Hero.css";
import all from "../../assets/Images/Hero/all.jpg";
import kids from "../../assets/Images/Hero/kids.jpg";
import mens from "../../assets/Images/Hero/mens.jpg";
import womens from "../../assets/Images/Hero/womens.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative swiper-slide">
          <img src={mens} alt="men modellling casual mens wear" />

          <div className="hero-text mens absolute text-5xl text-center">
            <h1>
              Forge your signature style. Shop quality clothing at Aurel.
            </h1>

            <Button asChild>
              <Link to="/shop">SHOP MEN'S</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative swiper-slide">
          <img src={womens} alt="two ladies modelling womens wear" />

          <div className="hero-text womens absolute text-5xl text-center">
            <h2 className="text-white">
              Radiate confidence. Find your perfect look.
            </h2>

            <Button asChild>
              <Link to="/shop">SHOP WOMEN'S</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative swiper-slide">
          <img src={kids} alt="kids modelling casual clothes" />

          <div className="hero-text kids absolute text-5xl text-center">
            <h2 className="text-white">
            Playtime perfection. Find quality and fun kids' apparel.
            </h2>

            <Button asChild>
              <Link to="/shop">SHOP KIDS'</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative swiper-slide">
          <img src={all} alt="clothes hanging in closet" />

          <div className="hero-text all absolute text-5xl text-center">
            <h2 className="text-white">
            Where style meets comfort. Discover affordable prices for everyone at Aurel.
            </h2>

            <Button asChild>
              <Link to="/shop">SHOP NOW</Link>
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
