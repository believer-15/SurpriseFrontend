

function Footer() {
    return(
        <>
            <footer className="flex flex-col text-white bg-[#000]"> {/* Make footer using Grid */}
                <div className="bg-[#000] flex items-center justify-around font-merriweather mt-[50px]">
                    <div className="flex flex-col items-center justify-center gap-3 bg-[#000]">
                        <h1 className="bg-[#000] text-l tracking-[0.10em] font-bold">Our Services</h1>
                        <ul className="flex flex-col items-center justify-center gap-4 bg-[#000]">
                            <li className="bg-[#000]">Hair Styling</li>
                            <li className="bg-[#000]">Nailcare</li>
                            <li className="bg-[#000]">Makeup</li>
                            <li className="bg-[#000]">Facial</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 bg-[#000]">
                        <h1 className="bg-[#000] text-l text-center tracking-[0.10em] font-bold">Contact Us</h1>
                        <ul className="flex flex-col items-center justify-center gap-4 bg-[#000]">
                            <li className="bg-[#000]">123, Janta Market</li>
                            <li className="bg-[#000]">Kaptanganj, Kushinagar</li>
                            <li className="bg-[#000]">India, 274301</li>
                            <li className="bg-[#000]">Info@surprise.com</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 bg-[#000]">
                        <h1 className="bg-[#000] text-l text-center tracking-[0.10em] font-bold">Follow Us</h1>
                        <div className="bg-[#000] text-center">
                            Instagram
                        </div>
                    </div>
                </div>
                <div className="bg-[#000] text-center p-[20px] mb-[25px]">
                    <p className="bg-[#000]">&copy; 2024 Surprise. All Right Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;