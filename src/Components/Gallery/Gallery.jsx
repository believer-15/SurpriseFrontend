import { Swiper, SwiperSlide } from 'swiper/react';
import bridal from '../../assets/bridal.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

function Gallery() {
  return (
    <section 
      className='scroll-mt-[6rem] font-merriweather bg-[#8bb5c9] overflow-hidden' 
      id='gallery'
    >
      <div className='flex flex-col items-center justify-around sm:pb-12'>
        <div className='mt-5' data-aos="fade-up">
          <h1 className="text-lg sm:text-xl font-bold tracking-[0.15em]">GALLERY</h1>
        </div>
        <Swiper
          data-aos="fade-up"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          speed={800}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {[
            bridal,
            'https://swiperjs.com/demos/images/nature-2.jpg',
            'https://swiperjs.com/demos/images/nature-3.jpg',
            'https://swiperjs.com/demos/images/nature-4.jpg',
            'https://swiperjs.com/demos/images/nature-5.jpg',
            'https://swiperjs.com/demos/images/nature-6.jpg',
            'https://swiperjs.com/demos/images/nature-7.jpg',
            'https://swiperjs.com/demos/images/nature-8.jpg',
            'https://swiperjs.com/demos/images/nature-9.jpg',
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Gallery item ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;