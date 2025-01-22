import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { useScroll } from '../States/State';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Track the active section

    const closeSidebar = () => {
        setIsOpen(!isOpen);
    };

    const { scrollToSection } = useScroll();

    const handleSectionClick = (section) => {
        setActiveSection(section); // Set active section
        scrollToSection(section); // Scroll to the clicked section
    };

    // Function to check which section is in view
    const checkActiveSection = () => {
        const sections = ['home', 'services', 'gallery', 'contact'];
        sections.forEach((section) => {
            const element = document.getElementById(section);
            const rect = element.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                setActiveSection(section); // Update the active section
            }
        });
    };

    useEffect(() => {
        // Listen for scroll events to check the active section
        window.addEventListener('scroll', checkActiveSection);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', checkActiveSection);
        };
    }, []);

    return (
        <nav className="top-0 left-0 w-full sm:z-[1000] fixed bg-[#8bb5c9]">
            <div className="sm:mx-auto sm:max-w-6xl flex items-center justify-between h-18 text-[#161d15] font-merriweather">
                <div className="block sm:hidden ml-6">
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
                <div className="flex items-center sm:mr-0 mr-[4.375rem]" role="button" onClick={() => handleSectionClick('home')}>
                    <img src={Logo} alt="Logo" className="w-21 h-20" />
                    <p className="text-l font-bold tracking-[0.25em]">SURPRISE</p>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-20 font-normal text-m tracking-[0.1875em]">
                        {['home', 'services', 'gallery', 'contact'].map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => handleSectionClick(section)}
                                    className={`${activeSection === section
                                        ? 'font-bold text-[#000000] border-b-[1px] border-[#000000]'
                                        : ''
                                        }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            </li>
                        ))}
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
                        <nav className="absolute w-[100%] top-0 left-0 z-10 bg-white">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Logo" className="w-21 h-20" />
                            </div>
                            <div className="flex flex-col items-center gap-6 font-normal text-[20px] p-7 tracking-[0.08em]">
                                {['home', 'services', 'gallery', 'contact'].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => handleSectionClick(section)}
                                        className={`${activeSection === section
                                                ? 'font-bold text-[#000000] border-b-[1px] border-[#000000]'
                                                : ''
                                            }`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
