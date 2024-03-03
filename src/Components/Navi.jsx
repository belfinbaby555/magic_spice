import React from "react";
import nav from "./Css/navi.module.css"
import logo from "../Assets/Images/logos/logo_default.png";
import s_icon from "../Assets/Images/icons/search.png"

function Navi(){
    return(
        <div>
            <div className={nav.bar}>
                <img src={logo} className={nav.logo}></img>
                <div className={nav.option}>
                    <a href="">Home<span></span></a>
                    <a href="">Products<span></span></a>
                    <a href="">Blog<span></span></a>
                    <a href="">About us<span></span></a>
                    <form>
                        <button><img src={s_icon}/></button>
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                
                <div className={nav.buttons}>
                <button className={nav.login}>Login</button>
                <button className={nav.signup}>Sign up</button>
                </div>
            </div>
            <div className={nav.banner}>
                <h3>the MAGIC SPICE
                <h4>The Leader of the culinary art since 1956</h4>
                <button className={nav.partner}>Become a Partner<span></span></button>
                </h3>
                
            </div>
        </div>
    )
}export default Navi