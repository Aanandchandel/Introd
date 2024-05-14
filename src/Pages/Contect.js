import "./Scss/Contect.scss"
import SideContact from "../Components/Contect/SideContect";
import call from './static/call.png'
import Robo from "../Components/Robo/Robo";

const Contect=()=>{
     return(<div className="Contect">
        <Robo img={call} />
        <SideContact/>
        <div className="form"> 
            <div>

            <label>Full Name
            <input type="text"placeholder="Full Name" />
            </label>

            <label>Email
            <input type="Email" placeholder="Email" />
            </label>

            </div>
            <label>Subject</label>
            <input type="Email" placeholder="Subject" />
            <label>Message</label>
            <textarea   name="Message" placeholder="message" rows="13" cols="50"></textarea>



        </div>

     </div>)
}
export default Contect;