import React, { Component } from "react";
import "./carpusel.css"
import logo from "./icon.svg"
import big from "./C.PNG"
export default class Carousel extends Component {
    render(){
        return(
            <section className="carousel">
<div className="big-img">
   <img src={big} alt="carousel"/>
 
   <img src={logo} alt="logo" className="logo-car"/>
</div>
            </section>
        )
    }
}