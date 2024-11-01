// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Gallery() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
