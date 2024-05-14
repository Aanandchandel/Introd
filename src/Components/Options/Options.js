import { Link } from "react-router-dom"
import "./Options.scss"
import { useContext } from "react"
import { CounterContext } from "../../Context/MyContext"
import Cookies from "js-cookie"
const Options=()=>{
    const isDesktop = window.innerWidth >= 1000;
    const {lin,setLin,setMode,mode}=useContext(CounterContext)
return(<div className={isDesktop?"Options OptionsD":"Options OptionsM"}>

<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/project" >Projects</Link></li>
<li><Link to="/contect">Contect</Link></li>
<li onClick={()=>{ setMode(!mode) }} ><Link>Light/Dark</Link></li>
<li  onClick={()=>{   if(lin){Cookies.remove('tkn');setLin(false);}else {console.log("Ligin")}}}  >
             {lin?<p>LogOut</p>:<Link to="/login">LogIn</Link>}
          </li>
</ul>
</div>)
}
export default Options
