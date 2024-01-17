import React from "react";
import "./topbar.css"
import Img1 from "../../Assests/about-pic.png"
import { Link } from "react-router-dom";




function TopBar() {
    
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa fa-facebook-official" aria-hidden="true"></i>
                <i className="topIcon fa fa-twitter-square" aria-hidden="true"></i>
                <i className="topIcon fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>HOME</Link></li>
                    <li className="topListItem">
                        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }} >ABOUT</Link></li>
                    <li className="topListItem">
                        <Link to="/write" style={{ textDecoration: "none", color: "inherit" }} >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }} >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (<img className="topImg" src={Img1 }  alt="" />)
                        : (
                            <ul className="topList">
                                <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                                <li className="topListItem">  <Link className="link" to="/register">REGISTER</Link></li>
                            </ul>)

                }

              
            </div>
        </div>
    )
}
export default TopBar