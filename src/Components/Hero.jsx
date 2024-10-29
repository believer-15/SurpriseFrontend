import hero from '../assets/heroImg.png';

function Hero() {
    return (
        <>
            <section className='flex items-center justify-around font-merriweather'>
                <div className=''>
                    <p className='text-4xl font-bold tracking-[5px]'>
                        <span className='block'>FLAWLESS LOOK</span> 
                        <span className='block'>FOR</span> 
                        <span className='block'>FLAWLESS MOMENT</span>
                    </p>
                    <p 
                        className='w-[475px] tracking-[2px]'
                    >
                    We Offer A Wide Range Of Services To Make You Look And Feel Your Best.
                    </p>
                    <br />
                    <button 
                        className='w-[140px] h-[45px] rounded-3xl font-bold tracking-[1px] hover:border-2' 
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