import './App.css'
import Home from './Components/Home.jsx';
import { ScrollProvider } from './States/State.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init({
    offset: 100
  });
  return (
    <>

      <ScrollProvider>
        <Home></Home>
      </ScrollProvider>
      
    </>
  )
}

export default App;
