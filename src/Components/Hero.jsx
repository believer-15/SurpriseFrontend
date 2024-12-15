import hero from '../assets/heroImg.png';

function Hero() {
    return (
        <>
            <section className='sm:max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between font-merriweather'>
                <div className='flex flex-col sm:gap-3 gap-4'>
                    <p className='flex flex-col gap-4 text-center sm:text-left sm:gap-4 text-4xl sm:text-4xl font-bold tracking-[0.3125rem]'>
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
                        className='sm:w-[8.75rem] sm:h-[2.8125rem] w-[8rem] h-[3rem] mx-auto sm:mx-0  rounded-3xl font-bold tracking-[0.0625rem] hover:border-2' 
                        type='button' 
                        disabled={false}
                    >
                        Book Now
                    </button>
                </div>
                <div className='sm:mt-0 mt-8 sm:mx-0 mx-auto'>
                    <img src={hero} alt="girl_image" className='w-[23rem] h-[33.125rem]' />
                </div>
            </section>

        </>
    );
}

export default Hero;