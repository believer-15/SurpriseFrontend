

function Footer() {
    return(
        <>
            <footer className="flex flex-col text-white bg-[#000] font-merriweather"> {/* Make footer using Grid */}
                <div className="sm:max-w-6xl sm:w-full sm:mx-auto bg-[#000] flex flex-col sm:flex-row items-center justify-between mt-[3.125rem]">
                    <div className="flex flex-col items-center justify-center gap-3 bg-[#000]">
                        <h1 className="bg-[#000] text-xl tracking-[0.10em] font-bold">Our Services</h1>
                        <ul className="flex flex-col items-center justify-center gap-4 bg-[#000]">
                            <li className="bg-[#000] text-lg">Hair Styling</li>
                            <li className="bg-[#000] text-lg">Nailcare</li>
                            <li className="bg-[#000] text-lg">Makeup</li>
                            <li className="bg-[#000] text-lg">Facial</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 bg-[#000] mt-[3.125rem] sm:mt-0">
                        <h1 className="bg-[#000] text-xl tracking-[0.10em] font-bold">Contact Us</h1>
                        <ul className="flex flex-col items-center justify-center gap-4 bg-[#000]">
                            <li className="bg-[#000] text-lg">123, Xyzae erdnem</li>
                            <li className="bg-[#000] text-lg">asdfghjklt, qasdfghjkl</li>
                            <li className="bg-[#000] text-lg">India, 274301</li>
                            <li className="bg-[#000] text-lg">Info@surprise.com</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 bg-[#000] mt-[3.125rem] sm:mt-0">
                        <h1 className="bg-[#000] text-xl tracking-[0.10em] font-bold">Follow Us</h1>
                        <div className="bg-[#000] text-center text-lg">
                            Instagram
                        </div>
                    </div>
                </div>
                <div className="bg-[#000] text-center p-[1.25rem] mb-[1.5625rem]">
                    <p className="bg-[#000] text-lg">&copy; 2024 Surprise. All Right Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;