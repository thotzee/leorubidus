import Header from './Components/Header';
import React from 'react';
import Tovabbiak from './Pages/Tovabbiak';
import Fellepeseink from './Pages/Fellepeseink';
import Regula from './Pages/Regula';
import Keresztenyek from './Pages/Keresztenycsapat';
import Aprodok from './Pages/Aprodok';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './Styles/App.css';
import Headertopages from './Components/Headertopages';
import Rólunk from './Components/Rólunk';
import Partnereink from './Components/Partnereink';
import Fellépéseink from './Components/Fellépéseink';
import Mail from './Components/Kapcsolat';
import Footer from './Components/Footer';
import { Fragment } from 'react';
import ScrollButton from './Components/ScrollButton';
import './Styles/App.css';


function App() {
  return (
  <HashRouter>
    <div className="App" id="főoldal">
      <div className="App">
      
      </div>
    </div>
    <Routes>
     
     <Route path="/" element={<><Header/><Rólunk/> <Partnereink/> <Fellépéseink/> <Mail/> </>} />
     <Route path="/Tovabbiak" element={<><Headertopages/> <Tovabbiak/> </>} />
     <Route path="/Keresztenycsapat" element={<><Headertopages/> <Keresztenyek/> </>} />
     <Route path="/Aprodok" element={<><Headertopages/> <Aprodok/> </>} />
     <Route path="/Fellepeseink" element={<><Headertopages/><Fellepeseink/></>}/>
     <Route path="/Regula" element ={<><Headertopages/> <Regula/> </>} />
     
   </Routes>
    <ScrollButton />
    <div>
    <Footer />
    </div>
  
  </HashRouter>
  );
}

export default App;
