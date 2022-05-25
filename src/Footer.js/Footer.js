import React, { Component } from "react";
import "./footer.css";
import FooterJson from "./sifaris.json"
import Haqqimizda from "./haqqimizda.json"
import Hesabim from "./hesabim.json"
import logo from "./apol.svg"
export default class Footer extends Component {
    render(){
        return(
            <section className="footer">
<footer id="site-footer">

<section className="horizontal-footer-section" id="footer-top-section">
  <div id="footer-logo">
    <picture>
      <img src={logo} alt="footer logo" role="presentation"/>
    </picture>
  </div>
  
</section>

<section className="horizontal-footer-section" id="footer-middle-section">
<div className="footer-columns">
    <h1>Haqqımızda</h1>
    <ul className="footer-column-menu" role="menu">
    {Haqqimizda.map(item =>{
            return(
    <li className="footer-column-menu-item" role="menuitem">
    <a href="#" key={item.name} className="footer-column-menu-item-link">{item.name}</a>
  </li>)
        })}
    </ul>
  </div>

  <div className="footer-columns">
    <h1>Sifaris Haqda</h1>
    <ul className="footer-column-menu" role="menu">
        {FooterJson.map(item =>{
            return(
    <li className="footer-column-menu-item" role="menuitem">
    <a href="#" key={item.name} className="footer-column-menu-item-link">{item.name}</a>
  </li>)
        })}

    </ul>
  </div>
  <div className="footer-columns">
    <h1>Yardım</h1>
    <ul className="footer-column-menu" role="menu">
    {Hesabim.map(item =>{
            return(
    <li className="footer-column-menu-item" role="menuitem">
    <a href="#" key={item.name} className="footer-column-menu-item-link">{item.name}</a>
  </li>)
        })}
    </ul>
  </div>
</section>

<section className="horizontal-footer-section" id="footer-bottom-section">
  <div id="footer-copyright-info">
    &copy; Apollo.az. Bütün huquqlar qorunur.
  </div>
  <div id="footer-social-buttons">
    <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" />
    <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" />
    <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" />
    <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" />
   
  </div>
</section>

</footer>


            </section>
        )
    }
}