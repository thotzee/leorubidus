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
import Rolunk from './Components/Rólunk';
import Partnereink from './Components/Partnereink';
import Fellépéseink from './Components/Fellépéseink';
import Kapcsolat from './Components/Kapcsolat';
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
     
     <Route path="/" element={<><Header/><Rolunk/> <Partnereink/> <Fellépéseink/> <Kapcsolat/> </>} />
     <Route path="/Partnereink" element={<><Headertopages/> <Partnereink/></>} />
     <Route path="/Rolunk" element={<><Headertopages/> <Rolunk/></>} />
     <Route path="/Tovabbiak" element={<><Headertopages/> <Tovabbiak/> </>} />
     <Route path="/Keresztenycsapat" element={<><Headertopages/> <Keresztenyek/> </>} />
     <Route path="/Aprodok" element={<><Headertopages/> <Aprodok/> </>} />
     <Route path="/Fellepeseink" element={<><Headertopages/><Fellepeseink/></>}/>
     <Route path="/Regula" element ={<><Headertopages/> <Regula/> </>} />
     <Route path="/Kapcsolat" element ={<><Headertopages/> <Kapcsolat/> </>} />
     
   </Routes>
    <ScrollButton />
    <div>
    <Footer />
    </div>
  
  </HashRouter>
  );
}

export default App;
