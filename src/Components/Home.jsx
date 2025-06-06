import Layout from '../Layout/Layout';
import Services from '../Components/Services';
import Gallery from './Gallery/Gallery';
import Contact from '../Components/Contact';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';

function Home() {
    const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_NAME } });
    
    const heroImage = cld
        .image('heroImg_qattey')
        .format('auto')
        .quality(100)
        .resize(auto().gravity(autoGravity()).width(368).height(530));

    const [height, setHeight] = useState(0);

    useEffect(() => {
        const btnHeight = document.querySelector('nav');
        if(btnHeight){
            setHeight(btnHeight.offsetHeight);
        }
    },[]);

    function handleBookNow(){
        const element = document.getElementById('contact')
        if (element) {
            const targetPosition = element.offsetTop - height;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section 
                className='mt-[5rem] scroll-mt-[6rem] bg-[#8bb5c9] font-merriweather overflow-hidden'
                id='home'
            >
                <div className='px-6 md:px-12 lg:px-8 mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between md:py-12'>
                    <div className='flex flex-col md:gap-6 gap-4 md:flex-1 md:pr-8 lg:pr-12' data-aos="fade-up">
                        <p className='flex flex-col gap-4 text-center md:text-left md:gap-2 text-4xl md:text-5xl font-bold tracking-[0.3125rem]'>
                            <span>FLAWLESS LOOK</span> 
                            <span>FOR</span> 
                            <span>FLAWLESS MOMENT</span>
                        </p>
                        <p className='md:w-[29.6875rem] text-center md:text-left tracking-[0.125rem] md:text-lg'>
                            We Offer A Wide Range Of Services To Make You Look And Feel Your Best.
                        </p>
                        <button 
                            className='md:w-[8.75rem] md:h-[2.8125rem] w-[8rem] h-[3rem] mx-auto md:mx-0 
                            rounded-3xl font-bold tracking-[0.0625rem] text-white bg-black hover:bg-sky-800 animate-pulse
                            transition-colors duration-300' 
                            type='button' 
                            onClick={handleBookNow}
                        >
                            Book Now
                        </button>
                    </div>
                    <div className='md:mt-0 mt-8 md:mx-0 mx-auto md:flex-1 md:flex md:justify-end' data-aos="fade-up">
                        <AdvancedImage cldImg={heroImage} alt="girl_image" className="md:max-w-[90%] lg:max-w-[85%] object-cover" />
                    </div>
                </div>
            </section>

            <Services />
            <Gallery />
            <Contact />
        </Layout>
    );
}

export default Home;