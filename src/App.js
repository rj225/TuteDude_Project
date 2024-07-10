import React , {useEffect} from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
// import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
