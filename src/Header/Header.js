import React, { Component } from "react";
//css
import "./header.css";
//photos
import logo from "./header-img/apol.svg";
import sebet from "./header-img/sebet.svg";
//json file
//router dom
import { Link } from "react-router-dom";
//React icons
import { RiAccountCircleLine } from "@react-icons/all-files/ri/RiAccountCircleLine";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";

export default class Header extends Component {
  state = {
    data: [],
  }
  getData = () => {
    fetch("category.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data });
      });
  };
  componentDidMount(){

    // Navbarin sticky olmasi ucundu bura
let navbar = document.getElementById("navbar");
let  sticky = navbar.offsetTop;
var mybutton = document.getElementById("myBtn");
    window.onscroll = function(){
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        // bu hissede oxun block olmasi eger scroll olsa
        mybutton.style.display = "block";

// normalda eger scroll aşağı olubsa səhif

let header = document.querySelector(".header")
header.onclick = function (){
    if (window.pageYOffset >= sticky) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } 
  }
      } else {
        navbar.classList.remove("sticky");
         // bu hissede oxun none olmasi eger scroll olmasa
        mybutton.style.display = "none";
      }
    }
  
    }
    handleClick() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  render() {
    return (
      <section>
      <button onClick={this.handleClick} id="myBtn" >
<AiOutlineArrowUp/>
      </button>
        <div className="text">
          "Kitabsız bir ömrün nə mənası var."
          <div>
            {" "}
            <small className="smal">-Səməd Vurğun </small>
          </div>
        </div>
        <section className="header">
          <section className="head">
            <div className="logo-div">
              <Link to="/">
                <img alt="logo" src={logo} className="logo" />
              </Link>
            </div>
            <div className="search">
              <input
                className="search-input"
                placeholder="Axtardığınız kitabı daxil edin"
              />
              <Link
                to="/search"
                style={{
                  "marginTop": "-17px",
                }}
              >
               <span><BiSearchAlt2 className="lupa"/></span> 
            
              </Link>
            </div>
            <div className="account">
              <div>
               
                <RiAccountCircleLine className="avatar" />
              </div>
              <Link to="/login" className="account-text">
                Giriş
              </Link>
              /
              <Link to="/sign" className="account-text">
                Qeydiyyat
              </Link>
            </div>
          </section>
          <section className="navbar" id="navbar">
            <div className="menu">
              <ul className="ul1">
                <li>
                  <Link to="/">Ana Səhifə </Link>
                </li>
                <li>
                  <Link to="/" className="janr">
                    Nəşrlər
                  </Link>
                  <ul>
                    <li>
                      {" "}
                      <Link to="/aze">Azərbaycan</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/tr">Türk </Link>
                    </li>
                  
                    <li>
                      {" "}
                      <Link to="/eng">İngilis </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/best" className="janr">
                  Çox Satılanlar
                  </Link>
               
                </li>
                    
                <li>
                <Link to="about" className="janr">
                 Haqqımızda</Link>
                </li>
              
              </ul>
            </div>

            <div className="sebet">
              <Link to="/sebet" className="sebet">
                <img className="sebet-img" src={sebet} alt="sebet" />
                Səbət
              </Link>{" "}
            </div>
          </section>
        </section>
      </section>
    );
  }
}
