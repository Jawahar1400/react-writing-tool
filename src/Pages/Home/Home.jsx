import React from "react";
import "./home.css"
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";


function  Home(){
    return(
        <div>
        <Header/>
        <div className="home">
           <Posts/>
           <Sidebar/>
           
        </div>
       
        </div>
    )
}
export default Home