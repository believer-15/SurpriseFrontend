import hero from '../assets/heroImg.png';
import Layout from '../Layout/Layout';
import Services from '../Components/Services';
import Gallery from './Gallery/Gallery';
import Contact from '../Components/Contact';
import { useScroll } from '../States/State';
import { useState } from 'react';

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [active, setActive] = useState('home');

    const { scrollToSection } = useScroll();

    const handleClick = () => {
        setActive('contact');
        scrollToSection('contact')
    }

    const { sectionRef } = useScroll();
    return (
        <>  
            <Layout>
            {/* Hero Section */}
            <section className='mt-[5rem] scroll-mt-[6rem] bg-[#8bb5c9] font-merriweather overflow-hidden' 
                ref={(el) => (sectionRef.current['home'] = el)}  
                id='home'
                >
                <div className='sm:max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex flex-col sm:gap-3 gap-4' data-aos="fade-up">
                        <p className='flex flex-col gap-4 text-center sm:text-left sm:gap-2 text-4xl sm:text-4xl font-bold tracking-[0.3125rem]'>
                            <span className='block'>FLAWLESS LOOK</span> 
                            <span className='block'>FOR</span> 
                            <span className='block'>FLAWLESS MOMENT</span>
                        </p>
                        <p 
                            className='sm:w-[29.6875rem] text-center sm:text-left tracking-[0.125rem]'
                        >
                        We Offer A Wide Range Of Services To Make You Look And Feel Your Best.
                        </p>
                        <button 
                            className='sm:w-[8.75rem] sm:h-[2.8125rem] w-[8rem] h-[3rem] mx-auto sm:mx-0 
                            rounded-3xl font-bold tracking-[0.0625rem] text-white bg-black hover:bg-sky-800 animate-pulse' 
                            type='button' 
                            onClick={() => handleClick()}
                        >
                            Book Now
                        </button>
                    </div>
                    <div className='sm:mt-0 mt-8 sm:mx-0 mx-auto' data-aos="fade-up">
                        <img src={hero} alt="girl_image" className='w-[23rem] h-[33.125rem]' />
                    </div>
                </div>
            </section>
            <Services></Services>
            <Gallery></Gallery>
            <Contact></Contact>
            </Layout>
        </>
    );
}

export default Home;