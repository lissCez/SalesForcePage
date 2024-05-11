import "./style.css";
import sfimg from "../../assets/salesforceIcon.png";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <>
            <div className="menu">
                <div className="sfimg">
                    <Link to='/'><img className="salesforceIcon" src={sfimg} alt="SalesforceIcon"/></Link>
                </div>
                <div className="aHLCT">
                    <Link to= "/about" className="aHLCT">About</Link>
                    <Link to= '/' className="aHLCT">Home</Link>
                </div>                
                <div className="botao">
                    <button className="butao"><Link className='bt' to= '/Login'>Log in</Link></button>
                </div>
            </div>
        </>
    )
}

export default Menu;
