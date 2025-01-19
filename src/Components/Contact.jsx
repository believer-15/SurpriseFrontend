/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import { useScroll, ScrollContext } from "../States/State";
import sampleGif from "../assets/Animation.gif";

function Contact() {

    const crossIcon = '❌';

    const [htmlContent, setHtmlContent] = useState(null);

    const { submitFormData } = useContext(ScrollContext);

    const { sectionRef } = useScroll();

    const [errors, setErrors] = useState({ full_name: [], mobile_number: [] });

    const [formState, setFormState] = useState({
        full_name: '',
        email_id: '',
        mobile_number: '',
        service_type: ''
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

    async function handleFormSubmit(e){
        e.preventDefault();
        console.log(formState);

        if (validateField()) {
            console.log("Not submitted successfully!");
            setFormState({ full_name: "", email_id: "", mobile_number: "", service_type: "" }); // Clear the form
            setErrors({}); // Clear errors
        }
        try {
            const response = await submitFormData(formState);
            console.log(response.data);
            if (response.status >= 200 && response.status < 300) {
                console.log("I am inside if");
                setHtmlContent(true);
            }

            // Revert the state back after 3 seconds (or any desired duration)
            setTimeout(() => {
                setHtmlContent(false);
                setFormState({ full_name: "", mobile_number: "", email_id: "", service_type: "" }); // Reset form
            }, 3000);
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    }

    const validateField = () => {
        let newErrors = [];

        // Validate name field
        if (!formState.full_name.trim()) {
            newErrors.full_name = `${crossIcon} Name is required!`;
        } else if (formState.full_name.length < 3) {
            newErrors.full_name = "Enter Valid Name";
        }
  
        // Validate email field
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email_id.trim())) {
            newErrors.email_id = `${crossIcon} Enter a valid email!`;
        }

        if(!formState.mobile_number.trim()) {
            newErrors.mobile_number = `${crossIcon} Contact is required!`;
            console.log("Hello from Validate Field!")
        } else if (!/^[6-9]\d{9}$/.test(formState.mobile_number)) {
            newErrors.mobile_number = `${crossIcon} Enter Valid Contact Number!`
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
                        {htmlContent ? (
                            <div className="flex flex-col items-center justify-center bg-[#ac2c2c] rounded-xl p-12 font-merriweather" id="successMessage">
                                <img src={sampleGif} alt="Sample GIF" className="w-[6.25rem]" />
                                <p className='text-base text-center'>Thank you! <br />We'll reach out to you shortly.</p>
                            </div>
                        ): (
                            <>
                        <div className="flex flex-col items-center justify-center gap-[30px] bg-[#D9D9D9] rounded-xl sm:pl-12 sm:pr-12 pt-3 pb-3 font-merriweather">
                            <div className="">
                                <p className="bg-[#D9D9D9]">BOOK YOUR APPOINTMENT</p>
                            </div>
                            <div className="flex flex-col items-start bg-[#D9D9D9]" >
                                <input 
                                    type="text" 
                                    name="full_name"
                                    required
                                    value={formState.full_name}
                                    onChange={handleUserInput}
                                    placeholder="Name" 
                                    className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                                    {/* Display Error for Name */}
                                    {errors.full_name && (
                                        <span className="text-xs text-red-700 flex items-center">
                                            {errors.full_name}
                                        </span>
                                    )}
                                    {/* {errors.name && (
                                        <span className="text-xs text-red-700">&#x274C{errors.name}</span>
                                    )} */}
                                <br/>
                                <input 
                                    type="email" 
                                    name="email_id"
                                    value={formState.email_id}
                                    onChange={handleUserInput} 
                                    placeholder="Email" 
                                    className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                                    {/* Display Error for Email */}
                                    {errors.email_id && (
                                        <span className="text-xs text-red-700">
                                            {errors.email_id}
                                        </span>
                                    )}
                                    {/* <img src={remove} alt="error-sign" className="w-3 h-3 object-cover" /> */}
                                <br />
                                <input 
                                    type="text" 
                                    name="mobile_number" 
                                    value={formState.mobile_number}
                                    onChange={handleUserInput}
                                    placeholder="Mobile No." 
                                    className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                                    {errors.mobile_number && (
                                        <span className="text-xs text-red-700">
                                            {errors.mobile_number}
                                        </span>
                                    )}
                                <br />
                                <div className="w-full flex items-center border-b-[0.1rem] border-black bg-[#D9D9D9]">
                                    <select className="bg-[#D9D9D9] focus:outline-none"
                                    name="service_type" 
                                    value={formState.service_type}
                                    onChange={handleUserInput}
                                    >
                                        {!formState.service_type && <option value="Select an option">Select an Option</option>}
                                        <option value="Skin Care">Skin Care</option>
                                        <option value="Hair Care">Hair Care</option>
                                        <option value="Body Care">Body Care</option>
                                        <option value="Makeup">Makeup</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                    id="submitBtn"
                                    type="button" 
                                    name="submit"
                                    onClick={handleFormSubmit}
                                    className="tracking-[0.25em] text-center bg-[#C7B1B1] w-[13.75rem] p-[0.625rem]">
                                    SUBMIT
                            </button>
                        </div>
                            </>
                        )}
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Contact;