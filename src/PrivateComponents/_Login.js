import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CounterContext } from "../Context/MyContext";

const _Login = ({ Component }) => {
  const statusData=useContext(CounterContext)
  const {lin}=statusData
  return lin?<Navigate to={"/"} />: <Component/>
};
export default _Login;
  
    
  
      
      
        


