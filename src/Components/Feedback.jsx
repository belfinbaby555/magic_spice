import React from "react";
import feed from "./Css/feedback.module.css"


function Feedback(){
    return(
        <div className={feed.feedback}>
            <h1>Testimonials</h1>
            <div className={feed.feedbox}>
                <div className={feed.clientimg}>
                    <h2><b>What</b> Client's Say</h2>
                    <img src=""/>
                </div>
            </div>
        </div>
    )
}