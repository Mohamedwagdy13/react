import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../component/img/1.avif';
import img2 from '../component/img/2.avif';
import img3 from '../component/img/3.avif';
import img4 from '../component/img/4.avif';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={img1} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Image 4" />
      </SwiperSlide>
    </Swiper>
  );
};
