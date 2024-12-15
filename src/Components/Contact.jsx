import { useState } from "react";

function Contact() {

    // const [isOpen, setisOpen] = useState(false);

    const [value, setValue] = useState('')
    const options = [
        {label: "Bridal Makeup", value: 1},
        {label: "Threading", value: 2},
        {label: "Party Makeup", value: 3},
        {label: "Facial", value: 4},
    ]
    function handleSelect(){
        setValue(event.target.value);
    }


    return(
        <>
            <section className="sm:max-w-6xl flex flex-col justify-center mx-auto font-merriweather bg-contactColor mt-0 sm:mt-10">
                <div className="flex items-center justify-center bg-contactColor">
                    <h1 className="text-xl font-bold tracking-[0.15em] bg-contactColor">CONTACT US</h1>
                </div>

                <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:items-center sm:justify-around bg-contactColor p-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.535369411502!2d83.69810923838192!3d26.92304332625161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fbc5932982af%3A0x73bc87cb7af97c88!2sNew%20Surprise%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1730725199233!5m2!1sen!2sin" 
                        width="450" // for bigger screen 450
                        height="250" // for bigger screen 250
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="flex flex-col items-center justify-center gap-[30px] bg-[#D9D9D9] rounded-xl sm:pl-12 sm:pr-12 pt-3 pb-3 font-merriweather">
                        <div className="">
                            <p className="bg-[#D9D9D9]">BOOK YOUR APPOINTMENT</p>
                        </div>
                        <div className="flex flex-col items-start bg-[#D9D9D9]">
                            <input type="text" name="name" placeholder="Name" className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="email" name="email" placeholder="Email" className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="text" name="mobileNumber" placeholder="Mobile No." className="bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none" />
                            <br />
                            <div className="w-full flex items-center border-b-[0.1rem] border-black bg-[#D9D9D9]">
                                <select className="bg-[#D9D9D9] focus:outline-none" onChange={handleSelect}>
                                    {options.map(option => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="text-center bg-[#C7B1B1] w-[13.75rem] p-[0.625rem] ">
                            <button 
                                type="button" 
                                name="submit" 
                                className="tracking-[0.25em]">
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