import './App.css'
import Home from './Components/Home.jsx';
import { ScrollProvider } from './States/State.jsx';

function App() {
  return (
    <>

      <ScrollProvider>
        <Home></Home>
      </ScrollProvider>
      
    </>
  )
}

export default App;
