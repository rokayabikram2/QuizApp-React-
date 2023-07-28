import "../../style/custom.css"
import { Link } from "react-router-dom";

function navbar(){
    return (
        <div className="navContainer">
            <Link to = "/">Home</Link>
            <Link to = "about">About</Link>
            <Link to = "contact">Contact</Link>
            <Link to = "services">Services</Link>


        </div>
    )
}
export default navbar
