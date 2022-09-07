import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import leocsapat from '../img/leocsapat.jpg';
import kizil from '../img/kizil arslan.jpg';
import apród from '../img/apródcsata.jpg';
import '../Styles/Card.css';
import {Link} from 'react-router-dom';

function Rólunk() {
  return (
    <div id="rólunk">
        <h2 className='cim'>Rólunk</h2>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={leocsapat}/>
        <Card.Body>
          <Card.Title>Keresztény csapatok</Card.Title>
          <Card.Text>
          A XVI-XVII. századról szóló előadások, az izgalmas harci bemutatók és egy interaktív tábori élőkép testközelbe hozza a rég letűnt végvári időket. Nálunk minden ki- és felpróbálható, megfogható.
          </Card.Text>
        </Card.Body>
        <Link to='/Keresztenycsapat' className='d-flex justify-content-center hivatkozás'>
        <Button variant="outline-secondary" >Tovább olvasom</Button>
        </Link>
      </Card>
      <Card>
        <Card.Img variant="top" src={kizil} />
        <Card.Body>
          <Card.Title>Kizil Arslan</Card.Title>
          <Card.Text>
          A Vörös Oroszlán Lovagrend Oszmán Hagyományőrei török nevén Kizil Arslan (Vörös Oroszlánok) a Lovagrend tagjaiból alakult oszmán janicsár elit csapat. 
          </Card.Text>
        </Card.Body>
        <Link to='/Tovabbiak' className='d-flex justify-content-center hivatkozás'>
        <Button variant="outline-secondary" >Tovább olvasom</Button>
        </Link>
      </Card>
      <Card>
        <Card.Img variant="top" src={apród} />
        <Card.Body>
          <Card.Title>Apródcsaták</Card.Title>
          <Card.Text>
          Rendezvényeinkre látogató családok leifjabb tagjainak is nyújtunk szórakozási lehetőséget. Az apródok vs martalócok kihagyhatatlan eleme a programoknak.
          </Card.Text>
        </Card.Body>
        
        <Link to='/Aprodok' className='d-flex justify-content-center hivatkozás'>
        <Button variant="outline-secondary" >Tovább olvasom</Button>
        </Link>
        
      </Card>
    </CardGroup>
    </div>
  );
}

export default Rólunk;