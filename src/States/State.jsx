import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

// eslint-disable-next-line react/prop-types
export const ScrollProvider = ({ children }) => {
    const sectionRef = useRef({});

    const scrollToSection = (key) => {
        sectionRef.current[key]?.scrollIntoView({ behavior: 'smooth'});
        // console.log(sectionRef);
        console.log("Hitting Scroll");
    };

    return (
        <ScrollContext.Provider value={{sectionRef,scrollToSection}}>
            {children}
        </ScrollContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = () => useContext(ScrollContext);