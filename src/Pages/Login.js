import "./Scss/Login.scss";
import Robo from "../Components/Robo/Robo";
import SideContact from "../Components/Contect/SideContect";
import robo from "./static/rgister.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import fatchApi from "../FatchMathodes/fatch";
const Login = () => {

  const isDesktop = window.innerWidth >= 1001;
  const lData = {};

  // const { setUserData } = state;
  const [isEValid, setIsValid] = useState(true);
  const [isPValid, setIsPValid] = useState(true);
  const [warning, setWarning] = useState("ok");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const url = "http://localhost:3000/users";

  
  
  
  
  
  const inptvlue = (e) => {
    let name = e.target.name;
    lData[name] = e.target.value;
  };

  return (
    <div id="Login">
      <Robo img={robo} />
      <SideContact />
      <div id={isDesktop ? "FormDivD" : "FormDivM"}>
        <h1>Login</h1>
        <div>
          <input
            onChange={(e) => {
              inptvlue(e);
            }}
            type="email"
            placeholder="Email"
            name="email"
            />
          <input
            onChange={inptvlue}
            type="password"
            placeholder="Password"
            name="password"
          />

          <input type="submit" onClick={()=>{}  } placeholder="Submit" />
          <p>{warning}</p>
          <div>
            <p>Don't have account</p>
            <Link to={`/Signup`}>Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
