import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./yeni.css";

export default class Hesab extends Component{
    render(){
        return(
            <>
             <div className="user">
            <section className="navbar">
    <div className="menu">
<ul>
<li>
        <Link to="/user">İdarə Paneli</Link>
       
   </li>
  
    <li>
        <Link to="/sifaris">Sifarişlər </Link>
       
   </li>
    <li>
        <Link to="/elan">Elanlar</Link>
       
   </li>
    <li>
    <Link to="/hesab">Hesab Detalları</Link>
       
   </li>
    <li>
    <Link to="/login">Çıxış</Link>   
   </li>
    
</ul>


    </div>

    
</section>
                </div>
            <section className="yeni-section">

           
<div className="container">
  <div className="headerY">
    <h2>Hesab Məlumatları </h2>
  </div>
  <form id="form" className="form">
    <div className="form-control">
      <label for="username">İstifadəçi adı </label>
      
      <input type="text" value="Asif Mustafayev" id="username" required/>
        
     
    </div>
    <div className="form-control">
      <label for="username">Email</label>
      <input type="text" placeholder="" id="email"required value="asif.mustafayev.13@gmail.com"/>
   
    
    </div>
 
  
    <button className="a">Düzəliş Et   </button>
  </form>

</div>








                
            </section>
            </>
        )
    }
}