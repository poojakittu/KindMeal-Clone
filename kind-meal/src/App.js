
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Page/Footer';
import Allroutes from './Router/Allroutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
     
    </div>
  );
}

export default App;
