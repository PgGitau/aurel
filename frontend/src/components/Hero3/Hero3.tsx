
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Hero3.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import all from "../../assets/Images/Hero/all.jpg"
import kids from "../../assets/Images/Hero/kids.jpg"
import mens from "../../assets/Images/Hero/mens.jpg"
import womens from "../../assets/Images/Hero/womens.jpg"
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
          <img src={all} alt='clothes hanging in closet' />

          <div className="hero-text absolute text-5xl text-center">
            <h1>
              Upgrade you style. Buy elegant clothing from your favorite store
              on Aurel.
            </h1>

            <Button asChild>
              <Link to="/shop">BUY NOW</Link>
            </Button>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='relative'>
          <img src={kids} alt='kids modelling casual clothes'/>

          <div className="hero-text absolute text-5xl text-center">
            <h1>
              Upgrade you style. Buy elegant clothing from your favorite store
              on Aurel.
            </h1>

            <Button asChild>
              <Link to="/shop">BUY NOW</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
          <img src={womens} alt='two ladies modelling womens wear' />

          <div className="hero-text absolute text-5xl text-center">
            <h1>
              Upgrade you style. Buy elegant clothing from your favorite store
              on Aurel.
            </h1>

            <Button asChild>
              <Link to="/shop">BUY NOW</Link>
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
          <img src={mens} alt='men modellling casual mens wear'/>

          <div className="hero-text absolute text-5xl text-center">
            <h1>
              Upgrade you style. Buy elegant clothing from your favorite store
              on Aurel.
            </h1>

            <Button asChild>
              <Link to="/shop">BUY NOW</Link>
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
