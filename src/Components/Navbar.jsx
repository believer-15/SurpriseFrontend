import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [navbarHeight, setNavbarHeight] = useState(0);

    // Get navbar height after component mounts
    useEffect(() => {
        const navElement = document.querySelector('nav');
        if (navElement) {
            setNavbarHeight(navElement.offsetHeight);
        }
    }, []);

    const handleSectionClick = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            // Calculate scroll position with navbar offset
            // console.log(element);
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false); // Close mobile menu after click
    };

    // Update active section on scroll
    const checkActiveSection = () => {
        const sections = ['home', 'services', 'gallery', 'contact'];
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Check if element is in view (considering navbar height)
                if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkActiveSection);
        return () => window.removeEventListener('scroll', checkActiveSection);
    }, [navbarHeight]); // Re-run effect when navbar height changes

    return (
        <nav className="top-0 left-0 w-full z-[1000] fixed bg-[#8bb5c9]">
            <div className="sm:mx-auto sm:max-w-6xl flex items-center justify-between h-18 text-[#161d15] font-merriweather">
                {/* Mobile Menu Button */}
                <div className="block sm:hidden ml-6">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <svg className="w-8 h-8 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Logo */}
                <div className="flex items-center sm:mr-0 mr-[4.375rem]" onClick={() => handleSectionClick('home')}>
                    <img src={Logo} alt="Logo" className="w-21 h-20" />
                    <p className="text-l font-bold tracking-[0.25em]">SURPRISE</p>
                </div>

                {/* Desktop Navigation */}
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

                {/* Mobile Navigation */}
                {isOpen && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setIsOpen(false)} />
                        <nav className="fixed w-full top-0 left-0 z-20 bg-white">
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