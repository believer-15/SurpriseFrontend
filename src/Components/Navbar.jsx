import { useState } from 'react';
import Logo from '..//assets/Logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav className="flex items-center justify-around h-18 text-[#161d15] font-merriweather">
                <div className="block md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-8 h-8 cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>    
                </div>
                <div className="flex items-center justify-center sm: mr-[70px]">
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

                {/* Dropdown menu for small screens */} 
                {isOpen && (
                    <>
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10"
                        onClick={closeSidebar} // Close sidebar when clicking overlay
                    >
                    </div>
                    <nav className='absolute w-[50%] h-[100%] top-0 left-0 z-10 bg-white'>
                        <div className='flex justify-center'>
                            <img src={Logo} alt="Logo" className="w-21 h-20" />
                        </div>
                        <div className='flex flex-col items-center gap-6 h-[100%] font-normal text-[20px] p-7 tracking-[0.08em]'>
                            <p className="">Home</p>
                            <p className="">Services</p>
                            <p className="">Gallery</p>
                            <p className="">Contact</p>
                        </div>
                    </nav>
                    </>
                )}
            </nav>
        </>
    );
}

export default Navbar;