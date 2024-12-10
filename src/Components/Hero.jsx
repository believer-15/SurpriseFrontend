import hero from '../assets/heroImg.png';

function Hero() {
    return (
        <>
            <section className='sm:max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between font-merriweather'>
                <div className=''>
                    <p className='sm:text-4xl font-bold tracking-[0.3125rem]'>
                        <span className='block'>FLAWLESS LOOK</span> 
                        <span className='block'>FOR</span> 
                        <span className='block'>FLAWLESS MOMENT</span>
                    </p>
                    <p 
                        className='w-[29.6875rem] tracking-[0.125rem]'
                    >
                    We Offer A Wide Range Of Services To Make You Look And Feel Your Best.
                    </p>
                    <br />
                    <button 
                        className='w-[8.75rem] h-[2.8125rem] rounded-3xl font-bold tracking-[0.0625rem] hover:border-2' 
                        type='button' 
                        disabled={false}
                    >
                        Book Now
                    </button>
                </div>
                <div className=''>
                    <img src={hero} alt="girl_image" className='w-[23rem] h-[33.125rem]' />
                </div>
            </section>
        </>
    );
}

export default Hero;