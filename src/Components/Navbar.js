import {Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import '../Styles/navbar.css';
import '../img/logo2.png';
import {Link} from 'react-router-dom';


function Uppernav() {



  return (
      <Navbar collapseOnSelect expand='lg'  className='navbar-collapse'>
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <img href="#főoldal" src={require('../img/logo2.png')} alt="logo" className='logo2' />
           <Nav className="me-auto">
           <Nav.Link className="a" href=""><Link className='link' to="/">Főoldal</Link></Nav.Link>
            <Nav.Link className="a" href="#" ><Link className='link' to="/Rolunk">Rólunk</Link></Nav.Link>
            <Nav.Link className="a"  href="#" ><Link className='link' to="/Fellepeseink">Fellépéseink</Link></Nav.Link>
            <Nav.Link className="a"  href="#"><Link className='link' to="/Partnereink"> Partnereink</Link></Nav.Link>
            <Nav.Link className="a"  href="#" ><Link className='link' to="/regula">Regula</Link></Nav.Link>
            <Nav.Link className="a"  href="#" ><Link className='link' to="/Kapcsolat">Kapcsolat</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}
export default Uppernav;