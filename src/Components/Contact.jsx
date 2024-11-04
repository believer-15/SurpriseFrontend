
function Contact() {
    return(
        <>
            <section className="flex flex-col items-center justify-center font-merriweather bg-contactColor">
                <h1 className="text-xl font-bold tracking-[0.15em] bg-contactColor border-2">CONTACT US</h1>
            </section>
               
                <div className="flex items-center justify-center gap-10 mx-auto h-[500px] font-merriweather border-2">
                    <div className="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.535369411502!2d83.69810923838192!3d26.92304332625161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993fbc5932982af%3A0x73bc87cb7af97c88!2sNew%20Surprise%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1730725199233!5m2!1sen!2sin" 
                            width="450" 
                            height="250" 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>                    
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[60px] w-[400px] h-[400px] bg-[#D9D9D9]">
                        <div className="">
                            <p>BOOK YOUR APPOINTMENT</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <input type="text" name="name" placeholder="Name" className="border-b-[1px] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="email" name="email" placeholder="Email" className="border-b-[1px] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="text" name="mobileNumber" placeholder="Mobile No." className="border-b-[1px] placeholder-black border-black focus:outline-none" />
                            <br />
                            <input type="date" name="date" className="text-indent-10 border-b-[1px] placeholder-black border-black focus:outline-none" /> 
                            <br />
                        </div>
                        <div>
                            <button type="button" name="submit">Submit</button>
                        </div>
                    </div>
                </div>
                
        </>
    );
};

export default Contact;