import Logo from '..//assets/Logo.png';

function Navbar() {
    return (
        <>
            <nav className="">
                <img src={Logo} alt="Logo" />
                <h1>SURPRISE</h1>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;