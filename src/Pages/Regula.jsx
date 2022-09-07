import React from 'react';
import '../Styles/Regula.css';
import Button from 'react-bootstrap/Button';
import szabály from '../img/szabályzat.pdf';

function Regula() {
    return (
      <div>
        <h2 className='szabály'>A Vörös Oroszlán Lovagrend Alapszabályzata <br/>(egységes szerkezetben)</h2>
        <div className='d-flex justify-content-center gomb'>
        <Button size="lg" variant="outline-dark"><a className='letoltes' href={szabály} download="szabályzat.pdf">Letöltöm és elolvasom</a></Button>
        </div>
      </div>
      
      );
    }
      
    export default Regula;