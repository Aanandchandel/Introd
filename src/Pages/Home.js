import myimg from "./static/waiting.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SideContect from "../Components/Contect/SideContect"
// import { useMediaQuery } from "react-responsive"
import MediaQuery from "react-responsive"
import "./Scss/Home.scss"
import fatchApi from "../FatchMathodes/fatch"
import Cookies from "js-cookie"
import { useEffect,useContext } from "react"
import { CounterContext } from "../Context/MyContext"
const Home=()=>{
    // Get cookies 
const statusData=useContext(CounterContext)
const {mode,setMessage,setShowMessage,iamin,setIamin}=statusData
const {setLin,show}=statusData
    useEffect(() => {


        if(!iamin){
            const fetchData = async () => {
                setIamin(true)
                try {
                    if (Cookies.get('tkn')) {
                        const url = "http://localhost:3000";
                        const cookieValue = Cookies.get('tkn');
                        // console.log({"token": cookieValue});
                        const response = await fatchApi(url, {}, "POST",{"token":cookieValue});
                        console.log(response);
    
                        if(response.message=="valid"){
                            setMessage(`Welcome ${response.username}`)
                            setShowMessage(true)
                            setLin(true)
                        }else{setLin(false)}
                    } else {
                        // Cookie does not exist
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
        
            fetchData();
            // setIamin(false)

        }
        
         // Immediately invoke the async function
    
    }, []);
    
    

    
    

    const isDesktop = window.innerWidth >= 1000;
return <div id={isDesktop?"HomeD":"HomeM"}  >

<MediaQuery maxWidth={1000}>
<img  src={myimg} alt="http://localhost:3000/" />  <div>
<h1 >
    Hi,It's <span>Aanand</span>
</h1>
<h2  id="iAmWebDeve"> I'm <span id="animated-textM"></span></h2>
<p>
Thank you for your visit and for considering my work.
</p>
<button>Resume</button>
        </div>
        <SideContect/>
</MediaQuery>
<MediaQuery minWidth={1001}>
<div >
<h1>
    Hi,It's <span>Aanand</span>
</h1>
<h2 id="iAmWebDeve"> I'm <span id="animated-text"></span></h2>
<p 
// className={mode?"light":"dark"}
>
Thank you for your visit and for considering my work.
</p>
<button>Resume</button>
        </div>
<img src={myimg} alt="" />
 
 <SideContect/>
</MediaQuery>

    </div>
}



export default Home