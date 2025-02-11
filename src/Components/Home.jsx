import Layout from '../Layout/Layout';
import Services from '../Components/Services';
import Gallery from './Gallery/Gallery';
import Contact from '../Components/Contact';
// Cloudinary Imports
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
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(368).height(530));

    const [height, setHeight] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const btnHeight = document.querySelector('nav');
        if(btnHeight){
            setHeight(btnHeight.offsetHeight);
        }
    },[])

    function handleBookNow(){
        const element = document.getElementById('contact')
        if (element) {
            // Calculate scroll position with navbar offset
            // console.log(element);
            const targetPosition = element.offsetTop - height;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        setActiveSection(element);
        console.log(activeSection);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section 
                className='mt-[5rem] scroll-mt-[6rem] bg-[#8bb5c9] font-merriweather overflow-hidden'
                id='home'
            >
                <div className='sm:max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex flex-col sm:gap-3 gap-4' data-aos="fade-up">
                        <p className='flex flex-col gap-4 text-center sm:text-left sm:gap-2 text-4xl sm:text-4xl font-bold tracking-[0.3125rem]'>
                            <span>FLAWLESS LOOK</span> 
                            <span>FOR</span> 
                            <span>FLAWLESS MOMENT</span>
                        </p>
                        <p className='sm:w-[29.6875rem] text-center sm:text-left tracking-[0.125rem]'>
                            We Offer A Wide Range Of Services To Make You Look And Feel Your Best.
                        </p>
                        <button 
                            className='sm:w-[8.75rem] sm:h-[2.8125rem] w-[8rem] h-[3rem] mx-auto sm:mx-0 
                            rounded-3xl font-bold tracking-[0.0625rem] text-white bg-black hover:bg-sky-800 animate-pulse' 
                            type='button' 
                            onClick={handleBookNow}
                        >
                            Book Now
                        </button>
                    </div>
                    <div className='sm:mt-0 mt-8 sm:mx-0 mx-auto' data-aos="fade-up">
                        <AdvancedImage cldImg={heroImage} />
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