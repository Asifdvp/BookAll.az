import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default class Login extends Component{
    render(){
        return(
            <section className="llogin">

<div className="container">
  <div className="headerL">
    <h2>Hesaba daxil Ol</h2>
  </div>
  <form id="form" className="form">
    <div className="form-control">
      <label for="username">İstifadəçi adı</label>
      <input type="text" placeholder="" id="username" required/>
     
     
    </div>
  
    <div className="form-control">
      <label for="username">Şifrə</label>
      <input type="password" placeholder="" id="password" required/>
     
     
    </div>
  
   
       <Link to="/user"> 
       <button>
        Daxil Ol 
        </button>
        </Link>
    
  </form>
  <div className="yox">
      <p>Hesabın yoxdur?/
        <Link to="/sign" className="link">Qeydiyyatdan Keç</Link>
      </p>
      {/* <p>Qeydiyyatdan keç</p> */}
  </div>
</div>








                
            </section>
        )
    }
}