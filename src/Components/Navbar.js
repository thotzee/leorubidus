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
            <Nav.Link className="a" href="/#rólunk">Rólunk</Nav.Link>
            <Nav.Link className="a"  href="/#fellépéseink">Fellépéseink</Nav.Link>
            <Nav.Link className="a"  href="/#partnereink">Partnereink</Nav.Link>
            <Nav.Link className="a"  href="#" ><Link className='link' to="/regula">Regula</Link></Nav.Link>
            <Nav.Link className="a"  href="/#kapcsolat">Kapcsolat</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}
export default Uppernav;