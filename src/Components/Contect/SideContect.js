import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./SideContect.scss"
import { Link } from 'react-router-dom';
import { CounterContext } from '../../Context/MyContext';
import { useContext } from 'react';
const SideContact = () => {
    const {show}=useContext(CounterContext)
    
    return (
        <>
      {!show&&
            <ul id='SideContect'>
                <li><Link to={"https://api.whatsapp.com/send/?phone=%2B917247226533&text&type=phone_number&app_absent=0"} ><FontAwesomeIcon icon={faWhatsapp} beat size='xl'/></Link></li>
                <li><Link to={'mailto:aanandchandel20@gmail.com'}><FontAwesomeIcon icon={faEnvelope} beat size='xl' /></Link></li>
                <li><Link to={'https://www.instagram.com/aanand_chandel_/'}><FontAwesomeIcon icon={faInstagram} beat size='xl' /></Link ></li>
                <li><Link to={'https://www.linkedin.com/in/aanandchandel/'}><FontAwesomeIcon icon={faLinkedin} beat size='xl' /></Link ></li>
                
            </ul>
            }  
        </>
    );
}

export default SideContact;
