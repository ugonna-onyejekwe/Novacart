import "./navbar.scss"
import { icons } from "../info"
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return <nav>
        <div className="container">
            <div className="logo">
                <h1><span>nova</span>cart</h1>
            </div>
            <div className="navigators">
                <div className="links">
                    <Link className="active" to={"/"}>home</Link>
                    <Link to="/shop">shop</Link>
                    <Link to={"/account"}>my account</Link>
                    <Link to={"/blog"}>blog</Link>
                    <Link>login</Link>
                </div>

                <div className="search_con">
                    <input type="search" name="search" id="search" />
                    <span>{icons.search_icon}</span>
                </div>
            </div>
            <div className="action_btn">
                <Link>{ icons.cart_icon2} <span>0</span></Link>
                <Link>{ icons.favourite} <span>0</span></Link>
            </div>
    </div>
        
</nav>

}