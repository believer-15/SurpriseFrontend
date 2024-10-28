import hero from '../assets/heroImg.png';

function Hero() {
    return (
        <>
            <section>
                <div>
                    <p>FLAWLESS LOOK FOR FLAWLESS MOMENT</p>
                    <p>We offer a wide range of services to make you look and feel your best.</p>
                    <button>Book Now</button>
                </div>
                <div>
                    <img src={hero} alt="girl_image" />
                </div>
            </section>
        </>
    );
}

export default Hero;