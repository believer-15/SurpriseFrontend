import skincare  from '../assets/skinCare.jpg';
import bodycare from '../assets/bodyCare.jpg';
import haircare from '../assets/hairCare.jpg';
import makeup from '../assets/makeup.jpg';
import { useScroll } from "../States/State";

function Services() {
    const { sectionRef } = useScroll();

    return (
        <>
            <section className="scroll-mt-[5rem] bg-[#8bb5c9] font-merriweather pb-4 sm:pb-0 pt-4 sm:pt-0" 
            id="services" 
            ref={(el) => (sectionRef.current['services'] = el)}  
            >
                <div className='sm:max-w-6xl mx-auto sm:p-12'>
                    <div className="flex items-center justify-center sm:mt-5">
                        <h1 className="text-xl font-bold tracking-[0.15em]">OUR SERVICES</h1>
                        {/* <Line width={100} height={100}></Line> */}
                    </div>
                    <div className="flex flex-col items-center mx-auto sm:justify-around sm:max-w-6xl sm:flex-row sm:mt-5">
                        <div className="pt-5">
                            <div className="w-[13rem] h-[13rem] border-2 rounded-full overflow-hidden">
                                <img className="w-[13rem] h-[13rem] object-cover" src={skincare} alt="" />
                            </div>
                            <p className="text-center mt-4">Skin Care</p>
                        </div>
                        <div className="pt-5">
                            <div className="w-[13rem] h-[13rem] border-2 rounded-full overflow-hidden">
                                <img className="w-[13rem] h-[13rem] object-cover" src={haircare} alt="" />
                            </div>
                            <p className="text-center mt-4">Hair Care</p>
                        </div>
                        <div className="pt-5">
                            <div className="w-[13rem] h-[13rem] border-2 rounded-full overflow-hidden">
                                <img className="w-[13rem] h-[13rem] object-cover" src={bodycare} alt="" />
                            </div>
                            <p className="text-center mt-4">Body Care</p>
                        </div>
                        <div className="pt-5">
                            <div className="w-[13rem] h-[13rem] border-2 rounded-full overflow-hidden">
                                <img className="w-[13rem] h-[13rem] object-cover" src={makeup} alt="" />
                            </div>
                            <p className="text-center mt-4">Makeup</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;