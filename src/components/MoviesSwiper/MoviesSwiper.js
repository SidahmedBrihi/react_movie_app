import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './MoviesSwiper.css';
import { MovieCard } from '../index';
import { useEffect, useState } from 'react';




const MoviesSwiper = (props) => {
let width = document.body.clientWidth

  return (
    <div className='MoviesSwiper'>
      <h3 className='moviesSwiper-title'>{props.title}</h3>

      <Swiper
      spaceBetween={50}
      slidesPerView={(width > 1300)? 6 : (width>1000)? 5 : (width>800) ? 4 : (width>700) ? 3 :  2    }
      >
      {
         Array.from(props.list).map((elm) => <SwiperSlide>{<MovieCard data={elm}/>}</SwiperSlide>)
      }
    </Swiper>
  

    </div>
  );
};

export default MoviesSwiper;