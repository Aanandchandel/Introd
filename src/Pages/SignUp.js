import "./Scss/Login.scss";
import Robo from "../Components/Robo/Robo";
import SideContact from "../Components/Contect/SideContect";
import robo from "./static/rgister.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import fatchApi from "../FatchMathodes/fatch";
const SignUp = () => {

  const isDesktop = window.innerWidth >= 1001;
  const lData = {};

  // const { setUserData } = state;
  const [isEValid, setIsValid] = useState(true);
  const [isPValid, setIsPValid] = useState(true);
  const [warning, setWarning] = useState("ok");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const url = "http://localhost:3000/users";

  const  onsubmit= async()=>{ 
// const data=await fatchApi(url, header, method = "POST",{})//......................................
// console.log(data)
  }
  const inptvlue = (e) => {
    let name = e.target.name;
    lData[name] = e.target.value;
  };

  return (
    <div id="Login">
      <Robo img={robo} />
      <SideContact />
      <div id={isDesktop ? "FormDivD" : "FormDivM"}>
        <h1>SignUp</h1>
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
            <p>Go to back </p>
            <Link to={`/login`}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
