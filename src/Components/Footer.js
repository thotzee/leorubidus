import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/Footer.css';


function Footer() {
    return(
        <div>
            <div className='d-flex justify-content-center'>
            <u className='icon'>
                <li>
                    <a href='https://www.facebook.com/leorubidus'><i className='bi bi-facebook '></i></a>
                </li>
            </u>
            <ul className='icon'>
                <li>
                    <a href='https://www.instagram.com/leorubidus/'><i className='bi bi-instagram'></i></a>
                </li>
            </ul>
          
            </div>
            <h6>© Vörös Oroszlán Lovagrend 2022</h6>
        </div>
    );
}

export default Footer;