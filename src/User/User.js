import React, { Component } from "react";
import './User.css';

import { Link } from "react-router-dom";
export default class User extends Component{
   
    
render(){

return(
    <div>

<section className="user">

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
        <Link to="sifaris">Elanla </Link>
       
   </li>
    <li>
        <Link to="sifaris">Hesab Detalları</Link>
       
   </li>
    <li>
        <Link to="sifaris">Çıxış</Link>   
   </li>
    
</ul>


    </div>

    
</section>
<div className="idare">
   
<p>
Asif Mustafayev
     </p>
    </div>


</section>
    </div>


)}
}