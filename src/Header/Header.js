import React, { Component } from "react";
import './header.css';
import logo from './apol.svg';
import loupe from './loupe.png';
import user from './user.svg';
import sebet from './sebet.svg';
import Category from './category.json'
import { Link } from "react-router-dom";
export default class Header extends Component{
    state = {
data:[]        
    }
    getData = ()=>{
        fetch("category.json")
    .then(res => {
       return  res.json()
    })
    .then(data => { 
            this.setState({ data: data }) 
            console.log(this.state)
    });

    }
    
render(){

return(
    <div>
<div className="text">"Kitabsız bir ömrün nə mənası var."
<div> <small className="smal">-Səməd Vurğun </small></div>

</div>
<section className="header">


<section className="head">
    <div className="logo-div">
    <Link to="/">
    <img alt="logo" src={logo} className="logo"/>
         </Link>   
    </div>
    <div className="search">
        <input className="search-input" placeholder="Axtardığınız kitabı daxil edin"/>
    <Link to="/search" style={{
        "margin-top":"-17px"
    }}> <img src={loupe} alt="lupa" className="lupa"/> </Link>
    </div>
    <div className="account"><img src={user} alt="login" className="login"/>
   <Link to="/login">Giriş </Link>/
   <Link to="/sign">Qeydiyyat  </Link>
   
    
    </div>
</section>
<section className="navbar">
    <div className="menu">
<ul>
    <li><Link to="/">Ana Səhifə </Link>
    </li>
    <li><a href="#" className="janr">Nəşrlər</a>
    <ul >
             
                       <li> <a href="#">Azərbaycan</a> </li>                
                      <li> <a href="#">Türk </a> </li>                
                      <li> <a href="#">Rus </a> </li>                
                      <li> <a href="#">İngilis </a> </li>                
                               
       
                  </ul>
    </li>
    <li><a href="#" className="janr">Janrlar</a>
    <ul >
                {Category.map(item=>{
                 
                     return   <li key={item.name}> <a href="#"> {item.name} </a> </li> 
                    
                })}
                      {/* <li> <a href="#"> Poeziya </a> </li>                
                      <li> <a href="#">Klassik əsərlər </a> </li>                
                      <li> <a href="#"> Detektiv </a> </li>                
                      <li> <a href="#">Romanlar </a> </li>                
                      <li> <a href="#">Fəlsəfə </a>  </li>                
                      <li> <a href="#">Motivasiya </a></li>                
                      <li> <a href="#"> Fantastika </a></li>                
                      <li> <a href="#">Triller</a> </li>                 */}
       
                  </ul>
    </li>
    <li><a href="#">Kirayə Kitablar</a></li>
    <li><a href="#">Haqqımızda</a></li>
    <li><a href="#">Əlaqə</a></li>
</ul>


    </div>

    <div className="sebet">  
 <Link to="/sebet" className="sebet">
 <img className="sebet-img" src={sebet} alt="sebet"/>
    Səbət
      </Link>  </div>
</section>



</section>
    </div>


)}
}