import { useScroll } from "../States/State";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function Services() {
  const { sectionRef } = useScroll();
  const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_NAME } });

  const services = [
    { publicId: 'skinCare_g0na5m', label: 'Skin Care' },
    { publicId: 'hairCare_cp3dyf', label: 'Hair Care' },
    { publicId: 'bodyCare_km2zbi', label: 'Body Care' },
    { publicId: 'makeUp_gngoyk', label: 'Makeup' },
  ];

  // cloudinary helper function
  const getCloudinaryImage = (publicId) => {
    return cld.image(publicId)
      .format('auto')
      .quality('auto')
      .resize(auto().gravity(autoGravity()).width(208).height(208));
  };

  return (
    <section 
      className="scroll-mt-[5rem] bg-[#8bb5c9] font-merriweather pb-4 sm:pb-0 pt-4 sm:pt-0 overflow-hidden" 
      id="services" 
      ref={(el) => (sectionRef.current.services = el)}
    >
      <div className='sm:max-w-6xl mx-auto sm:p-12'>
        <div className="flex items-center justify-center sm:mt-5" data-aos="fade-up">
          <h1 className="text-xl font-bold tracking-[0.15em]">OUR SERVICES</h1>
        </div>
        <div className="flex flex-col items-center mx-auto sm:justify-around sm:max-w-6xl sm:flex-row sm:mt-5">
          {services.map((service) => (
            <div key={service.publicId} className="pt-5" data-aos="fade-up">
              <div className="w-52 h-52 border-2 rounded-full overflow-hidden">
                <AdvancedImage
                  cldImg={getCloudinaryImage(service.publicId)}
                  alt={`${service.label} service`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;