import Logo from '..//assets/Logo.png';

function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-around h-18 text-[#161d15] font-merriweather">
                <div className="flex items-center justify-center">
                    <img src={Logo} alt="Logo" className="w-21 h-20" />
                    <p className="text-l font-bold tracking-[0.25em]">SURPRISE</p>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-20 font-normal text-m tracking-[0.1875em]'>
                        <li className="">
                            <p>Home</p>
                        </li>
                        <li className="">
                            <p>Services</p>
                        </li>
                        <li className="">
                            <p>Gallery</p>
                        </li>
                        <li className="">
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>   
                
            </nav>
        </>
    );
}

export default Navbar;