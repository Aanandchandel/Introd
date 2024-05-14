import {createContext,useState} from 'react' ;


export const CounterContext=createContext(null)

export const CounterProvider=(props)=>{
    const[iamin,setIamin]=useState(false)
const [showMessage,setShowMessage]=useState(true)
const [message,setMessage]=useState("Welcome")
const [mode,setMode]=useState(true)    
const [lin,setLin]=useState(false)
const [show, setShow] = useState(false);
const url="http://localhost:3000"
const val={ iamin,setIamin,
    setMessage,message,
    showMessage,setShowMessage,
    setMode,mode,
    lin,setLin,
    show, setShow
    ,url
}
    return(
        <CounterContext.Provider value={val} >

        {props.children}    
        </CounterContext.Provider>
    )
}




