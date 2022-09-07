import '../Styles/Fellépéseink.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Fellépéseink() {
    return (
    <div className='szereplések cim' id="fellépéseink">
        <h2 className='fellépéseink'>Fellépéseink</h2>
        <Link to="/Fellepeseink">
        <Button className="position-absolute start-50 translate-middle-x" variant="outline-secondary">Bővebb információk</Button>{' '}
        </Link>
    </div>
    );
}

export default Fellépéseink;