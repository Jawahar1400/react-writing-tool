import React from "react";
import "./header.css";
import Img2 from '../../Assests/img 2.jpg'
function Header(){
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React </span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"  src={Img2} alt="Img-two"></img>
        </div>
    )
}
export default Header