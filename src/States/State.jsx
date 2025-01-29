import { createContext, useContext, useRef } from 'react';
import axiosInstance from '../Utils/axiosInstance';

// eslint-disable-next-line react-refresh/only-export-components
export const ScrollContext = createContext();

// eslint-disable-next-line react/prop-types
export const ScrollProvider = ({ children }) => {
    const sectionRef = useRef({});

    const scrollToSection = (key) => {
        sectionRef.current[key]?.scrollIntoView({ behavior: 'smooth'});
        // console.log(sectionRef);
        console.log("Hitting Scroll");
    };  

    const submitFormData = async (formData) => {
        try {
          const response = await axiosInstance.post("/addCustomer", formData);
          // console.log(response.data);
          return response.data;
        } catch (error) {
          console.error("Error submitting form data:", error);
          throw error;
        }
      };

    return (
        <ScrollContext.Provider value={{sectionRef, scrollToSection, submitFormData}}>
            {children}
        </ScrollContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = () => useContext(ScrollContext);