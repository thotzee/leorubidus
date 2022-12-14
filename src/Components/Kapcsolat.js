import React from "react";
import {Button} from 'react-bootstrap'
import '../Styles/Kapcsolat.css';

function Kapcsolat() {
    return(
    <div className="mail" id="kapcsolat">
        <h2 className="kapcsolat cim">Kapcsolat</h2>
        <p className="kapszoveg">Szűcs József<br/>
        Mobil: +36-20-914-69-01<br/>
        Vonalas/fax: +36-29-326-825</p>
        <Button className="position-absolute start-50 translate-middle-x" variant="outline-light" onClick={() => window.location = 'mailto:leorubidus@leorubidus.com'}>Írj üzenetet!</Button>
    </div>
        )
}

export default Kapcsolat;