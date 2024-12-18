// import { Line } from '../assets/Line.svg';

import { useScroll } from "../States/State";

function Services() {
    const { sectionRef } = useScroll();

    return (
        <>
            <section className="sm:max-w-6xl mx-auto font-merriweather" 
            id="services" 
            ref={(el) => (sectionRef.current['services'] = el)}  
            >
                <div className="flex items-center justify-center mt-5">
                    <h1 className="text-xl font-bold tracking-[0.15em]">OUR SERVICES</h1>
                    {/* <Line width={100} height={100}></Line> */}
                </div>
                <div className="flex flex-col items-center mx-auto sm:justify-around sm:max-w-6xl sm:flex-row sm:mt-5">
                    <div className="pt-5">
                        <div className="w-[13rem] h-[13rem] border-2 rounded-full"></div>
                        <p className="text-center mt-4">Skin Care</p>
                    </div>
                    <div className="pt-5">
                        <div className="w-[13rem] h-[13rem] border-2 rounded-full"></div>
                        <p className="text-center mt-4">Hair Care</p>
                    </div>
                    <div className="pt-5">
                        <div className="w-[13rem] h-[13rem] border-2 rounded-full"></div>
                        <p className="text-center mt-4">Body Care</p>
                    </div>
                    <div className="pt-5">
                        <div className="w-[13rem] h-[13rem] border-2 rounded-full"></div>
                        <p className="text-center mt-4">Makeup</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;