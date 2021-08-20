import './App.css';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import ScrollButton from './Components/Shared/ScrollButton/ScrollButton';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ScrollButton/>
      <Footer />
    </>

  );
}

export default App;
