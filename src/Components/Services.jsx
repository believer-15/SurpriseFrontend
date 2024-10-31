// import { Line } from '../assets/Line.svg';

function Services() {
    return (
        <>
            <section className="flex flex-col items-center justify-around font-merriweather border-2">
                <div className="">
                    <h1 className="text-xl font-bold tracking-[0.15em]">OUR SERVICES</h1>
                    {/* <Line width={100} height={100}></Line> */}
                </div>
                <div>
                    <ul className="flex items-center justify-around flex-wrap border-2">
                        <li className="flex items-center w-[250px] h-[250px] m-[45px] overflow-hidden rounded-full border-2">
                            <span className="text-center w-[250px] mt-[180px] border-2">Hairstyling-1</span>
                        </li>
                        <li className="flex items-center w-[250px] h-[250px] m-[45px] overflow-hidden rounded-full border-2">
                            <span className="text-center w-[250px] mt-[180px] border-2">Hairstyling-2</span>
                        </li>
                        <li className="flex items-center w-[250px] h-[250px] m-[45px] overflow-hidden rounded-full border-2">
                            <span className="text-center w-[250px] mt-[180px] border-2">Hairstyling-3</span>
                        </li>
                        <li className="flex items-center w-[250px] h-[250px] m-[45px] overflow-hidden rounded-full border-2">
                            <span className="text-center w-[250px] mt-[180px] border-2">Hairstyling-4</span>
                        </li>
                        <li className="flex items-center w-[250px] h-[250px] m-[45px] overflow-hidden rounded-full border-2">
                            <span className="text-center w-[250px] mt-[180px] border-2">Hairstyling-5</span>
                        </li>
                        <li className="flex items-center w-[250px] h-[250px] m-[45px] overflow-hidden rounded-full border-2">
                            <span className="text-center w-[250px] mt-[180px] border-2">Hairstyling-6</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Services;