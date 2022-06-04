import React from "react";
import one from "../../main/azerbaycan/1.jpg";
import two from "../../main/azerbaycan/2.png";
import three from "../../main/azerbaycan/3.jpg";
import four from "../../main/azerbaycan/4.jpg";
import five from "../../main/azerbaycan/5.png";
import sebet from "../../main/sebet.svg";
import { Link } from "react-router-dom";
import {AiFillHeart} from "@react-icons/all-files/ai/AiFillHeart";

export default class Aze extends React.Component{
    render(){
        return(
            <section className="main">
            <section className="az">
    <div className="main-content">
        <div className="xett"></div>
        <h1>Azərbaycan Nəşrləri</h1>
        <div className="xett"></div>
        <button type="button"  className="daha">
            Daha Çox
        </button>
    </div>
    <div className="cards">
  
   <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={one} />
    <div >
    <AiFillHeart className="heart" onClick={this.addToFavorite}/>
    </div>
</div>
<Link to="product"> 
<div className="card-context">
    <p>
        Malva,
        <br/>
       Maksim Qorki</p>
</div>
</Link>
<div className="price">
    3 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>

   <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={two} />
    <div >
    <AiFillHeart className="heart" onClick={this.addToFavorite}/>
    </div>
</div>
<Link to="product"> 
<div className="card-context">
    <p>Malva,
        <br/>
       Maksim Qorki</p>
</div>
</Link>
<div className="price">
    3.25 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
   <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={three} />
    <div >
    <AiFillHeart className="heart" onClick={this.addToFavorite}/>
    </div>
</div>
<Link to="product"> 
<div className="card-context">
    <p>Malva,
        <br/>
       Maksim Qorki</p>
</div>
</Link>
<div className="price">
    3.25 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
   <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={four} />
    <div >
    <AiFillHeart className="heart" onClick={this.addToFavorite}/>
    </div>
</div>
<Link to="product"> 
<div className="card-context">
    <p>Malva,
        <br/>
       Maksim Qorki</p>
</div>
</Link>
<div className="price">
    3.25 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
   <div className="card">
<div className="card-img">
    <img alt="img" className="cardi" src={five} />
    <div >
    <AiFillHeart className="heart" onClick={this.addToFavorite}/>
    </div>
</div>
<Link to="product"> 
<div className="card-context">
    <p>Malva,
        <br/>
       Maksim Qorki</p>
</div>
</Link>
<div className="price">
    3.25 AZN
<img src={sebet} alt="sebet"/>
</div>

        </div>
   
  
  
  
  
    </div>
</section>
</section>
        )
    }
}