import React, { Component } from "react";
//css
import "./header.css";
//photos
import logo from "./header-img/apol.svg";
import loupe from "./header-img/loupe.png";
import sebet from "./header-img/sebet.svg";
//json file
import Category from "./category.json";
//router dom
import { Link } from "react-router-dom";
//React icons
import { RiAccountCircleLine } from "@react-icons/all-files/ri/RiAccountCircleLine";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";

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

  render() {
    return (
      <section>
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
                  "margin-top": "-17px",
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
          <section className="navbar">
            <div className="menu">
              <ul>
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
                      <Link to="/">Azərbaycan</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/">Türk </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/">Rus </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/">İngilis </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/" className="janr">
                    Janrlar
                  </Link>
                  <ul>
                    {Category.map((item) => {
                      return (
                        <li key={item.name}>
                          {" "}
                          <Link to="/"> {item.name} </Link>{" "}
                        </li>
                      );
                    })}
                   
                  </ul>
                </li>
                <li>
                  <a href="#">Kirayə Kitablar</a>
                </li>
                <li>
                  <a href="#">Haqqımızda</a>
                </li>
                <li>
                  <a href="#">Əlaqə</a>
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
