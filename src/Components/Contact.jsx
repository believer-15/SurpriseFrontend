/* eslint-disable react/no-unescaped-entities */
import { useState, useContext, useRef } from "react";
import { ScrollContext } from "../States/State";
import ReCAPTCHA from "react-google-recaptcha";
import SuccessMessage from "./SuccessMessage";
import FormField from "./FormField";

function Contact() {

    const { submitFormData } = useContext(ScrollContext);
    const captchaRef = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({ full_name: [], mobile_number: [] });    
    const [isCaptchaComplete, setIsCaptchaComplete] = useState(false);
    const [formState, setFormState] = useState({
        full_name: '',
        email_id: '',
        mobile_number: '',
        service_type: ''
    });

    function handleInputChange(e){
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

    const validateForm = () => {
        const newErrors = {};
        const crossIcon = '❌';
    
        if (!formState.full_name.trim()) {
          newErrors.full_name = `${crossIcon} Name is required`;
        } else if (formState.full_name.length < 3) {
          newErrors.full_name = `${crossIcon}Invalid name`;
        }
    
        if (formState.email_id.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formState.email_id)) {
            newErrors.email_id = `${crossIcon} Invalid email format`;
          }
        }
    
        const mobile = formState.mobile_number.replace(/\D/g, '');
        if (!mobile) {
          newErrors.mobile_number = `${crossIcon} Contact is required`;
        } else if (!/^[6-9]\d{9}$/.test(mobile)) {
          newErrors.mobile_number = `${crossIcon} Invalid contact number`;
        }
    
        // if (!formState.service_type) {
        //   newErrors.service_type = `${crossIcon} Service type is required`;
        // }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        try {
          await submitFormData(formState);
          setIsSubmitted(true);
          resetForm();
          captchaRef.current.reset();
        } catch (error) {
          console.error("Submission error:", error);
          alert("Error submitting form. Please try again.");
        }
    };

    const resetForm = () => {
        setTimeout(() => {
          setFormState({ full_name: '', email_id: '', mobile_number: '', service_type: '' });
          setIsSubmitted(false);
        }, 3000);
    };

    function onChange() {
        setIsCaptchaComplete(true);
    }

    const visibleButton = () => {
        return formState.full_name.trim() !== '' && formState.mobile_number.trim() !== '' && isCaptchaComplete;
    }

    return(
        <>
            <section className="scroll-mt-[6rem] font-merriweather bg-contactColor sm:pt-10 sm:pb-10" 
            id="contact"
            >
                <div className="sm:max-w-6xl flex flex-col sm:justify-center mx-auto overflow-hidden">
                    <div className="flex items-center justify-center bg-contactColor" data-aos="fade-up">
                        <h1 className="text-xl font-bold tracking-[0.15em] bg-contactColor mt-5">CONTACT US</h1>
                    </div>

                    <div className="flex flex-col-reverse space-y-0 sm:flex-row sm:items-center sm:justify-around bg-contactColor p-6">
                            <div className="overflow-hidden mt-5 sm:mt-0 rounded-xl" data-aos="fade-up">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.535369411502!2d83.69810923838192!3d26.92304332625161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fbc5932982af%3A0x73bc87cb7af97c88!2sNew%20Surprise%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1730725199233!5m2!1sen!2sin" 
                                    className="w-[380px] h-[250px] sm:w-[450px] sm:h-[250px]"
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </div>
                        {isSubmitted ? (
                            <SuccessMessage />
                        ): (
                        <div className="flex flex-col items-center justify-center gap-[30px] bg-[#D9D9D9] rounded-xl sm:pl-12 sm:pr-12 pt-3 pb-3 font-merriweather" data-aos="fade-up">
                            <div className="">
                                <p className="bg-[#D9D9D9]">BOOK YOUR APPOINTMENT</p>
                            </div>
                            <form action="">
                                <FormField
                                    type="text"
                                    name="full_name"
                                    placeholder="Name"
                                    value={formState.full_name}
                                    error={errors.full_name}
                                    onChange={handleInputChange}
                                />
                                <br />
                                <FormField
                                    type="email"
                                    name="email_id"
                                    placeholder="Email"
                                    value={formState.email_id}
                                    error={errors.email_id}
                                    onChange={handleInputChange}
                                />
                                <br />
                                <FormField
                                    type="tel"
                                    name="mobile_number"
                                    placeholder="Mobile No."
                                    value={formState.mobile_number}
                                    error={errors.mobile_number}
                                    onChange={handleInputChange}
                                />
                                <br />
                                <div className="w-full flex items-center border-b-[0.1rem] border-black bg-[#D9D9D9]">
                                    <select className="bg-[#D9D9D9] focus:outline-none"
                                        name="service_type" 
                                        value={formState.service_type}
                                        onChange={handleInputChange}
                                    >
                                        {!formState.service_type && <option value="Select an option">Select an Option</option>}
                                        <option value="Skin Care">Skin Care</option>
                                        <option value="Hair Care">Hair Care</option>
                                        <option value="Body Care">Body Care</option>
                                        <option value="Makeup">Makeup</option>
                                    </select>
                                </div>
                                <br />
                                <ReCAPTCHA
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                    onChange={onChange}
                                    size="normal"
                                    ref={captchaRef}
                                />
                                <br />
                                <button 
                                    id="submitBtn"
                                    type="button" 
                                    name="submit"
                                    onClick={handleSubmit}
                                    disabled={!visibleButton()}
                                    className="w-full disabled:bg-gray-300 tracking-[0.25em] text-center bg-[#C7B1B1] w-[13.75rem] p-[0.625rem]"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                        )}
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Contact;