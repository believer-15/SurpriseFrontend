import { useState } from "react";
import { useScroll } from "../States/State";

function Contact() {

    const crossIcon = '❌';


    const { sectionRef } = useScroll();

    const [errors, setErrors] = useState({ name: [], email: [] });

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        selectedOption: ''
    });

    // Don't Delete handleSelectChange

    function handleSelectChange(e){
        setFormState({
            ...formState,
            selectedOption: e.target.value
        });
    }

    function handleUserInput(e){
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        });

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: [],
        }));
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(formState);

        if (validateField()) {
            alert("Form submitted successfully!");
            setFormState({ name: "", email: "" }); // Clear the form
            setErrors({}); // Clear errors
          }
    }

    const validateField = () => {
        const newErrors = [];

        // Validate name field
        if (!formState.name.trim()) {
            newErrors.name = `${crossIcon} Name is required.`;
        } else if (formState.name.length < 3) {
            newErrors.name = "Enter Valid Name";
        }
  
        // Validate email field
        if (!formState.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            newErrors.email = "Enter Valid Email";
        }
  
        setErrors(newErrors);
  
        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };



    return(
        <>
            <section className="scroll-mt-[6rem] font-merriweather bg-contactColor sm:pt-10 sm:pb-10" 
            id="contact"
            ref={(el) => (sectionRef.current['contact'] = el)}
            >
                <div className="sm:max-w-6xl flex flex-col sm:justify-center mx-auto">
                    <div className="flex items-center justify-center bg-contactColor">
                        <h1 className="text-xl font-bold tracking-[0.15em] bg-contactColor mt-5">CONTACT US</h1>
                    </div>

                    <div className="flex flex-col-reverse space-y-0 sm:flex-row sm:items-center sm:justify-around bg-contactColor p-6">
                        <div className="overflow-hidden mt-5 sm:mt-0 rounded-xl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.535369411502!2d83.69810923838192!3d26.92304332625161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fbc5932982af%3A0x73bc87cb7af97c88!2sNew%20Surprise%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1730725199233!5m2!1sen!2sin" 
                                width="450" // for bigger screen 450 // for smaller 380
                                height="250" // for bigger screen 250 // for smaller 250
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-[30px] bg-[#D9D9D9] rounded-xl sm:pl-12 sm:pr-12 pt-3 pb-3 font-merriweather">
                            <div className="">
                                <p className="bg-[#D9D9D9]">BOOK YOUR APPOINTMENT</p>
                            </div>
                            <div className="flex flex-col items-start bg-[#D9D9D9]">
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleUserInput}
                                    placeholder="Name" 
                                    className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                                    {/* Display Error for Name */}
                                    {errors.email && (
    <span className="text-xs text-red-700 flex items-center">
        {errors.name}
    </span>
)}
                                    {/* {errors.name && (
                                        <span className="text-xs text-red-700">&#x274C{errors.name}</span>
                                    )} */}
                                <br/>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formState.email}
                                    onChange={handleUserInput} 
                                    placeholder="Email" 
                                    className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                                    {/* Display Error for Email */}
                                    {errors.email && (
                                        <span className="text-xs text-red-700">
                                            {errors.email}</span>
                                    )}
                                    {/* <img src={remove} alt="error-sign" className="w-3 h-3 object-cover" /> */}
                                <br />
                                <input 
                                    type="text" 
                                    name="mobileNumber" 
                                    value={formState.mobileNumber}
                                    onChange={handleUserInput}
                                    placeholder="Mobile No." 
                                    className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                                    {<span className="text-red-700 text-xs"></span>}
                                <br />
                                <div className="w-full flex items-center border-b-[0.1rem] border-black bg-[#D9D9D9]">
                                    <select className="bg-[#D9D9D9] focus:outline-none"
                                    name="selectedOption" 
                                    value={formState.selectedOption}
                                    onChange={handleUserInput}
                                    >
                                        {!formState.selectedOption && <option value="Select an option">Select an Option</option>}
                                        <option value="Skin Care">Skin Care</option>
                                        <option value="Hair Care">Hair Care</option>
                                        <option value="Body Care">Body Care</option>
                                        <option value="Makeup">Makeup</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                    type="button" 
                                    name="submit"
                                    onClick={handleFormSubmit} 
                                    className="tracking-[0.25em] text-center bg-[#C7B1B1] w-[13.75rem] p-[0.625rem]">
                                    SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Contact;