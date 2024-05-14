import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { useState,useContext } from "react";
import Cookies from 'js-cookie';

import "./Header.scss";
import "./HeaderM.scss";
import Options from '../Options/Options';
import Logo from "../Logo/Logo";
import MediaQuery from "react-responsive";
import barr from "./bars-solid.svg";
import { Link } from "react-router-dom";
import { CounterContext } from '../../Context/MyContext';
const Header = () => {
  const statusData=useContext(CounterContext)
  
  const{lin,setLin,show, setShow}=statusData

  const{setMode,mode} =statusData
  
  // useEffect(()=>{

  //   if(localStorage.getItem("email")){
  //     setLogin(true)
  //   }else{
  //     setLogin(false)
  //   }
  // }
  //   ,[login,setLogin])
  

  const isDesktop = window.innerWidth >= 1000;
  return (
    <div id={isDesktop ? "headerD" : "headerM"} >
      <Logo />

      <MediaQuery minWidth={1001}>
      
        <ul>
          
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/contect">Contect</Link>
          </li>
          <li  onClick={()=>{   if(lin){Cookies.remove('tkn');setLin(false);}else {console.log("Ligin")}}}  >
             {lin?<p>LogOut</p>:<Link to="/login">LogIn</Link>}
          </li>
          
          <li onClick={ ()=>{ setShow(!show); ;console.log("ksjdfhsahfkash")}}><FontAwesomeIcon icon={faEllipsisVertical} size="xl" /> </li>
        </ul>
      </MediaQuery>


      
      <MediaQuery maxWidth={1000}>
        
        <div>
          
          <img
            src={barr}
            onClick={() => {
              setShow(!show);
            }}
            alt="img"
          />
        </div>
      </MediaQuery>
       {show&&<Options/>} 
     
    </div>
  );
};
export default Header;
