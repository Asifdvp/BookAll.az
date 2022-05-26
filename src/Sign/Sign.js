import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";

export default class Sign extends Component{
    render(){
        return(
            <section className="llogin">

<div className="container">
  <div className="headerL">
    <h2>Qeydiyyatdan keç</h2>
  </div>
  <form id="form" className="form">
    <div className="form-control">
      <label for="username">İstifadəçi adı</label>
      <input type="text" placeholder="" id="username" required/>
     
     
    </div>
    <div className="form-control">
      <label for="username">Email</label>
      <input type="email" placeholder="" id="email"required />
   
    
    </div>
    <div className="form-control">
      <label for="username">Şifrə</label>
      <input type="password" placeholder="" id="password" required/>
     
     
    </div>
    <div className="form-control">
      <label for="username">Təkrar Şifrə</label>
      <input type="password" placeholder="şifrəni yenidən daxil edin" id="password2" required/>
     
    </div>
    <button>Qeydiyyatdan keç</button>
  </form>
  <div className="yox">
      <p>Hesabın var?/
        <Link to="/login" className="link">  Daxil ol</Link>
       </p>
      {/* <p>Qeydiyyatdan keç</p> */}
  </div>
</div>








                
            </section>
        )
    }
}