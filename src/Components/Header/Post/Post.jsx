import React from "react";
import "./post.css"
import Img4 from "../../../Assests/img4.jpeg"
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

function Post() {
    return (
        <div className="post">
            <h2>Blocks</h2>
          
            <img className="postImg" src={Img4} alt="" />
            
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                    
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aut quod ipsum, obcaecati eveniet corporis porro exercitationem quae qui molestiae? Ut officia neque quos fugiat aspernatur repellendus iusto, voluptates porro?
                </p>
                
            </div>
            
        </div>
    )
}
export default Post