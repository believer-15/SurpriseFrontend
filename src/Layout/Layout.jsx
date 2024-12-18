import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <>
            <Navbar ></Navbar>

            {children}

            <Footer></Footer>

        </>
    )
}

export default Layout;