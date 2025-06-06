import { useState, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function Navbar() {
    const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_NAME } });
    
    const heroImage = cld
        .image('Logo_asukq3')
        .format('auto')
        .quality(100)
        .resize(auto().gravity(autoGravity()));

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

    const handleLogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveSection('home');
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            // Calculate scroll position with navbar offset
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
                if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkActiveSection);
        return () => window.removeEventListener('scroll', checkActiveSection);
    }, [navbarHeight]);

    return (
        <nav className="top-0 left-0 w-full z-[1000] fixed bg-[#8bb5c9]">
            <div className="px-6 md:px-12 lg:px-8 mx-auto max-w-6xl flex items-center justify-between h-18 text-[#161d15] font-merriweather relative">
                {/* Mobile Menu Button */}
                <div className="block md:hidden absolute left-6 z-10">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        <svg className="w-8 h-8 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Logo - Centered on mobile */}
                <div className="flex items-center cursor-pointer mx-auto md:mx-0" onClick={handleLogoClick}>
                    <AdvancedImage cldImg={heroImage} alt="Logo" className="w-21 h-20"/>
                    <p className="text-l font-bold tracking-[0.25em]">SURPRISE</p>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex md:gap-12 lg:gap-16 font-normal text-m tracking-[0.1875em]">
                        {['home', 'services', 'gallery', 'contact'].map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => handleSectionClick(section)}
                                    className={`${activeSection === section
                                        ? 'font-bold text-[#000000] border-b-[1px] border-[#000000]'
                                        : 'hover:text-gray-700'
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
                        <div 
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 transition-all duration-300 ease-in-out" 
                            onClick={() => setIsOpen(false)} 
                        />
                        <nav className="fixed w-full top-0 left-0 z-20 bg-gradient-to-b from-[#8bb5c9] to-white shadow-lg transform transition-all duration-300 ease-in-out">
                            <div 
                                className="flex justify-center pt-6 pb-4 bg-[#8bb5c9]/90 cursor-pointer transition-all duration-300 hover:bg-[#8bb5c9]" 
                                onClick={() => {
                                    handleLogoClick();
                                    setIsOpen(false);
                                }}
                            >
                                <AdvancedImage cldImg={heroImage} alt="Logo" className="w-21 h-20"/>
                            </div>
                            <div className="flex flex-col items-center gap-8 font-normal text-[20px] py-8 px-7 tracking-[0.08em]">
                                {['home', 'services', 'gallery', 'contact'].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => handleSectionClick(section)}
                                        className={`relative w-full text-center py-2 transition-all duration-300 ease-in-out ${
                                            activeSection === section
                                                ? 'font-bold text-[#000000] bg-[#8bb5c9]/20 rounded-lg'
                                                : 'text-gray-700 hover:bg-[#8bb5c9]/10 rounded-lg'
                                        }`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                        {activeSection === section && (
                                            <span className="absolute bottom-0 left-1/2 w-16 h-0.5 bg-[#8bb5c9] transform -translate-x-1/2 transition-all duration-300 ease-in-out" />
                                        )}
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