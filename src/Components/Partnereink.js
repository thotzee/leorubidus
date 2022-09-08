import Carousel from 'react-bootstrap/Carousel';
import Orchidea from '../img/orchideak.jpg';
import Textilshop from '../img/textilshop.png';
import patrióta from '../img/patrióta.jpg';
import Thury from '../img/thury.jpg';
import Hajdúnánás from '../img/Hajdúnánás.png';
import Gyula from '../img/gyulaivar.jpg';
import Eger from '../img/egervara.jpg';
import Lelle from '../img/lelle.png';
import Bethlen from '../img/bga_alap_logo.png';
import Somlyo from '../img/szilagysomlyo.png';
import Nadasdy from '../img/nadasdy.jpg';
import '../Styles/Partnereink.css';

function Partnereink() {
  return (
    <div id="partnereink">
        <h2 className='cim'>Partnereink</h2>
    <Carousel fade variant="light">
      <Carousel.Item>
        <img
          className="d-block w-"
          src={Orchidea}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shererah Bellydance</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Textilshop}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>TextilShop</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={patrióta}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Patrióta Online Blog</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Thury}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Thury-Vár Nonprofit Kft.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Hajdúnánás}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Hajdúnánás Város Önkormányzata</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Gyula}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Erkel Ferenc Kulturális Központ és Múzeum Nonprofit Kft.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Eger}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Dobó István Vármúzeum</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Lelle}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Balatonlelle Város Önkormányzata</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Bethlen}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Bethlen Gábor Alapkezelő Zrt.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Somlyo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Szilágysomlyó</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Nadasdy}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Nádasdy Fesztivál Sárvár</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Partnereink;