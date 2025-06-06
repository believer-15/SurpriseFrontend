import './App.css'
import Home from './Components/Home.jsx';
import SEO from './Components/SEO.jsx';
import { ScrollProvider } from './States/State.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100
    });
  }, []);

  return (
    <HelmetProvider>
      <ScrollProvider>
        <SEO 
          title="Surprise Beauty & Wellness - Professional Beauty Services"
          description="Transform your look with our premium beauty and wellness services. Expert skincare, haircare, body treatments, and professional makeup services for your flawless moments."
          name="Surprise Beauty & Wellness"
          type="business.beauty"
        />
        <Home></Home>
      </ScrollProvider>
    </HelmetProvider>
  )
}

export default App;
