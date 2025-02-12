import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function Gallery() {

  const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_NAME } });

  // Swiper configuration
  const swiperConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      waitForTransition: true,
    },
    speed: 800,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }
  };
  
  const gallery = [
                    {id: 3, imageId: '3_bqii4g'},{ id: 4, imageId: '4_kqkrdp'},
                    {id: 1, imageId: '1_samfvh'},{ id: 2, imageId: '2_jil07l'},
                    { id: 5, imageId: '5_kgautv'},{ id: 6, imageId: '6_fbdsfd'},
                    { id: 7, imageId: '7_idxgxs'},{ id: 8, imageId: '8_cet0s6'},
                    { id: 9, imageId: '9_lneios'},{ id: 10, imageId: '10_tmpodb'},
                    { id: 11, imageId: '11_uwpgrj'},{ id: 12, imageId: '12_ulxnoe'},
                    { id: 13, imageId: '13_rkhkw7'},{ id: 14, imageId: '14_s9txbm'},
                    { id: 15, imageId: '15_pfcsiw'},{ id: 16, imageId: '16_nywsch'},
                    { id: 17, imageId: '17_uy2avz'},{ id: 18, imageId: '18_kiswxl'},
                    { id: 19, imageId: '19_pekzqp'},{ id: 20, imageId: '20_bgnknx'},{ id: 21, imageId: '21_slkvm8'}
  ]

  // cloudinary helper function
  const getCloudinaryImage = (imageId) => {
    return cld.image(imageId)
      .format('auto')
      .quality('98')
      .resize(auto().gravity(autoGravity()));
  };
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
          {...swiperConfig}
          data-aos="fade-up"
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {gallery.map(({id, imageId}) => (
            <SwiperSlide key={id}>
              <AdvancedImage
                  cldImg={getCloudinaryImage(imageId)}
                  alt={`${id} service`}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;