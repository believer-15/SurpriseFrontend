function Footer() {
    return(
        <footer className="text-white bg-[#000] font-merriweather">
            <div className="mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl bg-[#000] flex flex-col md:flex-row items-center justify-between py-12 overflow-hidden">
                <div className="flex flex-col items-center justify-center gap-4 bg-[#000] w-full md:w-1/3" data-aos="fade-up">
                    <h1 className="bg-[#000] text-xl tracking-[0.10em] font-bold">Our Services</h1>
                    <ul className="flex flex-col items-center justify-center gap-4 bg-[#000]">
                        <li className="bg-[#000] text-lg hover:text-gray-300 transition-colors duration-300">Hair Styling</li>
                        <li className="bg-[#000] text-lg hover:text-gray-300 transition-colors duration-300">Nailcare</li>
                        <li className="bg-[#000] text-lg hover:text-gray-300 transition-colors duration-300">Makeup</li>
                        <li className="bg-[#000] text-lg hover:text-gray-300 transition-colors duration-300">Facial</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 bg-[#000] mt-8 md:mt-0 w-full md:w-1/3" data-aos="fade-up">
                    <h1 className="bg-[#000] text-xl tracking-[0.10em] font-bold">Contact Us</h1>
                    <ul className="flex flex-col items-center justify-center gap-4 bg-[#000]">
                        <li className="bg-[#000] text-lg">Janta Market</li>
                        <li className="bg-[#000] text-lg">Kaptanganj, Kushinagar</li>
                        <li className="bg-[#000] text-lg">India, 274301</li>
                        <li className="bg-[#000] text-lg">Info@surprise.com</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 bg-[#000] mt-8 md:mt-0 w-full md:w-1/3" data-aos="fade-up">
                    <h1 className="bg-[#000] text-xl tracking-[0.10em] font-bold">Follow Us</h1>
                    <div className="bg-[#000] text-center text-lg hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                        Instagram
                    </div>
                </div>
            </div>
            <div className="bg-[#000] text-center py-6">
                <p className="bg-[#000] text-lg">&copy; 2025 Surprise. All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;