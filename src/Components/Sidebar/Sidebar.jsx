import React from "react";
import "./sidebar.css"
import Img3 from "../../Assests/img3.jpg"
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src={Img3} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam architecto consectetur optio deserunt exercitationem reiciendis neque! Suscipit impedit, quae aspernatur saepe nesciunt necessitatibus id animi itaque, inventore eveniet dicta.</p>
            </div>
            <div className="sidebarItem">
                <span className="idebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                   FOLLOW US
                </span>
             <div className="sidebarSocial">
             <i className="topIcon fa fa-facebook-official" aria-hidden="true"></i>
                <i className="topIcon fa fa-twitter-square" aria-hidden="true"></i>
                <i className="topIcon fa fa-instagram" aria-hidden="true"></i>
             </div>
            </div>
        </div>
    )
}
export default Sidebar