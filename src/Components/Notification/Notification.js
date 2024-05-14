import { CounterContext } from "../../Context/MyContext"
import "./Notification.scss"
import { useContext } from "react"
const Notification=()=>{
    const {message,setMessage,setShowMessage,showMessage}=useContext(CounterContext)
    setTimeout(()=>{ if(showMessage)setShowMessage(false)},2500)

    return(<div className="Notification" >
        <span>
        {message}
        </span>
    </div>)

}
export default Notification