import React from "react";
import blog from "./Css/blog.module.css";
import arrow from "../Assets/Images/icons/arrow.png"

function Blog(){

    return(
        <div className={blog.blog}>
            <h1>Popular Blog</h1>
            <div className={blog.main_container}>
                <div className={blog.container1}>
                    <img src={arrow} className={blog.arrow}/>
                    <h2>Heart of <br/>Farming: Stories from the Field</h2>
                </div>
                <div className={blog.container2}>
                    <div className={blog.subcontainer1}>
                    <img src={arrow} className={blog.arrow}/>
                    <h2>Price volatility: <br/>Impact on <br/>farming communities</h2>
                    </div>
                    <div className={blog.subcontainer2}>
                    <img src={arrow} className={blog.arrow}/>
                    <h2>Decadent Delights:<br/>Master the art of<br/>Butter masala</h2>
                    </div>
                </div>
                <div className={blog.container3}>
                    
                </div>
            </div>
        </div>
    )

}export default Blog;