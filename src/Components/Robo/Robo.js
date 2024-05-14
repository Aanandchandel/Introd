// import roboimg from "../../Pages/static/dp.jpg"
import "./Robo.scss"

const Robo=({img})=>{
    const isDesktop = window.innerWidth >= 1000;

    return(<div id={isDesktop?"Robo":"RoboM"}>
        <img src={img} alt="img"/>
    </div>)
}

export default Robo;
