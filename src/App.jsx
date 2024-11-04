import './App.css'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import Gallery from './Components/Gallery.jsx';
import Contact from './Components/Contact.jsx';
// import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Gallery></Gallery>
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App;
