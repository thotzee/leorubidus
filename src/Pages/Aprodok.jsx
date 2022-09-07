import React from 'react'
import '../Styles/Továbbiak.css';
import '../img/apródcsata.jpg';

export const Aprodok = () => {
  return (
    <div>
        <h2 className='cim'>Apródcsaták</h2>
        <p className='szöveg'>Rendezvényeinken a család legfiatalabb tagjai is szerephez juthatnak, még pedig a csatatéren. Az apródok vs martalócok programunk során a gyermekek a gaz martalócok ellen vonulnak megfelelő vezetéssel. A fegyverük félelmetes, zokniba töltött szivacs, mellyel kikergethetik a martalócokat a hevenyészett erődítésből. A győztes csata után a résztvevő fiatalok részt vehetnek eg apródavatáson, mely során lovagrendünk apródjaivá válnak.</p>
        <img alt='aprodcsata' src={require('../img/apródcsata.jpg')} className='aprod' />
    </div>
  )
}

export default Aprodok;
