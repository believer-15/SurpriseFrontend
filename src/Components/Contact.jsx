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
            <section className="flex flex-col items-center justify-center font-merriweather bg-contactColor mt-[20px]">
                <h1 className="text-xl font-bold tracking-[0.15em] bg-contactColor mt-[20px]">CONTACT US</h1>
            </section>
               
                <div className="flex flex-col items-center justify-center w-screen h-screen gap-10 font-merriweather bg-contactColor md:flex-row">
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.535369411502!2d83.69810923838192!3d26.92304332625161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fbc5932982af%3A0x73bc87cb7af97c88!2sNew%20Surprise%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1730725199233!5m2!1sen!2sin" 
                            width="450" 
                            height="250" 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>                    
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[30px] w-[400px] h-[400px] bg-[#D9D9D9] rounded-xl">
                        <div className="">
                            <p className="bg-[#D9D9D9]">BOOK YOUR APPOINTMENT</p>
                        </div>
                        <div className="flex flex-col items-start bg-[#D9D9D9]">
                            <input type="text" name="name" placeholder="Name" className="bg-[#D9D9D9] border-b-[1px] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="email" name="email" placeholder="Email" className="bg-[#D9D9D9] border-b-[1px] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="text" name="mobileNumber" placeholder="Mobile No." className="bg-[#D9D9D9] border-b-[1px] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="date" name="date" className="bg-[#D9D9D9] w-full border-b-[1px] placeholder-black border-black focus:outline-none" /> 
                            <br />
                            <div className="w-full flex items-center border-b-[1px] border-black bg-[#D9D9D9]">
                                <select className="bg-[#D9D9D9] focus:outline-none" onChange={handleSelect}>
                                    {options.map(option => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="text-center bg-[#C7B1B1] w-[220px] p-[10px] ">
                            <button 
                                type="button" 
                                name="submit" 
                                className="tracking-[0.25em]">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            
            
            
            
                
        </>
    );
};

export default Contact;