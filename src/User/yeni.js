import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./yeni.css";

export default class Yeni extends Component{
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
    <h2>Yeni məhsul Əlavə Et</h2>
  </div>
  <form id="form" className="form">
    <div className="form-control">
      <label for="username">Janr</label>
      <br/>
      <select type="text" placeholder="Janr Daxil edin" id="username" required>
           <option>Detektiv</option>
          </select>
     
     
    </div>
    <div className="form-control">
      <label for="username">Şəkil</label>
      <input type="file" placeholder="" id="email"required />
   
    
    </div>
    <div className="form-control">
      <label for="username">Başlıq və ya məhsulun adı</label>
      <input type="password"  id="password" required/>
     
     
    </div>
    <div className="form-control">
      <label for="username">Açıqlama</label><br/>
      <textarea type="text"  id="password2" required/>
     
    </div>
    <button className="a">Əlavə Et    </button>
  </form>

</div>








                
            </section>
            </>
        )
    }
}